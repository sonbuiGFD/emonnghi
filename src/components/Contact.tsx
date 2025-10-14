"use client";

import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const contactInfo = [
    {
      label: "EMAIL",
      value: "nghi.ho@example.com",
      href: "mailto:nghi.ho@example.com",
      copyable: true,
    },
    {
      label: "PHONE NUMBER",
      value: "+84 (0) 912 345 678",
      href: "tel:+84912345678",
      copyable: true,
    },
    {
      label: "LINKEDIN",
      value: "linkedin.com/in/nghiho",
      href: "https://linkedin.com/in/nghiho",
      copyable: false,
    },
  ];

  const handleCopy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(label);
      setTimeout(() => setCopiedText(null), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 lg:py-32"
      aria-labelledby="contact-title"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Column - Contact Info */}
          <div className="order-2 lg:order-1">
            <div className="space-y-8 lg:space-y-12">
              <div>
                <h2
                  id="contact-title"
                  className="font-display text-display-lg text-text-primary mb-6 text-balance"
                >
                  Let&apos;s Get In Touch
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed text-pretty max-w-md">
                  Ready to bring your vision to life? I&apos;d love to hear
                  about your project and explore how we can create something
                  amazing together.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm uppercase tracking-wider text-text-secondary font-medium">
                        {item.label}
                      </span>
                      {item.copyable && (
                        <button
                          onClick={() => handleCopy(item.value, item.label)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs text-text-secondary hover:text-text-primary font-medium"
                          aria-label={`Copy ${item.label}`}
                        >
                          {copiedText === item.label ? "Copied!" : "Copy"}
                        </button>
                      )}
                    </div>
                    <a
                      href={item.href}
                      className="text-text-primary hover:text-blue-600 transition-colors duration-200 font-medium text-lg break-all"
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {item.value}
                    </a>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href="mailto:nghi.ho@example.com?subject=Project Inquiry&body=Hi Nghi,%0D%0A%0D%0AI'd like to discuss a project with you.%0D%0A%0D%0ABest regards"
                  className="cta-button"
                >
                  Send Message
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
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-6 pt-6 border-t border-border-light">
                <span className="text-sm text-text-secondary font-medium">
                  Follow me
                </span>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://linkedin.com/in/nghiho"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-text-primary transition-colors duration-200"
                    aria-label="LinkedIn Profile"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://dribbble.com/nghiho"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-text-primary transition-colors duration-200"
                    aria-label="Dribbble Profile"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm9.568 5.302c.434.319.807.678 1.113 1.07a9.982 9.982 0 01-.044.073c-.14.237-.41.528-.801.86-.289.247-.633.486-1.032.715-.398.228-.851.442-1.353.641a8.21 8.21 0 01-1.674.373c-.297-.48-.623-.934-.977-1.36-.354-.427-.736-.827-1.144-1.199-.408-.371-.842-.714-1.3-1.027-.459-.314-.942-.598-1.447-.853 1.62-1.48 3.748-2.38 6.059-2.38.659 0 1.299.08 1.919.229.331.08.65.177.955.29z" />
                    </svg>
                  </a>
                  <a
                    href="https://behance.net/nghiho"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-text-primary transition-colors duration-200"
                    aria-label="Behance Profile"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.125 1.074.297 1.488.615.414.31.738.684.97 1.113.23.43.345.943.345 1.537 0 .3-.08.825-.18 1.02-.1.196-.165.295-.196.3-.03.003-.060.005-.090.005-.15 0-.225-.09-.225-.27 0-.18.075-.27.225-.27.03 0 .060-.002.090-.005.03-.005.096-.104.196-.3.1-.195.18-.72.18-1.02 0-.594-.115-1.107-.345-1.537-.232-.429-.556-.802-.97-1.113-.414-.318-.91-.49-1.488-.615-.58-.128-1.218-.188-1.92-.188z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <Image
                src="/contact-illustration.svg"
                alt="Communication and collaboration illustration showing a person connecting with digital devices and messages"
                width={400}
                height={400}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
