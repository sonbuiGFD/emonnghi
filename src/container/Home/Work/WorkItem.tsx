'use client';

import { motion } from 'motion/react';

interface WorkItemProps {
  title: string;
  description: string;
  category: string;
  year?: string;
  link?: string;
}

function WorkItem({ title, description, category, year, link }: WorkItemProps) {
  const Wrapper = link ? motion.a : motion.div;
  const wrapperProps = link
    ? {
        href: link,
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {};

  const itemVariants = {
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

  return (
    <Wrapper
      className={link ? 'work_item work_item__link' : 'work_item'}
      variants={itemVariants}
      whileHover={{
        y: -4,
        transition: {
          duration: 0.3,
          ease: [0.34, 1.56, 0.64, 1] as const,
        },
      }}
      {...wrapperProps}>
      <div className="work_item__header">
        <h3 className="work_item__title">{title}</h3>
        {year && <span className="work_item__year">{year}</span>}
      </div>
      <p className="work_item__category">{category}</p>
      <p className="work_item__description">{description}</p>
      {link && (
        <motion.div className="work_item__link" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          View Project
          <svg className="work_item__link_icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.div>
      )}
    </Wrapper>
  );
}

export default WorkItem;
