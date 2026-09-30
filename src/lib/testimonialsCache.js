const CACHE_KEY = "vinsup_testimonials_cache";
export const TESTIMONIALS_API_URL =
  "https://script.google.com/macros/s/AKfycbzS5oJOJ5QwKyuvdYEn21DCXNAN93aoeo48hN1rKscC7A5uLFogQ0QCzCxCMMjrSuO6/exec";

let memory = null;
let inflight = null;
const listeners = new Set();

function readStorage() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function getTestimonialsCache() {
  if (memory) return memory;
  memory = readStorage();
  return memory;
}

export function subscribeTestimonials(cb) {
  listeners.add(cb);
  if (memory) cb(memory);
  return () => listeners.delete(cb);
}

function publish(data) {
  memory = data;
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  } catch {
    /* quota / private mode */
  }
  listeners.forEach((cb) => cb(data));
}

export function prefetchTestimonials() {
  if (inflight) return inflight;
  inflight = fetch(TESTIMONIALS_API_URL)
    .then((r) => r.json())
    .then((d) => {
      publish(d);
      return d;
    })
    .catch((err) => {
      inflight = null;
      throw err;
    });
  return inflight;
}

prefetchTestimonials();
