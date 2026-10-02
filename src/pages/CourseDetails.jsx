import { useParams, Navigate } from "react-router-dom";
import courses, { normalizeCourseSlug, getCourseRouteHref } from "../data/courses";
import CourseTemplate from "./CourseTemplate";

export default function CourseDetails() {
  const { slug } = useParams();
  const requested = normalizeCourseSlug(slug);

  const course = courses.find((c) => {
    const slugs = [c.slug, c.navSlug, ...(c.aliases || [])].filter(Boolean).map(normalizeCourseSlug);
    return slugs.includes(requested);
  });

  // Safety: invalid or removed course
  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  // Old URLs (/courses/AI integrated data-analytics, /courses/frontend) -> one clean canonical URL
  if (requested !== normalizeCourseSlug(course.slug)) {
    return <Navigate to={getCourseRouteHref(course)} replace />;
  }

  return <CourseTemplate key={course.slug} {...course} />;
}
