import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Reviews() {
  const reviews = [
    {
      name: "Ms Tan",
      child: "6yo (ApeCore™ Learn-to-Swim)",
      location: "Punggol",
      text:
        "Super patient and encouraging. My child used to be scared of water, but after a few lessons, can float calmly and kick forward with confidence. Very steady progress.",
    },
    {
      name: "Aileen",
      child: "4yo (ApeStart™ Water Confidence)",
      location: "Pasir Ris",
      text:
        "Love the play-based approach. My girl actually looks forward to lessons and is much calmer in the pool now.",
    },
    {
      name: "Mr Lim",
      child: "8yo (SwimSafer)",
      location: "Sengkang",
      text:
        "Lessons feel structured and purposeful, not random. Clear goals each week and visible improvement in breathing and body position.",
    },
    {
      name: "Mdm Chua",
      child: "5yo (ApeCore™ Learn-to-Swim)",
      location: "Hougang",
      text:
        "My son used to cling to the wall and refuse to put his face in the water. After a few lessons, he can blow bubbles and float independently.",
    },
    {
      name: "Jason",
      child: "Adult (Beginner)",
      location: "Tampines",
      text:
        "Adult learner here. I was always afraid of deep water, but the step-by-step guidance helped me overcome that fear and swim confidently now.",
    },
    {
      name: "Mrs Wong",
      child: "7yo (ApeCore™ Learn-to-Swim)",
      location: "Serangoon",
      text:
        "Very encouraging teaching style. My child used to cry before lessons, now enters the pool happily.",
    },
    {
      name: "Mr Koh",
      child: "9yo (Stroke Development)",
      location: "Bedok",
      text:
        "We like that progress is monitored closely. Improvements were gradual but consistent.",
    },
    {
      name: "Sharon",
      child: "6yo (ApeCore™ Learn-to-Swim)",
      location: "Punggol",
      text:
        "Clear communication and regular updates. As parents, it helps us understand what our child is learning each week.",
    },
    {
      name: "Mdm Lee",
      child: "5yo (ApeCore™ Learn-to-Swim)",
      location: "Yishun",
      text:
        "Patient and calm approach. My daughter gained confidence much faster than expected.",
    },
    {
      name: "Mr Tan",
      child: "10yo (SwimSafer)",
      location: "Woodlands",
      text:
        "Good balance between discipline and encouragement. Lessons feel productive.",
    },
    {
      name: "Felicia",
      child: "4yo (ApeStart™ Water Confidence)",
      location: "Sengkang",
      text:
        "Play-based but still structured. My child is more relaxed in water now.",
    },
    {
      name: "Mr Goh",
      child: "8yo (Beginner)",
      location: "Tiong Bahru",
      text:
        "We see steady improvement every month. No rushing, but very systematic.",
    },
    {
      name: "Rachel",
      child: "7yo (Swimsafer)",
      location: "Bukit Panjang",
      text:
        "Coaching style builds confidence gradually. My child is no longer afraid of submersion.",
    },
    {
      name: "Mdm Ng",
      child: "6yo (ApeCore™ Learn-to-Swim)",
      location: "Ang Mo Kio",
      text:
        "Very reassuring for parents. Lessons feel safe and well-planned.",
    },
    {
      name: "Mr Ong",
      child: "9yo (Stroke Refinement)",
      location: "Toa Payoh",
      text:
        "Good focus on technique and breathing. We noticed clear improvements in efficiency.",
    },
    {
      name: "Kelly",
      child: "Adult (Beginner)",
      location: "Pasir Ris",
      text:
        "Never thought I could swim properly. Lessons were paced comfortably without pressure.",
    },
    {
      name: "Mrs Seah",
      child: "5yo (Beginner)",
      location: "Jurong East",
      text:
        "My child used to panic in water. Now much calmer and more confident.",
    },
    {
      name: "Daniel",
      child: "8yo (ApeCore™ Learn-to-Swim)",
      location: "Clementi",
      text:
        "Structured lessons with clear progression. My child enjoys the routine.",
    },
    {
      name: "Mdm Ho",
      child: "6yo (ApeCore™ Learn-to-Swim)",
      location: "Bukit Batok",
      text:
        "We appreciate the patient approach. Progress feels natural, not forced.",
    },
    {
      name: "Mr Yeo",
      child: "7yo (ApeCore™ Learn-to-Swim)",
      location: "Marine Parade",
      text:
        "Lessons helped build both skills and confidence. Very satisfied with the experience.",
    },
  ];

  return (
    <div className="bg-slate-900 min-h-screen">
      {/* Hero */}
      <section className="bg-sky-50 text-slate-900">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            Reviews & Results
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl">
            Feedback from families learning with Ape Champs Swim.
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="bg-sky-50 border border-sky-200 rounded-3xl p-5 shadow-sm flex flex-col h-full"
              >
                <div className="text-4xl text-sky-300 mb-2">“</div>

                <p className="text-slate-700 text-sm leading-relaxed mb-4">
                  {r.text}
                </p>

                <div className="mt-auto">
                  <p className="font-semibold text-slate-800 text-sm">
                    {r.name}
                  </p>
                  <p className="text-xs text-slate-600">
                    {r.child} • {r.location}
                  </p>

                  <p className="mt-3 text-xs text-slate-500">
                    * Results vary by swimmer’s starting level, attendance and
                    practice.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link to="/Contact">
              <Button className="rounded-full bg-sky-600 hover:bg-sky-700 text-white font-semibold px-8 py-4 shadow-lg">
                Book a Trial
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
