// src/App.jsx
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./layout.jsx";
import ScrollToTop from "./components/ui/ScrollToTop.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Programmes from "./pages/Programmes.jsx";
import Roadmap from "./pages/Roadmap.jsx";
import Rates from "./pages/Rates.jsx";
import FAQ from "./pages/FAQ.jsx";
import Contact from "./pages/Contact.jsx";
import CoachPortal from "./pages/CoachPortal";
import Terms from "./pages/Terms.jsx";
import Reviews from "./pages/Reviews.jsx";

function App() {
  // ✅ Auto-hide WhatsApp button on scroll down, show on scroll up
  const [showWhatsApp, setShowWhatsApp] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      // show if scrolling up (or near top), hide if scrolling down
      if (currentScrollY < 80 || currentScrollY < lastScrollY) {
        setShowWhatsApp(true);
      } else {
        setShowWhatsApp(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Programmes" element={<Programmes />} />
          <Route path="/Roadmap" element={<Roadmap />} />
          <Route path="/Rates" element={<Rates />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/coach-portal" element={<CoachPortal />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/Reviews" element={<Reviews />} />
        </Routes>

        {/* ✅ WhatsApp floating button (bottom-right) + tooltip + auto-hide */}
        <div
          className={`fixed bottom-10 right-5 z-50 transition-all duration-300 ${
            showWhatsApp ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
          }`}
        >
          <a
            href="https://api.whatsapp.com/send?phone=6589510121&text=Hi%20Harry,%20I%20would%20like%20to%20enquire%20more%20about%20your%20swimming%20programmes%20available!"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center"
            aria-label="Chat on WhatsApp"
          >
            {/* Tooltip */}
            <span className="absolute left-full ml-3 whitespace-nowrap rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
              Chat with us
            </span>

            <img
              src="/whatsapp.png"
              alt="WhatsApp"
              className="w-14 h-14 rounded-full shadow-lg hover:scale-105 transition"
              loading="lazy"
            />
          </a>
        </div>
      </Layout>
    </>
  );
}

export default App;
