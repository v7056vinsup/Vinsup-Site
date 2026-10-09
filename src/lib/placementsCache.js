import { whenIdle } from "./whenIdle";
const CACHE_KEY = "vinsup_placements_cache";
export const PLACEMENTS_API_URL =
  "https://script.google.com/macros/s/AKfycbwYgJrzucfmhP2hM0sy_xIZtizsXTW7CHlzqvpLsOQxuG3uXd73cWUWf9QSAD7Hf3o0/exec";
export const PLACEMENTS_PAGE_SIZE = 48;

let memory = null;
const inflightPages = new Map();
const listeners = new Set();

const convertDriveUrl = (url) => {
  if (!url) return url;
  const match = url.match(/[-\w]{25,}/);
  if (match) {
    return `https://drive.google.com/thumbnail?id=${match[0]}&sz=w1000`;
  }
  return url;
};

const mapItems = (data, startIndex = 0) =>
  (data || []).map((item, i) => ({
    id: item.Id || `${startIndex + i}`,
    name: item.Name,
    src: convertDriveUrl(item.Image),
    index: startIndex + i,
  }));

function readStorage() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function getPlacementsCache() {
  if (memory) return memory;
  memory = readStorage();
  return memory;
}

export function subscribePlacements(cb) {
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

export function loadPlacementsPage(page = 1) {
  if (inflightPages.has(page)) return inflightPages.get(page);

  const current = getPlacementsCache();
  if (current?.loadedPages?.includes(page)) {
    return Promise.resolve(current);
  }

  const req = fetch(
    `${PLACEMENTS_API_URL}?page=${page}&limit=${PLACEMENTS_PAGE_SIZE}`
  )
    .then((r) => r.json())
    .then((res) => {
      const prev = getPlacementsCache() || {
        photos: [],
        hasMore: true,
        loadedPages: [],
      };
      const startIndex = prev.photos.length;
      const mapped = mapItems(res.data, startIndex);
      const existingIds = new Set(prev.photos.map((p) => p.id));
      const unique = mapped.filter((p) => !existingIds.has(p.id));
      const photos = [...prev.photos, ...unique].map((p, i) => ({
        ...p,
        index: i,
      }));
      const next = {
        photos,
        hasMore: mapped.length >= PLACEMENTS_PAGE_SIZE,
        loadedPages: [...new Set([...(prev.loadedPages || []), page])],
      };
      publish(next);
      return next;
    })
    .catch((err) => {
      inflightPages.delete(page);
      throw err;
    });

  inflightPages.set(page, req);
  return req;
}

export function prefetchPlacements() {
  return loadPlacementsPage(1);
}

// warm the cache after the page has loaded (not during the first paint)
whenIdle(() => prefetchPlacements());
