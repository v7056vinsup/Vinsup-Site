// Run background work only after the page has finished loading and the browser is idle,
// so data prefetches never compete with the first paint.
export function whenIdle(fn, timeout = 4000) {
  if (typeof window === "undefined") return;
  const run = () => {
    if ("requestIdleCallback" in window) window.requestIdleCallback(fn, { timeout });
    else setTimeout(fn, 1500);
  };
  if (document.readyState === "complete") run();
  else window.addEventListener("load", run, { once: true });
}
