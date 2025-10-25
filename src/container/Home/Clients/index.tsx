'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import './style.scss';

import client_logo__1 from '@public/clients/client_logo__1.png';
import client_logo__2 from '@public/clients/client_logo__2.png';
import client_logo__3 from '@public/clients/client_logo__3.png';
import client_logo__4 from '@public/clients/client_logo__4.svg?url';
import client_logo__5 from '@public/clients/client_logo__5.png';
import client_logo__6 from '@public/clients/client_logo__6.png';
import client_logo__7 from '@public/clients/client_logo__7.png';
import client_logo__8 from '@public/clients/client_logo__8.png';
import client_logo__9 from '@public/clients/client_logo__9.png';
import client_logo__10 from '@public/clients/client_logo__10.svg?url';
import client_logo__11 from '@public/clients/client_logo__11.png';
import client_logo__12 from '@public/clients/client_logo__12.svg?url';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function Clients() {
  const clients = [
    { name: 'Kraft Heinz', logo: client_logo__1 },
    { name: 'Novaland', logo: client_logo__2 },
    { name: 'Viettel', logo: client_logo__3 },
    { name: '25fit', logo: client_logo__4 },
    { name: 'MoMo', logo: client_logo__5 },
    { name: 'Aeon', logo: client_logo__6 },
    { name: 'Grab', logo: client_logo__7 },
    { name: 'Havang', logo: client_logo__8 },
    { name: 'Rollot', logo: client_logo__9 },
    { name: 'Pharaday', logo: client_logo__10 },
    { name: 'Rellet', logo: client_logo__11 },
    { name: 'VietGap', logo: client_logo__12 },
  ];

  // Animation variants
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

  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 0.7,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const statsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const statVariants = {
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

  return (
    <section id="clients" className="clients" aria-labelledby="clients-title">
      <div className="clients__container container">
        <motion.div className="clients__content" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
          <motion.div className="clients__header" variants={headerVariants}>
            <h2 id="clients-title" className="clients__title">
              Clients & Partners
            </h2>
            <p className="clients__subtitle">
              Trusted by leading brands to deliver exceptional digital experiences that drive growth and engagement.
            </p>
          </motion.div>

          <motion.div
            className="clients__grid"
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}>
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                className="clients__logo"
                role="img"
                aria-label={`${client.name} logo`}
                variants={logoVariants}
                whileHover={{
                  opacity: 1,
                  y: -4,
                  transition: {
                    duration: 0.3,
                    ease: [0.34, 1.56, 0.64, 1] as const,
                  },
                }}
                custom={index}>
                <Image src={client.logo} alt={`${client.name} company logo`} width={120} height={40} className="clients__logo_image" loading="lazy" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats Section with Animated Counters */}
        <motion.div
          className="clients__stats"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-150px' }}
          variants={statsContainerVariants}>
          <div className="clients__stats_grid">
            <motion.div className="clients__stat" variants={statVariants}>
              <div className="clients__stat_number">
                <AnimatedCounter value={50} />
              </div>
              <p className="clients__stat_label">Projects Completed</p>
            </motion.div>
            <motion.div className="clients__stat" variants={statVariants}>
              <div className="clients__stat_number">
                <AnimatedCounter value={8} />
              </div>
              <p className="clients__stat_label">Years Experience</p>
            </motion.div>
            <motion.div className="clients__stat" variants={statVariants}>
              <div className="clients__stat_number">
                <AnimatedCounter value={15} />
              </div>
              <p className="clients__stat_label">Happy Clients</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
