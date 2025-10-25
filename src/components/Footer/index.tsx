'use client';
import { motion } from 'motion/react';
import Logo from '@public/svgs/logo.svg';

import './style.scss';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

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

  return (
    <footer className="footer" role="contentinfo">
      <motion.div
        className="footer__container container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
      >
        <motion.div className="footer__header" variants={itemVariants}>
          {/* Logo/Brand */}
          <motion.div
            className="footer__brand"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <span className="footer__logo">
              <Logo />
            </span>
          </motion.div>

          {/* Copyright */}
          <div className="footer__copyright">
            <p className="footer__copyright_text">© {currentYear} Nghi Ho. All rights reserved.</p>
          </div>
        </motion.div>

        {/* Additional Footer Content */}
        <motion.div className="footer__bottom" variants={itemVariants}>
          <div className="footer__bottom_content">
            <motion.p
              className="footer__tagline"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Crafted with passion in Vietnam 🇻🇳
            </motion.p>
            <div className="footer__nav">
              <motion.a
                href="#about"
                className="footer__nav_link"
                variants={navLinkVariants}
                initial="rest"
                whileHover="hover"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#about')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }}
              >
                About
              </motion.a>
              <motion.a
                href="#work"
                className="footer__nav_link"
                variants={navLinkVariants}
                initial="rest"
                whileHover="hover"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#work')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }}
              >
                Work
              </motion.a>
              <motion.a
                href="#contact"
                className="footer__nav_link"
                variants={navLinkVariants}
                initial="rest"
                whileHover="hover"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }}
              >
                Contact
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
