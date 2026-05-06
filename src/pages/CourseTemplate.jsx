import React, { useState, useEffect, useRef } from "react";

import {
  FaClock,
  FaBook,
  FaLaptopHouse,
  FaLanguage,
  FaStar,
  FaUserGraduate,
  FaBriefcase,
  FaDownload,
  FaArrowRight,
   FaCalendarAlt,
  FaRobot,
  FaBuilding,
  FaBrain,
  FaRocket,
  FaBullseye,
  FaHandshake,
  FaGraduationCap,
  FaBookReader,     
  FaExchangeAlt,
  FaUserTie,
  FaLaptopCode,FaIndustry, FaChalkboardTeacher,
  FaShieldAlt,FaChevronDown,   // ✅ ADD THIS
  FaChevronUp 
} from "react-icons/fa";

import QuickEnquiry from "../components/QuickEnquiry";
import ToolsMarquee from "../components/ToolsMarquee";
import CompaniesMarqueeAnimated from "../components/CompaniesMarqueeAnimated";
import UpcomingBatches from "./UpcomingBatches";
import HomePopupModal from "../components/HomePopupModal";

import "../styles/CoursePage.css";

export default function CourseTemplate({
  title,
   badge,
    trustImage,
  trustImageAlt,
   learners,     
  outcome,
  highlights = [],
  short,
  duration,
  hours,
  mode,
  language,
  rating = "4.8 / 5",
  students = "3000+ Learners",

  whyCareer,

  whoCanStudy = [],   // ✅ ADD THIS

  outcomes = [],
  tools = [],
  modules = [],
  syllabusPdf,
  projects,
  roles = [],
  companies = [],
  faq = []
}) {
  whoCanStudy: [
  {
    icon: "🎓",
    title: "College Students",
    desc: "Build strong fundamentals and industry-ready skills."
  },
  {
    icon: "🚀",
    title: "Career Switchers",
    desc: "Transition into tech with structured mentorship."
  },
  {
    icon: "🧠",
    title: "Self-Taught Learners",
    desc: "Organize your learning with expert guidance."
  }
]

const HIGHLIGHT_ICONS = {
  clock: <FaClock />,
  calendar: <FaCalendarAlt />,
  ai: <FaRobot />,
  offline: <FaBuilding />,
  projects: <FaRocket />,
  target: <FaBullseye />,
  mentor: <FaHandshake />,
  tech: <FaBrain />
};

const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };
  const [showSyllabusModal, setShowSyllabusModal] = useState(false);
  const [activeModule, setActiveModule] = useState(0);
const ref = useRef(null);

const companyImages = import.meta.glob(
  "../assets/companies/*.{png,jpg,jpeg}",
  { eager: true }
);

