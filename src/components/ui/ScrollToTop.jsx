// src/components/ui/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // scroll the actual scrolling element
    const el = document.scrollingElement || document.documentElement;
    el.scrollTo(0, 0);

    // fallback
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
