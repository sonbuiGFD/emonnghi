'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

import Hero_banner from '@public/svgs/Hero.svg?url';
import './style.scss';
import { Typewriter } from '@/components/Typewriter';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__container container">
        <div className="hero__layout">
          {/* Left Column - Text Content */}
          <div className="hero__content">
            <div className="hero__content_wrapper">
              <div className="hero__header">
                <h1 id="hero-title" className="hero__title">
                  <motion.span
                    className="hero__title_line block relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}>
                    <span className="invisible">Hello,</span>
                    <Typewriter
                      className="hero__title_typing absolute top-0 left-0"
                      texts={['Hello,', 'Bonjour,', 'Hola,', 'Ciao,', 'Namaste,', 'Salaam,']}
                    />
                  </motion.span>
                  <motion.span
                    className="hero__title_line"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}>
                    I&apos;m Nghi Ho
                  </motion.span>
                </h1>
              </div>

              <div className="hero__info">
                <motion.p
                  className="hero__role"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}>
                  Product Designer
                </motion.p>
                <motion.p
                  className="hero__description"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}>
                  I craft digital brand experiences that drive customer engagement through clean and impactful design.
                </motion.p>
              </div>

              <motion.div
                className="hero__cta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}>
                <a
                  href="#contact"
                  className="hero__button inline-flex items-center justify-center rounded-md border border-transparent bg-black px-5 py-3 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }}>
                  Get In Touch
                  <svg className="hero__button_icon w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="hero__illustration">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              className="hero__illustration_wrapper">
              <Image
                src={Hero_banner}
                alt="Creative illustration featuring a designer working with cosmic elements, representing innovative digital design"
                width={533}
                height={614}
                className="hero__illustration_image"
                style={{ width: '100%', height: 'auto' }}
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
