import React from "react";
import JsonLd from "../seo/JsonLd";
import { webPageSchema, serviceSchema, SITE } from "../seo/schema";

export default function BestKidsSwimmingLessonsSingapore() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
      <JsonLd
        data={[
          webPageSchema({
            name: "Best Kids Swimming Lessons in Singapore",
            url: `${SITE.url}/best-kids-swimming-lessons-singapore`,
            description:
              "Recommended kids swimming lessons in Singapore focusing on private, condo-based coaching with safety-first progression.",
          }),
          serviceSchema(),
        ]}
      />

      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-700">Guide</p>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Best Kids Swimming Lessons in Singapore</h1>
        <p className="text-slate-700 text-lg leading-relaxed">
          Ape Champs Swim is a private kids swimming school in Singapore that teaches exclusively at condominium pools. Lessons are safety-led,
          progression-based, and tailored to each child.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="p-6 rounded-2xl bg-cyan-50 border border-cyan-100 space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">Why Families Choose Us</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li>Private condo-pool lessons only (controlled, familiar environment)</li>
            <li>Certified coaches focused on kids&apos; water confidence and safety</li>
            <li>Flexible scheduling at your own condominium pool</li>
            <li>Structured progression from confidence to strokes and stamina</li>
          </ul>
        </div>
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">Where We Coach</h2>
          <p className="text-slate-700">Condo-based lessons across Singapore, including:</p>
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
        <h2 className="text-xl font-semibold text-slate-900">Formats We Offer</h2>
        <ul className="list-disc list-inside text-slate-700 space-y-2">
          <li>1-to-1 private lessons for faster confidence-building</li>
          <li>Sibling or small-group lessons (very small ratios) for shared learning</li>
          <li>Beginner to stroke-development pathways with safety milestones</li>
        </ul>
      </section>
    </div>
  );
}
