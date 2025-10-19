"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__container">
        <div className="footer__header">
          {/* Logo/Brand */}
          <div className="footer__brand">
            <span className="footer__logo">emon.</span>
          </div>

          {/* Copyright */}
          <div className="footer__copyright">
            <p className="footer__copyright_text">
              © {currentYear} Nghi Ho. All rights reserved.
            </p>
          </div>
        </div>

        {/* Additional Footer Content */}
        <div className="footer__bottom">
          <div className="footer__bottom_content">
            <p className="footer__tagline">
              Crafted with passion in Vietnam 🇻🇳
            </p>
            <div className="footer__nav">
              <a
                href="#about"
                className="footer__nav_link"
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
                className="footer__nav_link"
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
                className="footer__nav_link"
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
