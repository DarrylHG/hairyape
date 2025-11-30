// src/layout.jsx
import React from "react";
import { NavLink } from "react-router-dom";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-sky-950 text-white">
      {/* NAVBAR */}
      <header className="w-full bg-white/90 backdrop-blur border-b border-slate-200">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Hairy Ape Swims"
              className="h-20 w-20 object-contain"
            />
            <span className="text-lg font-bold text-sky-900">
              Hairy Ape Swims
            </span>
          </a>

          {/* Links */}
          <div className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-sky-700 ${
                  isActive ? "text-sky-700 font-semibold" : ""
                }`
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                `hover:text-sky-700 ${
                  isActive ? "text-sky-700 font-semibold" : ""
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/Programmes"
              className={({ isActive }) =>
                `hover:text-sky-700 ${
                  isActive ? "text-sky-700 font-semibold" : ""
                }`
              }
            >
              Programmes
            </NavLink>
            <NavLink
              to="/Roadmap"
              className={({ isActive }) =>
                `hover:text-sky-700 ${
                  isActive ? "text-sky-700 font-semibold" : ""
                }`
              }
            >
              Roadmap
            </NavLink>
            <NavLink
              to="/Rates"
              className={({ isActive }) =>
                `hover:text-sky-700 ${
                  isActive ? "text-sky-700 font-semibold" : ""
                }`
              }
            >
              Rates
            </NavLink>
            <NavLink
              to="/FAQ"
              className={({ isActive }) =>
                `hover:text-sky-700 ${
                  isActive ? "text-sky-700 font-semibold" : ""
                }`
              }
            >
              FAQ
            </NavLink>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                `hover:text-sky-700 ${
                  isActive ? "text-sky-700 font-semibold" : ""
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* CTA */}
          <NavLink
            to="/Contact"
            className="rounded-full bg-sky-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-sky-700"
          >
            Book Trial
          </NavLink>
        </nav>
      </header>

      {/* PAGE CONTENT */}
      <main className="flex-1">{children}</main>

      <footer className="bg-sky-950 border-t border-sky-800 py-4 text-center text-xs text-sky-200">
        © {new Date().getFullYear()} Hairy Ape Swims. All rights reserved.
      </footer>
    </div>
  );
}

export default Layout;
