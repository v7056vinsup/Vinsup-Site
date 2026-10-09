import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import courses, { getCourseRouteHref, getCourseRouteSlug } from "../data/courses.js";
import logo from "../assets/logo.webp";
import logoSm from "../assets/logo-sm.webp";
import "../styles/Navbar.css";
import { prefetchTestimonials } from "../lib/testimonialsCache";
import { prefetchPlacements } from "../lib/placementsCache";
export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [isCoursesOpen, setCoursesOpen] = useState(false);
  const [disableHover, setDisableHover] = useState(false);

  const NAV_COURSE_LABELS = {
    "data-verse-pro": "Data Science with Gen AI",
    "devstack-fullstack-devops": "AI integrated Devstack-Fullstack-devops",
    "data-analytics": "AI-Ready Data Analytics",
    "mern-stack": "AI-Integrated MERN Stack",
    "ui-ux-design": "AI-Powered UI/UX & Graphic Design",
    "digital-marketing": "AI & Digital Marketing",
  };

  const navCourses = courses.filter((course) => course.navVisible !== false);

  // ✅ handle click
  const handleCourseClick = () => {
    setCoursesOpen(false);
    setDisableHover(true);

    // re-enable hover after navigation settles
    setTimeout(() => setDisableHover(false), 300);
  };

  // Check if link is active
  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="navbar">
      <div
        className="nav-inner"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        {/* Logo */}
        <Link className="brand" to="/" aria-label="Home">
          <img src={logoSm} srcSet={`${logoSm} 1x, ${logo} 2x`} alt="Vinsup Skill Academy" width="303" height="122" fetchPriority="high" />
        </Link>

        {/* Desktop Menu */}
        <nav className="nav-links" aria-label="Main">
          <Link to="/" className={isActive("/") ? "active" : ""}>Home</Link>
          <Link to="/about" className={isActive("/about") ? "active" : ""}>About</Link>

          {/* Courses Dropdown */}
          <div className={`dropdown ${isActive("/courses") ? "active" : ""}`}>
            <button className="dropdown-btn">
              <span>Courses ▾</span>
            </button>

            <div className="dropdown-panel" role="menu">
              <div className="dropdown-grid">
                {navCourses.map((c) => (
                  <Link 
                    key={getCourseRouteSlug(c)} 
                    to={getCourseRouteHref(c)}
                    className={isActive(getCourseRouteHref(c)) ? "active" : ""}
                  >
                    {NAV_COURSE_LABELS[c.slug] || c.title}
                  </Link>
                ))}

                <Link 
                  to="/courses" 
                  style={{ marginTop: 6, fontWeight: 600 }}
                  className={isActive("/courses") ? "active" : ""}
                >
                  View all courses →
                </Link>
              </div>
            </div>
          </div>

          <Link
            to="/testimonials"
            className={isActive("/testimonials") ? "active" : ""}
            onMouseEnter={() => prefetchTestimonials()}
            onFocus={() => prefetchTestimonials()}
          >
            Testimonials
          </Link>
          <Link
            to="/placements"
            className={isActive("/placements") ? "active" : ""}
            onMouseEnter={() => prefetchPlacements()}
            onFocus={() => prefetchPlacements()}
          >
            Placements
          </Link>
          {/* <Link to="/alumni" className={isActive("/alumni") || isActive("/alumini") ? "active" : ""}>
            Alumni
          </Link> */}
          <Link to="/playbook" className={isActive("/playbook") ? "active" : ""}>
            Play Book
          </Link>
          <Link to="/contact" className={isActive("/contact") ? "active" : ""}>
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${open ? "open" : ""}`}>
        <div className="group">
          <Link to="/" onClick={() => setOpen(false)} className={isActive("/") ? "active" : ""}>
            Home
          </Link>
          <Link to="/about" onClick={() => setOpen(false)} className={isActive("/about") ? "active" : ""}>
            About
          </Link>

          <details>
            <summary>Courses</summary>
            <div className="dropdown-grid" style={{ paddingTop: 8 }}>
              {navCourses.map((c) => (
                <Link
                  key={getCourseRouteSlug(c)}
                  to={getCourseRouteHref(c)}
                  onClick={() => setOpen(false)}
                  className={isActive(getCourseRouteHref(c)) ? "active" : ""}
                >
                  {NAV_COURSE_LABELS[c.slug] || c.title}
                </Link>
              ))}

              <Link
                to="/courses"
                onClick={() => setOpen(false)}
                style={{ marginTop: 6, fontWeight: 600 }}
                className={isActive("/courses") ? "active" : ""}
              >
                View all courses →
              </Link>
            </div>
          </details>

          <Link
            to="/testimonials"
            className={isActive("/testimonials") ? "active" : ""}
            onMouseEnter={() => prefetchTestimonials()}
            onFocus={() => prefetchTestimonials()}
            onClick={() => setOpen(false)}
          >
            Testimonials
          </Link>
          <Link
            to="/placements"
            className={isActive("/placements") ? "active" : ""}
            onMouseEnter={() => prefetchPlacements()}
            onFocus={() => prefetchPlacements()}
            onClick={() => setOpen(false)}
          >
            Placements
          </Link>
          {/* <Link to="/alumni" className={isActive("/alumni") || isActive("/alumini") ? "active" : ""} onClick={() => setOpen(false)}>
            Alumni
          </Link> */}
          <Link to="/playbook" className={isActive("/playbook") ? "active" : ""} onClick={() => setOpen(false)}>
            Play Book
          </Link>
          <Link to="/contact" className={isActive("/contact") ? "active" : ""} onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}