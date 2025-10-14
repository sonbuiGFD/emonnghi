"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navigation = [
  { name: "ABOUT", href: "#about" },
  { name: "CLIENTS", href: "#clients" },
  { name: "WORK", href: "#work" },
  { name: "CONTACT", href: "#contact" },
];

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          isScrolled
            ? "bg-white/95 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        }
        lg:sticky lg:top-0 lg:bg-white lg:shadow-none
      `}
    >
      <nav
        className="container-custom py-4 lg:py-6"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl lg:text-2xl font-display font-medium text-text-primary hover:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-text-primary focus:ring-offset-2 rounded"
            aria-label="Emon Portfolio Home"
          >
            emon.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="nav-link text-sm lg:text-base"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text-primary hover:text-text-secondary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-text-primary focus:ring-offset-2 rounded"
            aria-label="Open mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation (would need state management for toggle) */}
        <div className="md:hidden mt-4 pt-4 border-t border-border-light hidden">
          <div className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="nav-link text-base py-2"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
