'use client';

import { motion } from 'motion/react';
import WorkItem from './WorkItem';
import './style.scss';

export default function Work() {
  const websiteProjects = [
    {
      title: 'Thisis180',
      category: 'Website Design',
      year: '2023',
      description:
        'Comprehensive website redesign for a major accounting firm, focusing on professional credibility and user experience optimization.',
    },
  ];

  const appProjects = [
    {
      title: 'Matter App',
      category: 'App Design',
      year: '2023',
      description: 'Mobile application design for productivity and task management, emphasizing clean interfaces and intuitive user flows.',
    },
    {
      title: 'JoyStop',
      category: 'App Design',
      year: '2022',
      description: 'Food delivery app focusing on user experience optimization and conversion rate improvement through design iterations.',
    },
  ];

  const systemProjects = [
    {
      title: 'KraftHeinz',
      category: 'System Design',
      year: '2022',
      description: 'Comprehensive design system architecture enabling consistent brand experience across multiple digital properties and platforms.',
    },
    {
      title: 'JoyStop Food Management Platform',
      category: 'System Design',
      year: '2023',
      description:
        'Complete food service management system design including inventory, ordering, and analytics dashboards for restaurant operations.',
    },
    {
      title: 'AP Eager Automotive Platform',
      category: 'System Design',
      year: '2021',
      description: 'Automotive service platform design focused on streamlining service booking and customer management for automotive businesses.',
    },
  ];

  // Animation variants
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

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const sectionTitleVariants = {
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

  const itemsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="work" className="work" aria-labelledby="work-title">
      <div className="work__container container">
        <div className="work__layout">
          {/* Left Column - Title */}
          <motion.div
            className="work__sidebar"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={sidebarVariants}>
            <div className="work__sidebar-content">
              <motion.h2
                id="work-title"
                className="work__title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] as const }}>
                Discover My Works
              </motion.h2>
              <motion.p
                className="work__subtitle"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }}>
                With passion and creativity in work, I partner with clients to define problems, create solutions and design products.
                <br />
                Here are some projects I&apos;ve done
              </motion.p>
            </div>
          </motion.div>

          {/* Right Column - Work Categories */}
          <div className="work__content">
            {/* Website Design */}
            <motion.div
              className="work__section"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={sectionVariants}>
              <motion.h3 className="work__section-title" variants={sectionTitleVariants}>
                Website Design
              </motion.h3>
              <motion.div className="work__section-items" variants={itemsContainerVariants}>
                {websiteProjects.map((project, index) => (
                  <WorkItem key={index} {...project} />
                ))}
              </motion.div>
            </motion.div>

            {/* App Design */}
            <motion.div
              className="work__section"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={sectionVariants}>
              <motion.h3 className="work__section-title" variants={sectionTitleVariants}>
                App Design
              </motion.h3>
              <motion.div className="work__section-items" variants={itemsContainerVariants}>
                {appProjects.map((project, index) => (
                  <WorkItem key={index} {...project} />
                ))}
              </motion.div>
            </motion.div>

            {/* System Design */}
            <motion.div
              className="work__section"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={sectionVariants}>
              <motion.h3 className="work__section-title" variants={sectionTitleVariants}>
                System Design
              </motion.h3>
              <motion.div className="work__section-items" variants={itemsContainerVariants}>
                {systemProjects.map((project, index) => (
                  <WorkItem key={index} {...project} />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
