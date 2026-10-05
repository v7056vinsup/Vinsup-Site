import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./HomePopupModal.css";
import { track, getPageInfo, EVENTS } from "../lib/analytics";
import allCourses from "../data/courses";

const SUBMIT_URL = "/api/proxy";
const SECRET = "vinsup_2025_secure_key";

export default function HomePopupModal({ onSuccess, onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitMsg, setSubmitMsg] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();
  const startedRef = useRef(false);
  const page = getPageInfo(pathname, allCourses) || { page_path: pathname };
  const baseParams = () => ({ form_location: "popup_10s", form_name: "career_guidance_popup", page_path: page.page_path, page_name: page.page_name });

  // the pop-up appeared = "before filling" for this form
  useEffect(() => {
    if (!isVisible) return;
    track(EVENTS.POPUP_SHOWN, baseParams());
    track(EVENTS.FORM_VIEW, baseParams());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  function handleFirstInput() {
    if (startedRef.current) return;
    startedRef.current = true;
    track(EVENTS.FORM_START, baseParams());
  }

  useEffect(() => {
    const hasSubmitted = localStorage.getItem('homePopupSubmitted');
    if (hasSubmitted === 'true') {
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !city.trim()) {
      track(EVENTS.FORM_ERROR, { ...baseParams(), error_type: "validation" });
      setSubmitMsg("Please fill all fields.");
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      track(EVENTS.FORM_ERROR, { ...baseParams(), error_type: "validation" });
      setSubmitMsg("Enter a valid 10-digit phone number.");
      return;
    }

    setSubmitting(true);
    setSubmitMsg("");
    try {
      const resp = await fetch(SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, city, source: "Home Popup", secret: SECRET }),
      });
      if (resp.ok) {
        // "after filling": the pop-up enquiry reached our sheet
        track(EVENTS.LEAD, baseParams());
        localStorage.setItem('homePopupSubmitted', 'true');
        setName("");
        setPhone("");
        setCity("");
        setIsVisible(false);
        if (typeof onSuccess === "function") onSuccess();
        if (typeof onClose === "function") onClose();
      } else {
        track(EVENTS.FORM_ERROR, { ...baseParams(), error_type: "submit_failed" });
        setSubmitMsg("Submission failed. Please try again.");
      }
    } catch {
      track(EVENTS.FORM_ERROR, { ...baseParams(), error_type: "submit_failed" });
      setSubmitMsg("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const handleClose = () => {
    setIsVisible(false);
    if (typeof onClose === "function") onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="hpm-overlay">
      <div className="hpm-box">
        <div className="hpm-header">
          <span className="hpm-brand">Vinsup Skill Academy</span>
          <h2 className="hpm-title">Get Free Career Guidance</h2>
          <p className="hpm-sub">Please fill in your details to access the website</p>
          <p className="hpm-sub">We’re gearing up to connect with you— explore our website</p>
        </div>

        <form className="hpm-form" onSubmit={handleSubmit} onInput={handleFirstInput} onChange={handleFirstInput} noValidate>
          <div className="hpm-field">
            <label>Full Name *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              autoFocus
            />
          </div>

          <div className="hpm-field">
            <label>Phone Number *</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))}
              placeholder="10-digit mobile number"
              maxLength={10}
            />
          </div>

          <div className="hpm-field">
            <label>City *</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Your city"
            />
          </div>

          {submitMsg && <p className="hpm-submit-err">{submitMsg}</p>}

          <button type="submit" className="hpm-btn-submit" disabled={submitting}>
            {submitting ? "Submitting..." : "Get Free Career Guidance"}
          </button>
        </form>
      </div>
    </div>
  );
}
