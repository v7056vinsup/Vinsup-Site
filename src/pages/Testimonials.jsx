import React, { useEffect, useRef, useState, useCallback } from "react";
import "./Testimonials.css";
import QuickEnquiry from "../components/QuickEnquiry";
import Loader from "../components/Loader";

const API_URL =
  "https://script.google.com/macros/s/AKfycbzS5oJOJ5QwKyuvdYEn21DCXNAN93aoeo48hN1rKscC7A5uLFogQ0QCzCxCMMjrSuO6/exec";

/* ── tiny helpers ── */
const convertToEmbed = (url) => {
  if (url.includes("watch?v=")) return url.replace("watch?v=", "embed/");
  if (url.includes("youtu.be/"))
    return url.replace("youtu.be/", "youtube.com/embed/");
  return url;
};
const getThumbnail = (url) => {
  const id = url.match(/(?:v=|be\/)([^&]+)/)?.[1];
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
};
const Stars = ({ n = 5 }) => (
  <div className="stars">
    {Array.from({ length: n }, (_, i) => (
      <span key={i}>★</span>
    ))}
  </div>
);

/* ── Section wrapper with animated header ── */
const Section = ({ tag, title, desc, dark, children, className = "" }) => (
  <section className={`ts-section ${dark ? "ts-section--dark" : ""} ${className} reveal`}>
    <div className="ts-section__inner">
      <div className="ts-section__head">
        {tag && <span className="ts-tag">{tag}</span>}
        <h2 className="ts-section__title">{title}</h2>
        {desc && <p className="ts-section__desc">{desc}</p>}
      </div>
      {children}
    </div>
  </section>
);

/* ── Instagram embed card ── */
const InstaCard = ({ url, index }) => (
  <div className="insta-card reveal" style={{ animationDelay: `${index * 70}ms` }}>
    <div className="insta-card__inner">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        data-instgrm-captioned
        style={{ margin: 0, width: "100%" }}
      />
    </div>
    <div className="insta-card__glow" />
  </div>
);

