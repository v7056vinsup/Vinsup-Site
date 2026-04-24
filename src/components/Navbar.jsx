import { useState } from "react";
import { Link } from "react-router-dom";
import courses from "../data/courses.js";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isCoursesOpen, setCoursesOpen] = useState(false);
  const [disableHover, setDisableHover] = useState(false);

  const NAV_COURSE_SLUGS = [
    "data-verse-pro",
    "devstack-fullstack-devops",
    "data-analytics",
    "frontend",
    "ui-ux-design",
    "digital-marketing",
  ];

  const navCourses = courses.filter((c) =>
    NAV_COURSE_SLUGS.includes(c.slug)
  );

  // ✅ handle click
  const handleCourseClick = () => {
    setCoursesOpen(false);
    setDisableHover(true);

    // re-enable hover after navigation settles
    setTimeout(() => setDisableHover(false), 300);
  };

  return (
    <header className="navbar">
      <div
        className="nav-inner"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        {/* Logo */}
        <Link className="brand" to="/" aria-label="Home">
          <img src={logo} alt="Logo" />
        </Link>

        {/* Desktop Menu */}
        <nav className="nav-links" aria-label="Main">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>

          {/* Courses Dropdown */}
          <div className="dropdown">
            <button className="dropdown-btn">
              <span>Courses ▾</span>
            </button>

            <div className="dropdown-panel" role="menu">
              <div className="dropdown-grid">
                {navCourses.map((c) => (
                  <Link key={c.slug} to={`/courses/${c.slug}`}>
                    {c.title}
                  </Link>
                ))}

                <Link to="/courses" style={{ marginTop: 6, fontWeight: 600 }}>
                  View all courses →
                </Link>
              </div>
            </div>
          </div>

          <Link to="/testimonials">
            Testimonials
          </Link>
          <Link to="/placements">
            Placements
          </Link>
          <Link to="/playbook">
            Play Book
          </Link>
          <Link to="/contact">
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
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setOpen(false)}>
            About
          </Link>

          <details>
            <summary>Courses</summary>
            <div className="dropdown-grid" style={{ paddingTop: 8 }}>
              {navCourses.map((c) => (
                <Link
                  key={c.slug}
                  to={`/courses/${c.slug}`}
                  onClick={() => setOpen(false)}
                >
                  {c.title}
                </Link>
              ))}

              <Link
                to="/courses"
                onClick={() => setOpen(false)}
                style={{ marginTop: 6, fontWeight: 600 }}
              >
                View all courses →
              </Link>
            </div>
          </details>

          <Link to="/testimonials">
            Testimonials
          </Link>
          <Link to="/placements">
            Placements
          </Link>
          <Link to="/playbook">
            Play Book
          </Link>
          <Link to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}