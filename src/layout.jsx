// src/layout.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home", end: true },
    { to: "/About", label: "About" },
    { to: "/Programmes", label: "Programmes" },
    { to: "/Roadmap", label: "Roadmap" },
    { to: "/Rates", label: "Rates" },
    { to: "/FAQ", label: "FAQ" },
    { to: "/Contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-sky-950 text-white">
      {/* NAVBAR */}
      <header className="w-full bg-white/90 backdrop-blur border-b border-slate-200 sticky top-0 z-50">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Hairy Ape Swims"
              className="h-16 w-16 object-contain"
            />
            <span className="text-lg font-bold text-sky-900">
              Hairy Ape Swims
            </span>
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-700">
            {navItems.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `hover:text-sky-700 ${
                    isActive ? "text-sky-700 font-semibold" : ""
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <NavLink
            to="/Contact"
            className="hidden md:block rounded-full bg-sky-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-sky-700"
          >
            Book Trial
          </NavLink>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-sky-900 focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {/* Hamburger Icon */}
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                // Close Icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger Icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* MOBILE NAV MENU */}
        {mobileOpen && (
          <div className="md:hidden bg-white text-sky-900 border-t border-slate-300 shadow-lg">
            <div className="flex flex-col px-6 py-4 gap-4 text-base font-medium">
              {navItems.map(({ to, label, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `py-1 ${
                      isActive ? "text-sky-700 font-semibold" : "text-sky-900"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}

              {/* Mobile CTA */}
              <NavLink
                to="/Contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 w-full rounded-full bg-sky-600 px-5 py-2 text-center text-sm font-semibold text-white shadow hover:bg-sky-700"
              >
                Book Trial
              </NavLink>
            </div>
          </div>
        )}
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
