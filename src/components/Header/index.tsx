'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import s from './style.module.scss';
import Logo from '@public/svgs/logo.svg';

const navigation = [
  { name: 'ABOUT', href: '#about' },
  { name: 'CLIENTS', href: '#clients' },
  { name: 'WORK', href: '#work' },
  { name: 'CONTACT', href: '#contact' },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > 300) {
        if (currentScrollY > lastScrollY.current) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    // Close mobile menu first
    setIsMobileMenuOpen(false);

    // Delay scroll to allow menu to close and page to reflow
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 300); // Match the animation duration from mobileMenuVariants
  };

  // Animation variants
  const navLinkVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: [0.34, 1.56, 0.64, 1] as const,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1] as const,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const mobileNavItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <motion.header
      className={`${s.header} ${isScrolled ? s.header__scrolled : ''} ${!isVisible ? s.header__hidden : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
      }}>
      <nav className={s.header__nav} role="navigation" aria-label="Main navigation">
        <div className={`${s.header__container} container`}>
          <Link href="/" className={s.header__logo} aria-label="Emon Portfolio Home">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
              <Logo />
            </motion.div>
          </Link>

          <div className={s.header__nav_desktop}>
            {navigation.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={s.header__nav_link}
                variants={navLinkVariants}
                initial="rest"
                whileHover="hover"
                custom={index}>
                {item.name}
              </motion.a>
            ))}
          </div>

          <motion.button
            className={s.header__menu_button}
            aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}>
            <motion.svg
              className={s.header__menu_icon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={isMobileMenuOpen ? { rotate: 90 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}>
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
          </motion.button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div className={s.header__nav_mobile} variants={mobileMenuVariants} initial="hidden" animate="visible" exit="hidden">
              <motion.div className={s.header__nav_mobile_list}>
                {navigation.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className={`${s.header__nav_link} ${s.header__nav_link_mobile}`}
                    variants={mobileNavItemVariants}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.95 }}>
                    {item.name}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

export default Header;
