// import { useEffect, useRef, useState, useCallback } from "react";
// import "./Placements.css";

// // ─── CONFIG ───────────────────────────────────────────────────────────────────
// const TOTAL_PHOTOS = 45;
// const photos = Array.from({ length: TOTAL_PHOTOS }, (_, i) => ({
//   id: i + 1,
//   src: `/placements/photo${i + 1}.png`,
// }));

// // ─── SVG Icons ────────────────────────────────────────────────────────────────
// const IconGradCap = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
//     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
//     <path d="M6 12v5c3 3 9 3 12 0v-5"/>
//   </svg>
// );
// const IconArrow = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
//     stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M5 12h14M12 5l7 7-7 7"/>
//   </svg>
// );
// const IconClose = () => (
//   <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
//     stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//     <line x1="18" y1="6" x2="6" y2="18"/>
//     <line x1="6" y1="6" x2="18" y2="18"/>
//   </svg>
// );
// const IconChevronLeft = () => (
//   <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
//     stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//     <polyline points="15 18 9 12 15 6"/>
//   </svg>
// );
// const IconChevronRight = () => (
//   <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
//     stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//     <polyline points="9 18 15 12 9 6"/>
//   </svg>
// );

// // ─── Modal ─────────────────────────────────────────────────────────────────────
// function Modal({ photo, photos, onClose }) {
//   const [current, setCurrent] = useState(photo.id - 1); // 0-indexed
//   const [animDir, setAnimDir] = useState(null); // 'left' | 'right'

//   const goTo = useCallback((idx, dir) => {
//     setAnimDir(dir);
//     setTimeout(() => {
//       setCurrent(idx);
//       setAnimDir(null);
//     }, 200);
//   }, []);

//   const prev = () => {
//     const idx = (current - 1 + photos.length) % photos.length;
//     goTo(idx, "right");
//   };
//   const next = () => {
//     const idx = (current + 1) % photos.length;
//     goTo(idx, "left");
//   };

//   // Keyboard navigation
//   useEffect(() => {
//     const handler = (e) => {
//       if (e.key === "Escape")      onClose();
//       if (e.key === "ArrowLeft")   prev();
//       if (e.key === "ArrowRight")  next();
//     };
//     window.addEventListener("keydown", handler);
//     return () => window.removeEventListener("keydown", handler);
//   }, [current]);

//   // Lock body scroll
//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => { document.body.style.overflow = ""; };
//   }, []);

//   const currentPhoto = photos[current];

//   return (
//     <div className="modal-backdrop" onClick={onClose}>
//       <div className="modal-box" onClick={(e) => e.stopPropagation()}>

//         {/* Close */}
//         <button className="modal-close" onClick={onClose} aria-label="Close">
//           <IconClose />
//         </button>

//         {/* Counter */}
//         <div className="modal-counter">{current + 1} / {photos.length}</div>

//         {/* Image */}
//         <div className={`modal-img-wrap${animDir ? ` slide-${animDir}` : ""}`}>
//           <img
//             key={current}
//             src={currentPhoto.src}
//             alt={`Student ${current + 1}`}
//           />
//         </div>

//         {/* Nav buttons */}
//         <button className="modal-nav modal-prev" onClick={prev} aria-label="Previous">
//           <IconChevronLeft />
//         </button>
//         <button className="modal-nav modal-next" onClick={next} aria-label="Next">
//           <IconChevronRight />
//         </button>

//         {/* Hint */}
//         <div className="modal-hint">Use ← → arrow keys to navigate</div>
//       </div>
//     </div>
//   );
// }

// // ─── Photo Card ───────────────────────────────────────────────────────────────
// function PhotoCard({ photo, index, onOpen }) {
//   const ref    = useRef(null);
//   const [vis, setVis]       = useState(false);
//   const [active, setActive] = useState(false); // color on hover
//   const [hovered, setHovered] = useState(false);

//   // Scroll reveal + grayscale lift
//   useEffect(() => {
//     const io = new IntersectionObserver(
//       ([e]) => {
//         if (e.isIntersecting) {
//           setVis(true);
//           // Briefly go color when it first appears, then back to B&W
//           setActive(true);
//           const t = setTimeout(() => setActive(false), 1800);
//           io.disconnect();
//           return () => clearTimeout(t);
//         }
//       },
//       { threshold: 0.1 }
//     );
//     if (ref.current) io.observe(ref.current);
//     return () => io.disconnect();
//   }, []);