// Convert to usable array
const COMPANY_LOGOS = Object.values(companyImages).map(
  (mod) => mod.default
);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.disconnect();
      }
    },
    { threshold: 0.2 }
  );

  if (ref.current) observer.observe(ref.current);
}, []);


  return (
    <div className="course-v2">

    <section className="hero-premium">
  <div className="hero-container">

    {/* LEFT CONTENT */}
    <div className="hero-left">

      {badge && (
        <span className="hero-badge">
          <FaShieldAlt /> {badge.replace("-", " ")}
        </span>
      )}

      <h1>
        {title} <br />
        <span>{short}</span>
      </h1>

      <p className="hero-sub">
        {whyCareer}
      </p>

      {/* TRUST INDICATORS */}
      <div className="hero-trust">

        {rating && (
          <div className="trust-item">
            <FaStar />
            <div>
              <strong>{rating}</strong>
              <span>Rating</span>
            </div>
          </div>
        )}

        <div className="trust-divider" />

        {learners && (
          <div className="trust-item">
            <FaUserGraduate />
            <div>
              <strong>{learners}</strong>
              <span>Learners</span>
            </div>
          </div>
        )}

        <div className="trust-divider" />

        <div className="trust-item">
          <FaBriefcase />
          <div>
            <strong>Placement</strong>
            <span>Support</span>
          </div>
        </div>

      </div>

      {/* META INFO */}
      <div className="hero-chips">
        {duration && <span><FaClock /> {duration}</span>}
        {hours && <span><FaBook /> {hours}+ Hours</span>}
        {mode && <span><FaLaptopHouse /> {mode}</span>}
        {language && <span><FaLanguage /> {language}</span>}
      </div>

      {/* CTA */}
      <div className="hero-actions">
        {syllabusPdf && (
          <button
  className="btn-primary-lg"
  onClick={() => setShowSyllabusModal(true)}
>
  <FaDownload /> Download Syllabus
</button>

        )}

        <button className="btn-outline-lg">
          Talk to Advisor <FaArrowRight />
        </button>
      </div>

    </div>

    {/* RIGHT FORM */}
    <div className="hero-form-card">
      <QuickEnquiry
  onSuccess={() => {
    const link = document.createElement("a");
    link.href = syllabusPdf;
    link.download = `${title}-syllabus.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowSyllabusModal(false);
  }}
/>

    </div>

  </div>
</section>



{/* =================================================
    2. WHY TRUST THIS COURSE
================================================= */}
<section className="cv2-proof premium-proof">
 <h2 className="section-title">Designed for Every Ambitious Learner</h2>
  <div className="proof-wrapper">

    {/* LEFT — BIG IMAGE */}
    {trustImage && (
  <div className="proof-image">
    <img
      className="proof-image1"
      src={trustImage}
      alt={trustImageAlt || `${title} course highlights`}
    />
  </div>
)}


    {/* RIGHT — TRUST CARDS */}
    <div className="premium-proof-grid">

      <div className="proof-card">
        <div className="proof-icon">
          <FaIndustry />
        </div>
        <h4>Industry-Aligned Curriculum</h4>
        <p>Designed with real job roles and company expectations in mind.</p>
      </div>

      <div className="proof-card">
        <div className="proof-icon">
          <FaChalkboardTeacher />
        </div>
        <h4>Mentor-Guided Learning</h4>
        <p>Learn directly from professionals working in the field.</p>
      </div>

      <div className="proof-card">
        <div className="proof-icon">
          <FaBriefcase />
        </div>
        <h4>Career-Focused Outcomes</h4>
        <p>Every module builds skills required for interviews and projects.</p>
      </div>

    </div>
  </div>
</section>


      {whoCanStudy.length > 0 && (
  <section className="learner-section">
  <h2 className="section-title">Designed for Every Ambitious Learner</h2>
  <p className="section-sub">
    Whether you're a fresher or a career-switcher, this program is built for you.
  </p>

  <div className="learner-grid">

    <div className="learner-card">
      <div className="learner-icon">
        <FaUserGraduate />
      </div>
      <div>
        <h3>Students & Fresh Graduates</h3>
        <p>Build strong foundations and become job-ready.</p>
      </div>
    </div>

    <div className="learner-card">
      <div className="learner-icon">
        <FaBriefcase />
      </div>
      <div>
        <h3>Working Professionals</h3>
        <p>Upskill to transition into high-demand data roles.</p>
      </div>
    </div>

    <div className="learner-card">
      <div className="learner-icon">
        <FaExchangeAlt />
      </div>
      <div>
        <h3>Career Switchers</h3>
        <p>Move from non-IT backgrounds into data careers.</p>
      </div>
    </div>

    <div className="learner-card">
      <div className="learner-icon">
        <FaUserTie />
      </div>
      <div>
        <h3>Non-IT Professionals</h3>
        <p>Beginner-friendly curriculum with mentor guidance.</p>
      </div>
    </div>

    <div className="learner-card">
      <div className="learner-icon">
        <FaLaptopCode />
      </div>
      <div>
        <h3>Tech Enthusiasts</h3>
        <p>Learn industry tools used by top companies.</p>
      </div>
    </div>

  </div>
</section>

)}

 

<section className="placement-section">
  <h2 className="section-title">End-to-End Placement Support</h2>
  <p className="section-sub">
    Personalized career coaching and real interview preparation.
  </p>

  <div className="placement-grid">
    <div className="placement-card">
      <h3>Mock Interviews</h3>
      <p>AI-based and live interview practice with experts.</p>
    </div>

    <div className="placement-card">
      <h3>Expert Mentorship</h3>
      <p>Learn directly from engineers at product companies.</p>
    </div>

    <div className="placement-card">
      <h3>Career Guidance</h3>
      <p>1:1 help with resumes, LinkedIn, and portfolios.</p>
    </div>

    <div className="placement-card">
      <h3>Interview Kit</h3>
      <p>Company-wise interview questions and solutions.</p>
    </div>
  </div>
</section>

{/* ===============================
   PROGRAM HIGHLIGHTS
================================ */}
{highlights?.length > 0 && (
  <section className="program-highlights animate-on-scroll" ref={ref}>
    <h2 className="section-title">
      Transform Your Prep With One Smart Program
    </h2>

    <p className="section-sub">
      A single program that covers all key areas without the overwhelm.
    </p>

    <div className="ph-grid">
      {highlights.map((item, i) => (
        <div key={i} className="ph-item">
          <div className="ph-icon">
            {HIGHLIGHT_ICONS[item.icon]}
          </div>
          <h3>{item.value}</h3>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  </section>
)}

      {/* =================================================
          3. WHAT YOU WILL BECOME
      ================================================= */}
      {outcomes.length > 0 && (
        <section className="cv2-outcomes">
          <h2 className="section-title">What You Will Be Able To Do</h2>

          <div className="cv2-outcome-grid">
            {outcomes.map((o, i) => (
              <div key={i} className="cv2-outcome-card">
                <h3>{o.title}</h3>
                <p>{o.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}
<section className="curriculum-journey">
  <div className="container">
    <header className="section-header">
      <span className="eyebrow">Learning Roadmap</span>
      <h2 className="section-title">Curriculum Journey</h2>
      <p className="section-sub">
        A structured progression from fundamentals to job-ready expertise.
      </p>
    </header>

    {/* ===== DESKTOP FLOW VIEW ===== */}
    <div className="flow-chevron-wrapper desktop-only">
      <div className="chevron-flow">
        {modules.map((m, i) => (
          <div key={i} className="chevron-step">
            <div className="chevron-card">
              <div className="chevron-number">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3>{m.title}</h3>
              <div className="chevron-topics">
                {m.topics.slice(0, 3).map((t, idx) => (
                  <span key={idx} className="topic-pill">
                    {t}
                  </span>
                ))}
                {m.topics.length > 3 && (
                  <span className="topic-more">+{m.topics.length - 3} more</span>
                )}
              </div>
            </div>
            {i < modules.length - 1 && (
              <div className="chevron-arrow">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path
                    d={i % 4 === 3 
                      ? "M 0,50 Q 50,80 100,50" 
                      : "M 0,50 Q 50,20 100,50"
                    }
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#c7d2fe" />
                      <stop offset="100%" stopColor="#2563eb" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="arrow-head"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>

    {/* ===== MOBILE ACCORDION ===== */}
    <div className="flow-mobile mobile-only">
      {modules.map((m, i) => (
        <div key={i} className={`mobile-step ${openIndex === i ? 'is-active' : ''}`}>
          <button className="mobile-header" onClick={() => toggle(i)}>
            <span className="mobile-num">{i + 1}</span>
            <span className="mobile-title">{m.title}</span>
            <span className="chevron">{openIndex === i ? "−" : "+"}</span>
          </button>
          
          <div className="mobile-body">
            <div className="mobile-content-inner">
              {m.topics.map((t, idx) => (
                <span key={idx} className="topic-pill">{t}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* ===== CTA ===== */}
    {syllabusPdf && (
      <div className="flow-cta">
        <button className="btn-premium" onClick={() => setShowSyllabusModal(true)}>
          <span>Download Complete Syllabus</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
          </svg>
        </button>
      </div>
    )}
  </div>
</section>

      {/* =================================================
          5. TOOLS
      ================================================= */}
   <section className="cv-journey-tools">
  {/* <span className="cv-eyebrow">Curriculum Journey</span> */}
  <h2 className="section-title">Tools & Technologies</h2>
  <p className="section-sub">
    Master the exact tools used by professionals while progressing through the curriculum.
  </p>

  <ToolsMarquee tools={tools} />
</section>





      {/* =================================================
          6. PROJECTS
      ================================================= */}
      {/* {projects && (
        <section className="cv2-projects">
          <h2 className="section-title">Projects & Portfolio</h2>

          {Array.isArray(projects) ? (
            <div className="cv2-project-grid">
              {projects.map((p, i) => (
                <div key={i} className="cv2-project-card">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="cv2-project-text">{projects}</p>
          )}
        </section>
      )} */}

      {/* =================================================
          7. CAREER OUTCOMES
      ================================================= */}
      <section className="cv2-career">
        <h2 className="section-title">Career Opportunities</h2>

        <div className="cv2-roles">
          {roles.map((r, i) => (
            <span key={i}>{r}</span>
          ))}
        </div>

       {/* SECTION — Can Place in Multiple Companies */}
<section className="partners section section--full" aria-label="Hiring Partners">
  <div className="section-inner">
   
    {/* Row 1 — LTR */}
    <div className="logo-row ltr">
      <div className="logo-track">
        {[...COMPANY_LOGOS, ...COMPANY_LOGOS].map((src, i) => (
          <div className="logo-cell" key={`ltr-${i}`}>
            <img
              src={src}
              alt={`Hiring partner ${i + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>

    {/* Row 2 — Right to Left */}
    <div className="logo-row rtl">
      <div className="logo-track">
        {[...COMPANY_LOGOS, ...COMPANY_LOGOS].map((src, i) => (
          <div className="logo-cell" key={`rtl-${i}`}>
            <img
              src={src}
              alt={`Hiring partner ${i + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>

    {/* Row 3 — Left to Right */}
    <div className="logo-row ltr">
      <div className="logo-track">
        {[...COMPANY_LOGOS, ...COMPANY_LOGOS].map((src, i) => (
          <div className="logo-cell" key={`ltr2-${i}`}>
            <img
              src={src}
              alt={`Hiring partner ${i + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      </section>
 <div className="oneone">     {/* =================================================
          8. UPCOMING BATCHES
      ================================================= */}
      <UpcomingBatches />
</div>
 
      {/* =================================================
          9. FAQ
      ================================================= */}
      {faq.length > 0 && (
        <section className="cv2-faq">
          <h2 className="section-title">Frequently Asked Questions</h2>

          <div className="faq-container">
            {faq.map((f, i) => (
              <details key={i} className="faq-card">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* =================================================
          10. FINAL CTA
      ================================================= */}
      <section id="apply" className="cv2-final">
        <h2>Ready to Start Your Journey?</h2>
        <p>Talk to our advisors and find the right batch for you.</p>
        <QuickEnquiry />
      </section>

      {/* =================================================
          SYLLABUS MODAL
      ================================================= */}
      {showSyllabusModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button
              className="modal-close"
              onClick={() => setShowSyllabusModal(false)}
            >
              ✕
            </button>

            <h3>Download Full Syllabus</h3>
            <p>Submit your details to receive the syllabus PDF.</p>

            <QuickEnquiry
  onSuccess={() => {
    const link = document.createElement("a");
    link.href = syllabusPdf;
    link.download = `${title}-syllabus.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowSyllabusModal(false);
  }}
/>


          </div>
        </div>
      )}

      <HomePopupModal />
    </div>
  );
}
