import React, { useState } from "react";
import "./HomePopupModal.css";

const SUBMIT_URL = "/api/proxy";
const SECRET = "vinsup_2025_secure_key";

export default function HomePopupModal({ onSuccess }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  // OTP flow
  const [otpSent, setOtpSent] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpMsg, setOtpMsg] = useState("");
  const [otpLoading, setOtpLoading] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [submitMsg, setSubmitMsg] = useState("");

  async function sendOtp() {
    if (!/^\d{10}$/.test(phone)) {
      setOtpMsg("Enter a valid 10-digit WhatsApp number.");
      return;
    }
    setOtpLoading(true);
    setOtpMsg("Sending OTP to WhatsApp...");
    try {
      const resp = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
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
        body: JSON.stringify({ phone, otp: otpValue }),
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

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !city.trim()) {
      setSubmitMsg("Please fill all fields.");
      return;
    }
    if (!otpVerified) {
      setSubmitMsg("Please verify your WhatsApp number first.");
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
          <div className="hpm-logo-row">
            <span className="hpm-brand">Vinsup Skill Academy</span>
          </div>
          <h2 className="hpm-title">Get Free Counselling</h2>
          <p className="hpm-sub">Fill in your details and we'll reach out to you shortly!</p>
        </div>

        <form className="hpm-form" onSubmit={handleSubmit} noValidate>
          {/* Name */}
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

          {/* Phone + OTP */}
          <div className="hpm-field">
            <label>WhatsApp Number *</label>
            <div className="hpm-phone-row">
              <input
                type="tel"
                value={phone}
                onChange={(e) => {
                  const val = e.target.value.replace(/[^0-9]/g, "");
                  setPhone(val);
                  if (otpSent) { setOtpSent(false); setOtpVerified(false); setOtpValue(""); setOtpMsg(""); }
                }}
                placeholder="10-digit number"
                maxLength={10}
                disabled={otpVerified}
              />
              {!otpVerified && (
                <button
                  type="button"
                  className="hpm-btn-otp"
                  onClick={sendOtp}
                  disabled={otpLoading}
                >
                  {otpLoading && !otpSent ? "Sending..." : otpSent ? "Resend" : "Send OTP"}
                </button>
              )}
            </div>

            {otpSent && !otpVerified && (
              <div className="hpm-otp-verify-row">
                <input
                  type="tel"
                  value={otpValue}
                  onChange={(e) => setOtpValue(e.target.value.replace(/[^0-9]/g, ""))}
                  placeholder="Enter OTP"
                  maxLength={6}
                />
                <button
                  type="button"
                  className="hpm-btn-verify"
                  onClick={verifyOtp}
                  disabled={otpLoading}
                >
                  {otpLoading ? "Verifying..." : "Verify"}
                </button>
              </div>
            )}

            {otpMsg && (
              <p className={`hpm-otp-msg ${otpVerified ? "hpm-otp-msg--ok" : "hpm-otp-msg--info"}`}>
                {otpMsg}
              </p>
            )}
          </div>

          {/* City */}
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

          <button
            type="submit"
            className="hpm-btn-submit"
            disabled={submitting || !otpVerified}
          >
            {submitting ? "Submitting..." : "Get Free Counselling"}
          </button>

          {!otpVerified && (
            <p className="hpm-note">Verify your WhatsApp number to submit.</p>
          )}
        </form>
      </div>
    </div>
  );
}
