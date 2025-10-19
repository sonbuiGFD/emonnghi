'use client';

import Image from 'next/image';
import Hero_banner from '@public/svgs/Hero.svg?url';
import './style.scss';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__container">
        <div className="hero__layout">
          {/* Left Column - Text Content */}
          <div className="hero__content">
            <div className="hero__content_wrapper">
              <div className="hero__header">
                <h1 id="hero-title" className="hero__title">
                  <span className="hero__title_line">Hello,</span>
                  <span className="hero__title_line">I&apos;m Nghi Ho</span>
                </h1>
              </div>

              <div className="hero__info">
                <p className="hero__role">Product Designer</p>
                <p className="hero__description">
                  I craft digital brand experiences that drive customer engagement through clean and impactful design.
                </p>
              </div>

              <div className="hero__cta">
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
              </div>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="hero__illustration">
            <div className="hero__illustration_wrapper">
              <Image
                src={Hero_banner}
                alt="Creative illustration featuring a designer working with cosmic elements, representing innovative digital design"
                width={533}
                height={614}
                className="hero__illustration_image"
                style={{ width: '100%', height: 'auto' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
