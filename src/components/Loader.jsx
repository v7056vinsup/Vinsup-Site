import React, { useEffect, useRef, useState } from "react";
import "./Loader.css";
import logo from "../assets/logo.png";

// SVG icon paths for each milestone (scaled to fit in r=22 circle, centered at 0,0)
const ICONS = [
  // 1. Aptitude Training - lightbulb
  <g key="aptitude">
    <circle cx="0" cy="-4" r="8" fill="none" stroke="white" strokeWidth="2"/>
    <line x1="-3" y1="4" x2="3" y2="4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <line x1="-2" y1="7" x2="2" y2="7" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <line x1="0" y1="-12" x2="0" y2="-10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <line x1="7" y1="-9" x2="6" y2="-8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <line x1="-7" y1="-9" x2="-6" y2="-8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </g>,

  // 2. Soft Skills Training - group of people
  <g key="softskills">
    <circle cx="0" cy="-6" r="4" fill="white"/>
    <path d="M-8,4 Q-8,-1 0,-1 Q8,-1 8,4" fill="white"/>
    <circle cx="-9" cy="-5" r="3" fill="white" opacity="0.7"/>
    <path d="M-15,4 Q-14,0 -9,0" fill="none" stroke="white" strokeWidth="2" opacity="0.7"/>
    <circle cx="9" cy="-5" r="3" fill="white" opacity="0.7"/>
    <path d="M15,4 Q14,0 9,0" fill="none" stroke="white" strokeWidth="2" opacity="0.7"/>
  </g>,

  // 3. Portfolio Building - document with lines
  <g key="portfolio">
    <rect x="-8" y="-11" width="16" height="20" rx="2" fill="none" stroke="white" strokeWidth="2"/>
    <line x1="-4" y1="-5" x2="4" y2="-5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <line x1="-4" y1="-1" x2="4" y2="-1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <line x1="-4" y1="3" x2="1" y2="3" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M4,-11 L4,-7 L8,-7" fill="none" stroke="white" strokeWidth="1.5"/>
  </g>,

  // 4. Mock Interview - speech bubbles
  <g key="interview">
    <rect x="-10" y="-11" width="14" height="10" rx="3" fill="none" stroke="white" strokeWidth="2"/>
    <path d="M-8,-1 L-6,2 L-4,-1" fill="white"/>
    <rect x="-2" y="-3" width="14" height="10" rx="3" fill="none" stroke="white" strokeWidth="2" opacity="0.7"/>
    <path d="M0,7 L2,10 L4,7" fill="white" opacity="0.7"/>
    <line x1="-6" y1="-6" x2="0" y2="-6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="-6" y1="-3" x2="-2" y2="-3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </g>,

  // 5. Placement Assistance - briefcase
  <g key="placement">
    <rect x="-9" y="-6" width="18" height="13" rx="2" fill="none" stroke="white" strokeWidth="2"/>
    <path d="M-4,-6 L-4,-9 Q-4,-11 0,-11 Q4,-11 4,-9 L4,-6" fill="none" stroke="white" strokeWidth="2"/>
    <line x1="-9" y1="0" x2="9" y2="0" stroke="white" strokeWidth="1.5"/>
  </g>,
];

// ✅ Symmetric wave: peaks at y=120, valleys at y=240
const MILESTONES = [
  { x: 150, y: 240, label: "Aptitude Training",   labelAbove: false },
  { x: 350, y: 120, label: "Soft Skills Training", labelAbove: true  },
  { x: 550, y: 240, label: "Portfolio Building",   labelAbove: false },
  { x: 750, y: 120, label: "Mock Interview",        labelAbove: true  },
  { x: 950, y: 240, label: "Placement Assistance", labelAbove: false },
];

// ✅ Perfect symmetric S-curve through all 5 points
const CURVE_PATH =
  "M150,240 C220,240 280,120 350,120 S480,240 550,240 S680,120 750,120 S880,240 950,240";

export default function AdvancedJourneyLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete && onComplete(), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 25);
    return () => clearInterval(interval);
  }, [onComplete]);

  const activeIndex = Math.floor(progress / 20);

  return (
    <div className="adv-loader">
      <img src={logo} alt="Vinsup Logo" className="adv-logo" />

      <div className="adv-svg-wrapper">
        <svg viewBox="0 0 1100 380" className="adv-svg" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="advGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00287A" />
              <stop offset="100%" stopColor="#E22027" />
            </linearGradient>
          </defs>

          {/* Dotted base path */}
          <path d={CURVE_PATH} className="adv-base" />

          {/* Animated progress path */}
          <path
            ref={pathRef}
            d={CURVE_PATH}
            className="adv-progress"
            style={{
              strokeDasharray: pathLength,
              strokeDashoffset: pathLength - (progress / 100) * pathLength,
            }}
          />

          {/* Milestones */}
          {MILESTONES.map((point, index) => {
            const isActive = index <= activeIndex;
            const isCurrent = index === activeIndex;

            // Labels: above for top dots, below for bottom dots
            const labelY = point.labelAbove ? -40 : 48;
            const words = point.label.split(" ");
            const mid = Math.ceil(words.length / 2);
            const line1 = words.slice(0, mid).join(" ");
            const line2 = words.slice(mid).join(" ");

            return (
              <g key={index} transform={`translate(${point.x},${point.y})`}>
                {isCurrent && <circle r="36" className="adv-pulse" />}
                <circle r="30" fill={isActive ? "rgba(226,32,39,0.12)" : "transparent"} />
                <circle
                  r="22"
                  className={`adv-dot ${isActive ? "active" : ""} ${isCurrent ? "current" : ""}`}
                />
                <g className={`adv-icon-group ${isActive ? "icon-active" : ""}`}>
                  {ICONS[index]}
                </g>

                {/* Label: above peaks, below valleys */}
                <text
                  textAnchor="middle"
                  className={`adv-label-svg ${isActive ? "label-active" : ""}`}
                >
                  <tspan x="0" y={labelY}>{line1}</tspan>
                  {line2 && <tspan x="0" dy="18">{line2}</tspan>}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="adv-bottom">
        <div className="adv-percent">{progress}%</div>
        <div className="adv-text">Building Your Future...</div>
        <div className="adv-bar-track">
          <div className="adv-bar-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}