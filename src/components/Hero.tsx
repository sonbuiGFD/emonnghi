"use client";

import Image from "next/image";

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
                  I craft digital brand experiences that drive customer
                  engagement through clean and impactful design.
                </p>
              </div>

              <div className="hero__cta">
                <a
                  href="#contact"
                  className="hero__button"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contact")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  Get In Touch
                  <svg
                    className="hero__button_icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="hero__illustration">
            <div className="hero__illustration_wrapper">
              <Image
                src="/hero-illustration.svg"
                alt="Creative illustration featuring a designer working with cosmic elements, representing innovative digital design"
                width={400}
                height={400}
                className="hero__illustration_image"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
