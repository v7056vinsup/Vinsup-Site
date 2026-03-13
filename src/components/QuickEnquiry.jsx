import React, { useState, useEffect } from "react";
import "./QuickEnquiry.css";


export default function QuickEnquiry({ onSuccess }) {


  const submitUrl = "http://localhost:3000/api/proxy"; 
  const secret = "vinsup_2025_secure_key";

  const courses = [
    "Data Verse Pro",
    "DevStack - Fullstack with DevOps",
    "Data Analytics",
    "Front-end Development",
    "UX UI Designing",
    "Digital Marketing",
  ];

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: courses[0],
    // mode: "Online",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", text: "" });
  const [errors, setErrors] = useState({});
  const [showThanks, setShowThanks] = useState(false);

  useEffect(() => {
    function keyHandler(e) {
      if (e.key === "Escape") setShowThanks(false);
    }
    window.addEventListener("keydown", keyHandler);
    return () => window.removeEventListener("keydown", keyHandler);
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    const err = {};
    if (!form.name.trim()) err.name = "Required";
    if (!form.email.trim()) err.email = "Required";
    if (!form.phone.trim()) err.phone = "Required";
   
    return err;
  }

  async function handleSubmit(e) {
  e.preventDefault();

  // 1️⃣ Frontend validation
  const err = validate();
  setErrors(err);
  if (Object.keys(err).length) return;

  setLoading(true);
  setStatus({ type: "", text: "" });

  try {
    // 2️⃣ API call
    const resp = await fetch(submitUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, secret }),
    });

    const rawText = await resp.text();
    let json = null;

    try {
      json = JSON.parse(rawText);
    } catch {
      // non-JSON response fallback
    }

    if (!resp.ok) {
      throw new Error(json?.message || rawText || resp.statusText);
    }

    // 3️⃣ SUCCESS — reset form
    setForm({
      name: "",
      email: "",
      phone: "",
      course: courses[0],
      message: "",
    });

    setErrors({});
    setShowThanks(true);
    setStatus({ type: "success", text: "Sent successfully!" });

    // 4️⃣ 🔔 Notify parent ONLY if callback exists
    if (onSuccess && typeof onSuccess === "function") {
      onSuccess();
    }

    // 5️⃣ Auto-close thank-you modal
    setTimeout(() => setShowThanks(false), 5000);

  } catch (err) {
    // 6️⃣ Error handling
    setStatus({ type: "error", text: "Failed: " + err.message });
  } finally {
    // 7️⃣ Cleanup
    setLoading(false);
  }
}


  return (
    <>
      <div className="qe-full-card">
        <h2 className="qe-title">Quick Enquiry Here</h2>

        {status.text && (
          <div
            className={
              status.type === "success" ? "qe-alert-success" : "qe-alert-error"
            }
          >
            {status.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="qe-form" noValidate>

          {/* Name */}
          <div className="qe-row-inline">
            <label htmlFor="name">Name *</label>
            <input
              id="name" 
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
            />
            {errors.name && <span className="qe-err">{errors.name}</span>}
          </div>

          {/* Email */}
          <div className="qe-row-inline">
            <label htmlFor="email">Email *</label>
            <input
              id="email" 
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
            {errors.email && <span className="qe-err">{errors.email}</span>}
          </div>

          {/* Phone */}
          <div className="qe-row-inline">
            <label htmlFor="phone">Phone *</label>
            <input
              id="phone" 
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone number"
            />
            {errors.phone && <span className="qe-err">{errors.phone}</span>}
          </div>

          {/* Course + Mode */}
          <div className="qe-double">
            <div className="qe-row-inline">
              <label htmlFor="course">Course</label>
              <select
                id="course" 
                name="course"
                value={form.course}
                onChange={handleChange}
              >
                {courses.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* <div className="qe-row-inline">
              <label htmlFor="mode">Mode</label>
              <select
                id="mode"
                name="mode"
                value={form.mode}
                onChange={handleChange}
              >
                <option>Online</option>
                <option>Offline</option>
              </select>
            </div> */}
          </div>

          {/* Message */}
          <div className="qe-row-inline">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message" 
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message"
              rows={3}
            ></textarea>
            {errors.message && <span className="qe-err">{errors.message}</span>}
          </div>

          <div className="qe-actions">
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? "Sending..." : "Submit Enquiry"}
            </button>

            <button
              type="button"
              className="btn-outline"
              onClick={() => {
                setForm({
                  name: "",
                  email: "",
                  phone: "",
                  course: courses[0],
                  // mode: "Online",
                  message: "",
                });
                setErrors({});
                setStatus({ type: "", text: "" });
              }}
            >
              Clear
            </button>
          </div>

        </form>
      </div>

      {/* THANK YOU MODAL */}
      {showThanks && (
        <div className="qe-modal-overlay">
          <div className="qe-modal">
            <button className="qe-modal-close" onClick={() => setShowThanks(false)}>
              ×
            </button>
            <h3>Thanks for contacting us!</h3>
            <p>We will reach out within 24 hours.</p>
          </div>
        </div>
      )}
    </>
  );
}
