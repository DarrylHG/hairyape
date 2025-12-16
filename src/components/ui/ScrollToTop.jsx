import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // wait for the page to render, then scroll to the anchor
      requestAnimationFrame(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "auto", block: "start" });
      });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}
