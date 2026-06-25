import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import courses from "../data/courses.js";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";
export default function Navbar() {
  const location = useLocation();
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
          <img src={logo} alt="Logo" />
        </Link>

        <style>
{`
@keyframes heartbeatGlow {
  0% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(255,59,48,0.4);
  }

  15% {
    transform: scale(1.12);
    box-shadow: 0 0 25px rgba(255,59,48,0.9);
  }

  30% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(255,59,48,0.4);
  }

  45% {
    transform: scale(1.12);
    box-shadow: 0 0 35px rgba(255,59,48,1);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(255,59,48,0.4);
  }

  100% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(255,59,48,0.4);
  }
}
`}
</style>

          <Link
            to="/oppofest"
            style={{
  background: "linear-gradient(135deg,#ff3b30,#ff6a00)",
  color: "#fff",
  textDecoration: "none",
  padding: "8px 14px",
  borderRadius: "999px",
  fontWeight: "700",
  fontSize: "14px",
  whiteSpace: "nowrap",
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  animation: "heartbeatGlow 1.8s infinite",
  boxShadow: "0 0 15px rgba(255,59,48,0.5)",
  border: "1px solid rgba(255,255,255,0.15)",
  cursor: "pointer",
}}
        >
          🏎️ OPPO FEST
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
                    key={c.slug} 
                    to={`/courses/${c.slug}`}
                    className={isActive(`/courses/${c.slug}`) ? "active" : ""}
                  >
                    {c.title}
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

          <Link to="/testimonials" className={isActive("/testimonials") ? "active" : ""}>
            Testimonials
          </Link>
          <Link to="/placements" className={isActive("/placements") ? "active" : ""}>
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
                  key={c.slug}
                  to={`/courses/${c.slug}`}
                  onClick={() => setOpen(false)}
                  className={isActive(`/courses/${c.slug}`) ? "active" : ""}
                >
                  {c.title}
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

          <Link to="/testimonials" className={isActive("/testimonials") ? "active" : ""}>
            Testimonials
          </Link>
          <Link to="/placements" className={isActive("/placements") ? "active" : ""} onClick={() => setOpen(false)}>
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