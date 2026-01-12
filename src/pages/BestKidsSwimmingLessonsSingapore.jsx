import React from "react";
import { Link } from "react-router-dom";
import JsonLd from "../seo/JsonLd";
import { webPageSchema, geoServiceSchema } from "../seo/geoSchemas";

export default function BestKidsSwimmingLessonsSingapore() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            url: "https://apechampsswim.com.sg/best-kids-swimming-lessons-singapore",
            name: "Best Kids Swimming Lessons in Singapore",
            description:
              "A practical guide on what to look for in kids swimming lessons in Singapore, covering safety, coach quality, lesson structure, and why condo-based private lessons are a popular option.",
          }),
          geoServiceSchema({
            url: "https://apechampsswim.com.sg/best-kids-swimming-lessons-singapore",
            name: "Kids Swimming Lessons in Singapore",
            description:
              "Private kids swimming lessons in Singapore, commonly conducted at condominium pools, with structured progression and safety-focused coaching.",
          }),
        ]}
      />

      <div className="bg-slate-900 min-h-screen">
        <section className="bg-sky-50 text-slate-900">
          <div className="container mx-auto px-4 py-16 md:py-20">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
              Best Kids Swimming Lessons in Singapore
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl">
              If you are comparing swim schools, here is a clear checklist to
              choose the right kids swimming programme, without guesswork.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-3"
              >
                Enquire for a coach match
              </Link>
              <Link
                to="/faq"
                className="inline-flex items-center justify-center rounded-full bg-white hover:bg-slate-50 text-slate-900 font-semibold px-6 py-3 border border-slate-200"
              >
                Read FAQs
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="grid lg:grid-cols-[2fr,1fr] gap-10 lg:gap-16">
              <div className="prose max-w-none prose-slate">
                <h2>What makes a kids swimming programme “best”</h2>
                <p>
                  The best kids swimming lessons are not about rushing strokes.
                  They are about safe progression, consistent practice, and
                  building calm water confidence that lasts.
                </p>

                <h3>1) Safety standards are clear</h3>
                <ul>
                  <li>Clear weather and lightning safety policy</li>
                  <li>Coach stays close, especially for beginners</li>
                  <li>Age appropriate progression, no risky shortcuts</li>
                </ul>

                <h3>2) Coaches are properly qualified</h3>
                <ul>
                  <li>Recognised coaching and lifesaving certifications</li>
                  <li>Experience teaching children, not only competitive swimmers</li>
                  <li>Ability to manage fearful or distracted kids calmly</li>
                </ul>

                <h3>3) Lesson structure is systematic</h3>
                <p>
                  Look for a clear pathway, water confidence, breathing and
                  floating, basic propulsion, then formal strokes and endurance.
                </p>

                <h3>4) Class format matches your child</h3>
                <ul>
                  <li>
                    Private lessons, best for nervous kids, fast confidence building,
                    or when you want full attention
                  </li>
                  <li>
                    Small group lessons, good for social motivation and peer learning
                  </li>
                </ul>

                <h3>5) Location and environment reduce friction</h3>
                <p>
                  In Singapore, many families prefer lessons at condo pools
                  because it reduces travel time and kids learn in a familiar
                  environment. This often improves consistency, which is the main
                  driver of progress.
                </p>

                <h2>Why condo-based private lessons are popular</h2>
                <ul>
                  <li>Familiar pool environment can reduce fear</li>
                  <li>Less time spent commuting, easier weekly consistency</li>
                  <li>Coach can tailor pacing and drills to the child</li>
                </ul>

                <h2>Next steps</h2>
                <p>
                  If you want help deciding, share your child’s age, current water
                  confidence, and your preferred area. We will recommend a suitable
                  lesson format and match you with a coach where possible.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-3"
                  >
                    Contact us
                  </Link>
                  <Link
                    to="/private-vs-group-kids-swimming-lessons"
                    className="inline-flex items-center justify-center rounded-full bg-white hover:bg-slate-50 text-slate-900 font-semibold px-6 py-3 border border-slate-200"
                  >
                    Private vs group guide
                  </Link>
                </div>
              </div>

              <aside className="bg-sky-50 border border-sky-100 rounded-3xl p-6 md:p-8 h-fit">
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">
                  Quick checklist
                </h2>
                <ul className="text-sm md:text-base text-slate-700 space-y-2">
                  <li>Coach credentials and kids teaching experience</li>
                  <li>Clear safety SOPs, lightning and weather policy</li>
                  <li>Structured progression, not random drills</li>
                  <li>Format fit, private or small group</li>
                  <li>Consistency friendly location</li>
                </ul>

                <div className="mt-6">
                  <Link
                    to="/kids-swimming-safety-sop"
                    className="text-cyan-700 font-semibold underline"
                  >
                    Read the safety SOP guide
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
