import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "./components/LoadingContext";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Loader from "./components/Loader";
import PlayBook from "./pages/PlayBook.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
// import Preloader from "./components/Preloader";

// Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Courses from "./pages/Courses.jsx";
import Palcements from "./pages/Placements.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import CourseDetails from "./pages/CourseDetails.jsx";
import Careers from "./pages/Careers.jsx";
import SocialExpand from "./components/SocialExpand.jsx";



import Blog from "./pages/Blog.jsx";
import BlogDetails from "./pages/BlogDetails.jsx";

import JobDetails from "./pages/JobDetails";
import ApplyJob from "./pages/ApplyJob";

import Admissions from "./pages/Admissions.jsx";
import FAQs from "./pages/FAQs.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Terms from "./pages/Terms.jsx";
import RefundPolicy from "./pages/RefundPolicy.jsx";
import Placements from "./pages/Placements.jsx";

export default function App() {
  const { loading } = useContext(LoadingContext);

  // 🔥 THE MAIN PRELOADER LOGIC
  // const [showPreloader, setShowPreloader] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowPreloader(false);
  //   }, 2000); // show for 2 seconds

  //   return () => clearTimeout(timer);
  // }, []);

  // if (showPreloader) {
  //   return <Preloader />; // 🔥 SHOW ONLY PRELOADER
  // }

  return (
    <div className="app-shell">
      {loading && <Loader />}
      <ScrollToTop />
      <Navbar />
      <SocialExpand />    
      <main className="page-wrapper">
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses/:slug" element={<CourseDetails />} />
          <Route path="/playbook" element={<PlayBook />} />

          {/* course pages */}
          
          <Route path="/careers" element={<Careers />} />
  
          {/* blogs */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/apply/:jobId" element={<ApplyJob />} />

          {/* footer links */}
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
