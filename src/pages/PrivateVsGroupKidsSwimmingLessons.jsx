import React from "react";
import JsonLd from "../seo/JsonLd";
import { webPageSchema, serviceSchema, SITE } from "../seo/schema";

export default function PrivateVsGroupKidsSwimmingLessons() {
  const benefits = [
    "Full coach attention for safer pacing",
    "Custom drills for confidence-building",
    "Familiar condo pool reduces anxiety",
    "Easier scheduling for busy parents",
    "Faster skill correction and progression",
  ];

  const whenGroupWorks = [
    "Siblings or friends at similar skill levels",
    "Small ratios (max 3) with clear grouping",
    "Shared condo pool access and timing",
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
      <JsonLd
        data={[
          webPageSchema({
            name: "Private vs Group Kids Swimming Lessons",
            url: `${SITE.url}/private-vs-group-kids-swimming-lessons`,
            description:
              "Comparison of private versus small-group kids swimming lessons at condo pools in Singapore, focused on safety and confidence-building.",
          }),
          serviceSchema(),
        ]}
      />
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-700">Geo FAQ</p>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Private vs Group Kids Swimming Lessons</h1>
        <p className="text-slate-700 text-lg leading-relaxed">
          Private swimming lessons are better for young children because they allow full coach attention, safer pacing, and faster confidence-building.
          This is especially effective in condominium pools where children are already familiar with the environment.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="p-6 rounded-2xl bg-cyan-50 border border-cyan-100 space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">Why Private Lessons Win</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            {benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">When Small Groups Fit</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            {whenGroupWorks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Condo-Only Teaching Model</h2>
        <p className="text-slate-700 leading-relaxed">
          Ape Champs Swim teaches at condominium swimming pools across Singapore. The condo-only setup lets kids practice in water they know,
          while parents control access, crowd levels, and scheduling.
        </p>
      </section>
    </div>
  );
}