export default function Testimonials() {
  const [youtubeVideos, setYoutubeVideos] = useState([]);
  const [instagram, setInstagram] = useState({});
  const [placed, setPlaced] = useState({});
  const [internship, setInternship] = useState({});
  const [textTestimonials, setTextTestimonials] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const heroRef = useRef(null);
  const timerRef = useRef(null);

  /* fetch */
  useEffect(() => {
    fetch(API_URL)
      .then((r) => r.json())
      .then((d) => {
        setYoutubeVideos(d.youtube || []);
        setInstagram(d.instagram || {});
        setPlaced(d.placed || {});
        setInternship(d.internship || {});
        setTextTestimonials(d.text || []);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  /* instagram embed script */
  useEffect(() => {
    if (!window.instgrm) {
      const s = document.createElement("script");
      s.src = "https://www.instagram.com/embed.js";
      s.async = true;
      s.onload = () => window.instgrm?.Embeds.process();
      document.body.appendChild(s);
    } else {
      window.instgrm?.Embeds.process();
    }
  }, [instagram, placed, internship]);

  /* carousel */
  const next = useCallback(
    () => setActiveSlide((p) => (p + 1) % textTestimonials.length),
    [textTestimonials.length]
  );
  const prev = () =>
    setActiveSlide((p) => (p - 1 + textTestimonials.length) % textTestimonials.length);

  useEffect(() => {
    if (isPaused || !textTestimonials.length) return;
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, [isPaused, next, textTestimonials.length]);

  /* parallax hero */
  useEffect(() => {
    const onScroll = () =>
      heroRef.current?.style.setProperty("--sy", `${window.scrollY * 0.35}px`);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* scroll reveal */
  useEffect(() => {
    if (loading) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("revealed"); io.unobserve(e.target); }
        }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [loading, youtubeVideos, textTestimonials, instagram, placed, internship]);

  if (loading) return <Loader />;

  const instaEntries = (obj) =>
    Object.entries(obj).flatMap(([, vids]) => vids.map((v) => v.video_url));

  return (
    <main className="t-page">

      {/* ══ HERO ══ */}
      <section className="t-hero" ref={heroRef}>
        <div className="t-hero__canvas">
          <div className="t-hero__orb t-hero__orb--a" />
          <div className="t-hero__orb t-hero__orb--b" />
          <div className="t-hero__orb t-hero__orb--c" />
          <div className="t-hero__mesh" />
        </div>
        <div className="t-hero__body">
          <span className="t-hero__pill">
            <i className="t-hero__live" />
            Verified Student Reviews
          </span>
          <h1 className="t-hero__h1">
            Success Stories<br />
            <em>Worth Sharing</em>
          </h1>
          <p className="t-hero__sub">Real students. Real results. No scripts.</p>
          <div className="t-hero__stats">
            {[["2,400+", "Students Enrolled"], ["98%", "Satisfaction Rate"], ["150+", "Video Reviews"]].map(
              ([v, l], i) => (
                <div className="t-hero__stat" key={i}>
                  <strong>{v}</strong>
                  <span>{l}</span>
                </div>
              )
            )}
          </div>
        </div>
        <div className="t-hero__caret"><span /></div>
      </section>

      {/* ══ YOUTUBE ══ */}
      <Section
        tag="Video Testimonials"
        title="Hear It from Our Students"
        desc="Unscripted stories from learners who transformed their careers."
        className="t-yt-section"
      >
        <div className="t-yt-grid">
          {youtubeVideos.map((yt, i) => (
            <div
              className="t-vc reveal"
              key={i}
              style={{ animationDelay: `${i * 75}ms` }}
            >
              <div className="t-vc__media">
                {activeVideo === i ? (
                  <iframe
                    src={`${convertToEmbed(yt.video_url)}?autoplay=1&rel=0`}
                    allowFullScreen
                    allow="autoplay"
                    title={yt.name}
                  />
                ) : (
                  <button className="t-vc__thumb" onClick={() => setActiveVideo(i)}>
                    <img src={getThumbnail(yt.video_url)} alt={yt.name} />
                    <div className="t-vc__fog" />
                    <span className="t-vc__play">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                    <span className="t-vc__label">Student Story</span>
                  </button>
                )}
              </div>
              <div className="t-vc__meta">
                <Stars />
                <h4>{yt.name}</h4>
                <p>{yt.course}</p>
                <span className="t-vc__verified">✓ Verified</span>
              </div>
              <div className="t-vc__sheen" />
            </div>
          ))}
        </div>
      </Section>

      {/* ══ TEXT REVIEWS ══ */}
      {/* {textTestimonials.length > 0 && (
        <section
          className="t-reviews reveal"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="t-reviews__bg" />
          <div className="t-reviews__inner">
            <div className="ts-section__head">
              <span className="ts-tag ts-tag--light">Written Reviews</span>
              <h2 className="ts-section__title ts-title--light">What Students Say</h2>
            </div>
            <div className="t-carousel">
              <div className="t-carousel__stage">
                {textTestimonials.map((t, i) => {
                  const pos =
                    i === activeSlide
                      ? "active"
                      : i === (activeSlide - 1 + textTestimonials.length) % textTestimonials.length
                      ? "prev"
                      : i === (activeSlide + 1) % textTestimonials.length
                      ? "next"
                      : "hidden";
                  return (
                    <div className={`t-rc t-rc--${pos}`} key={i} onClick={() => setActiveSlide(i)}>
                      <div className="t-rc__quote">"</div>
                      <p className="t-rc__text">{t.review || t.text}</p>
                      <Stars n={t.rating || 5} />
                      <div className="t-rc__author">
                        <div className="t-rc__av">{(t.name || "S")[0]}</div>
                        <div>
                          <strong>{t.name}</strong>
                          <span>{t.course}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="t-carousel__nav">
                <button className="t-carousel__btn" onClick={prev} aria-label="Prev">
                  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M15 18l-6-6 6-6" /></svg>
                </button>
                <div className="t-carousel__dots">
                  {textTestimonials.map((_, i) => (
                    <button
                      key={i}
                      className={`t-carousel__dot ${i === activeSlide ? "on" : ""}`}
                      onClick={() => setActiveSlide(i)}
                    />
                  ))}
                </div>
                <button className="t-carousel__btn" onClick={next} aria-label="Next">
                  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M9 18l6-6-6-6" /></svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      )} */}

      {/* ══ INSTAGRAM ══ */}
      {instaEntries(instagram).length > 0 && (
        <Section tag="Social Proof" title="Student Reels on Instagram" className="t-insta-section">
          <div className="t-insta-grid t-insta-grid--2">
            {instaEntries(instagram).map((url, i) => (
              <InstaCard key={i} url={url} index={i} />
            ))}
          </div>
        </Section>
      )}

      {/* ══ PLACED ══ */}
      {instaEntries(placed).length > 0 && (
        <Section
          tag="Placement Stories"
          title="Placed Student Testimonials"
          desc="Our students are now working at top companies worldwide."
          dark
          className="t-placed-section"
        >
          <div className="t-insta-grid t-insta-grid--3">
            {instaEntries(placed).map((url, i) => (
              <InstaCard key={i} url={url} index={i} />
            ))}
          </div>
        </Section>
      )}

      {/* ══ INTERNSHIP ══ */}
      {instaEntries(internship).length > 0 && (
        <Section
          tag="Internship Journeys"
          title="Internship Experience Reels"
          desc="Real-world experience that shapes careers from day one."
          className="t-intern-section"
        >
          <div className="t-insta-grid t-insta-grid--3">
            {instaEntries(internship).map((url, i) => (
              <InstaCard key={i} url={url} index={i} />
            ))}
          </div>
        </Section>
      )}

      {/* ══ CTA ══ */}
      <section className="t-cta reveal">
        <div className="t-cta__glow" />
        <div className="t-cta__body">
          <span className="t-cta__eyebrow">Ready to Begin?</span>
          <h2 className="t-cta__title">Start Your Journey Today</h2>
          <p className="t-cta__sub">Join thousands who already transformed their careers.</p>
          <QuickEnquiry />
        </div>
      </section>

    </main>
  );
}