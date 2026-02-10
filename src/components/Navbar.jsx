import { useState } from "react";
import { Link } from "react-router-dom";
import courses from "../data/courses.js";
import logo from "../assets/logo.png"; // <-- your logo


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isCoursesOpen, setCoursesOpen] = useState(false);
 const slugToPath = {
  "data-verse-pro": "/courses/data-verse-pro",
  "devstack-fullstack-devops": "/courses/devstack-fullstack-devops",   // FIXED
  "data-analytics": "/courses/data-analytics",
  "frontend": "/courses/frontend",
  "ui-ux-design": "/courses/ui-ux-design",
  "digital-marketing": "/courses/digital-marketing",
};


  return (
    <header className="navbar">
      <div className="nav-inner" style={{ display:"flex", justifyContent:"space-between" }}>
        {/* Left: Logo + (optional) name */}
        <Link className="brand" to="/" aria-label="Home">
  <img src={logo} alt="Logo" />
</Link>

        {/* Right: Menus */}
        <nav className="nav-links" aria-label="Main">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>

          {/* Courses dropdown */}
          <div className="dropdown"  onMouseEnter={() => setCoursesOpen(true)}
  onMouseLeave={() => setCoursesOpen(false)}>
           
            <button className="dropdown-btn" aria-haspopup="true" aria-expanded={isCoursesOpen}>
              <span>Courses ▾</span>
            </button>
            <div className={`dropdown-panel ${isCoursesOpen ? "show" : ""}`}
 role="menu" aria-label="Courses">
              <div className="dropdown-grid">
                {courses.map(c => (
  <Link key={c.slug} to={slugToPath[c.slug] || "/courses"} role="menuitem">
    {c.title}
  </Link>
))}
                <Link to="/courses" style={{ marginTop: 6, fontWeight: 600 }}>
                  View all courses →
                </Link>
              </div>
            </div>
          </div>

          <Link to="/testimonials">Testimonials</Link>
          <Link to="/blog">Events</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Rightmost: Auth */}
        <div className="nav-cta">
          <Link className="link" to="/login">Login</Link> 
          
          <Link className="btn" to="/register">Register</Link>
        </div>

        {/* Mobile menu */}
        <button
          className="menu-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile drawer (white background) */}
      <div className={`mobile-drawer ${open ? "open" : ""}`}>
        <div className="group">
          <Link to="/" onClick={()=>setOpen(false)}>Home</Link>
          <Link to="/about" onClick={()=>setOpen(false)}>About</Link>
          <details>
  <summary>Courses</summary>
  <div className="dropdown-grid" style={{ paddingTop: 8 }}>
    {courses.map((c, index) => (
      <Link
        key={c.slug || index}
        to={slugToPath[c.slug] || "/courses"}
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

          <Link to="/testimonials" onClick={()=>setOpen(false)}>Testimonials</Link>
          <Link to="/blog" onClick={()=>setOpen(false)}>Events</Link>
          <Link to="/contact" onClick={()=>setOpen(false)}>Contact</Link>
        </div>
        <div className="group">
          <Link to="/login" onClick={()=>setOpen(false)}>Login</Link>
          <Link to="/register" onClick={()=>setOpen(false)}>Register</Link>
        </div>
      </div>
    </header>
  );
}
