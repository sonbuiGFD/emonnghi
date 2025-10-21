'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
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
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className={`${s.header} ${isScrolled ? s.header__scrolled : ''} ${!isVisible ? s.header__hidden : ''}`}>
      <nav className={s.header__nav} role="navigation" aria-label="Main navigation">
        <div className={`${s.header__container} container`}>
          <Link href="/" className={s.header__logo} aria-label="Emon Portfolio Home">
            <Logo />
          </Link>

          <div className={s.header__nav_desktop}>
            {navigation.map((item) => (
              <a key={item.name} href={item.href} onClick={(e) => handleSmoothScroll(e, item.href)} className={s.header__nav_link}>
                {item.name}
              </a>
            ))}
          </div>
          <button className={s.header__menu_button} aria-label="Open mobile menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg className={s.header__menu_icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div className={`${s.header__nav_mobile} ${isMobileMenuOpen ? '' : s.header__nav_mobile_hidden}`}>
          <div className={s.header__nav_mobile_list}>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={`${s.header__nav_link} ${s.header__nav_link_mobile}`}>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
