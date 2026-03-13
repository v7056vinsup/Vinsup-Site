import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  if (typeof window !== "undefined" && window.history?.scrollRestoration) {
    window.history.scrollRestoration = "manual";
  }

  useLayoutEffect(() => {
    function forceTop() {
      try {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      } catch (e) {}
    }

    forceTop();
    const t1 = window.setTimeout(forceTop, 40);
    const t2 = window.setTimeout(forceTop, 220);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [pathname]);

  return null;
}