//   const handleEnter = () => { setHovered(true); setActive(true); };
//   const handleLeave = () => {
//     setHovered(false);
//     setActive(false);
//   };

//   return (
//     <div
//       ref={ref}
//       className={`photo-card${vis ? " vis" : ""}`}
//       style={{ animationDelay: `${(index % 3) * 100}ms` }}
//     >
//       <div
//         className={`card-inner${hovered ? " hovered" : ""}`}
//         onMouseEnter={handleEnter}
//         onMouseLeave={handleLeave}
//         onClick={() => onOpen(photo)}
//       >
//         <div className="photo-img-wrap">
//           <img
//             src={photo.src}
//             alt={`Placed Student ${photo.id}`}
//             loading="lazy"
//             className={active ? "color" : "bw"}
//           />
//           <div className="card-caption">Placed Student {photo.id}</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── Page ─────────────────────────────────────────────────────────────────────
// export default function Placements() {
//   const [heroIn, setHeroIn]       = useState(false);
//   const [modalPhoto, setModalPhoto] = useState(null);

//   useEffect(() => { setTimeout(() => setHeroIn(true), 80); }, []);

//   const openModal  = (photo) => setModalPhoto(photo);
//   const closeModal = ()       => setModalPhoto(null);

//   return (
//     <div className="pl-page">

//       {/* ── HERO ── */}
//       <section className={`pl-hero${heroIn ? " hero-in" : ""}`}>
//         <div className="blob blob-a" />
//         <div className="blob blob-b" />
//         <div className="blob blob-c" />
//         <div className="hero-inner">
//           <div className="hero-pill">
//             <IconGradCap />
//             Placement Success Stories
//           </div>
//           <h1 className="hero-h1">
//             Real Students.<br />
//             <em>Real Careers.</em>
//           </h1>
//           <p className="hero-p">
//             Our students don't just learn — they get placed. Every face on this
//             page is a story of hard work, the right skills, and a career that
//             began at Vinsup Skill Academy.
//           </p>
//           <div className="hero-btns">
//             <a href="/courses" className="btn-blue">Explore Courses <IconArrow /></a>
//             <a href="/contact" className="btn-ghost">Contact Us</a>
//           </div>
//         </div>
//       </section>

//       {/* ── GALLERY ── */}
//       <section className="gallery-sec">
//         <div className="sec-head">
//           <span className="sec-kicker">Wall of Fame</span>
//           <h2 className="sec-title">Meet Our Placed Students</h2>
//           <p className="sec-sub">
//             Every face here is a journey from learning to earning. Click any photo to view it.
//           </p>
//         </div>
//         <div className="photo-grid">
//           {photos.map((p, i) => (
//             <PhotoCard key={p.id} photo={p} index={i} onOpen={openModal} />
//           ))}
//         </div>
//       </section>

//       {/* ── CTA ── */}
//       <section className="cta-sec">
//         <div className="cta-box">
//           <div className="cta-text">
//             <h2>Your Photo Could Be Next</h2>
//             <p>Join Vinsup Skill Academy and build a career that lasts.</p>
//           </div>
//           <a href="/contact" className="btn-blue btn-lg">Get Started <IconArrow /></a>
//         </div>
//       </section>

//       {/* ── MODAL ── */}
//       {modalPhoto && (
//         <Modal photo={modalPhoto} photos={photos} onClose={closeModal} />
//       )}

//     </div>
//   );
// }


import { useEffect, useRef, useState, useCallback } from "react";
import "./Placements.css";
import HomePopupModal from "../components/HomePopupModal";

// ─── SVG Icons (UNCHANGED) ────────────────────────────────────────────────────
const IconGradCap = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);
const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);
const IconClose = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
const IconChevronLeft = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
);
const IconChevronRight = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);

// ─── Modal (UNCHANGED) ────────────────────────────────────────────────────────
function Modal({ photo, photos, onClose }) {
  const [current, setCurrent] = useState(photo.index);
  const [animDir, setAnimDir] = useState(null);

  const goTo = useCallback((idx, dir) => {
    setAnimDir(dir);
    setTimeout(() => {
      setCurrent(idx);
      setAnimDir(null);
    }, 200);
  }, []);

  const prev = () => {
    const idx = (current - 1 + photos.length) % photos.length;
    goTo(idx, "right");
  };
  const next = () => {
    const idx = (current + 1) % photos.length;
    goTo(idx, "left");
  };

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const currentPhoto = photos[current];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><IconClose /></button>
        <div className="modal-counter">{current + 1} / {photos.length}</div>

        <div className={`modal-img-wrap${animDir ? ` slide-${animDir}` : ""}`}>
          <img src={currentPhoto.src} alt="" />
        </div>

        <button className="modal-nav modal-prev" onClick={prev}><IconChevronLeft /></button>
        <button className="modal-nav modal-next" onClick={next}><IconChevronRight /></button>
      </div>
    </div>
  );
}

