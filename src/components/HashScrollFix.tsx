"use client";

import { useEffect } from "react";

/**
 * On a hard navigation to a URL with a hash (e.g. /legal#disclaimer,
 * /#platform), the browser's native fragment scroll runs before web fonts
 * finish loading; the resulting layout shift cancels the in-progress smooth
 * scroll (triggered by the global `scroll-behavior: smooth` on <html>),
 * leaving the page at the top. Re-applying the scroll instantly once the
 * route has mounted fixes anchor links site-wide (pre-existing, not
 * specific to any one page).
 */
export default function HashScrollFix() {
  useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
  }, []);

  return null;
}
