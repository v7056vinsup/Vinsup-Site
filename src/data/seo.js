// src/data/seo.js
// Single source for page titles, descriptions and structured data.
// Plain data only (no image imports) so scripts/prerender-seo.mjs can import it at build time.
import { syllabus2026 } from "./syllabus2026.js";

export const SITE_URL = "https://www.vinsupskillacademy.com";
export const SITE_NAME = "Vinsup Skill Academy";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og/vinsup-skill-academy.jpg`;

export const BUSINESS = {
  name: SITE_NAME,
  phone: "+91-8248826374",
  phoneAlt: "+91-8870060607",
  email: "vinsupskillacademy@gmail.com",
  street: "148, A B Gopalsamy Koil Street, Sridevi Nagar, Ganapathy",
  locality: "Coimbatore",
  region: "Tamil Nadu",
  postalCode: "641006",
  country: "IN",
  lat: 11.036361,
  lng: 76.97409,
  mapUrl: "https://maps.google.com/?cid=14769707865732957566",
  instagram: "https://www.instagram.com/vinsupskillacademy/",
  parent: { name: "Vinsup Infotech Pvt Ltd", url: "https://vinsupinfotech.com/" }
};

// Areas we serve around the Ganapathy campus (used in copy and areaServed schema)
export const COIMBATORE_AREAS = [
  "Ganapathy", "Gandhipuram", "Saravanampatti", "Peelamedu", "R.S. Puram", "Saibaba Colony",
  "Thudiyalur", "Kavundampalayam", "Ramanathapuram", "Singanallur", "Hopes College",
  "Ukkadam", "Town Hall", "Vadavalli", "Kuniyamuthur", "Sulur", "Pollachi", "Mettupalayam", "Tiruppur"
];

// Course pages that are not part of the 2026 deck refresh still get proper meta
const extraCourses = {
  "devstack-fullstack-devops": {
    title: "DevStack: Full Stack with DevOps",
    short: "Full stack web development with React, Node.js, MongoDB and DevOps tools like Git, Docker and Jenkins.",
    seo: {
      title: "Full Stack Developer Course with DevOps in Coimbatore | DevStack | Vinsup",
      description: "DevStack full stack + DevOps course in Coimbatore: HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, Git, Docker and Jenkins with projects, internship and placement support.",
      keywords: "full stack developer course coimbatore, devops course coimbatore, full stack with devops training coimbatore, software training institute coimbatore"
    }
  }
};

export const courseSeoBySlug = { ...extraCourses, ...syllabus2026 };

export const staticPages = {
  "/": {
    title: "Vinsup Skill Academy | Best IT & Digital Marketing Training Institute in Coimbatore",
    description: "Career-focused, AI-integrated training in Coimbatore: Data Science & Generative AI, Data Analytics, MERN Stack, UI/UX Design and Digital Marketing with live projects, internship and placement support. 25,000+ students trained.",
    keywords: "software training institute in coimbatore, IT training institute coimbatore, best institute in coimbatore with placement, data science course coimbatore, digital marketing course coimbatore, full stack course coimbatore, ui ux course coimbatore"
  },
  "/courses": {
    title: "AI-Integrated IT Courses in Coimbatore with Placement | Vinsup Skill Academy",
    description: "Explore AI-integrated courses in Coimbatore: Data Science with GenAI, Data Analytics, MERN Stack, DevStack, UI/UX & Graphic Design and Digital Marketing. Classroom + online, with internship and guaranteed interview opportunities.",
    keywords: "courses in coimbatore, IT courses coimbatore, job oriented courses coimbatore, software courses with placement coimbatore"
  },
  "/training-institute-in-coimbatore": {
    title: "Software & Digital Marketing Training Institute in Coimbatore | Vinsup Skill Academy",
    description: "Looking for a training institute in Coimbatore? Vinsup Skill Academy in Ganapathy offers AI-integrated Data Science, Data Analytics, MERN Stack, UI/UX and Digital Marketing courses with placement support, easily reachable from Gandhipuram, Saravanampatti, Peelamedu and across Coimbatore.",
    keywords: "training institute in coimbatore, software training institute coimbatore, computer courses in coimbatore, it training ganapathy coimbatore, best institute near gandhipuram, courses near saravanampatti"
  },
  "/about": {
    title: "About Vinsup Skill Academy | Training Institute in Ganapathy, Coimbatore",
    description: "Vinsup Skill Academy, part of the Vinsup group, has trained 25,000+ students with industry-focused, AI-integrated courses, live projects and placement programs from its Coimbatore campus.",
    keywords: "vinsup skill academy, about vinsup, training institute ganapathy coimbatore"
  },
  "/placements": {
    title: "Placements & Hiring Partners | Vinsup Skill Academy Coimbatore",
    description: "See Vinsup Skill Academy placement stories and hiring partners. Job Readiness Program (JRP) and Interview Opportunity Program (IOP) with internship and guaranteed interviews.",
    keywords: "placement training coimbatore, courses with placement coimbatore, vinsup placements"
  },
  "/testimonials": {
    title: "Student Reviews & Testimonials | Vinsup Skill Academy Coimbatore",
    description: "Read real reviews from Vinsup Skill Academy students in Data Analytics, Data Science, Full Stack, UI/UX and Digital Marketing.",
    keywords: "vinsup skill academy reviews, vinsup reviews coimbatore"
  },
  "/contact": {
    title: "Contact Vinsup Skill Academy | Ganapathy, Coimbatore | +91 82488 26374",
    description: "Visit Vinsup Skill Academy at 148 Gopalsamy Koil Street, Sridevi Nagar, Ganapathy, Coimbatore 641006. Call +91 82488 26374 or WhatsApp us for course details and upcoming batches.",
    keywords: "vinsup skill academy contact, vinsup ganapathy address, training institute ganapathy coimbatore"
  },
  "/admissions": {
    title: "Admissions & Upcoming Batches | Vinsup Skill Academy Coimbatore",
    description: "Admissions are open for AI-integrated courses at Vinsup Skill Academy, Coimbatore. Check upcoming batches, fees support and how to enrol.",
    keywords: "admission coimbatore courses, upcoming batches coimbatore"
  },
  "/faqs": {
    title: "FAQs | Vinsup Skill Academy Coimbatore",
    description: "Answers to common questions about Vinsup Skill Academy courses, batches, certifications, internship and placement support.",
    keywords: "vinsup faq"
  },
  "/blog": {
    title: "Career, Tech & Marketing Blog | Vinsup Skill Academy",
    description: "Guides and career advice on data science, analytics, full stack development, UI/UX and digital marketing from Vinsup Skill Academy, Coimbatore.",
    keywords: "tech career blog, data science blog, digital marketing blog"
  },
  "/playbook": {
    title: "Playbook | Vinsup Skill Academy",
    description: "Practical playbooks on tools, careers and skills from the Vinsup Skill Academy team in Coimbatore.",
    keywords: "vinsup playbook"
  },
  "/careers": {
    title: "Careers at Vinsup | Jobs in Coimbatore",
    description: "Open roles at Vinsup Skill Academy and Vinsup Infotech in Coimbatore.",
    keywords: "jobs in coimbatore, vinsup careers"
  }
};

const abs = (path) => `${SITE_URL}${path === "/" ? "/" : path}`;

export const organizationJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: BUSINESS.name,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/og/vinsup-logo.png`,
  image: DEFAULT_OG_IMAGE,
  description: staticPages["/"].description,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.street,
    addressLocality: BUSINESS.locality,
    addressRegion: BUSINESS.region,
    postalCode: BUSINESS.postalCode,
    addressCountry: BUSINESS.country
  },
  geo: { "@type": "GeoCoordinates", latitude: BUSINESS.lat, longitude: BUSINESS.lng },
  hasMap: BUSINESS.mapUrl,
  areaServed: [
    { "@type": "City", name: "Coimbatore" },
    ...COIMBATORE_AREAS.map((name) => ({ "@type": "Place", name }))
  ],
  parentOrganization: { "@type": "Organization", name: BUSINESS.parent.name, url: BUSINESS.parent.url },
  sameAs: [BUSINESS.instagram, BUSINESS.parent.url]
});

