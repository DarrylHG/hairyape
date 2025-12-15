// src/pages/Programmes.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Programmes() {
  const programmes = [
    {
      title: "ApeStart™ Water Confidence (0.5–4 years)",
      level: "Beginners • Pre-school",
      desc: "Gentle, play-based lessons to help little ones feel safe and happy in the water. We focus on bubbles, floating, kicking and basic water safety.",
      points: [
        "Small coach-to-child ratio",
        "Parents can be poolside to support",
        "Perfect first step for nervous swimmers",
      ],
    },
    {
      title: "ApeCore™ Learn-to-Swim (5–7 years)",
      level: "Beginner to Intermediate",
      desc: "Step-by-step stroke development with clear levels so kids can see their progress. Builds strong foundations for freestyle and backstroke.",
      points: [
        "Aligned with SwimSafer stages",
        "Breathing, kicking and body position",
        "Confidence in deep water over time",
      ],
    },
    {
      title: "Swimsafer (6–12 years)",
      level: "Beginner to Advanced",
      desc: "A structured national swim programme aligned with Sport Singapore’s SwimSafer® standards. Focuses on water safety, survival skills, and progressive stroke development to build confident and competent swimmers.",
      points: [
        "Aligned with official SwimSafer® Stage 1–6 syllabus",
        "Water safety, survival skills, and self-rescue techniques",
        "Progressive freestyle and backstroke development",
        "Confidence in deep water and emergency scenarios",
        "Assessment-based progression with certification",
      ],
    },
    {
      title: "Stroke Refinement (8–12 years)",
      level: "Intermediate to Advanced",
      desc: "For confident swimmers who want cleaner technique and better stamina. We refine all four strokes and introduce simple drills.",
      points: [
        "Freestyle, backstroke, breaststroke, butterfly basics",
        "Endurance and lap swimming",
        "Great for school swim team trials",
      ],
    },
    {
      title: "Adult Learners (18+ years)",
      level: "Beginner to Advanced",
      desc: "One-to-one or small-group sessions tailored to your needs.",
      points: [
        "Ideal for adults learning to swim or improving technique",
        "Flexible timing for busy schedules",
        "Custom goals set together with you",
      ],
    },
    {
      title: "Special Needs Swimming",
      level: "Customised",
      desc: "One-to-one or small-group sessions tailored to your child's needs.",
      points: [
        "Freestyle, backstroke, breaststroke",
        "Ideal for special needs or very shy swimmers",
        "Great for kids with autism, ADHD, sensory processing challenges",
      ],
    },
  ];

  return (
    <div className="bg-slate-900 min-h-screen">
      {/* Hero */}
      <section className="bg-sky-50 text-slate-900">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            Swim Programmes for Every Child
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl">
            From first splashes to confident lap swimmers, Hairy Ape Swims
            offers structured, age-appropriate programmes designed to build
            water confidence, proper technique and a lifelong love for swimming.
          </p>
        </div>
      </section>

      {/* Programmes grid */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {programmes.map((p, i) => (
              <div
                key={i}
                className="bg-sky-50 rounded-3xl p-6 md:p-8 shadow-sm border border-sky-100 flex flex-col h-full"
              >
                <div className="mb-4">
                  <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-1">
                    {p.title}
                  </h2>
                  <p className="text-sm font-semibold text-cyan-700 uppercase tracking-wide">
                    {p.level}
                  </p>
                </div>

                <p className="text-slate-700 mb-4">{p.desc}</p>

                <ul className="space-y-2 text-slate-600 mb-6">
                  {p.points.map((pt, idx) => (
                    <li key={idx}>• {pt}</li>
                  ))}
                </ul>

                {/* CTA */}
                <Link to="/Rates" className="mt-auto">
                  <Button className="self-start rounded-lg bg-sky-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-sky-700">
                    Check Rates
                  </Button>
                </Link>

                <div className="mt-3 text-sm text-slate-500 text-center">
                  * Exact grouping and timing may vary by location.
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple note / CTA */}
      <section className="bg-sky-100">
        <div className="container mx-auto px-4 py-10 md:py-12 text-center">
          <p className="text-slate-700 max-w-2xl mx-auto">
            Not sure which programme suits your child? Share their age and
            current water confidence when you book a trial, and we’ll recommend
            the best starting level for them.
          </p>
        </div>
      </section>
    </div>
  );
}
