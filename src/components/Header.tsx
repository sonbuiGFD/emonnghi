import Link from "next/link";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav section-container">
        <div className="nav-brand">
          <Link href="/" className="nav-logo text-gradient">
            Portfolio
          </Link>
        </div>

        <ul className="nav-menu">
          <li>
            <Link href="#about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className="nav-link">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#skills" className="nav-link">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>

        <button className="mobile-menu-toggle" aria-label="Toggle mobile menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
