"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-8 md:py-12 border-t border-border-light"
      role="contentinfo"
    >
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <span className="text-xl font-display font-medium text-text-primary">
              emon.
            </span>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-text-secondary text-sm">
              © {currentYear} Nghi Ho. All rights reserved.
            </p>
          </div>
        </div>

        {/* Additional Footer Content */}
        <div className="mt-8 pt-8 border-t border-border-light">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-secondary">
            <p className="text-center md:text-left">
              Crafted with passion in Vietnam 🇻🇳
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="#about"
                className="hover:text-text-primary transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#about")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                About
              </a>
              <a
                href="#work"
                className="hover:text-text-primary transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#work")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                Work
              </a>
              <a
                href="#contact"
                className="hover:text-text-primary transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
