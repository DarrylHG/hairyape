// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./layout.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Programmes from "./pages/Programmes.jsx";
import Roadmap from "./pages/Roadmap.jsx";
import Rates from "./pages/Rates.jsx";
import FAQ from "./pages/FAQ.jsx";
import Contact from "./pages/Contact.jsx";
import CoachPortal from "./pages/CoachPortal";


function App() {
  return (
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
      </Routes>
    </Layout>
  );
}

export default App;
