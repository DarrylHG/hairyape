// src/pages/PunggolSwimmingLessons.jsx
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, CheckCircle2 } from "lucide-react";
import JsonLd from "../seo/JsonLd";
import { locationServiceSchema, webPageSchema } from "../seo/schema";

export default function PunggolSwimmingLessons() {
  const condos = [
    "Waterway Terraces",
    "Waterway Woodcress",
    "Punggol Point Cove",
    "Watertown",
    "Coastline Residences",
    "Riviera Point",
    "The Visionaire",
    "Sol Acres",
    "Waterfront Isle",
    "Riverparc Residence",
  ];

  const faqs = [
    {
      q: "Which condos in Punggol do you teach at?",
      a: "We teach at most major condos in Punggol including Waterway Terraces, Waterway Woodcress, Punggol Point Cove, Coastline Residences, and many more. Contact us to confirm availability at your condo.",
    },
    {
      q: "What age groups do you teach in Punggol?",
      a: "We teach kids from 0.5 years (water confidence) to 12 years (stroke refinement). We also offer adult lessons and special needs programmes.",
    },
    {
      q: "How long is each lesson?",
      a: "Lessons are typically 30 minutes for younger kids (0.5–4 years) and 45 minutes for older children (5+ years). Duration is customized based on age and ability.",
    },
    {
      q: "Can I book a trial lesson first?",
      a: "Yes! We encourage a trial session so your child can meet the coach and we can recommend the right programme. Contact us via WhatsApp to schedule.",
    },
  ];

  const pageSchema = webPageSchema({
    name: "Kids Swimming Lessons in Punggol | Ape Champs Swim",
    url: "https://apechampsswim.com.sg/punggol-kids-swimming-lessons",
    description:
      "Private kids swimming lessons at Punggol condo pools. MOE-aligned SwimSafer coaching for ages 0.5-12. Waterway Terraces, Coastline Residences & more. Book trial now.",
  });

  const locationSchema = locationServiceSchema({
    locationName: "Punggol",
    areaName: "Punggol",
    description:
      "Private kids swimming lessons conducted at condominium pools across Punggol, Singapore. Ages 0.5-12 years. SwimSafer certified coaches. Trial lessons available.",
  });

  return (
    <>
      <JsonLd data={[pageSchema, locationSchema]} />

      <div className="bg-slate-900 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-900 via-blue-800 to-slate-900 text-white">
          <div className="container mx-auto px-4 py-16 md:py-20">
            <div className="max-w-4xl">
              <div className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                📍 PUNGGOL AREA
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                Kids Swimming Lessons in Punggol
              </h1>
              <p className="text-lg md:text-xl text-cyan-100 mb-4 leading-relaxed">
                <strong>Private condo pool lessons for kids aged 0.5–12
                years.</strong> Our SwimSafer-certified coaches teach at major
                Punggol condominiums including Waterway Terraces, Coastline
                Residences, Waterway Woodcress, and more.
              </p>
              <p className="text-base md:text-lg text-cyan-100 mb-8 leading-relaxed">
                <strong>Trial lesson available.</strong> Flexible scheduling
                for weekday evenings and weekends. WhatsApp us to check
                availability at your condo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={createPageUrl("Contact")}>
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white font-bold text-lg py-6 px-8 rounded-full shadow-lg">
                    Book Punggol Trial Class
                  </Button>
                </Link>
                <Button
                  asChild
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-cyan-300 text-cyan-300 hover:bg-cyan-900/50 font-bold text-lg py-6 px-8 rounded-full"
                >
                  <a
                    href="https://api.whatsapp.com/send?phone=6589510121&text=Hi,%20I'm%20interested%20in%20Punggol%20swimming%20lessons!"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Facts - Citation-Friendly */}
        <section className="bg-sky-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
              Punggol Swimming Lessons: Quick Facts
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-sky-100">
                <Users className="h-10 w-10 text-cyan-600 mb-3" />
                <h3 className="font-bold text-slate-800 mb-2">Age Range</h3>
                <p className="text-slate-600 text-sm">
                  0.5–12 years (also adults & special needs)
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-sky-100">
                <Clock className="h-10 w-10 text-cyan-600 mb-3" />
                <h3 className="font-bold text-slate-800 mb-2">
                  Lesson Duration
                </h3>
                <p className="text-slate-600 text-sm">
                  30 mins (toddlers) or 45 mins (older kids)
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-sky-100">
                <MapPin className="h-10 w-10 text-cyan-600 mb-3" />
                <h3 className="font-bold text-slate-800 mb-2">Location</h3>
                <p className="text-slate-600 text-sm">
                  Condo pools across Punggol (10+ estates)
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-sky-100">
                <CheckCircle2 className="h-10 w-10 text-cyan-600 mb-3" />
                <h3 className="font-bold text-slate-800 mb-2">Certification</h3>
                <p className="text-slate-600 text-sm">
                  MOE-aligned SwimSafer programme
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect - Citation Content */}
        <section className="bg-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">
                What to Expect in Punggol Swimming Lessons
              </h2>

              <div className="space-y-6 text-slate-700">
                <div className="bg-sky-50 rounded-2xl p-6 border border-sky-100">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    For 6-Year-Old Complete Beginners
                  </h3>
                  <p className="mb-3">
                    <strong>First 4 lessons:</strong> Water confidence, bubbles,
                    floating on back with support, kicking with kickboard. Coach
                    stays within arm's reach at all times.
                  </p>
                  <p>
                    <strong>Next 4–8 lessons:</strong> Floating independently,
                    freestyle arm movements, breathing practice (side breathing
                    for 3–4 strokes), swimming 5–10 meters unassisted.
                  </p>
                </div>

                <div className="bg-sky-50 rounded-2xl p-6 border border-sky-100">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    For Kids Who Can Swim Short Distances
                  </h3>
                  <p className="mb-3">
                    <strong>Focus areas:</strong> Breathing rhythm, stroke
                    correction (freestyle and backstroke), building endurance to
                    swim 25 meters continuously.
                  </p>
                  <p>
                    <strong>Typical duration:</strong> 8–12 lessons to achieve
                    confident 25m freestyle.
                  </p>
                </div>

                <div className="bg-sky-50 rounded-2xl p-6 border border-sky-100">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    Trial Lesson Process
                  </h3>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>
                      WhatsApp us with your child's age, experience level, and
                      preferred condo
                    </li>
                    <li>
                      We match you with a coach and suggest 2–3 trial time slots
                    </li>
                    <li>
                      Trial lesson (30–45 mins) includes water assessment and
                      programme recommendation
                    </li>
                    <li>
                      If suitable, we arrange regular weekly lessons and share
                      pricing
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Condos We Serve */}
        <section className="bg-slate-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
                Punggol Condos We Teach At
              </h2>
              <p className="text-slate-600 mb-6">
                We conduct lessons at most major condominium pools in Punggol.
                If your condo isn't listed, contact us to check availability.
              </p>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {condos.map((condo, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg px-4 py-3 border border-slate-200 text-slate-700 text-sm font-medium"
                  >
                    <MapPin className="inline h-4 w-4 text-cyan-600 mr-2" />
                    {condo}
                  </div>
                ))}
              </div>

              <p className="text-sm text-slate-500 mt-6">
                <strong>Don't see your condo?</strong> We're constantly
                expanding. WhatsApp us at{" "}
                <a
                  href="https://api.whatsapp.com/send?phone=6589510121"
                  className="text-cyan-600 hover:text-cyan-700"
                  target="_blank"
                  rel="noreferrer"
                >
                  +65 8951 0121
                </a>{" "}
                to check if we can arrange lessons at your location.
              </p>
            </div>
          </div>
        </section>

        {/* Programmes Overview */}
        <section className="bg-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
                Programmes Available in Punggol
              </h2>

              <div className="space-y-4">
                {[
                  {
                    name: "ApeStart™ (0.5–4 years)",
                    desc: "Water confidence, bubbles, floating, basic kicking. Parent can be poolside.",
                  },
                  {
                    name: "ApeCore™ (4–7 years)",
                    desc: "Learn-to-swim programme. Freestyle and backstroke foundations, breathing technique.",
                  },
                  {
                    name: "SwimSafer (6–12 years)",
                    desc: "MOE-aligned national programme. Stages 1–6 with water safety and survival skills.",
                  },
                  {
                    name: "Stroke Refinement (8–12 years)",
                    desc: "For confident swimmers. All four strokes, endurance building, lap swimming.",
                  },
                ].map((prog, i) => (
                  <div
                    key={i}
                    className="border border-slate-200 rounded-xl p-5 hover:border-cyan-400 transition"
                  >
                    <h3 className="font-bold text-lg text-slate-800 mb-2">
                      {prog.name}
                    </h3>
                    <p className="text-slate-600 text-sm">{prog.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Link to={createPageUrl("Programmes")}>
                  <Button className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full px-8 py-3">
                    View Full Programme Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Safety & Weather Policy */}
        <section className="bg-sky-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
                Safety & Weather Policy
              </h2>

              <div className="space-y-4 text-slate-700">
                <div className="bg-white rounded-xl p-6 border border-sky-100">
                  <h3 className="font-bold text-lg text-slate-800 mb-2">
                    Pool Supervision
                  </h3>
                  <p className="text-sm">
                    Coaches maintain a maximum 1:4 ratio (one coach to four
                    students) and stay within arm's reach for beginners. All
                    coaches are SwimSafer-certified and hold current lifesaving
                    certifications.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-sky-100">
                  <h3 className="font-bold text-lg text-slate-800 mb-2">
                    Lightning & Heavy Rain
                  </h3>
                  <p className="text-sm">
                    Lessons pause immediately if lightning is detected or
                    visibility is poor. Make-up lessons are arranged within the
                    same month where possible, subject to coach availability.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-sky-100">
                  <h3 className="font-bold text-lg text-slate-800 mb-2">
                    What to Bring
                  </h3>
                  <p className="text-sm">
                    Swimwear, goggles (optional for beginners), towel, change of
                    clothes. Floatation aids only if recommended by coach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="bg-sky-50 rounded-xl p-5 border border-sky-100"
                  >
                    <summary className="font-bold text-slate-800 cursor-pointer hover:text-cyan-600">
                      {faq.q}
                    </summary>
                    <p className="text-slate-600 text-sm mt-3">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-cyan-600 to-blue-600 py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Swimming in Punggol?
            </h2>
            <p className="text-cyan-100 text-lg mb-6 max-w-2xl mx-auto">
              Book a trial lesson today. Share your condo name and preferred
              timing, and we'll match you with an available coach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("Contact")}>
                <Button className="w-full sm:w-auto bg-white text-cyan-700 hover:bg-cyan-50 font-bold text-lg py-6 px-8 rounded-full shadow-lg">
                  Book Trial Lesson
                </Button>
              </Link>
              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10 font-bold text-lg py-6 px-8 rounded-full"
              >
                <a
                  href="https://api.whatsapp.com/send?phone=6589510121&text=Hi,%20I'm%20interested%20in%20Punggol%20swimming%20lessons!"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp: +65 8951 0121
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
