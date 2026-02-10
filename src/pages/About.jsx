import React ,{useEffect} from "react";
import Counter from "../components/Counter";
import QuickEnquiry from "../components/QuickEnquiry";
import vinsupBuilding from "../assets/vinsup_building.png";
import growthImg from "../assets/growth.png";
import vinsupInfotech from "../assets/VINSUPINFOTECH.png";
import srbBankers from "../assets/SRBBANKERS.png";
import vinolya from "../assets/VINOLYA.png";
import ramtel from "../assets/ramtel.png";
import g1 from "../assets/gallery/1.jpg";
import g2 from "../assets/gallery/2.jpg";
import g3 from "../assets/gallery/3.jpg";
import g4 from "../assets/gallery/4.jpg";
import g5 from "../assets/gallery/5.jpg";
import g6 from "../assets/gallery/6.jpg";
import g7 from "../assets/gallery/7.jpg";
import g8 from "../assets/gallery/8.jpg";
import g9 from "../assets/gallery/9.jpg";
import g10 from "../assets/gallery/10.jpg"; 





import "./About.css";
export const galleryImages = [
  g1, g2, g3, g4, g5,
  g6, g7, g8, g9
];
export default function About() {
 useEffect(() => {
  const steps = document.querySelectorAll("[data-step]");

  // Make first step active initially
  if (steps.length > 0) {
    steps[0].classList.add("is-active");
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          steps.forEach((s) => s.classList.remove("is-active"));
          entry.target.classList.add("is-active");
        }
      });
    },
    {
      threshold: 0.55, // smoother switching
    }
  );


  steps.forEach((step) => observer.observe(step));

  return () => observer.disconnect();
}, []);

  return (
    <main>

      {/* =========================================
          SECTION 1 — HERO (Tagline + Image)
      ========================================== */}
      <section className="about-hero" aria-label="About us hero">
        <div className="about-hero-inner">

          {/* Left - Text */}
          <div className="about-hero-content">
            <h2>The Pre-eminent Institute for IT Training in Coimbatore </h2>
            <p className="hero-lead">
             The Vinsup Skill Academy in Ganapathy Coimbatore offers more than simply a means of achieving certification; it provides an entire ecosystem for professional skill development. Whilst many institutions will only teach you content applicable to your specific subject area, here we prepare learners to be successful by providing them with industry-specific training that prepares them for the real world. Our model of education focuses heavily on outcomes; however, we believe that there should be an underlying philosophy behind our approach. Therefore when we deliver practical training it is always delivered by experienced mentors who understand and have experienced their own successes within these industries.
            </p>

            <div className="about-hero-ctas">
              <a className="btn-primary" href="/courses">Explore Courses</a>
              <a className="btn-outline" href="/contact">Contact Us</a>
            </div>
          </div>

          {/* Right - Image */}
         <div className="about-hero-image">
  <img src={vinsupBuilding} alt="vinsupskillacademy" />
</div>


        </div>
      </section>

{/* ====================================================
    SECTION — Mission & Vision (Two Column Layout)
==================================================== */}
<div className="about-copy">

  <div className="about-card">
    <h3 className="about-card-title">Our Mission</h3>
    <p>
      The Vinsup Skill Academy’s mission is to give students and working
      professionals essential job-ready and industry-current skills.
      We bridge the gap between academics and real-world expectations
      through hands-on training, live projects, and mentorship.
    </p>
  </div>

  <div className="about-card">
    <h3 className="about-card-title">Our Vision</h3>
    <p>
      Our vision is to become the most recognized skill development academy
      in Coimbatore, creating future-ready professionals and ensuring every
      learner finds successful employment after completing training.
    </p>
  </div>

</div>

{/* story section */}
        <section className="story-section" aria-label="Our Story">
  <div className="story-inner">

    {/* Story Image */}
    <div className="story-media">
  <img src={growthImg} alt="Our Story" />
</div>


    {/* Story Content */}
    <div className="story-flow">

      <h2 className="story-title">Our Story</h2>

      <div className="story-step" data-step>
        <span className="story-marker">01</span>
        <p>
          Comprehensive Skill Training: Professional training in Full Stack Development or Data Analytics or UI/UX, consisting of multiple content modules.
        </p>
      </div>

      <div className="story-step" data-step>
        <span className="story-marker">02</span>
        <p>
           Internship Certification: This provides you with a professional credential to enhance your resume.
        </p>
      </div>

      <div className="story-step" data-step>
        <span className="story-marker">03</span>
        <p>
          Actual Work Experience: We prepare you to move from being a student to being a professional.
        </p>
      </div>

    </div>

  </div>
</section>


      {/* ================================================
          SECTION 4 — Our Values (Grid)
      ================================================= */}
      <section className="why-choose section section--full" aria-label="Our Values">
        <div className="section-inner">
          <h2 className="section-title">Our Values</h2>
          <p className="section-desc">
            These core principles define our approach to teaching and guide everything we do.
          </p>

          <div className="wc-grid">

            <article className="wc-card">
              <h3 className="wc-title">Final Year Internships </h3>
              <p className="wc-text">
               Our final year students are welcome to complete internship training with us, including completing reports for their final year project. In this manner, you receive a formal degree and also develop a comprehensive professional portfolio while attending our classes
                
              </p>
            </article>

            <article className="wc-card">
              <h3 className="wc-title">Industry-Relevant Curriculum</h3>
              <p className="wc-text">
            Vinsup Skill Academy continuously updates all of its training modules to ensure that you develop the necessary 100-hour job readiness skills that employers today seek. 
              </p>
              {/* We offer courses on full stack development, data analytics using AI technology, digital marketing, and UI/UX design, among others. */}
            </article>

            <article className="wc-card">
              <h3 className="wc-title">Mentorship</h3>
              <p className="wc-text">
                Students receive continuous support, review, and guidance from industry experts.
              </p>
            </article>

           

          </div>
        </div>
      </section>






{/* =================================================
    SECTION — Group of Companies
================================================= */}
<section className="group-section" aria-label="Group of Companies">
  <div className="section-inner">

    <h2 className="section-title">Our Group of Companies</h2>

    <div className="group-grid">

      <div className="group-card">
  <img src={vinsupInfotech} alt="Vinsup Info Tech" />
</div>

<div className="group-card">
  <img src={srbBankers} alt="SRB Bankers" />
</div>

<div className="group-card">
  <img src={vinolya} alt="Vinolya" />
</div>

<div className="group-card">
  <img src={ramtel} alt="Ramtel" />
</div>


    </div>

  </div>
</section>


     {/* ===========================
   CAMPUS GALLERY (inline styles)
   =========================== */}
<section className="section section--full gallery-section" aria-label="Campus Gallery">
  <div className="section-inner">

    <h2 className="section-title" style={{ textAlign: "center" }}>Campus Gallery</h2>

    <div
      className="gallery-grid-fixed"
     
    >
     {galleryImages.map((img, i) => (
  <div key={i} className="gallery-item">
    <img src={img} alt={`Campus ${i + 1}`} />
  </div>
))}

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
