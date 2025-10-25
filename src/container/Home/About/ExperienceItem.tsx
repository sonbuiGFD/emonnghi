'use client';

import { motion } from 'motion/react';

interface ExperienceItemProps {
  company: string;
  role: string;
  period: string;
  description: string;
  current?: boolean;
}

function ExperienceItem({ company, role, period, description }: ExperienceItemProps) {
  return (
    <motion.div
      className="experience_item"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const,
      }}
      whileHover={{
        y: -4,
        transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const },
      }}>
      <div className="experience_item__header">
        <div className="experience_item__info">
          <h3 className="experience_item__role">{role}</h3>
          <p className="experience_item__company">{company}</p>
        </div>
        <div className="experience_item__meta">
          <time className="experience_item__period">{period}</time>
        </div>
      </div>
      <p className="experience_item__description">{description}</p>
    </motion.div>
  );
}

export default ExperienceItem;
