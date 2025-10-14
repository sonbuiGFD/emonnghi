"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center py-20 lg:py-0"
      aria-labelledby="hero-title"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1 max-w-xl lg:max-w-none">
            <div className="space-y-6 lg:space-y-8">
              <div>
                <h1
                  id="hero-title"
                  className="font-display text-display-xl text-text-primary leading-none"
                >
                  <span className="block text-balance">Hello,</span>
                  <span className="block text-balance">I&apos;m Nghi Ho</span>
                </h1>
              </div>

              <div className="space-y-4">
                <p className="text-lg lg:text-xl text-text-secondary font-medium">
                  Product Designer
                </p>
                <p className="text-base lg:text-lg text-text-secondary leading-relaxed max-w-md text-pretty">
                  I craft digital brand experiences that drive customer
                  engagement through clean and impactful design.
                </p>
              </div>

              <div className="pt-4">
                <a
                  href="#contact"
                  className="cta-button"
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
                    className="ml-2 w-4 h-4"
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
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <Image
                src="/hero-illustration.svg"
                alt="Creative illustration featuring a designer working with cosmic elements, representing innovative digital design"
                width={400}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