const breadcrumb = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: abs(it.path) }))
});

const faqJsonLd = (faq = []) =>
  faq.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a }
        }))
      }
    : null;

export const coursePath = (slug) => `/courses/${slug}`;

export const courseJsonLd = (slug, course) => {
  const path = coursePath(slug);
  const items = [
    {
      "@context": "https://schema.org",
      "@type": "Course",
      "@id": `${abs(path)}#course`,
      name: course.title,
      description: course.seo?.description || course.short,
      url: abs(path),
      inLanguage: ["en", "ta"],
      provider: { "@id": `${SITE_URL}/#organization`, "@type": "EducationalOrganization", name: SITE_NAME, sameAs: `${SITE_URL}/` },
      ...(course.modules ? { syllabusSections: course.modules.map((m) => ({ "@type": "Syllabus", name: m.title, description: m.topics.join(", ") })) } : {}),
      ...(course.toolNames ? { teaches: course.toolNames.join(", ") } : {}),
      educationalCredentialAwarded: "Course Completion & Internship Certificate",
      hasCourseInstance: [
        {
          "@type": "CourseInstance",
          courseMode: "Onsite",
          courseWorkload: course.hours ? `PT${course.hours}H` : undefined,
          location: {
            "@type": "Place",
            name: `${SITE_NAME}, Ganapathy, Coimbatore`,
            address: {
              "@type": "PostalAddress",
              streetAddress: BUSINESS.street,
              addressLocality: BUSINESS.locality,
              addressRegion: BUSINESS.region,
              postalCode: BUSINESS.postalCode,
              addressCountry: BUSINESS.country
            }
          }
        },
        { "@type": "CourseInstance", courseMode: "Online", courseWorkload: course.hours ? `PT${course.hours}H` : undefined }
      ],
      offers: { "@type": "Offer", category: "Paid", availability: "https://schema.org/InStock", url: abs(path) }
    },
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Courses", path: "/courses" },
      { name: course.title, path }
    ]),
    faqJsonLd(course.faq)
  ];
  return items.filter(Boolean);
};

