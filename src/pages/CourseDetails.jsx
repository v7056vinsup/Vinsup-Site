import { useParams, Navigate } from "react-router-dom";
import courses, { normalizeCourseSlug } from "../data/courses";
import CourseTemplate from "./CourseTemplate";

export default function CourseDetails() {
  const { slug } = useParams();

  const course = courses.find((c) => {
    const slugs = [c.slug, c.navSlug].filter(Boolean).map(normalizeCourseSlug);
    return slugs.includes(normalizeCourseSlug(slug));
  });

  // Safety: invalid or removed course
  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  return <CourseTemplate {...course} />;
}
