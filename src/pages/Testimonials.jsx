import React, { useEffect, useRef, useState, useCallback } from "react";
import "./Testimonials.css";
import QuickEnquiry from "../components/QuickEnquiry";
import Loader from "../components/Loader";
import CustomSelect from "../components/CustomSelect";
import {
  getTestimonialsCache,
  prefetchTestimonials,
  subscribeTestimonials,
} from "../lib/testimonialsCache";

const instagramEmbedSrc = (url) => {
  if (!url) return "";
  try {
    const u = new URL(url);
    const path = u.pathname.replace(/\/+$/, "");
    return `https://www.instagram.com${path}/embed`;
  } catch {
    return `${String(url).split("?")[0].replace(/\/$/, "")}/embed`;
  }
};

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

/* ── Instagram embed card — native iframe so posts start loading immediately ── */
const InstaCard = ({ url, index, isVisible = true }) => (
  <div
    className="insta-card reveal"
    style={{
      animationDelay: `${index * 70}ms`,
      display: isVisible ? undefined : "none",
    }}
  >
    <div className="insta-card__inner">
      <iframe
        src={instagramEmbedSrc(url)}
        title="Instagram post"
        loading="eager"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
    <div className="insta-card__glow" />
  </div>
);

export default function Testimonials() {
  const [youtubeVideos, setYoutubeVideos] = useState(
    () => getTestimonialsCache()?.youtube || []
  );
  const [instagram, setInstagram] = useState(() => {
    const d = getTestimonialsCache()?.instagram;
    return d && Object.keys(d).length > 0 ? d : {};
  });
  const [placed, setPlaced] = useState(() => {
    const d = getTestimonialsCache()?.placed;
    return d && Object.keys(d).length > 0 ? d : {};
  });
  const [internship, setInternship] = useState(
    () => getTestimonialsCache()?.internship || {}
  );
  const [textTestimonials, setTextTestimonials] = useState(
    () => getTestimonialsCache()?.text || []
  );
  const [activeVideo, setActiveVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [recordTypeFilter, setRecordTypeFilter] = useState("All Types");
  const [courseFilter, setCourseFilter] = useState("All Courses");
  const heroRef = useRef(null);
  const timerRef = useRef(null);

  /* Shared cache-first fetch (started at app boot). Cards stay mounted
     under the loader so Instagram iframes begin loading immediately. */
  useEffect(() => {
    const applyData = (d) => {
      if (!d) return;
      setYoutubeVideos(d.youtube || []);
      if (d.instagram && Object.keys(d.instagram).length > 0) {
        setInstagram(d.instagram);
      }
      if (d.placed && Object.keys(d.placed).length > 0) {
        setPlaced(d.placed);
      }
      setInternship(d.internship || {});
      setTextTestimonials(d.text || []);
    };

    applyData(getTestimonialsCache());
    const unsub = subscribeTestimonials(applyData);
    prefetchTestimonials().catch(console.error);

    const maxTimer = setTimeout(() => setLoading(false), 1500);
    return () => {
      unsub();
      clearTimeout(maxTimer);
    };
  }, []);

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
  }, [
    loading,
    youtubeVideos,
    textTestimonials,
    instagram,
    placed,
    internship,
    recordTypeFilter,
    courseFilter,
  ]);

  /* ── Reel filter helpers ── */
  const allInstaPosts = Object.entries(instagram).flatMap(([catKey, vids]) =>
    (vids || []).map((v) => ({
      url: v.video_url || "",
      course: (v.course || catKey || "").trim() || "Uncategorized",
    }))
  ).filter((p) => p.url);

  const courseMatch = (postCourse, filter) => {
    if (filter === "All Courses" || !filter) return true;
    if (!postCourse) return false;
    const p = postCourse.toLowerCase().replace(/[^a-z0-9]/g, "");
    const f = filter.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (p === f || p.includes(f) || f.includes(p)) return true;
    const aliases = {
      fullstackdevelopment: ["fullstack", "mern", "webdev", "devstack"],
      dataanalytics: ["analytics", "dataanalysis"],
      datascience: ["datascientist", "machinelearning", "ml", "ai"],
      uiuxdesign: ["uiux", "ui", "ux", "design", "figma"],
      digitalmarketing: ["marketing", "seo", "sem"],
    };
    return Object.entries(aliases).some(
      ([key, vals]) =>
        (f === key || vals.some((v) => f.includes(v) || v.includes(f))) &&
        (p === key || vals.some((v) => p.includes(v) || v.includes(p)))
    );
  };

  const allPlacedPosts = Object.entries(placed).flatMap(([catKey, vids]) =>
    (vids || []).map((v) => ({
      url: v.video_url || "",
      course: (v.course || catKey || "").trim() || "Uncategorized",
    }))
  ).filter((p) => p.url);

  const allInternshipPosts = Object.entries(internship).flatMap(([catKey, vids]) =>
    (vids || []).map((v) => ({
      url: v.video_url || "",
      course: (v.course || catKey || "").trim() || "Uncategorized",
    }))
  ).filter((p) => p.url);

  const recordTypeOptions = [
    "All Types",
    "Student Reels",
    "Placement Stories",
    "Internship Experience Reels",
  ];
  const availableCoursePosts =
    recordTypeFilter === "Student Reels"
      ? allInstaPosts
      : recordTypeFilter === "Placement Stories"
        ? allPlacedPosts
        : recordTypeFilter === "Internship Experience Reels"
          ? allInternshipPosts
          : [...allInstaPosts, ...allPlacedPosts, ...allInternshipPosts];
  const availableCourseNames = [
    ...new Set(
      availableCoursePosts
        .map((post) => post.course)
        .filter((course) => course && course.toLowerCase() !== "uncategorized")
    ),
  ];
  const knownCourses = [
    "React",
    "Full Stack Development",
    "Data Analytics",
    "Data Science",
    "UI / UX Design",
    "Digital Marketing",
  ];
  const courseFilterOptions = [
    "All Courses",
    ...(availableCourseNames.length ? availableCourseNames : knownCourses),
  ];
  const applyCourseFilter = (posts) =>
    courseFilter === "All Courses"
      ? posts
      : posts.filter((post) => courseMatch(post.course, courseFilter));
  const filteredInstaPosts = applyCourseFilter(allInstaPosts);
  const filteredPlacedPosts = applyCourseFilter(allPlacedPosts);
  const filteredInternshipPosts = applyCourseFilter(allInternshipPosts);


  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <main
        className="t-page"
        aria-hidden={loading}
        style={
          loading
            ? {
                opacity: 0,
                position: "fixed",
                inset: 0,
                pointerEvents: "none",
                overflow: "auto",
                zIndex: 0,
              }
            : undefined
        }
      >

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
        <div className="t-testimonial-filters">
          <div className="t-filter-select">
            <span className="t-filter-label">Type</span>
            <CustomSelect
              options={recordTypeOptions}
              value={recordTypeFilter}
              onChange={(value) => {
                setRecordTypeFilter(value);
                setCourseFilter("All Courses");
              }}
              placeholder="All types"
            />
          </div>
          <div className="t-filter-select">
            <span className="t-filter-label">Course</span>
            <CustomSelect
              options={courseFilterOptions}
              value={courseFilter}
              onChange={setCourseFilter}
              placeholder="All courses"
            />
          </div>
        </div>
        <div className="t-yt-grid">
          {loading && youtubeVideos.length === 0
            ? Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="t-skeleton t-skeleton-card" style={{ animationDelay: `${i * 120}ms` }} />
            ))
            : youtubeVideos.map((yt, i) => (
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
            ))
          }
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
      {(recordTypeFilter === "All Types" || recordTypeFilter === "Student Reels") &&
        (loading || allInstaPosts.length > 0) && (
        <Section
          tag="Social Proof"
          title="Student Reels on Instagram"
          desc="Real student experiences and feedback across all our learning programs."
          className="t-insta-section"
        >
          {/* Skeleton while loading and no posts yet */}
          {loading && allInstaPosts.length === 0 ? (
            <div className="t-skeleton-grid">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="t-skeleton t-skeleton-card--tall" style={{ animationDelay: `${i * 150}ms` }} />
              ))}
            </div>
          ) : (
            <>
              {filteredInstaPosts.length === 0 && (
                <div className="t-filter-empty">
                  <p>
                    No student reels found for{" "}
                    <strong>{courseFilter}</strong> yet.
                  </p>
                  <button
                    type="button"
                    className="t-filter-empty__btn"
                    onClick={() => setCourseFilter("All Courses")}
                  >
                    View All Reels
                  </button>
                </div>
              )}

              <div
                className={`t-insta-grid ${filteredInstaPosts.length === 1
                  ? "t-insta-grid--1"
                  : filteredInstaPosts.length === 2
                    ? "t-insta-grid--2"
                    : "t-insta-grid--3"
                  }`}
                style={{
                  display: filteredInstaPosts.length === 0 ? "none" : undefined,
                }}
              >
                {filteredInstaPosts.map((post, i) => (
                  <InstaCard key={post.url} url={post.url} index={i} />
                ))}
              </div>
            </>
          )}
        </Section>
      )}

      {/* ══ PLACED ══ */}
      {(recordTypeFilter === "All Types" || recordTypeFilter === "Placement Stories") &&
        (loading || allPlacedPosts.length > 0) && (
        <Section
          tag="Placement Stories"
          title="Placed Student Testimonials"
          desc="Our students are now working at top companies worldwide."
          dark
          className="t-placed-section"
        >
          {filteredPlacedPosts.length === 0 && (
            <div className="t-filter-empty">
              <p>
                No placement reels found for{" "}
                <strong>{courseFilter}</strong> yet.
              </p>
              <button
                type="button"
                className="t-filter-empty__btn"
                onClick={() => setCourseFilter("All Courses")}
              >
                View All Reels
              </button>
            </div>
          )}

          <div
            className={`t-insta-grid ${filteredPlacedPosts.length === 1
              ? "t-insta-grid--1"
              : filteredPlacedPosts.length === 2
                ? "t-insta-grid--2"
                : "t-insta-grid--3"
              }`}
            style={{
              display: filteredPlacedPosts.length === 0 ? "none" : undefined,
            }}
          >
            {filteredPlacedPosts.map((post, i) => (
              <InstaCard key={post.url} url={post.url} index={i} />
            ))}
          </div>
        </Section>
      )}

      {/* ══ INTERNSHIP ══ */}
      {(recordTypeFilter === "All Types" || recordTypeFilter === "Internship Experience Reels") &&
        allInternshipPosts.length > 0 && (
        <Section
          tag="Internship Journeys"
          title="Internship Experience Reels"
          desc="Real-world experience that shapes careers from day one."
          className="t-intern-section"
        >
          {filteredInternshipPosts.length === 0 && (
            <div className="t-filter-empty">
              <p>
                No internship reels found for <strong>{courseFilter}</strong> yet.
              </p>
              <button
                type="button"
                className="t-filter-empty__btn"
                onClick={() => setCourseFilter("All Courses")}
              >
                View All Reels
              </button>
            </div>
          )}

          <div
            className={`t-insta-grid ${filteredInternshipPosts.length === 1
              ? "t-insta-grid--1"
              : filteredInternshipPosts.length === 2
                ? "t-insta-grid--2"
                : "t-insta-grid--3"
              }`}
            style={{
              display: filteredInternshipPosts.length === 0 ? "none" : undefined,
            }}
          >
            {filteredInternshipPosts.map((post, i) => (
              <InstaCard key={post.url} url={post.url} index={i} />
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
    </>
  );
}