// ─── Photo Card ────────────────────────────────────────────────────────────────
function PhotoCard({ photo, index, onOpen }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVis(true);
        io.disconnect();
      }
    });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const handleEnter = () => {
    setHovered(true);
    setActive(true);
  };

  const handleLeave = () => {
    setHovered(false);
    setActive(false);
  };

  const handleImageError = (e) => {
    console.error('Image failed to load:', photo.src);
    e.target.style.display = 'none';
  };

  return (
    <div ref={ref} className={`photo-card${vis ? " vis" : ""}`}>
      <div
        className={`card-inner${hovered ? " hovered" : ""}`}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onClick={() => onOpen(photo)}
      >
        <div className="photo-img-wrap">
          <img src={photo.src} alt="" loading="lazy" onError={handleImageError} />
          <div className="card-caption">{photo.name}</div>
        </div>
      </div>
    </div>
  );
}

// ─── Convert Google Drive URL to embeddable format ─────────────────────────────
const convertDriveUrl = (url) => {
  if (!url) return url;
  // Extract file ID from various Google Drive URL formats
  const match = url.match(/[-\w]{25,}/);
  if (match) {
    const fileId = match[0];
    const convertedUrl = `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
    return convertedUrl;
  }
  return url;
};

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function Placements() {
  const [heroIn, setHeroIn] = useState(false);
  const [modalPhoto, setModalPhoto] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);

  // 🔥 NEW STATE (backend)
  const [photos, setPhotos] = useState([]);

  useEffect(() => { setTimeout(() => setHeroIn(true), 80); }, []);

  const LIMIT = 3;

  // ✅ FETCH FROM APPS SCRIPT
  useEffect(() => {
    fetch(
       `https://script.google.com/macros/s/AKfycbwYgJrzucfmhP2hM0sy_xIZtizsXTW7CHlzqvpLsOQxuG3uXd73cWUWf9QSAD7Hf3o0/exec?page=${page}&limit=${LIMIT}`
    )
      .then((res) => res.json())
      .then((res) => {
        const mapped = res.data.map((item, i) => ({
          id: item.Id || `${page}-${i}`,
          name: item.Name,
          src: convertDriveUrl(item.Image),
          index: photos.length + i,
        }));
        // setPhotos(mapped);
        setPhotos((prev) => [...prev, ...mapped]);
        if (mapped.length < LIMIT) {
          setHasMore(false);
        }
      })
      .catch((err) => console.error(err));
  }, [page]);

  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      },
      { rootMargin: '100px' }
    );

    observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [hasMore]);

  const openModal = (photo) => setModalPhoto(photo);
  const closeModal = () => setModalPhoto(null);

  return (
    <div className="pl-page">

      {/* HERO */}
      <section className={`pl-hero${heroIn ? " hero-in" : ""}`}>
        <div className="hero-inner">
          <div className="hero-pill"><IconGradCap /> Placement Success Stories</div>
          <h1 className="hero-h1">Real Students.<br /><em>Real Careers.</em></h1>
          <p className="hero-p">Our students don't just learn — they get placed.</p>
          <div className="hero-btns">
            <a href="/courses" className="btn-blue">Explore Courses <IconArrow /></a>
            <a href="/contact" className="btn-ghost">Contact Us</a>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-sec">
        <div className="photo-grid">
          {photos.map((p, i) => (
            <PhotoCard key={p.id || i} photo={p} index={i} onOpen={openModal} />
          ))}
        </div>
        <div ref={loaderRef} style={{ height: "40px", margin: "20px" }}>
          {hasMore ? "Loading more..." : "No more data"}
        </div>
      </section>

      {/* MODAL */}
      {modalPhoto && (
        <Modal photo={modalPhoto} photos={photos} onClose={closeModal} />
      )}

      <HomePopupModal />
    </div>
  );
}