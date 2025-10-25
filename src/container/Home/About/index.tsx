'use client';

import { motion } from 'motion/react';
import ExperienceItem from './ExperienceItem';
import './style.scss';

export default function About() {
  const experiences = [
    {
      company: 'DSV',
      role: 'Product Designer',
      period: 'Dec 2023 - Present',
      description:
        'Focused on creating comprehensive design systems and user experience improvements that boost customer satisfaction in the global logistics industry.',
    },
    {
      company: 'Momo',
      role: 'Product Designer',
      period: 'Aug 2022 - Feb 2023',
      description:
        'As a UI/UX Designer, I work closely with Product Owner on improving existing features, I handle delivery and user experience design through various products.',
    },
    {
      company: 'Silicon Stack',
      role: 'Product Designer',
      period: 'Oct 2020 - Aug 2022',
      description:
        'Enhanced brand image by boosting conversions with Product Designer and Product Owner. Developing business and UI improvements through data analytics and A/B testing methods.',
    },
    {
      company: 'Beyond Creative Agency',
      role: 'UI/UX Designer',
      period: 'Oct 2018 - Oct 2020',
      description:
        'Designed end-to-end digital experiences that align with business goals and provide delightful user experiences. Worked across various industries and client needs.',
    },
    {
      company: 'Freelance UI/UX Designer',
      role: 'UI/UX Designer',
      period: 'Oct 2016 - Present',
      description:
        'Provided comprehensive design services for startups and established businesses, focusing on user-centered design and conversion optimization.',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const sidebarVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="about__container container">
        <motion.div
          className="about__layout"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}>
          {/* Left Column - Title */}
          <motion.div className="about__sidebar" variants={sidebarVariants}>
            <div className="about__info">
              <motion.h2
                id="about-title"
                className="about__title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] as const }}>
                Something About Me
              </motion.h2>

              {/* Bio */}
              <motion.div
                className="about__bio"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}>
                <p className="about__bio-text">
                  Hi, I&apos;m a creative UI/UX Designer with focus design on original ideas and a strong background. With a years experience,
                  I&apos;m passionate about every project I worked on - that evolving to learn and always improving my skills.
                </p>
                <p className="about__bio-text">
                  I believe in creating thoughtful, accessible designs that solve real problems and deliver meaningful experiences. My approach
                  combines strategic thinking with creative execution to drive business results.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div className="about__content" variants={contentVariants}>
            {/* Experience Section */}
            <motion.div
              className="about__section"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={sectionVariants}>
              <h3 className="about__section-title">Experience</h3>
              <div className="about__experience-list">
                {experiences.map((exp, index) => (
                  <ExperienceItem key={index} {...exp} />
                ))}
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div
              className="about__section"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={sectionVariants}>
              <h3 className="about__section-title">Education</h3>
              <motion.div
                className="experience_item experience_item__education"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}>
                <div className="experience_item__header">
                  <div className="experience_item__info">
                    <h4 className="experience_item__role">Graphic Design</h4>
                    <p className="experience_item__company">FPT Arena</p>
                  </div>
                  <time className="experience_item__period">2016 - 2018</time>
                </div>
                <p className="experience_item__description">
                  Comprehensive program covering design fundamentals, typography, color theory, and digital design tools with focus on user-centered
                  design principles.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
