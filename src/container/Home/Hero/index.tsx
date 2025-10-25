'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

import Hero_banner from '@public/svgs/Hero.svg?url';
import './style.scss';
import { Typewriter } from '@/components/Typewriter';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position tracking for parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Transform mouse position to rotation values
  const rotateX = useTransform(y, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const xPct = (mouseXPos / width - 0.5) * 2;
    const yPct = (mouseYPos / height - 0.5) * 2;
    mouseX.set(xPct * 0.3);
    mouseY.set(yPct * 0.3);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: custom * 0.15,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    }),
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: custom * 0.15,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    }),
  };

  const buttonVariants = {
    rest: {
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.34, 1.56, 0.64, 1] as const, // Smooth spring-like easing
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: [0.34, 1.56, 0.64, 1] as const, // Smooth spring-like easing
      },
    },
    tap: {
      scale: 0.97,
      transition: {
        duration: 0.1,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const arrowVariants = {
    rest: {
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.34, 1.56, 0.64, 1] as const,
      },
    },
    hover: {
      x: 5,
      transition: {
        duration: 0.4,
        ease: [0.34, 1.56, 0.64, 1] as const,
      },
    },
  };

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__container container">
        <div className="hero__layout">
          {/* Left Column - Text Content */}
          <motion.div className="hero__content" initial="hidden" animate="visible">
            <div className="hero__content_wrapper">
              <div className="hero__header">
                <h1 id="hero-title" className="hero__title">
                  <motion.span className="hero__title_line block relative" custom={0} variants={titleVariants}>
                    <span className="invisible">Hello,</span>
                    <Typewriter
                      className="hero__title_typing absolute top-0 left-0"
                      texts={['Hello,', 'Bonjour,', 'Hola,', 'Ciao,', 'Namaste,', 'Salaam,']}
                    />
                  </motion.span>
                  <motion.span className="hero__title_line" custom={1} variants={titleVariants}>
                    I&apos;m Nghi Ho
                  </motion.span>
                </h1>
              </div>

              <div className="hero__info">
                <motion.p className="hero__role" custom={2} variants={contentVariants}>
                  Product Designer
                </motion.p>
                <motion.p className="hero__description" custom={3} variants={contentVariants}>
                  I craft digital brand experiences that drive customer engagement through clean and impactful design.
                </motion.p>
              </div>

              <motion.div className="hero__cta" custom={4} variants={contentVariants}>
                <motion.a
                  href="#contact"
                  className="hero__button"
                  variants={buttonVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  onClick={handleClick}>
                  Get In Touch
                  <motion.svg
                    className="hero__button_icon w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    variants={arrowVariants}
                    animate={isHovered ? 'hover' : 'rest'}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Illustration */}
          <div className="hero__illustration">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="hero__illustration_wrapper"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                perspective: 1000,
              }}>
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: 'preserve-3d',
                }}
                whileHover={{
                  scale: 1.02,
                  transition: {
                    duration: 0.4,
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                }}>
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}>
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
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