/**
 * Resolve SEO for a pathname. `runtimeCourses` (browser only) lets hidden/legacy
 * courses that are not in courseSeoBySlug still get a sensible title.
 */
export function getSeoForPath(pathname = "/", runtimeCourses = []) {
  const path = pathname.replace(/\/+$/, "") || "/";

  const courseMatch = path.match(/^\/courses\/([^/]+)$/);
  if (courseMatch) {
    const slug = decodeURIComponent(courseMatch[1]).trim().toLowerCase();
    const data =
      courseSeoBySlug[slug] ||
      (() => {
        const c = runtimeCourses.find((rc) => rc.slug === slug);
        return c ? { title: c.title, short: c.short, faq: c.faq } : null;
      })();
    if (data) {
      return {
        title: data.seo?.title || `${data.title} Course in Coimbatore | ${SITE_NAME}`,
        description: data.seo?.description || `${data.short} Classroom training in Coimbatore with projects and placement support.`,
        keywords: data.seo?.keywords || "",
        canonical: abs(coursePath(slug)),
        image: syllabus2026[slug] ? `${SITE_URL}/og/${slug}.jpg` : DEFAULT_OG_IMAGE,
        jsonLd: courseJsonLd(slug, data)
      };
    }
  }

  const page = staticPages[path];
  if (page) {
    const crumbs = path === "/" ? [] : [breadcrumb([{ name: "Home", path: "/" }, { name: page.title.split("|")[0].trim(), path }])];
    return {
      ...page,
      canonical: abs(path),
      image: DEFAULT_OG_IMAGE,
      jsonLd: path === "/" || path === "/contact" || path === "/training-institute-in-coimbatore"
        ? [organizationJsonLd(), ...crumbs]
        : crumbs
    };
  }

  return {
    ...staticPages["/"],
    canonical: abs(path),
    image: DEFAULT_OG_IMAGE,
    jsonLd: []
  };
}
