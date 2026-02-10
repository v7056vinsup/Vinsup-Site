import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Counter from "../components/Counter";
import ReviewsShowcase from "../components/ReviewsShowcase";
import QuickEnquiry from "../components/QuickEnquiry";
import Popup from "../components/Popup";
import '../styles/Home.css'
import daImg from "../assets/da.png";
import dmImg from "../assets/dm.png";
import dvpImg from "../assets/dvp.png";
import dvsImg from "../assets/dvs.png";
import uxImg from "../assets/ux.png";
import fsdImg from "../assets/fsd.png";
import img1 from "../assets/welcome/image1.png";
import img2 from "../assets/welcome/image2.png";
import img3 from "../assets/welcome/image3.png";
import img4 from "../assets/welcome/image4.png";
import img5 from "../assets/welcome/image5.png";
import img6 from "../assets/welcome/image6.png";
import jobRoleImg from "../assets/jrp/IMG_6329.PNG";
import practicalImg from "../assets/jrp/Practicaltraining.png";
import portfolioImg from "../assets/jrp/Portfoliobuilding.png";
import softSkillImg from "../assets/jrp/Softskill.png";
import mockImg from "../assets/jrp/Mockinterview.png";
import placementImg from "../assets/jrp/PlacementAssistance.png";



import whoarewe from '../assets/whoarewe.png'
const API_URL =
  "https://script.google.com/macros/s/AKfycbxl_6f8kPi0cMxa3XwE_FUhZMbUG6KolMIAFvSQb7PAgTXgSO1WB3Pv7eyyAw1NIZKN5w/exec";

// import "../styles/Home.css";
// import "../styles/Courses.css";
// import "../styles/Partners.css";
// import "../styles/JRP.css";


/* ===== Why Choose Us (9 cards) ===== */
/* Unique inline SVG icons per card */

const carouselImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6
];

