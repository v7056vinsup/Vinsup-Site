import React, { useEffect, useRef, useState } from "react";
import "./Testimonials.css";
import QuickEnquiry from "../components/QuickEnquiry";
import Loader from "../components/Loader";


const API_URL =
  "https://script.google.com/macros/s/AKfycbxl_6f8kPi0cMxa3XwE_FUhZMbUG6KolMIAFvSQb7PAgTXgSO1WB3Pv7eyyAw1NIZKN5w/exec";

export default function Testimonials() {
  const [youtubeVideos, setYoutubeVideos] = useState([]);
  const [instagram, setInstagram] = useState({});
  const [textTestimonials, setTextTestimonials] = useState([]);
  const carouselRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const convertToEmbed = (url) => {
  if (url.includes("/shorts/")) {
    return url.replace("/shorts/", "/embed/");
  }
  if (url.includes("watch?v=")) {
    return url.replace("watch?v=", "embed/");
  }
  return url;
};



  /* ===============================
     FETCH ALL TESTIMONIAL DATA
  =============================== */
 useEffect(() => {
  let mounted = true;
  setLoading(true);

  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      if (!mounted) return;

      // HERO YOUTUBE
      if (data.youtube) {
        setYoutubeVideos(
          Array.isArray(data.youtube) ? data.youtube : [data.youtube]
        );
      }

      // INSTAGRAM
      setInstagram(data.instagram || {});

      // TEXT TESTIMONIALS
      setTextTestimonials(data.text || []);
    })
    .catch(err => {
      console.error("Testimonials API error:", err);
    })
    .finally(() => {
      if (mounted) setLoading(false);
    });

  return () => (mounted = false);
}, []);


  /* ===============================
     TEXT TESTIMONIAL CAROUSEL
     (3 cards at a time)
  =============================== */
  useEffect(() => {
    const track = carouselRef.current;
    if (!track || textTestimonials.length === 0) return;

    const cardsPerView = 3;
    const totalPages = Math.ceil(textTestimonials.length / cardsPerView);
    let page = 0;

    const interval = setInterval(() => {
      page = (page + 1) % totalPages;
      track.style.transform = `translateX(-${page * 100}%)`;
    }, 4000);

    return () => clearInterval(interval);
  }, [textTestimonials]);

  /* ===============================
     LOAD INSTAGRAM EMBED SCRIPT
  =============================== */
  useEffect(() => {
    if (!window.instgrm) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => window.instgrm?.Embeds.process();
      document.body.appendChild(script);
    } else {
      window.instgrm.Embeds.process();
    }
  }, [instagram]);

  return (
     <>
    {/* LOADER — outside <main> so nothing can overlap it */}
    {loading && <Loader />}
    <main>
      {/* ===============================
          HERO SECTION
      =============================== */}
      <section className="testimonials-hero">
        <div className="testimonials-hero-inner">
          <h1 className="testimonials-title">Student Testimonials</h1>
          <p className="testimonials-subtitle">
            Real stories from learners who transformed their careers
          </p>
        </div>
      </section>
        

      {/* ===============================
          HERO YOUTUBE VIDEOS
      =============================== */}
      {youtubeVideos.length > 0 && (
        <section className="featured-testimonial">
          <div className="featured-inner">
            {youtubeVideos.map((yt, i) => (
              <div className="featured-video" key={i}>
                <iframe
                  src={`${yt.video_url}?autoplay=1&mute=1&rel=0`}
                  title={yt.title || "Student Testimonial"}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
                <div className="featured-meta">
                  <h3>{yt.name}</h3>
                  <p>{yt.course}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ===============================
          INSTAGRAM SHORT VIDEOS
      =============================== */}
      {Object.keys(instagram).map(category => (
        <section className="short-testimonials">
  <div className="short-inner">
    <h2 className="short-title">
      {category.replace(/\b\w/g, c => c.toUpperCase())}
    </h2>

   <div className="insta-row">
  {instagram[category].map((vid, i) => {
    const url = vid.video_url;

    // 👉 YouTube Shorts
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      return (
        <iframe
          key={i}
          className="short-video"
          src={convertToEmbed(url)}
          title="YouTube Short"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      );
    }

    // 👉 Instagram
    return (
      <blockquote
        key={i}
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
      />
    );
  })}
</div>

  </div>
</section>



      ))}

      {/* ===============================
          TEXT TESTIMONIALS – CAROUSEL
      =============================== */}
      {textTestimonials.length > 0 && (
        <section className="text-testimonials">
          <div className="text-inner">
            <h2 className="text-title">What Our Students Say</h2>

            <div className="text-carousel">
              <div className="text-track" ref={carouselRef}>
                {textTestimonials.map((t, i) => (
                  <article className="text-card" key={i}>
                    <div className="text-card-inner">
                      <div className="star-rating">
                        {"★".repeat(t.rating)}
                        {"☆".repeat(5 - t.rating)}
                      </div>

                      <p className="text-quote">“{t.quote}”</p>
                      <p className="text-name">{t.name}</p>
                      <p className="text-course">{t.course}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===============================
          CTA
      =============================== */}
      <section className="testimonials-cta">
        <div className="cta-inner">
          <h2>Ready to start your journey?</h2>
          <p>Join our next batch and build career-ready skills</p>
          <QuickEnquiry />
        </div>
      </section>
    </main>
     </>
  );
}
