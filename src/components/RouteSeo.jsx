import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import courses from "../data/courses";
import { getSeoForPath, SITE_NAME } from "../data/seo";

// Updates <head> tags in place on every route change, so client-side navigation
// keeps the same title / description / canonical / JSON-LD as the prerendered HTML.
function setMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setJsonLd(items) {
  let el = document.getElementById("page-jsonld");
  if (!items || !items.length) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = "page-jsonld";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(items.length === 1 ? items[0] : items);
}

export default function RouteSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Course pages with legacy URLs redirect first; skip until we land on the clean URL.
    const seo = getSeoForPath(pathname, courses);
    document.title = seo.title;
    setMeta("name", "description", seo.description);
    setMeta("name", "keywords", seo.keywords);
    setCanonical(seo.canonical);
    setMeta("property", "og:title", seo.title);
    setMeta("property", "og:description", seo.description);
    setMeta("property", "og:url", seo.canonical);
    setMeta("property", "og:image", seo.image);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("name", "twitter:title", seo.title);
    setMeta("name", "twitter:description", seo.description);
    setMeta("name", "twitter:image", seo.image);
    setJsonLd(seo.jsonLd);
  }, [pathname]);

  return null;
}
