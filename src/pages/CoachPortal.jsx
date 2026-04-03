// src/pages/CoachPortal.jsx
import React from "react";

export default function CoachPortal() {
  return (
    <div className="bg-slate-900 min-h-screen flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-lg overflow-hidden">
        <iframe
          src="https://app.apechampsswim.com.sg/welcome"
          title="Coach Portal"
          className="w-full h-[80vh] border-0"
        />
      </div>
    </div>
  );
}
