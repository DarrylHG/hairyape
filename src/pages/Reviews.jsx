// src/pages/Reviews.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function QuoteMark() {
  return (
    <div className="text-5xl md:text-6xl leading-none text-slate-300 text-center select-none">
      “
    </div>
  );
}

export default function Reviews() {
  const reviews = [
    {
      text:
        "My child used to cling to the wall and refuse to put her face in the water. After a few lessons, she can blow bubbles, float calmly and kick forward with confidence. We’re very happy with the steady progress.",
      byline: "Mdm Tan, parent – Punggol",
    },
    {
      text:
        "Very structured and patient teaching. My son is usually shy, but he looks forward to lessons and actually asks when the next class is. The approach is firm but encouraging.",
      byline: "Mr Lim, dad – Sengkang",
    },
    {
      text:
        "We like that the lessons feel purposeful and not random. Clear goals each week, and we can see improvement in breathing and body position. Good for parents who want real progress.",
      byline: "Aileen, mum – Pasir Ris",
    },
    {
      text:
        "Adult learner here. I was always scared of deep water, but the step-by-step guidance helped me stay calm and focus on technique. I can now swim a short distance without panicking.",
      byline: "Jason, adult learner – Tampines",
    },
    {
      text:
        "My two kids have different learning speeds, but the sessions were adjusted well for both. One needed confidence work, the other needed stroke correction. Both improved without feeling pressured.",
      byline: "Sharon, mum – Hougang",
    },
    {
      text:
        "The coaching style is very encouraging. My child used to cry before class, now he enters the pool by himself and tries new drills. That confidence boost is huge for us.",
      byline: "Mr Goh, dad – Serangoon",
    },
    {
      text:
        "Good balance of fun and discipline. My kid enjoys the games but still learns proper technique. The progress feels consistent, not just ‘play in water’.",
      byline: "Jia Min, parent – Punggol",
    },
    {
      text:
        "We appreciate how safety is always emphasised. My child learned simple water safety habits early, like waiting for instruction and staying calm when tired.",
      byline: "Nurul, mum – Kovan",
    },
    {
      text:
        "My daughter improved a lot in freestyle breathing. Previously she would lift her head and stop. Now she can breathe to the side and continue swimming longer.",
      byline: "Mei Ling, mum – Bedok",
    },
    {
      text:
        "Lessons are clear and progressive. Not rushed, but not dragging either. My son finally got comfortable with back float and can hold it independently.",
      byline: "Mr Wong, dad – Sengkang",
    },
    {
      text:
        "Very patient with nervous swimmers. The first few lessons focused on water confidence, and only when my child was ready, the drills increased. Good pacing.",
      byline: "Rachel, parent – Tampines",
    },
    {
      text:
        "I like that the teaching is practical. My child learned how to recover when he gets water in his face, instead of panicking. That skill alone made a big difference.",
      byline: "Mr Chua, dad – Punggol",
    },
    {
      text:
        "My child went from ‘cannot swim’ to doing a full lap with better stamina. Technique still improving, but the confidence and endurance growth is obvious.",
      byline: "Celine, mum – Pasir Ris",
    },
    {
      text:
        "The sessions are organised and the drills make sense. You can tell there is a structured programme and not just ad-hoc coaching.",
      byline: "Haziq, parent – Yishun",
    },
    {
      text:
        "My son struggles to focus sometimes, but the coaching kept him engaged with short drills and clear cues. It worked better than what we tried before.",
      byline: "Mdm Lee, parent – Sengkang",
    },
    {
      text:
        "We joined to prepare for SwimSafer-style progression. The foundations were built properly first, and the expectations were explained clearly. Great for beginners.",
      byline: "Mr Nathan, dad – Hougang",
    },
    {
      text:
        "My child is now comfortable in deeper water. Previously she would only stay at the steps. Now she can move out, float and kick with control.",
      byline: "Adeline, mum – Punggol",
    },
    {
      text:
        "Nice learning environment. The coaching feels respectful and calm. My child doesn’t feel embarrassed when making mistakes, and that helps learning faster.",
      byline: "Mr Koh, dad – Bishan",
    },
    {
      text:
        "We saw improvement in streamlining and kicking. Small corrections made a big difference, and the drills helped build better habits.",
      byline: "Jasmine, mum – Bedok",
    },
    {
      text:
        "My child is very sensitive to water splashing, but the step-by-step exposure helped. Now she can submerge briefly and blow bubbles comfortably.",
      byline: "Mdm Farah, parent – Serangoon",
    },
    {
      text:
        "Communication is clear and the lesson flow feels consistent. My son improved in confidence and also listens better in the pool now.",
      byline: "Mr Ong, dad – Punggol",
    },
    {
      text:
        "We’re happy with the progress and the overall experience. The sessions are structured, positive, and focused on building strong foundations.",
      byline: "Siti, mum – Sengkang",
    },
  ];

  return (
    <div className="bg-slate-900 min-h-screen">
      {/* Hero */}
      <section className="bg-sky-50 text-slate-900">
        <div className="container mx-auto px-4 py-14 md:py-18">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            Parent Reviews & Results
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl">
            Real feedback from families learning with Hairy Ape Swims, from first splashes to confident swimmers.
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-3xl p-6 md:p-7 shadow-sm flex flex-col h-full"
              >
                <QuoteMark />

                <p className="mt-4 text-slate-700 text-sm md:text-base leading-relaxed text-center">
                  “{r.text}”
                </p>

                <div className="mt-5 text-center font-semibold text-slate-900 text-sm">
                  {r.byline}
                </div>

                <div className="mt-auto pt-5 text-xs text-slate-500 text-center">
                  * Results vary by swimmer’s starting level, attendance and practice.
                </div>
              </div>
            ))}
          </div>

          {/* CTA under reviews */}
          <div className="mt-10 flex justify-center">
            <Link to="/Contact">
              <Button className="rounded-full bg-sky-600 hover:bg-sky-700 text-white font-semibold px-8 py-3 shadow">
                Book a Trial
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
