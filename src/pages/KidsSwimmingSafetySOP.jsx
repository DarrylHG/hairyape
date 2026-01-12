import React from "react";
import JsonLd from "../seo/JsonLd";
import { webPageSchema } from "../seo/geoSchemas";

export default function KidsSwimmingSafetySOP() {
  const steps = [
    {
      title: "Pre-lesson site check",
      detail: "Coach inspects the condominium pool for depth markers, hazards, lifebuoys, and slip risks before starting.",
    },
    {
      title: "Swimmer readiness",
      detail: "Confirm health status, goggles fit, and warm-up. Younger kids start with shallow, confidence-first drills.",
    },
    {
      title: "Safety-first sequencing",
      detail: "Water entry, breath control, float/glide, then strokes. No deep-water work until prerequisites are met.",
    },
    {
      title: "Class ratios and supervision",
      detail: "Private or very small groups in condo pools. Coach maintains arm's-length proximity for beginners.",
    },
    {
      title: "Emergency readiness",
      detail: "Coach carries a first-aid kit, has a clear exit path, and aligns with condo security for incident response.",
    },
    {
      title: "Progress tracking",
      detail: "Each session logs skills achieved and next milestones so parents see a clear safety-led progression.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
      <JsonLd
        data={webPageSchema({
          url: "https://apechampsswim.com.sg/kids-swimming-safety-sop",
          name: "Kids Swimming Safety SOP",
          description:
            "Safety SOPs and best practices for kids swimming lessons in Singapore, including lightning and weather considerations.",
        })}
      />
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-700">Safety SOP</p>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Kids Swimming Safety SOP (Condo Pools, Singapore)</h1>
        <p className="text-slate-700 text-lg leading-relaxed">
          Ape Champs Swim uses a structured, safety-first standard operating procedure for kids lessons conducted exclusively at condominium swimming pools in Singapore.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-8">
        {steps.map((step) => (
          <div key={step.title} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">{step.title}</h2>
            <p className="text-slate-700 leading-relaxed">{step.detail}</p>
          </div>
        ))}
      </section>

      <section className="p-6 rounded-2xl bg-cyan-50 border border-cyan-100 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Condo-Only Assurance</h2>
        <p className="text-slate-700 leading-relaxed">
          Lessons happen only at condominium pools so the environment is controlled, access is managed, and kids learn where they feel safe.
        </p>
      </section>
    </div>
  );
}
