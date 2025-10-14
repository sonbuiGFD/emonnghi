import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="section-container">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; {currentYear} Your Name. All rights reserved.</p>
          </div>
          <div className="footer-links">
            <a href="#about" className="footer-link">
              About
            </a>
            <a href="#projects" className="footer-link">
              Projects
            </a>
            <a href="#skills" className="footer-link">
              Skills
            </a>
            <a href="#contact" className="footer-link">
              Contact
            </a>
          </div>
          <div className="footer-social">
            <a
              href="https://github.com"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
