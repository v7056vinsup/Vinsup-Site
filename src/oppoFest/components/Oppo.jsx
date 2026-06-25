import { useRef, useState } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import TickerBanner from "./TickerBanner";
import EventHighlights from "./EventHighlights";
import VenueSection from "./VenueSection";
import BookingSection from "./BookingSection";
import Footer from "./Footer";
import SpeedLines from "./SpeedLines";
import "./Oppo.css";
export default function Oppo() {
  const bookingRef = useRef(null);
  const [showPassModal, setShowPassModal] = useState(false);
const [showStudentForm, setShowStudentForm] = useState(false);

  function scrollToBooking() {
    bookingRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Ambient speed lines */}
      <SpeedLines />

      {/* Toast notifications */}
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#1a1a1a",
            color: "#fff",
            border: "1px solid rgba(224,27,27,0.4)",
            fontFamily: "'Rajdhani', sans-serif",
            fontSize: "15px",
          },
        }}
      />

      {/* Navigation */}
      <Navbar onBookClick={scrollToBooking} showPassModal={showPassModal} setShowPassModal={setShowPassModal} showStudentForm={showStudentForm} setShowStudentForm={setShowStudentForm} />

      {/* Hero */}
      <HeroSection onBookClick={scrollToBooking} showPassModal={showPassModal} setShowPassModal={setShowPassModal} showStudentForm={showStudentForm} setShowStudentForm={setShowStudentForm} />

      {/* Ticker */}
      <TickerBanner />

      {/* Event highlights */}
      <div id="highlights">
        <EventHighlights />
      </div>

      {/* Venue */}
      <div id="venue">
        <VenueSection />
      </div>

      {/* Booking */}
      <BookingSection sectionRef={bookingRef} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
