import React, { useState } from "react";
import "./HomePopupModal.css";

const SUBMIT_URL = "/api/proxy";
const SECRET = "vinsup_2025_secure_key";

export default function HomePopupModal({ onSuccess, onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitMsg, setSubmitMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !city.trim()) {
      setSubmitMsg("Please fill all fields.");
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
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
        if (typeof onSuccess === "function") onSuccess();
      } else {
        setSubmitMsg("Submission failed. Please try again.");
      }
    } catch {
      setSubmitMsg("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="hpm-overlay">
      <div className="hpm-box">
        <div className="hpm-header">
          <button className="hpm-close" onClick={onClose} aria-label="Close">&#10005;</button>
          <span className="hpm-brand">Vinsup Skill Academy</span>
          <h2 className="hpm-title">Get Free Counselling</h2>
          <p className="hpm-sub">Fill in your details and we'll reach out to you shortly!</p>
        </div>

        <form className="hpm-form" onSubmit={handleSubmit} noValidate>
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
            {submitting ? "Submitting..." : "Get Free Counselling"}
          </button>
        </form>
      </div>
    </div>
  );
}
