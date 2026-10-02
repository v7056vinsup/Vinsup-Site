import { Link } from "react-router-dom";
import courses, { getCourseRouteHref } from "../data/courses";
import { BUSINESS, COIMBATORE_AREAS } from "../data/seo";
import QuickEnquiry from "../components/QuickEnquiry";
import "./CoimbatoreInstitute.css";

const FEATURED = ["data-verse-pro", "data-analytics", "mern-stack", "devstack-fullstack-devops", "ui-ux-design", "digital-marketing"];

const LOCAL_FAQ = [
  {
    q: "Which is the best training institute in Coimbatore for IT and digital marketing courses?",
    a: "Vinsup Skill Academy in Ganapathy, Coimbatore offers AI-integrated courses in Data Science with Generative AI, Data Analytics, MERN Stack, Full Stack with DevOps, UI/UX & Graphic Design and Digital Marketing. Every course includes live projects, an internship, a portfolio and placement support through our Job Readiness and Interview Opportunity Programs."
  },
  {
    q: "Where is Vinsup Skill Academy located?",
    a: `${BUSINESS.street}, ${BUSINESS.locality}, ${BUSINESS.region} ${BUSINESS.postalCode}. The campus is easy to reach from Gandhipuram, Saravanampatti, Peelamedu, R.S. Puram and other parts of Coimbatore.`
  },
  {
    q: "Do you offer online classes for students outside Coimbatore?",
    a: "Yes. All our courses are available in classroom mode at the Coimbatore campus and in live online mode, so students from Tiruppur, Pollachi, Mettupalayam, Erode and beyond can also join."
  },
  {
    q: "Are classes taught in Tamil?",
    a: "Sessions are taught in English with Tamil explanations wherever it helps students understand concepts better."
  },
  {
    q: "Do your courses include placement support?",
    a: "Yes. Students go through soft-skills and aptitude training, project and portfolio building, an internship, AI mock interviews, resume preparation and guaranteed interview opportunities."
  }
];

export default function CoimbatoreInstitute() {
  const featured = FEATURED.map((slug) => courses.find((c) => c.slug === slug)).filter(Boolean);

  return (
    <main className="cbe-page">
      <section className="cbe-hero">
        <div className="cbe-hero-inner">
          <span className="cbe-eyebrow">Ganapathy, Coimbatore</span>
          <h1>AI-Integrated Software &amp; Digital Marketing Training Institute in Coimbatore</h1>
          <p>
            Vinsup Skill Academy helps students, graduates and working professionals across Coimbatore build
            job-ready skills in data, development, design and marketing. Every course is updated for 2026 with
            AI tools built into the syllabus, hands-on projects, an internship and placement support.
          </p>
          <div className="cbe-stats">
            <div><strong>25,000+</strong><span>Students trained</span></div>
            <div><strong>5+ years</strong><span>Of training experience</span></div>
            <div><strong>100%</strong><span>Interview opportunities</span></div>
          </div>
        </div>
      </section>

      <section className="cbe-section">
        <h2>Courses at our Coimbatore campus</h2>
        <p className="cbe-sub">Classroom and live online batches. Download the full syllabus from each course page.</p>
        <div className="cbe-grid">
          {featured.map((c) => (
            <Link key={c.slug} to={getCourseRouteHref(c)} className="cbe-card">
              <h3>{c.title}</h3>
              <p>{c.short}</p>
              <span className="cbe-link">View syllabus &rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="cbe-section cbe-alt">
        <h2>Why students in Coimbatore choose Vinsup</h2>
        <ul className="cbe-points">
          <li><strong>AI-integrated curriculum.</strong> ChatGPT, Claude, Gemini, Cursor, Google Stitch and other AI tools are taught inside each course, not as an add-on.</li>
          <li><strong>Projects you can show.</strong> Mini projects every module and a capstone that becomes part of your portfolio and student portal profile.</li>
          <li><strong>Job Readiness Program.</strong> Orientation, soft skills and aptitude, job-specific training, project building, portfolio, guaranteed internship and placement assistance.</li>
          <li><strong>Interview Opportunity Program.</strong> Interview preparation, AI mock interviews, resume support, add-on certificates and guaranteed interviews.</li>
          <li><strong>Certificates.</strong> Course completion and internship certificates, plus guidance on add-on certifications.</li>
          <li><strong>Part of the Vinsup group.</strong> Backed by Vinsup Infotech Pvt Ltd and its group companies.</li>
        </ul>
      </section>

      <section className="cbe-section">
        <h2>Easy to reach from across Coimbatore</h2>
        <p className="cbe-sub">
          Our campus is at {BUSINESS.street}, {BUSINESS.locality} {BUSINESS.postalCode}. Students regularly join us from:
        </p>
        <ul className="cbe-areas">
          {COIMBATORE_AREAS.map((a) => <li key={a}>{a}</li>)}
        </ul>
        <div className="cbe-actions">
          <a className="cbe-btn" href={BUSINESS.mapUrl} target="_blank" rel="noopener noreferrer">Get directions</a>
          <a className="cbe-btn cbe-btn-outline" href="tel:+918248826374">Call +91 82488 26374</a>
          <a className="cbe-btn cbe-btn-outline" href="https://wa.me/918248826374?text=Hi%20Vinsup%20Skill%20Academy" target="_blank" rel="noopener noreferrer">WhatsApp us</a>
        </div>
      </section>

      <section className="cbe-section cbe-alt">
        <h2>Frequently asked questions</h2>
        <div className="cbe-faq">
          {LOCAL_FAQ.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="cbe-section cbe-enquire">
        <h2>Talk to a course advisor</h2>
        <p className="cbe-sub">Share your details and we will call you back with batch timings and fees.</p>
        <QuickEnquiry />
      </section>
    </main>
  );
}
