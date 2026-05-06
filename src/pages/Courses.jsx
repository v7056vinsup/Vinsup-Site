import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import courses from "../data/courses";
import MarketingAlerts from "../components/MarketingAlerts";
import UpcomingBatches from "./UpcomingBatches";
import QuickEnquiry from "../components/QuickEnquiry";
import HomePopupModal from "../components/HomePopupModal";

import "../styles/CoursesPremium.css";

/* =========================
   FILTER CONFIG
========================= */
const filters = [
  { label: "All", value: "all" },
  { label: "Data & AI", value: "data" },
  { label: "Development", value: "dev" },
  { label: "Security", value: "security" },
  { label: "Design", value: "design" },
  { label: "Marketing", value: "marketing" }
];

const courseFAQs = [
  {
    q: "Do I need prior experience to join these courses?",
    a: "No prior experience is required. Our courses start from fundamentals and gradually move to advanced, industry-level concepts."
  },
  {
    q: "Are the courses available online or offline?",
    a: "Yes. Most courses are available in Online, Offline, and Hybrid modes depending on the batch."
  },
  {
    q: "Will I get placement assistance?",
    a: "Yes. We provide resume building, mock interviews, and placement assistance for eligible candidates."
  },
  {
    q: "Do you provide recorded sessions?",
    a: "Yes. Recorded sessions are provided for revision and backup."
  },
  {
    q: "Can I attend a demo class?",
    a: "Absolutely. You can book a free demo session before enrolling."
  },
  {
    q: "Which Coimbatore IT training institute is the least expensive? ",
    a: "In Coimbatore, students looking for low-cost training options should select Vinsup Skill Academy. This IT training provider has multiple professional programmes available for a flat fee of ₹14,999. This flat fee model is completely ransparent and includes full technical training, a professional certificate, and real-world project experience, ensuring that all graduates receive quality education at an affordable price."
  },
  {
    q: "Can you take Full Stack Development or Data Analytics courses if you are not an IT graduate?",
    a: "Yes! Students from all different types of educational backgrounds are able to transition into the technology field hrough structured learning paths. The No-Code to Full-Code pathway is how we create the logic from no logical progression. Because of this pathway, non-technical graduates can successfully master Full Stack Development and Data Analytics."
  },
  {
    q: "What is the job readiness programme comprised of 100 hours? ",
    a: "A job readiness programme consisting of 100 hours is designed to rapidly support students in moving from their college experience into the world of work. At Vinsup, the job readiness programme is designed around high-impact skills, project work, and preparation for MNC recruitment drives (TCS Code Vita and Zoho), which provide students with the confidence and preparation necessary to successfully participate in interviews with multinational companies in a shortened time frame."
  },
  {
    q: "What kind of placement support does Vinsup Skill Academy provide? ",
    a: "Vinsup Skill Academy offers students employment readiness through its extensive placement support that provides students the help they need in order to succeed in the job market. Included in the Employment Readiness Program is access to our dedicated Placement Cell for career development activities. Mock Interviews Sessions – These sessions allow students to practice interviewing and increase their confidence prior to going into an interview. Resume and LinkedIn Branding – Students will have their own profiles created on LinkedIn and will receive guidance on how to make their resumes both appeal to recruiters. Aptitude and Soft Skills Training – This type of preparation is vital for International companies when hiring employees through the first stages of hiring processes. "
  },
  {
    q: " Where can I get an internship certificate in Coimbatore for final year projects?",
    a: "Students can obtain an internship certificate in Coimbatore for their final year projects through the internship-linked training offered by Vinsup Skill Academy. While completing the internship-linked training, students will have the ability to work on live projects and upon successful completion of the internship-linked program, will be awarded a Certificate of Completion that will assure their level of practical experience and meet the requirements to complete their final year project. "
  },
  {
    q: "  Does Vinsup Skill Academy offer online classes for IT courses? ",
    a: "For students who cannot attend classes on the Ganapathy Campus, Vinsup Skill Academy offers options for both online and hybrid learning for all courses. Students who choose to attend classes via an Online or Hybrid option will receive all the same course material, Certification and Internship benefits as those who attend classes onsite at the Ganapathy Campus. Students will be able to learn in a comfortable and convenient manner about Full Stack Development, Data Analytics and Digital Marketing for the same price of ₹19999from the comfort of their homes. "
  }
];


export default function Courses() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredCourses =
    activeFilter === "all"
      ? courses
      : courses.filter(course => course.category === activeFilter);

  return (
    <main className="courses-premium">

      {/* =========================
          MARKETING ALERTS
      ========================== */}
      <MarketingAlerts />

      {/* =========================
          HERO
      ========================== */}
      <section className="courses-hero-premium">
        <h1>
          Build Your Career with <span>Industry-Ready Courses</span>
        </h1>
        <p>
          Learn from mentors. Work on real projects.
          Become job-ready — not just certified.
        </p>
      </section>
      <h2 className="courses-section-title">
  Explore Our Career Programs
</h2>

<p className="courses-section-subtitle">
  Choose a path, build skills, and get job-ready with industry-focused training.
</p>


      {/* =========================
          CATEGORY FILTERS
      ========================== */}
      <section className="courses-filters">
        {filters.map(filter => (
          <button
            key={filter.value}
            className={activeFilter === filter.value ? "active" : ""}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </section>

      {/* =========================
          COURSES GRID
      ========================== */}
      <section className="courses-grid-premium">
        {filteredCourses.map((course, index) => (
          <motion.div
            key={course.slug}
            className="course-card-premium"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.03 }}
          >
            {course.badge && (
              <span className="course-badge">
                {course.badge === "best-seller" || course.badge === "Best Seller"
                  ? "🔥 Best Seller"
                  : course.badge === "Trending Course"
                  ? "🔥 Trending"
                  : course.badge === "Popular"
                  ? "⭐ Popular"
                  : `⭐ ${course.badge}`}
              </span>
            )}

            <h3>{course.title}</h3>
            <p className="course-short">{course.short}</p>

            <div className="course-meta">
              {course.duration && <span>⏳ {course.duration}</span>}
              {course.mode && <span>🎓 {course.mode}</span>}
            </div>

            {course.roles && (
              <ul className="course-outcomes">
                {course.roles.slice(0, 2).map((role, i) => (
                  <li key={i}>✔ {role}</li>
                ))}
              </ul>
            )}

            <div className="course-actions">
              <Link
                to={`/courses/${course.slug}`}
                className="btn-primary-premium"
              >
                View Course
              </Link>

              <a
                href={`/contact?course=${encodeURIComponent(course.title)}`}
                className="btn-secondary-premium"
              >
                Enquire
              </a>
            </div>
          </motion.div>
        ))}
      </section>

      {/* =========================
          UPCOMING BATCHES
      ========================== */}
      <section className="courses-upcoming-batches">
        <div className="do5">
       <UpcomingBatches />
       </div>
        </section>
      <section className="courses-faq">
  <div className="container">
    <h2 className="section-title">Frequently Asked Questions</h2>

    <div className="faq-list">
      {courseFAQs.map((item, index) => (
        <details key={index} className="faq-item">
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  </div>
</section>


      {/* =========================
          FINAL CTA
      ========================== */}
      <section className="courses-enquiry">
  <div className="container">
    <h2 className="section-title">Not Sure Which Course to Choose?</h2>
    <p className="section-sub">
      Talk to our course advisors and get personalized guidance.
    </p>

    <QuickEnquiry />
  </div>
</section>

    

    <HomePopupModal />
    </main>
  );
}
