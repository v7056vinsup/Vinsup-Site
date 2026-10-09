// scripts/prerender-seo.mjs
// Runs after `vite build`. For every important route it writes dist/<route>/index.html with
// the right <title>, meta description, canonical, Open Graph tags, JSON-LD, and a crawlable
// text summary inside #root (React replaces it on load). Also writes sitemap.xml.
//
// Why: the site is a client-rendered SPA, so without this every URL serves the same
// homepage <head>. Search engines and WhatsApp/LinkedIn previews read these tags directly.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { getSeoForPath, staticPages, courseSeoBySlug, coursePath, SITE_URL, BUSINESS, COIMBATORE_AREAS } from "../src/data/seo.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const template = readFileSync(join(dist, "index.html"), "utf8");

const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function setTag(html, regex, replacement) {
  if (!regex.test(html)) throw new Error(`prerender: tag not found ${regex}`);
  return html.replace(regex, replacement);
}

function bodyFallback(path) {
  const m = path.match(/^\/courses\/([^/]+)$/);
  const nap = `<p>${esc(BUSINESS.name)}, ${esc(BUSINESS.street)}, ${esc(BUSINESS.locality)}, ${esc(BUSINESS.region)} ${esc(BUSINESS.postalCode)}. Phone: ${esc(BUSINESS.phone)}</p>`;
  if (m) {
    const c = courseSeoBySlug[m[1]];
    const modules = (c.modules || [])
      .map((mod, i) => `<li><strong>Module ${i + 1}: ${esc(mod.title)}</strong> - ${esc(mod.topics.join(", "))}</li>`)
      .join("");
    const projects = (c.projects || []).map((p) => `<li><strong>${esc(p.title)}</strong>: ${esc(p.desc)}</li>`).join("");
    const faq = (c.faq || []).map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join("");
    return `<article class="seo-fallback"><h1>${esc(c.title)} course in Coimbatore</h1><p>${esc(c.short)}</p>` +
      (modules ? `<h2>Syllabus</h2><ol>${modules}</ol>` : "") +
      (c.toolNames ? `<h2>Tools</h2><p>${esc(c.toolNames.join(", "))}</p>` : "") +
      (projects ? `<h2>Projects</h2><ul>${projects}</ul>` : "") +
      (c.roles ? `<h2>Career roles</h2><p>${esc(c.roles.join(", "))}</p>` : "") +
      (c.syllabusPdf ? `<p><a href="${esc(c.syllabusPdf)}">Download the ${esc(c.title)} syllabus (PDF)</a></p>` : "") +
      (faq ? `<h2>FAQs</h2>${faq}` : "") + nap + `</article>`;
  }
  const page = staticPages[path];
  const courseLinks = Object.entries(courseSeoBySlug)
    .map(([slug, c]) => `<li><a href="${coursePath(slug)}">${esc(c.title)} course in Coimbatore</a></li>`)
    .join("");
  const areas = path === "/training-institute-in-coimbatore" ? `<p>Serving students from ${esc(COIMBATORE_AREAS.join(", "))}.</p>` : "";
  return `<article class="seo-fallback"><h1>${esc(page.title.split("|")[0].trim())}</h1><p>${esc(page.description)}</p>${areas}<h2>Courses</h2><ul>${courseLinks}</ul>${nap}</article>`;
}

function render(path) {
  const seo = getSeoForPath(path);
  let html = template;
  html = setTag(html, /<title>[\s\S]*?<\/title>/, `<title>${esc(seo.title)}</title>`);
  html = setTag(html, /<meta\s+name="description"[\s\S]*?\/>/, `<meta name="description" content="${esc(seo.description)}" />`);
  html = setTag(html, /<meta\s+name="keywords"[\s\S]*?\/>/, `<meta name="keywords" content="${esc(seo.keywords)}" />`);
  html = setTag(html, /<link rel="canonical"[^>]*\/>/, `<link rel="canonical" href="${esc(seo.canonical)}" />`);
  html = setTag(html, /<meta property="og:title"[^>]*\/>/, `<meta property="og:title" content="${esc(seo.title)}" />`);
  html = setTag(html, /<meta\s+property="og:description"[\s\S]*?\/>/, `<meta property="og:description" content="${esc(seo.description)}" />`);
  html = setTag(html, /<meta property="og:url"[^>]*\/>/, `<meta property="og:url" content="${esc(seo.canonical)}" />`);
  html = setTag(html, /<meta property="og:image" [^>]*\/>/, `<meta property="og:image" content="${esc(seo.image)}" />`);
  html = setTag(html, /<meta name="twitter:title"[^>]*\/>/, `<meta name="twitter:title" content="${esc(seo.title)}" />`);
  html = setTag(html, /<meta\s+name="twitter:description"[\s\S]*?\/>/, `<meta name="twitter:description" content="${esc(seo.description)}" />`);
  html = setTag(html, /<meta name="twitter:image"[^>]*\/>/, `<meta name="twitter:image" content="${esc(seo.image)}" />`);
  if (seo.jsonLd?.length) {
    const json = JSON.stringify(seo.jsonLd.length === 1 ? seo.jsonLd[0] : seo.jsonLd).replace(/</g, "\\u003c");
    html = html.replace("</head>", `  <script type="application/ld+json" id="page-jsonld">${json}</script>\n  </head>`);
  }
  html = setTag(html, /<div id="root"><\/div>/, `<div id="root">${bodyFallback(path)}</div>`);
  return html;
}

// SPA fallback for every other URL (blog posts, jobs, etc.). No canonical / og:url here, so those
// pages never point search engines at the homepage; RouteSeo sets the right tags in the browser.
writeFileSync(
  join(dist, "app.html"),
  template
    .replace(/\s*<link rel="canonical"[^>]*\/>/, "")
    .replace(/\s*<meta property="og:url"[^>]*\/>/, "")
);

const routes = [...Object.keys(staticPages), ...Object.keys(courseSeoBySlug).map(coursePath)];

for (const path of routes) {
  const out = path === "/" ? join(dist, "index.html") : join(dist, path, "index.html");
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, render(path));
}

const today = new Date().toISOString().slice(0, 10);
const priority = (p) => (p === "/" ? "1.0" : p.startsWith("/courses/") || p === "/training-institute-in-coimbatore" ? "0.9" : p === "/courses" ? "0.9" : "0.6");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((p) => `  <url><loc>${SITE_URL}${p === "/" ? "/" : p}</loc><lastmod>${today}</lastmod><priority>${priority(p)}</priority></url>`)
  .join("\n")}
</urlset>
`;
writeFileSync(join(dist, "sitemap.xml"), sitemap);

console.log(`prerender-seo: wrote ${routes.length} pages + sitemap.xml`);
