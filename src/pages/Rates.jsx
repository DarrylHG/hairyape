// src/pages/Rates.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Rates() {
  const rates = [
    {
      name: "ApeStart™ Water Confidence",
      bestFor: "0.5–4 years old",
      price: "From $70 / lesson",
      details: [
        "4 x 30-minute lessons (once a week)",
        "Gentle, play-based introduction to water",
        "Water confidence and early learn-to-swim skills",
      ],
    },
    {
      name: "ApeCore™ Learn-to-Swim",
      bestFor: "5–10 years old",
      price: "From $70 / lesson",
      details: [
        "4 x 45-minute lessons (once a week)",
        "Held at private condo pools",
        "Learn-to-swim with strong foundations for freestyle & backstroke",
      ],
    },
    {
      name: "SwimSafer® Programme",
      bestFor: "6–12 years old",
      price: "From $70 / lesson",
      details: [
        "4 x 45-minute lessons (once a week)",
        "Aligned with SwimSafer® Stage 1–6 syllabus",
        "Water safety, survival skills and assessment-based progression",
      ],
    },
    {
      name: "Stroke Refinement",
      bestFor: "8–12 years old",
      price: "From $70 / lesson",
      details: [
        "4 x 45-minute lessons (once a week)",
        "Technique refinement across strokes with simple drills",
        "Great for stamina, lap swimming and school team readiness",
      ],
    },
    {
      name: "Group Classes",
      bestFor: "Toddlers & Children",
      price: "From $30 / swimmer / lesson",
      details: [
        "Shared coach, personalised attention",
        "Custom schedule and location",
        "Perfect for cousins, best friends, or siblings",
      ],
    },
    {
      name: "Adult Learners",
      bestFor: "Best for all adults",
      price: "From $75 / lesson",
      details: [
        "4 x 45-minute lessons (once a week)",
        "Great for adults learning to swim or improving technique",
        "Relaxed, supportive environment",
      ],
    },
  ];

  // Special tiers just for Group Classes
  const groupTiers = [
    {
      label: "1 to 2",
      lessons: "4 lessons",
      perChild: "($175 per child)",
      total: "$350",
      perLesson: "$43.75/child per lesson",
      duration: "Each lesson 45mins",
    },
    {
      label: "1 to 3",
      lessons: "4 lessons",
      perChild: "($140 per child)",
      total: "$420",
      perLesson: "$35/child per lesson",
      duration: "Each lesson 45mins",
    },
    {
      label: "1 to 4",
      lessons: "4 lessons",
      perChild: "($120 per child)",
      total: "$480",
      perLesson: "$30/child per lesson",
      duration: "Each lesson 45mins",
    },
  ];

  return (
    <div className="bg-slate-900 min-h-screen">
      {/* Hero */}
      <section className="bg-sky-50 text-slate-900">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            Simple, Transparent Rates
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl">
            Ape Champs Swim keeps pricing straightforward so parents know exactly
            what they&apos;re paying for, with no hidden registration or admin fees.
          </p>
        </div>
      </section>

      {/* Rate cards */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {rates.map((plan, idx) => {
              // Special layout for Group Classes
              if (plan.name === "Group Classes") {
                return (
                  <div
                    key={idx}
                    className="rounded-3xl border border-sky-100 bg-sky-50/70 shadow-sm p-6 md:p-8 flex flex-col h-full"
                  >
                    <div className="mb-4">
                      <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-1">
                        {plan.name}
                      </h2>
                      <p className="text-sm font-semibold text-cyan-700 uppercase tracking-wide">
                        {plan.bestFor}
                      </p>
                    </div>

                    <p className="text-slate-700 mb-4">
                      Perfect if you want siblings or close friends to share a
                      coach and learn together.
                    </p>

                    {/* 3-tier block */}
                    <div className="mt-2 grid md:grid-cols-3 gap-4">
                      {groupTiers.map((tier) => (
                        <div
                          key={tier.label}
                          className="bg-white rounded-2xl shadow-md px-4 py-6 text-center flex flex-col items-center"
                        >
                          <p className="text-3xl font-extrabold text-cyan-600 mb-1">
                            {tier.label}
                          </p>
                          <p className="text-sm font-semibold text-slate-500 mb-2">
                            {tier.lessons}
                          </p>
                          <p className="text-sm text-slate-500 mb-3">
                            {tier.perChild}
                          </p>
                          <p className="text-3xl font-extrabold text-slate-900 mb-2">
                            {tier.total}
                          </p>
                          <p className="text-sm text-slate-700">
                            {tier.perLesson}
                          </p>
                          <p className="text-xs text-slate-500 mt-1">
                            {tier.duration}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex justify-end">
                      <Link to="/Contact">
                        <Button className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-6 py-2 shadow-md">
                          Enquire
                        </Button>
                      </Link>
                    </div>

                    <p className="mt-2 text-xs text-slate-500 text-center md:text-left">
                      * Enquire now to get your preferred schedule, coach
                      and quotation.
                    </p>
                  </div>
                );
              }

              // Default cards
              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-sky-100 bg-sky-50/70 shadow-sm p-6 md:p-8 flex flex-col h-full"
                >
                  <div className="mb-4">
                    <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-1">
                      {plan.name}
                    </h2>
                    <p className="text-sm font-semibold text-cyan-700 uppercase tracking-wide">
                      {plan.bestFor}
                    </p>
                  </div>

                  <div className="mb-4">
                    <span className="inline-block text-2xl md:text-3xl font-extrabold text-cyan-700">
                      {plan.price}
                    </span>
                  </div>

                  <ul className="space-y-2 text-slate-700 mb-4">
                    {plan.details.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <div className="flex justify-end mb-3">
                      <Link to="/Contact">
                        <Button className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-6 py-2 shadow-md">
                          Enquire
                        </Button>
                      </Link>
                    </div>

                    <div className="text-xs text-slate-500">
                      * Enquire now to get your preferred schedule, coach
                      and quotation.
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Notes */}
          <div className="mt-10 max-w-3xl text-sm text-slate-600 space-y-3">
            <p>
              • Fees are billed per month or per block of lessons. Missed lessons
              due to bad weather or pool closure will be made up where possible.
            </p>
            <p>
              • ActiveSG pool entry is paid separately by swimmers and
              accompanying adults.
            </p>

            <div>
              <p className="font-semibold text-slate-700">
                Additional fees on top of the rates shown above:
              </p>
              <ul className="mt-1 space-y-1">
                <li>• + $10 per lesson – Female coaches for kids / ladies swimming lessons</li>
                <li>• + $10 per lesson – Special needs swimming lessons (each lesson 30 mins)</li>
                <li>• + $10 per lesson – Competitive swimming training</li>
                <li>• + $10 per lesson – Lessons at landed houses</li>
                <li>• + $20 per lesson – Locations in Sentosa</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
            Ready to book a trial class?
          </h2>
          <p className="text-cyan-100 mb-6 max-w-2xl mx-auto">
            Share your child&apos;s age, swimming experience and preferred
            location, and we&apos;ll recommend the most suitable programme and
            fee option.
          </p>
          <Link to="/Contact">
            <Button className="bg-white hover:bg-slate-100 font-bold text-lg py-6 px-10 rounded-full shadow-xl">
              <span className="text-cyan-600">Book a Trial</span>
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
