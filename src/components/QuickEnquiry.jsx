import React, { useState, useEffect } from "react";
import "./QuickEnquiry.css";

export default function QuickEnquiry({ onSuccess }) {
  const submitUrl = "/api/proxy";
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
    message: "",
  });

  // OTP state for phone verification
  const [otpSent, setOtpSent] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpMsg, setOtpMsg] = useState("");
  const [otpLoading, setOtpLoading] = useState(false);

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
    // Reset OTP state if phone number changes
    if (name === "phone") {
      setOtpSent(false);
      setOtpVerified(false);
      setOtpValue("");
      setOtpMsg("");
    }
  }

  async function sendOtp() {
    if (!/^\d{10}$/.test(form.phone)) {
      setOtpMsg("Enter a valid 10-digit WhatsApp number.");
      return;
    }
    setOtpLoading(true);
    setOtpMsg("Sending OTP to WhatsApp...");
    try {
      const resp = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: form.phone }),
      });
      const data = await resp.json();
      if (resp.ok && data.success) {
        setOtpSent(true);
        setOtpMsg("OTP sent to your WhatsApp. Enter it below.");
      } else {
        setOtpMsg(data.message || "Failed to send OTP. Try again.");
      }
    } catch {
      setOtpMsg("Network error. Please try again.");
    } finally {
      setOtpLoading(false);
    }
  }

  async function verifyOtp() {
    if (!otpValue.trim()) {
      setOtpMsg("Enter the OTP you received.");
      return;
    }
    setOtpLoading(true);
    setOtpMsg("Verifying...");
    try {
      const resp = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: form.phone, otp: otpValue }),
      });
      const data = await resp.json();
      if (resp.ok && data.success) {
        setOtpVerified(true);
        setOtpMsg("WhatsApp number verified ✅");
      } else {
        setOtpMsg(data.message || "Wrong OTP. Try again.");
      }
    } catch {
      setOtpMsg("Network error. Please try again.");
    } finally {
      setOtpLoading(false);
    }
  }

  function validate() {
    const err = {};
    if (!form.name.trim()) err.name = "Required";
    if (!form.email.trim()) err.email = "Required";
    if (!form.phone.trim()) err.phone = "Required";
    if (!otpVerified) err.phone = "Please verify your WhatsApp number";
    return err;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length) return;

    setLoading(true);
    setStatus({ type: "", text: "" });

    try {
      const resp = await fetch(submitUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, secret }),
      });

      const rawText = await resp.text();
      let json = null;
      try { json = JSON.parse(rawText); } catch { /* non-JSON */ }

      if (!resp.ok) {
        throw new Error(json?.message || rawText || resp.statusText);
      }

      setForm({ name: "", email: "", phone: "", course: courses[0], message: "" });
      setOtpSent(false);
      setOtpVerified(false);
      setOtpValue("");
      setOtpMsg("");
      setErrors({});
      setShowThanks(true);
      setStatus({ type: "success", text: "Sent successfully!" });

      if (onSuccess && typeof onSuccess === "function") onSuccess();
      setTimeout(() => setShowThanks(false), 5000);
    } catch (err) {
      setStatus({ type: "error", text: "Failed: " + err.message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="qe-full-card">
        <h2 className="qe-title">Quick Enquiry Here</h2>

        {status.text && (
          <div className={status.type === "success" ? "qe-alert-success" : "qe-alert-error"}>
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

          {/* Phone + WhatsApp OTP */}
          <div className="qe-field-group">
            <div className="qe-row-inline">
              <label htmlFor="phone">Phone *</label>
              <div className="qe-phone-wrap">
                <input
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="WhatsApp number"
                  maxLength={10}
                  disabled={otpVerified}
                />
                {!otpVerified && (
                  <button
                    type="button"
                    className="qe-btn-otp"
                    onClick={sendOtp}
                    disabled={otpLoading}
                  >
                    {otpLoading && !otpSent ? "Sending..." : otpSent ? "Resend" : "Send OTP"}
                  </button>
                )}
              </div>
            </div>

            {otpSent && !otpVerified && (
              <div className="qe-otp-row">
                <input
                  className="qe-otp-input"
                  type="tel"
                  value={otpValue}
                  onChange={(e) => setOtpValue(e.target.value.replace(/[^0-9]/g, ""))}
                  placeholder="Enter OTP"
                  maxLength={6}
                />
                <button
                  type="button"
                  className="qe-btn-verify"
                  onClick={verifyOtp}
                  disabled={otpLoading}
                >
                  {otpLoading ? "Verifying..." : "Verify"}
                </button>
              </div>
            )}

            {otpMsg && (
              <p className={`qe-otp-msg ${otpVerified ? "qe-otp-msg--ok" : ""}`}>
                {otpMsg}
              </p>
            )}

            {errors.phone && <span className="qe-err">{errors.phone}</span>}
          </div>

          {/* Course */}
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
          </div>

          {/* Message */}
          <div className="qe-row-inline">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message"
              rows={3}
            />
          </div>

          <div className="qe-actions">
            <button type="submit" className="btn-primary" disabled={loading || !otpVerified}>
              {loading ? "Sending..." : "Submit Enquiry"}
            </button>
            <button
              type="button"
              className="btn-outline"
              onClick={() => {
                setForm({ name: "", email: "", phone: "", course: courses[0], message: "" });
                setOtpSent(false);
                setOtpVerified(false);
                setOtpValue("");
                setOtpMsg("");
                setErrors({});
                setStatus({ type: "", text: "" });
              }}
            >
              Clear
            </button>
          </div>

          {!otpVerified && (
            <p className="qe-otp-note">Verify your WhatsApp number to submit.</p>
          )}
        </form>
      </div>

      {/* THANK YOU MODAL */}
      {showThanks && (
        <div className="qe-modal-overlay">
          <div className="qe-modal">
            <button className="qe-modal-close" onClick={() => setShowThanks(false)}>×</button>
            <h3>Thanks for contacting us!</h3>
            <p>We will reach out within 24 hours.</p>
          </div>
        </div>
      )}
    </>
  );
}
