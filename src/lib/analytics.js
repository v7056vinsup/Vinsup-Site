// src/lib/analytics.js
// Sends tracking events to Google Tag Manager through window.dataLayer.
// GTM (GTM-P8XLGSBW) decides which tags fire; the website only reports what happened.
// Never send personal details (name, phone, email) here — Google's policies forbid it.

export const EVENTS = {
  PAGE_VIEW: "vs_page_view",              // every page / route change
  POPUP_SHOWN: "enquiry_popup_shown",     // the 10-second enquiry pop-up appeared
  FORM_VIEW: "enquiry_form_view",         // an enquiry form is on screen (before filling)
  FORM_START: "enquiry_form_start",       // the visitor typed in the form for the first time
  FORM_ERROR: "enquiry_form_error",       // submit failed (validation or network)
  LEAD: "generate_lead",                  // enquiry sent successfully (after filling)
  SYLLABUS_DOWNLOAD: "syllabus_download"  // syllabus PDF downloaded after the form
};

// GTM keeps every key it has ever seen; reset ours on each push so a value from an
// earlier event (e.g. the last course viewed) never leaks into a later one.
const RESET_KEYS = {
  page_path: undefined, page_name: undefined, page_type: undefined, page_title: undefined,
  course_name: undefined, course_slug: undefined, form_location: undefined, form_name: undefined,
  error_type: undefined, file_name: undefined
};

export function track(event, params = {}) {
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ ...RESET_KEYS, event, ...params });
  } catch {
    /* tracking must never break the page */
  }
}

const STATIC_PAGES = {
  "/": ["Home", "home"],
  "/courses": ["Courses", "listing"],
  "/about": ["About", "info"],
  "/contact": ["Contact", "contact"],
  "/placements": ["Placements", "info"],
  "/testimonials": ["Testimonials", "info"],
  "/admissions": ["Admissions", "info"],
  "/faqs": ["FAQs", "info"],
  "/blog": ["Blog", "blog"],
  "/playbook": ["Playbook", "blog"],
  "/careers": ["Careers", "careers"],
  "/training-institute-in-coimbatore": ["Training Institute in Coimbatore", "landing"],
  "/privacy-policy": ["Privacy Policy", "legal"],
  "/terms": ["Terms", "legal"],
  "/refund-policy": ["Refund Policy", "legal"],
  "/login": ["Login", "account"],
  "/register": ["Register", "account"]
};

/**
 * Describe the current page for reports.
 * Returns null for old course URLs that are about to redirect, so they are not counted twice.
 */
export function getPageInfo(pathname = "/", courses = []) {
  const path = pathname.replace(/\/+$/, "") || "/";

  const course = path.match(/^\/courses\/([^/]+)$/);
  if (course) {
    const slug = decodeURIComponent(course[1]);
    if (!courses.length) return { page_path: path, page_name: `Course - ${slug}`, page_type: "course", course_slug: slug };
    const c = courses.find((x) => x.slug === slug);
    if (!c) return null; // legacy URL -> CourseDetails redirects to the clean one
    return { page_path: path, page_name: `Course - ${c.title}`, page_type: "course", course_name: c.title, course_slug: c.slug };
  }

  if (STATIC_PAGES[path]) {
    const [page_name, page_type] = STATIC_PAGES[path];
    return { page_path: path, page_name, page_type };
  }

  if (path.startsWith("/blog/")) return { page_path: path, page_name: "Blog Post", page_type: "blog" };
  if (path.startsWith("/playbook/")) return { page_path: path, page_name: "Playbook Post", page_type: "blog" };
  if (path.startsWith("/jobs/") || path.startsWith("/apply/")) return { page_path: path, page_name: "Job", page_type: "careers" };

  return { page_path: path, page_name: "Other", page_type: "other" };
}
