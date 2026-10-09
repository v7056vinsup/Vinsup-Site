import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext, lazy, Suspense } from "react";
import { LoadingContext } from "./components/LoadingContext";
import "./lib/testimonialsCache";
import "./lib/placementsCache";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Loader from "./components/Loader";
const PlayBook = lazy(() => import("./pages/PlayBook.jsx"));
const PlayBookDetails = lazy(() => import("./pages/PlayBookDetails.jsx"));
import ScrollToTop from "./components/ScrollToTop.jsx";
import RouteSeo from "./components/RouteSeo.jsx";
import RouteTracking from "./components/RouteTracking.jsx";
const CoimbatoreInstitute = lazy(() => import("./pages/CoimbatoreInstitute.jsx"));
// import Preloader from "./components/Preloader";

// Pages
import Home from "./pages/Home.jsx";
const About = lazy(() => import("./pages/About.jsx"));
const Courses = lazy(() => import("./pages/Courses.jsx"));
const Palcements = lazy(() => import("./pages/Placements.jsx"));
const Testimonials = lazy(() => import("./pages/Testimonials.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Register = lazy(() => import("./pages/Register.jsx"));
const CourseDetails = lazy(() => import("./pages/CourseDetails.jsx"));
const Careers = lazy(() => import("./pages/Careers.jsx"));
import SocialExpand from "./components/SocialExpand.jsx";
// import Oppo from "./oppoFest/components/Oppo.jsx";


const Blog = lazy(() => import("./pages/Blog.jsx"));
const BlogDetails = lazy(() => import("./pages/BlogDetails.jsx"));

const JobDetails = lazy(() => import("./pages/JobDetails"));
const ApplyJob = lazy(() => import("./pages/ApplyJob"));

const Admissions = lazy(() => import("./pages/Admissions.jsx"));
const FAQs = lazy(() => import("./pages/FAQs.jsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.jsx"));
const Terms = lazy(() => import("./pages/Terms.jsx"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy.jsx"));
const Placements = lazy(() => import("./pages/Placements.jsx"));
// import Alumini from "./pages/Alumini.jsx";

export default function App() {
  const { loading } = useContext(LoadingContext);

  return (
    <div className="app-shell">
      {loading && <Loader />}
      <ScrollToTop />
      <RouteSeo />
      <RouteTracking />
      <Navbar />
      <SocialExpand />    
      <main className="page-wrapper">
        <Suspense fallback={<div style={{ minHeight: "60vh" }} />}>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/placements" element={<Placements />} />
          {/* <Route path="/alumni" element={<Alumini />} />
          <Route path="/alumini" element={<Alumini />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses/:slug" element={<CourseDetails />} />
          <Route path="/playbook" element={<PlayBook />} />
          <Route path="/playbook/:id" element={<PlayBookDetails />} />

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
          <Route path="/training-institute-in-coimbatore" element={<CoimbatoreInstitute />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          {/* <Route path="/oppofest" element={<Oppo />} /> */}
        </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
