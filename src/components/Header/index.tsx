"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "./styles.scss";

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
    <header className={`header ${isScrolled ? "header__scrolled" : ""}`}>
      <nav
        className="header__nav"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="header__container container">
          {/* Logo */}
          <Link
            href="/"
            className="header__logo"
            aria-label="Emon Portfolio Home"
          >
            emon.
          </Link>

          {/* Desktop Navigation */}
          <div className="header__nav_desktop">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="header__nav_link"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="header__menu_button" aria-label="Open mobile menu">
            <svg
              className="header__menu_icon"
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
        <div className="header__nav_mobile header__nav_mobile_hidden">
          <div className="header__nav_mobile_list">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="header__nav_link header__nav_link_mobile"
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