const WhyIcon = ({ k }) => {
  const common = { width: 28, height: 28, fill: "none", stroke: "currentColor", strokeWidth: 2 };
  switch (k) {
    case "mentors":   return (<svg {...common} viewBox="0 0 24 24"><path d="M16 11c1.66 0 3-1.57 3-3.5S17.66 4 16 4s-3 1.57-3 3.5S14.34 11 16 11Z"/><path d="M3 20v-1a6 6 0 0 1 6-6h2"/><circle cx="8" cy="7" r="3"/><path d="M19 20v-1a4 4 0 0 0-4-4h-1"/></svg>);
    case "projects":  return (<svg {...common} viewBox="0 0 24 24"><path d="m16 18 6-6-6-6"/><path d="M8 6 2 12l6 6"/></svg>);
    case "placement": return (<svg {...common} viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/></svg>);
    case "cert":      return (<svg {...common} viewBox="0 0 24 24"><path d="M4 4h16v12H4z"/><path d="M8 20l4-2 4 2v-4H8v4z"/></svg>);
    case "flex":      return (<svg {...common} viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>);
    case "career":    return (<svg {...common} viewBox="0 0 24 24"><path d="M12 2v4"/><path d="M12 22v-4"/><path d="M2 12h4"/><path d="M22 12h-4"/><circle cx="12" cy="12" r="3"/></svg>);
    case "capstone":  return (<svg {...common} viewBox="0 0 24 24"><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="M3 7v6l9 5 9-5V7"/></svg>);
    case "doubts":    return (<svg {...common} viewBox="0 0 24 24"><path d="M21 15a4 4 0 0 1-4 4H7l-4 3V9a4 4 0 0 1 4-4h8"/><path d="M15.5 6.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/></svg>);
    case "interview": return (<svg {...common} viewBox="0 0 24 24"><circle cx="12" cy="5" r="3"/><path d="M8 14a4 4 0 0 1 8 0v6H8z"/></svg>);
    default:          return (<svg {...common} viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/></svg>);
  }
};

/* ===== Why Choose Us (9 cards) ===== */
const WHY_CARDS = [
  { key: "mentors",      title: "Industry Mentors",       text: "Learn from working professionals who bring real project practices and interview insights." },
  { key: "projects",     title: "Live Projects",          text: "Build portfolio-worthy projects that prove your skills and strengthen your resume." },
  { key: "placement",    title: "Placement Support",      text: "Resume review, profile positioning, mock interviews, and referral guidance." },
  { key: "cert",         title: "Certification",          text: "Program completion certificates that validate your skill readiness for employers." },
  { key: "flex",         title: "Flexible Learning",      text: "Online & Offline schedules with weekend/weekday options to suit your routine." },
  { key: "career",       title: "Career Guidance",        text: "1:1 mentoring for role selection, skill roadmap, and interview preparation strategy." },
  { key: "capstone",     title: "Capstone Project",       text: "End-to-end build to showcase architecture, coding standards, and delivery timeline." },
  { key: "doubts",       title: "Doubt-Clearing Support", text: "Dedicated mentor hours, code reviews, and discussion forums to unblock you fast." },
  { key: "interview",    title: "Interview Prep",         text: "Aptitude + soft skills + behavioral rounds practice to improve clarity and confidence." },
];

/* ===== Company Logos (25) ===== */

// ✅ Auto-import all company logos (png + jpg + jpeg)
const companyImages = import.meta.glob(
  "../assets/companies/*.{png,jpg,jpeg}",
  { eager: true }
);

// Convert to usable array
const COMPANY_LOGOS = Object.values(companyImages).map(
  (mod) => mod.default
);

const jrpSteps = [
  {
    key: "training",
    title: "Job-Specific Training",
    points: [
      "Identifying student’s suitable job role",
"Learning technologies required for the chosen role",
"Understanding real company expectations",
"Practicing job role-specific interview questions",
"Working on role-focused project assignments",
"Customizing resume according to targeted role",
"Mock tests and technical challenge practice",
"Career roadmap guidance for growth",
"Continuous skill upgrade based on industry trends"
    ]
  },
  {
    key: "worksheets",
    title: "Regular Worksheets & Practical Learning",
    points: [
      "Daily practice worksheets based on concepts learned",

"Hands-on coding and real-time execution tasks",

"Weekly assessments to track skill progress",

"Mini-projects for each module",

"Real-world case-study analysis",

"Peer review and correction activities",

"Task submission with deadlines to build discipline",

"Concept revision through practice quizzes",

"Monthly skill evaluation tests"
    ]
  },
  {
    key: "resume",
    title: "Resume & Portfolio Building",
    points: [
      "Choosing the correct resume format (ATS-friendly)",

"Highlighting technical and soft skills",

"Writing clear and concise career objectives",

"Adding academic qualifications and certifications",

"Listing internships, projects, and achievements",

"Using powerful action verbs for job role descriptions",

"Creating a clean and professional resume design",

"Building an online portfolio (GitHub/Behance/Website)",

"Linking portfolio and LinkedIn to resume for professional identity"
    ]
  
  },
  {
    key: "softskill",
    title: "Soft Skill & Aptitude Training",
    points: [
      "Communication and spoken English improvement sessions",
"Vocabulary building and sentence framing exercises",
"Personality development and grooming sessions",
"Presentation and public speaking practice",
"Logical reasoning and problem-solving techniques",
"Quantitative aptitude shortcuts and tricks",
"Time management strategies during tests",
"Confidence-building and interview body language training",
"Group discussions and team communication activities"
    ]
  },
  {
    key: "internship",
    title: "Internship Experience",
    points: [
      "Working on real-time or industry-based projects",
"Learning project documentation and report preparation",
"Understanding teamwork and task communication",
"Experiencing professional work culture",
"Practicing time and resource management",
"Learning industry-relevant tools and workflows",
"Exposure to client requirements and review feedback",
"Weekly review and performance-based guidance",
"Certificate and experience letter for resume and portfolio"
    ]
  },
  {
    key: "mock",
    title: "Mock Interviews",
    points: [
      "Simulation of HR and Technical interview rounds",
"Practice answering frequently asked interview questions",
"Improving voice clarity and communication style",
"Feedback and correction from mentors",
"Handling stress and uncomfortable questions",
"Training on body language and eye contact",
"Resume-based personalized questions",
"Panel and one-on-one interview practice",
"Building confidence and interview presence"
    ]
  },
  {
    key: "placement",
    title: "Placement Assistance",
    points: [
     "Resume and LinkedIn profile optimization",
"Circulating profiles to hiring partners",
"Training for aptitude and technical exam rounds",
"Regular job opening notifications",
"Interview scheduling and follow-up assistance",
"Interview Q&A practice sessions",
"HR round and communication guidance",
"Support in offer negotiation and joining process",
"Continuous assistance until placement confirmation"
    ]
  }
];


export default function Home() {
    const [activeStep, setActiveStep] = useState(0);

const steps = [
  {
    title: "Job-Specific Training",
    points: [
      "Identifying student’s suitable job role",
      "Learning technologies required for the chosen role",
      "Understanding real company expectations",
      "Practicing job role-specific interview questions",
      "Working on role-focused project assignments",
      "Customizing resume according to targeted role",
      "Mock tests and technical challenge practice",
      "Career roadmap guidance for growth",
      "Continuous skill upgrade based on industry trends"
    ],
    image: jobRoleImg
  },
  {
    title: "Regular Worksheets & Practical Learning",
    points: [
      "Daily practice worksheets based on concepts learned",
      "Hands-on coding and real-time execution tasks",
      "Weekly assessments to track skill progress",
      "Mini-projects for each module",
      "Real-world case-study analysis",
      "Peer review and correction activities",
      "Task submission with deadlines to build discipline",
      "Concept revision through practice quizzes",
      "Monthly skill evaluation tests"
    ],
    image: practicalImg
  },
  {
    title: "Resume & Portfolio Building",
    points: [
      "Choosing the correct resume format (ATS-friendly)",
      "Highlighting technical and soft skills",
      "Writing clear and concise career objectives",
      "Adding academic qualifications and certifications",
      "Listing internships, projects, and achievements",
      "Using powerful action verbs for job role descriptions",
      "Creating a clean and professional resume design",
      "Building an online portfolio (GitHub/Behance/Website)",
      "Linking portfolio and LinkedIn to resume for professional identity"
    ],
    image: portfolioImg
  },
  {
    title: "Soft Skill & Aptitude Training",
    points: [
      "Communication and spoken English improvement sessions",
      "Vocabulary building and sentence framing exercises",
      "Personality development and grooming sessions",
      "Presentation and public speaking practice",
      "Logical reasoning and problem-solving techniques",
      "Quantitative aptitude shortcuts and tricks",
      "Time management strategies during tests",
      "Confidence-building and interview body language training",
      "Group discussions and team communication activities"
    ],
    image: softSkillImg
  },
  {
    title: "Internship Experience",
    points: [
      "Working on real-time or industry-based projects",
      "Learning project documentation and report preparation",
      "Understanding teamwork and task communication",
      "Experiencing professional work culture",
      "Practicing time and resource management",
      "Learning industry-relevant tools and workflows",
      "Exposure to client requirements and review feedback",
      "Weekly review and performance-based guidance",
      "Certificate and experience letter for resume and portfolio"
    ],
    image: practicalImg
  },
  {
    title: "Mock Interviews",
    points: [
      "Simulation of HR and Technical interview rounds",
      "Practice answering frequently asked interview questions",
      "Improving voice clarity and communication style",
      "Feedback and correction from mentors",
      "Handling stress and uncomfortable questions",
      "Training on body language and eye contact",
      "Resume-based personalized questions",
      "Panel and one-on-one interview practice",
      "Building confidence and interview presence"
    ],
    image: mockImg
  },
  {
    title: "Placement Assistance",
    points: [
      "Resume and LinkedIn profile optimization",
      "Circulating profiles to hiring partners",
      "Training for aptitude and technical exam rounds",
      "Regular job opening notifications",
      "Interview scheduling and follow-up assistance",
      "Interview Q&A practice sessions",
      "HR round and communication guidance",
      "Support in offer negotiation and joining process",
      "Continuous assistance until placement confirmation"
    ],
    image: placementImg
  }
];


 const images = [
  { src: daImg, link: "/courses/data-analytics" },
  { src: dmImg, link: "/courses/digital-marketing" },
  { src: dvpImg, link: "/courses/data-verse-pro" },
  { src: dvsImg, link: "/courses/devstack-fullstack-devops" },
  { src: uxImg, link: "/courses/ui-ux-design" },
  { src: fsdImg, link: "/courses/frontend" }
];


useEffect(() => {
  if (!images.length) return;
  const id = setInterval(() => {
    setIndex((prev) => (prev + 1) % images.length);
  }, 3000); // Changed to 3 seconds
  return () => clearInterval(id);
}, [images.length]);


  const [index, setIndex] = useState(0);
  // JRP active tab
// const [activeStep, setActiveStep] = useState(jrpSteps[0].key);
// const activeItem = jrpSteps.find(s => s.key === activeStep) ?? jrpSteps[0];

 useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        // HERO YOUTUBE (supports 1 or more)
        if (data.youtube) {
          setYoutubeVideos(
            Array.isArray(data.youtube) ? data.youtube : [data.youtube]
          );
        }

        // INSTAGRAM (grouped by category)
        setInstagram(data.instagram || {});

        // TEXT TESTIMONIALS
        setTextTestimonials(data.text || []);
      })
      .catch(err => console.error("Testimonials API error:", err));
  }, []);


  useEffect(() => {
    if (!images.length) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 2 seconds
    return () => clearInterval(id);
  }, [images.length]);
