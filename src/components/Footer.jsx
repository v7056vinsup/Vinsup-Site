import { Link } from "react-router-dom";
import courses from "../data/courses";


// simple inline SVG icons (no extra libs)
const Facebook = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H8.08v-2.91h2.36V9.41c0-2.33 1.39-3.62 3.52-3.62.99 0 2.03.18 2.03.18v2.24h-1.14c-1.12 0-1.47.7-1.47 1.42v1.71h2.5l-.4 2.91h-2.1V22c4.78-.75 8.42-4.92 8.42-9.94Z" fill="currentColor"/>
  </svg>
);
const Instagram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer footer-gradient">
      <div className="footer-wrap">
        {/* Column 1: Brand + description + social */}
        <div className="f-col f-brand">
          <div className="f-brand-row">
            {/* <div className="f-brand-icon"></div> */}
            <h3 className="f-brand-name">Vinsup Skill Academy</h3>
          </div>
          <p className="f-desc">
            Empowering learners worldwide with cutting-edge education and personalized learning
            experiences. Join thousands who've transformed their careers with us.
          </p>

          <div className="f-subtitle">Follow Us</div>
          <div className="f-social">
            <a className="f-social-btn" href="#" aria-label="Facebook"><Facebook/></a>
            <a className="f-social-btn" href="#" aria-label="Instagram"><Instagram/></a>
          </div>
        </div>

        {/* Column 2: Courses (from data) */}
        <div className="f-col">
          <h4 className="f-head">Courses</h4>
          <ul className="f-list">
            {courses.map((c) => (
              <li key={c.slug}><Link to={`/courses?show=${encodeURIComponent(c.slug)}`}>{c.title}</Link></li>
            ))}
          </ul>
        </div>

        {/* Column 3: Company */}
        <div className="f-col">
          <h4 className="f-head">Company</h4>
          <ul className="f-list">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/about">Our Mission</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/press">Press</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>

        {/* Column 4: Support */}
        <div className="f-col">
          <h4 className="f-head">Support</h4>
          <ul className="f-list">
            <li><Link to="/faqs">Help Center</Link></li>
            <li><Link to="/faqs">Student Support</Link></li>
            <li><Link to="/refund-policy">Refund Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Column 5: Get in Touch + Map */}
        <div className="f-col f-contact">
          <h4 className="f-head">Get in Touch</h4>
          <ul className="f-contact-list">
            <li> A,B, Gopalsamy, 140,<br/>Gopalsamy Koil St, Sridevi Nagar, Ganapathy, Coimbatore,<br/>Tamil Nadu 641006</li>
           <li>
  <a href="tel:+918248826374">+91 82488 26374</a>
</li>
<li>
  <a href="mailto:hrvinsup@gmail.com">hrvinsup@gmail.com</a>
</li>

          </ul><div className="map-wrap">
  <iframe
    className="map-frame"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.0301951658284!2d76.97409037504568!3d11.036361389128652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85963b47c9905%3A0xccf88b0cf54e457e!2sVINSUP%20SKILL%20ACADEMY!5e0!3m2!1sen!2sin!4v1771679150601!5m2!1sen!2sin"
    title="Vinsup Skill Academy Location"
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
        </div>
      </div>
       {/* Column 6: Location */}

      <div className="copyright">
        © {new Date().getFullYear()} <a href="https://vinsupinfotech.com/">Vinsup Infotech</a>. All rights reserved.
      </div>

      {/* Floating action buttons (optional; looks like your reference) */}
     <div className="floating-icons" role="region" aria-label="Quick contact actions">
 <a
  className="fab fab-whatsapp"
  href="https://wa.me/918248826374"
  target="_blank"
  rel="noreferrer"
  aria-label="WhatsApp"
>
  <svg viewBox="0 0 32 32" width="26" height="26" fill="white">
    <path d="M16.04 3C9.41 3 4 8.41 4 15.04c0 2.64.86 5.07 2.32 7.03L4 29l7.16-2.25c1.9 1.04 4.08 1.63 6.33 1.63 6.63 0 12.04-5.41 12.04-12.04S22.67 3 16.04 3zm0 21.86c-2.03 0-3.93-.55-5.56-1.52l-.4-.24-4.25 1.34 1.38-4.14-.26-.42a9.8 9.8 0 01-1.54-5.2c0-5.42 4.41-9.83 9.83-9.83 2.63 0 5.11 1.02 6.97 2.88a9.79 9.79 0 012.88 6.95c0 5.42-4.41 9.83-9.83 9.83zm5.39-7.37c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.69.15-.2.3-.78.97-.96 1.17-.18.2-.36.23-.66.08-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.5-1.79-1.68-2.09-.18-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.69-1.66-.95-2.28-.25-.6-.5-.52-.69-.53h-.59c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.13 3.25 5.16 4.56.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.28-.2-.58-.35z"/>
  </svg>
</a>



  <a
    className="fab fab-call"
    href="tel:+918248826374"
    aria-label="Call now"
  >
    📞
  </a>
</div>

    </footer>
  );
}
