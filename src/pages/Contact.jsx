import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QuickEnquiry from "../components/QuickEnquiry";
import "./Contact.css";

export default function Contact() {
  const [jobs, setJobs] = useState([]);

  const API = "https://script.google.com/macros/s/AKfycbyCf0PeSO60XHV2K0t6O6V_IZDgdjCqtovs4uqoJfLWpSizQwmRWOoaHjF8r75m8XbR/exec?action=getJobs";


  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setJobs(data || []))
      .catch((err) => console.error("Job load error:", err));
  }, []);

  return (
    <main>
      {/* ===========================
          CONTACT HEADER
      ============================ */}
      <section className="section contact-header">
        <div className="section-inner">
          <h1 className="section-title">Contact Us</h1>
          <p className="contact-sub">
            We're here to answer your questions, guide your learning journey,
            and help you choose the right career path.
          </p>
        </div>
      </section>

      {/* ===========================
          GET IN TOUCH SECTION
      ============================ */}
      <section className="section contact-details">
       
        <div className="section-inner contact-grid">
          {/* LEFT SIDE */}
          <div className="contact-left">
            <div className="contact-info">
              <div className="info-item">
                <span className="emoji">📞</span>
                <div>
                  <h3>Phone</h3>
                  <p>+91 82488 26374</p>
                </div>
              </div>

              <div className="info-item">
                <span className="emoji">📧</span>
                <div>
                  <h3>Email</h3>
                  <p>hrvinsup@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <span className="emoji">📍</span>
                <div>
                  <h3>Address</h3>
                  <p>
                    Vinsup Skill Academy<br />
                    A,B, gopalsamy, 148, Gopalasamy Koil St, Sridevi Nagar, Ganapathy, Coimbatore, Tamil Nadu 641006
                  </p>
                </div>
              </div>

              <div className="info-item">
                <span className="emoji">⏰</span>
                <div>
                  <h3>Working Hours</h3>
                  <p>
                    Monday – Saturday<br />
                    9:00 AM – 9:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — GOOGLE MAP */}
          <div className="contact-right">
            
            <iframe  title="Vinsup Skill Academy Map"
              width="100%"
              height="450"
              style={{ borderRadius: "18px", border: "0"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.0301950209086!2d76.9766653!3d11.036361399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85963b47c9905%3A0xccf88b0cf54e457e!2sVINSUP%20SKILL%20ACADEMY!5e0!3m2!1sen!2sin!4v1770581316273!5m2!1sen!2sin" ></iframe>
          </div>
        </div>
      </section>

      {/* ===========================
          QUICK CONNECT
      ============================ */}
      <section className="contact-actions section">
        <div className="section-inner">
          <h2 className="section-title">Quick Connect Here</h2>

          <div className="action-row">
            {/* CALL US */}
            <a href="tel:+918248826374" className="action-box">
              <span className="action-icon">
                {/* Phone SVG */}
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6.62 10.79a15.054 15.054 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.01-.24c1.12.37 2.33.57 3.59.57.55 0 1 .45 1 1V21c0 .55-.45 1-1 1C10.4 22 2 13.6 2 3c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.26.2 2.47.57 3.59.11.34.03.72-.24 1l-2.21 2.2z"
                    fill="#C62839"
                  />
                </svg>
              </span>

              <div>
                <h3>Call Us</h3>
                <p>+91 82488 26374</p>
              </div>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/918248826374?text=Hi%20Vinsup%20Skill%20Academy"
              target="_blank"
              rel="noopener noreferrer"
              className="action-box"
            >
              <span className="action-icon">
                {/* WhatsApp SVG */}
                <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M16.027 3C9.383 3 4 8.383 4 15.027c0 2.654.867 5.113 2.34 7.117L4.5 29l7.063-1.82a11.9 11.9 0 0 0 4.464.867c6.644 0 12.027-5.383 12.027-12.027C28.054 8.383 22.67 3 16.027 3Zm0 21.787c-1.508 0-2.977-.398-4.27-1.152l-.305-.18-4.188 1.078 1.117-4.086-.2-.316a10.55 10.55 0 0 1-1.64-5.923c0-5.844 4.742-10.586 10.586-10.586s10.586 4.742 10.586 10.586c0 5.844-4.742 10.586-10.586 10.586Z"
                    fill="#25D366"
                  />
                </svg>
              </span>

              <div>
                <h3>WhatsApp</h3>
                <p>Chat with us on WhatsApp</p>
              </div>
            </a>
          </div>
        </div>
      </section>
 {/* =================================================
          SECTION 8 — Quick Enquiry CTA
      ================================================= */}
      <section className="ql">
        <div className="section-inner">
          <h2 className="section-title">Quick Enquiry</h2>
          <QuickEnquiry />
        </div>
      </section>
      


      
    </main>
  );
}