const [youtubeVideos, setYoutubeVideos] = useState([]);
  return (
    <main>
        <Popup />
      {/* 1) FULL-WIDTH HERO CAROUSEL (450px) */}
     <section className="hero-carousel" aria-label="Homepage banner">
  {images.map((item, i) => (
    <div
      key={i}
      className="hero-slide"
      style={{
        opacity: i === index ? 1 : 0,
        pointerEvents: i === index ? "auto" : "none"
      }}
      aria-hidden={i !== index}
    >
      <Link to={item.link}>
        <img src={item.src} alt={`Slide ${i + 1}`} />
      </Link>
    </div>
  ))}
</section>


      {/* 2) HERO (Tagline + description + CTAs + Image) */}
      <section className="hero-split" aria-label="Introduction and actions">
        {/* <h2 className="section-title">VINSUP SKILL </h2> */}

        <div className="hero-split-inner">
            {/* Updated Hero Media Section */}
<div className="hero-media">
  <div className="hero-image-carousel">
    {carouselImages.map((src, i) => (
      <img
        key={i}
        src={src}
        alt={`Slide ${i}`}
        className={`carousel-img ${i === index ? "active" : ""}`}
      />
    ))}
  </div>
</div>

          <div className="hero-copy">
           
            <h1>Welcome to Vinsup skill academy</h1>
            <p className="hero-lead">
            Let’s face it: A  <a href="https://www.digitalcomputerclasses.com/top-free-high-da-pa-website-list-for-backlink-submission/" className="backlink">college degree alone</a> doesn’t always guarantee a job anymore. That’s where we come in, we are a Coimbatore based team dedicating or dedicated to teach you what actually matters in Tamil Nadu tech industry. Whether you just graduated or want to switch careers, our one month boot camp or internship camp give you the exact  <a href="https://linkbuilder.io/guest-posting-sites/" className="backlink">skills</a>  that companies are hiring for without the expensive price tag.  </p>

            <div className="hero-ctas">
              <Link className="btn-primary" to="/courses">View Courses</Link>
              <Link className="btn-outline" to="/contact?demo=1">Book Free Demo</Link>
            </div>
          </div>

          
        </div>
      </section>
{/* SECTION 2 — Key Highlights */}
<section className="key-highlights section section--full" id="highlights">
  <div className="section-inner">
    <h2 id="h2" className="section-title" >We are Proud of...</h2>

    <div className="kh-grid">
      <div className="kh-item">
        <div className="kh-value"><Counter end={2280} suffix="+" duration={1800} /></div>
        <div className="kh-label">Students Trained</div>
      </div>
      <div className="kh-item">
        <div className="kh-value"><Counter end={85} suffix="%" duration={1400} /></div>
        <div className="kh-label">Placement Rate*</div>
      </div>
      <div className="kh-item">
        <div className="kh-value"><Counter end={37} suffix="+" duration={1600} /></div>
        <div className="kh-label">Industry Mentors</div>
      </div>
    </div>
  </div>
</section>

{/* SECTION — Who are we? */}
<section className="about-section">
  <div className="about-wrapper">

    <h2 className="about-title">Who are we?</h2>

    <div className="about-layout">
      <div className="about-content">
        <p>
          We are a team of industrial veterans, educators, and innovators passionate
          about making <a href="https://www.digitalcomputerclasses.com/top-free-high-da-pa-website-list-for-backlink-submission/" className="backlink">high-quality</a> tech education accessible to everyone at an
          affordable price.
        </p>

        <p>
          Vinsup Skill Academy was  that gap. Our missi <a href="https://linkbuilder.io/guest-posting-sites/" className="backlink">engineered to bridge</a> on is simple
          to empower individuals with the exact skills they need to get hired, get
          promoted, and thrive in high-growth tech roles.
        </p>
      </div>

      <div className="about-image">
      <div className="image-placeholder">
       <img src={whoarewe} alt="" />
      </div>
</div>

    </div>

  </div>
</section>


{/* SECTION — Why Choose Us */}
<section className="why-choose">
  <div className="why-container">

    <div className="why-left">
      <h2 className="why-title">Why Choose Us</h2>
      <p className="why-sub">
        We focus on affordability, career readiness, and advanced specialization
        — all in one place.
      </p>
    </div>

    <div className="why-right">
      <div className="why-item">
        <span className="why-label">Fair pricing</span>
        <p>
          Most institutes charge a premium fee for tech skills, but we don’t.
          At 19999, we make quality education accessible to everyone in Coimbatore.
        </p>
      </div>

      <div className="why-item">
        <span className="why-label">More than just theory</span>
        <p>
          We don’t just teach coding—we teach you how to get hired.
          Soft skills and <a href="https://www.techasoft.com/post" className="backlink">aptitude training </a> are included at no extra cost.
        </p>
      </div>

      <div className="why-item">
        <span className="why-label">For the ambitious</span>
        <p>
          Advanced tracks like <a href="https://datamites.com/data-analytics-certification-course-training/?srsltid=AfmBOooRVOfZKNJ1BXe4ji09wOAtSwHmjtDelJwWYX3UVcke01irUhde" className="backlink">Data Verse Pro </a> and Full Stack Development at 40000,
          delivering top-tier training without leaving your city.
        </p>
      </div>
    </div>

  </div>
  
<div className="wc-grid">
  {WHY_CARDS.map((c) => (
    <article key={c.key} className="wc-card" tabIndex={0}>
      <span className="wc-icon" aria-hidden><WhyIcon k={c.key} /></span>
      <h3 className="wc-title">{c.title}</h3>
      <p className="wc-text">{c.text}</p>
    </article>
  ))}
</div>
</section>


{/* SECTION — Can Place in Multiple Companies */}
<section
  className="partners section section--full"
  aria-label="Hiring Partners"
>
  <div className="section-inner">
    <h2 className="section-title">
      Start your career in Multiple Companies
    </h2>

    {/* Row 1 — Left to Right */}
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
{/* =========================================================
     JOB READINESS PROGRAM – 3 COLUMN LAYOUT
   ========================================================= */}
<section className="jrp-3col section" aria-label="Job Readiness Program">
  <h2 className="section-title">
    What We Follow — <span>Job Readiness Program</span>
  </h2>
  <p className="section-sub">
    Your dream job is just <b>7 steps</b> away with Vinsup Skill Academy !
  </p>


  <div className="jrp-grid-3">
    {/* ---------- LEFT COLUMN : STEP LIST ---------- */}
    <div className="jrp-left">
      {steps.map((s, i) => (
        <div
          key={i}
          className={`jrp-step ${i === activeStep ? "is-active" : ""}`}
          onClick={() => setActiveStep(i)}
        >
          <span className="jrp-number">{i + 1}</span>
          <span className="jrp-step-title">{s.title}</span>
        </div>
      ))}
    </div>

    {/* ---------- MIDDLE COLUMN : DETAILS ---------- */}
    <div className="jrp-middle">
      <h3>{steps[activeStep].title}</h3>
      <ul>
        {steps[activeStep].points.map((p, idx) => (
          <li key={idx}>{p}</li>
        ))}
      </ul>
    </div>

    {/* ---------- RIGHT COLUMN : IMAGE ---------- */}
    <div className="jrp-right">
      <img src={steps[activeStep].image} alt={steps[activeStep].title} />
    </div>
  </div>
</section>

{/* <section className="reviews-section">
  <div className="reviews-container">
    <h2 className="section-title">What Students Say</h2>
    <p className="section-sub">
      Real feedback from learners who transformed their careers
    </p>

    <ReviewsShowcase />
  </div>
</section> */}


<section className="qc">
  <div class="section-inner">
    <h2 class="section-title">Quick Enquiry Here</h2>
    <QuickEnquiry />
  </div>
</section>

    
    </main>
  );
}
