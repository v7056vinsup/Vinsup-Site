import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import courses from "../data/courses";
import { track, getPageInfo, EVENTS } from "../lib/analytics";

// Pushes one vs_page_view event per page the visitor sees (including in-app navigation),
// with the page name/type/course so GTM can fire page-specific tags.
export default function RouteTracking() {
  const { pathname } = useLocation();

  useEffect(() => {
    const info = getPageInfo(pathname, courses);
    if (!info) return;
    // wait a tick so RouteSeo has set the new document.title
    const t = setTimeout(() => track(EVENTS.PAGE_VIEW, { ...info, page_title: document.title }), 0);
    return () => clearTimeout(t);
  }, [pathname]);

  return null;
}
