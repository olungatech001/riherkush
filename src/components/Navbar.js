import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../images/logo.png"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTogglerClick = () => {
    setNavOpen(!navOpen);
  };

  let navbarClasses = scrolled ? "navbar scrolled" : "navbar";

  return (
    <nav className={`${navbarClasses} navbar-expand-lg fixed-top px-md-5`}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" height="80px" className="rounded" />
        </Link>
        <button
          className={`navbar-toggler ${navOpen ? "open" : ""}`}
          type="button"
          onClick={handleTogglerClick}
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={navOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${navOpen ? "show blur-background" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <NavigationLink name="Home" link="/" />
            <NavigationLink name="About" link="/about" />
            <NavigationLink name="Services" link="/services" />
            <NavigationLink name="Products" link="/products" />
            <NavigationLink name="Contact" link="/contact" />
          </ul>
        </div>
      </div>
    </nav>
  );
}

function NavigationLink(props) {
  return (
    <li className="nav-item">
      <NavLink
        to={props.link}
        className={({ isActive }) =>
          `nav-link me-4 text-uppercase fw-bold ${isActive ? "active" : ""}`
        }
      >
        {props.name}
      </NavLink>
    </li>
  );
}

