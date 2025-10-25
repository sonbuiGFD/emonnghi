'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import contact_banner from '@public/svgs/contact_banner.svg?url';

import './style.scss';

export default function Contact() {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [hoveredButton, setHoveredButton] = useState(false);

  const contactInfo = [
    {
      label: 'EMAIL',
      value: 'nghiho2497@gmail.com',
      href: 'mailto:nghiho2497@gmail.com',
      copyable: true,
    },
    {
      label: 'PHONE NUMBER',
      value: '+84 (0) 909 69 07 69',
      href: 'tel:+84909690769',
      copyable: true,
    },
    {
      label: 'LINKEDIN',
      value: 'linkedin.com/in/nghi-ho-845737199',
      href: 'https://www.linkedin.com/in/nghi-ho-845737199/',
      copyable: false,
    },
  ];

  const handleCopy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(label);
      setTimeout(() => setCopiedText(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const buttonVariants = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.02,
      y: -2,
      transition: {
        duration: 0.3,
        ease: [0.34, 1.56, 0.64, 1] as const,
      },
    },
    tap: { scale: 0.98 },
  };

  const socialVariants = {
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

  const illustrationVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="contact__container container">
        <div className="contact__layout">
          {/* Left Column - Contact Info */}
          <motion.div
            className="contact__content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}>
            <div className="contact__info">
              <motion.div className="contact__header" variants={headerVariants}>
                <h2 id="contact-title" className="contact__title">
                  Let&apos;s Get In Touch
                </h2>
                <p className="contact__subtitle">
                  Ready to bring your vision to life? I&apos;d love to hear about your project and explore how we can create something amazing
                  together.
                </p>
              </motion.div>

              <motion.div className="contact__list" variants={containerVariants}>
                {contactInfo.map((item, index) => (
                  <motion.div key={item.label} className="contact__item" variants={itemVariants} custom={index}>
                    <div className="contact__item_header">
                      <span className="contact__item_label">{item.label}</span>
                      {item.copyable && (
                        <motion.button
                          onClick={() => handleCopy(item.value, item.label)}
                          className="contact__item_copy"
                          aria-label={`Copy ${item.label}`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}>
                          {copiedText === item.label ? 'Copied!' : 'Copy'}
                        </motion.button>
                      )}
                    </div>
                    <motion.a
                      href={item.href}
                      className="contact__item_value"
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      whileHover={{
                        x: 4,
                        transition: { duration: 0.2 },
                      }}>
                      {item.value}
                    </motion.a>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="contact__cta"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }}>
                <motion.a
                  href="https://calendly.com/nghiho2497/30min"
                  className="contact__button"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={buttonVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  onHoverStart={() => setHoveredButton(true)}
                  onHoverEnd={() => setHoveredButton(false)}>
                  Schedule a call
                  <motion.svg
                    className="contact__button_icon w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={hoveredButton ? { x: 4 } : { x: 0 }}
                    transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] as const }}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </motion.svg>
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div className="contact__social" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={socialVariants}>
                <span className="contact__social_label">Follow me</span>
                <div className="contact__social_links">
                  <motion.a
                    href="https://www.linkedin.com/in/nghi-ho-845737199/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social_link"
                    aria-label="LinkedIn Profile"
                    whileHover={{
                      scale: 1.1,
                      y: -2,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}>
                    <svg className="contact__social_icon w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://dribbble.com/Emonnghi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social_link"
                    aria-label="Dribbble Profile"
                    whileHover={{
                      scale: 1.1,
                      y: -2,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="contact__social_icon w-5"
                      viewBox="0 0 16 16">
                      <path
                        fillRule="evenodd"
                        d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8m5.284 3.688a6.8 6.8 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A7 7 0 0 1 8 1.18m-2.907.642A43 43 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.87 6.87 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.82 6.82 0 0 1-1.752-4.564zM8 14.837a6.8 6.8 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.3 28.3 0 0 1 1.457 5.18A6.7 6.7 0 0 1 8 14.837m3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.77 6.77 0 0 1-2.924 4.573z"
                      />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://www.behance.net/nghiho24972cdb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social_link"
                    aria-label="Behance Profile"
                    whileHover={{
                      scale: 1.1,
                      y: -2,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="contact__social_icon w-5" viewBox="0 0 16 16">
                      <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391s.497.426.641.747c.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922s.461.957.461 1.563c0 .496-.105.922-.285 1.278a2.3 2.3 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.3 5.3 0 0 1-1.278.176L0 12.803V3zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a1 1 0 0 0-.32-.355 1.8 1.8 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305zm6.858-.035q.428.427 1.278.426c.39 0 .746-.106 1.032-.286q.426-.32.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.1 4.1 0 0 1-1.527-.285 2.8 2.8 0 0 1-1.137-.782 2.85 2.85 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4 4 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396m2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176s-.356.25-.496.39a.96.96 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978z" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Illustration */}
          <motion.div
            className="contact__illustration"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={illustrationVariants}>
            <motion.div
              className="contact__illustration_wrapper"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}>
              <Image
                src={contact_banner}
                alt="Communication and collaboration illustration showing a person connecting with digital devices and messages"
                width={454}
                height={454}
                className="contact__illustration_image"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
