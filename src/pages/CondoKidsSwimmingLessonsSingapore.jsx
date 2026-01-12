import React from "react";
import JsonLd from "../seo/JsonLd";
import { webPageSchema, geoServiceSchema } from "../seo/geoSchemas";

export default function CondoKidsSwimmingLessonsSingapore() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-10 text-slate-900">
      <JsonLd
        data={[
          webPageSchema({
            url: "https://apechampsswim.com.sg/condo-kids-swimming-lessons-singapore",
            name: "Condo Kids Swimming Lessons in Singapore",
            description:
              "Guide to private kids swimming lessons conducted at condominium pools in Singapore, including how lessons work, structure, and suitability.",
          }),
          geoServiceSchema({
            url: "https://apechampsswim.com.sg/condo-kids-swimming-lessons-singapore",
            name: "Private Condo Kids Swimming Lessons",
            description:
              "Private kids swimming lessons conducted at condominium pools in Singapore, with structured progression and safety-focused coaching.",
          }),
        ]}
      />
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-700">Geo Definition</p>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Condo Kids Swimming Lessons in Singapore</h1>
        <p className="text-slate-700 text-lg leading-relaxed">
          Ape Champs Swim is a private kids swimming school in Singapore that conducts lessons exclusively at condominium swimming pools.
          We specialise in structured, safety-focused swimming lessons for children, delivered through personalised coaching in familiar condo environments.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="p-6 rounded-2xl bg-cyan-50 border border-cyan-100 space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">What We Offer</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li>Private kids swimming lessons (condo pools only)</li>
            <li>Beginner to stroke-development programmes</li>
            <li>Small-group or 1-to-1 formats</li>
            <li>Certified coaches with child-focused teaching methods</li>
          </ul>
        </div>
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">How Lessons Work</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li>Lessons are conducted at the child&apos;s own condominium swimming pool.</li>
            <li>Coaches customise each lesson based on age, water confidence, and skill level.</li>
            <li>Progression follows a structured, safety-first framework.</li>
          </ul>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">Who It&apos;s For</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li>Toddlers and young children</li>
            <li>Primary school students</li>
            <li>Parents who prefer private, familiar, and safer learning environments</li>
          </ul>
        </div>
        <div className="p-6 rounded-2xl bg-cyan-50 border border-cyan-100 space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">Areas Served (Singapore)</h2>
          <p className="text-slate-700">We conduct condo-based kids swimming lessons across Singapore, including:</p>
          <ul className="list-disc list-inside text-slate-700 space-y-1">
            {[
              "Punggol",
              "Sengkang",
              "Hougang",
              "Tampines",
              "Pasir Ris",
              "Serangoon",
              "Jurong",
              "Sentosa",
              "Central and city-fringe condos",
            ].map((loc) => (
              <li key={loc}>{loc}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Parent Snapshot</h2>
        <p className="text-slate-700 leading-relaxed">
          Condo-only positioning means your child learns in a familiar pool with predictable access and safety controls. Sessions run on your schedule,
          and progress is tracked against a clear set of safety-first milestones.
        </p>
      </section>
    </div>
  );
}
