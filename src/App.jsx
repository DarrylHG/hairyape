// src/App.jsx
import React from "react";
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

        {/* ✅ WhatsApp floating button (bottom-left) */}
        <a
          href="https://api.whatsapp.com/send?phone=6589510121&text=Hi%20Harry,%20I%20would%20like%20to%20enquire%20more%20about%20your%20swimming%20programmes%20available!"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 left-5 z-50"
          aria-label="Chat on WhatsApp"
        >
          <img
            src="/whatsapp.png"
            alt="WhatsApp"
            className="w-14 h-14 rounded-full shadow-lg hover:scale-105 transition"
            loading="lazy"
          />
        </a>
      </Layout>
    </>
  );
}

export default App;
