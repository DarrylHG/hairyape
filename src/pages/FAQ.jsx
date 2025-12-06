// src/pages/FAQ.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="bg-slate-900 min-h-screen">
      {/* Hero */}
      <section className="bg-sky-50 text-slate-900">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl">
            New to Hairy Ape Swims? Here are the answers to the questions
            parents ask us most often about lessons, safety and locations.
          </p>
        </div>
      </section>

      {/* FAQ body */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid lg:grid-cols-[2fr,1fr] gap-10 lg:gap-16">
            {/* Left: Accordion */}
            <div>
              <Accordion type="single" collapsible className="w-full space-y-3">
                <AccordionItem
                  value="lesson-structure"
                  className="border border-sky-100 rounded-2xl px-4"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-slate-800">
                    How are the lessons structured?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm md:text-base text-slate-700">
                    Lessons run once a week, either 30 or 45 minutes depending
                    on the programme. We follow a clear progression:
                    <br />
                    • Water confidence &amp; submersion
                    <br />
                    • Basic propulsion and floating
                    <br />
                    • Formal strokes (freestyle, backstroke, etc.)
                    <br />
                    • Endurance and stroke refinement
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="locations"
                  className="border border-sky-100 rounded-2xl px-4"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-slate-800">
                    Where are lessons held?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm md:text-base text-slate-700">
                    We coach mainly at condo pools and landed residentials.
                    Share your estate or preferred area when you
                    enquire and we will match you with the nearest available
                    coach or suggest a convenient pool.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="trial-class"
                  className="border border-sky-100 rounded-2xl px-4"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-slate-800">
                    Can my child try one class first?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm md:text-base text-slate-700">
                    Yes. We encourage a trial so your child can meet the coach
                    and experience our teaching style. After the trial, we&apos;ll
                    recommend the most suitable programme and schedule.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="what-to-bring"
                  className="border border-sky-100 rounded-2xl px-4"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-slate-800">
                    What should my child bring for class?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm md:text-base text-slate-700">
                    Please prepare:
                    <br />
                    • Proper swimwear
                    <br />
                    • Goggles (and swim cap for longer hair)
                    <br />
                    • Towel and change of clothes
                    <br />
                    • Floatation devices only if recommended by the coach
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="rain-policy"
                  className="border border-sky-100 rounded-2xl px-4"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-slate-800">
                    What happens if it rains or there is lightning?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm md:text-base text-slate-700">
                    Safety comes first. If there is lightning risk or heavy
                    rain that affects visibility, lessons will be paused or
                    postponed. Your coach will contact you about make-up
                    arrangements where possible.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="coach-qualification"
                  className="border border-sky-100 rounded-2xl px-4"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-slate-800">
                    Are your coaches qualified?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm md:text-base text-slate-700">
                    Our coaches hold recognised swim coaching and lifesaving
                    certifications, and many are NROC-registered. We also look
                    closely at their experience with young children and their
                    ability to create a fun, encouraging environment.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="adult-lessons"
                  className="border border-sky-100 rounded-2xl px-4"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-slate-800">
                    Do you offer lessons for adults or special needs swimmers?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm md:text-base text-slate-700">
                    Yes. We provide adult learn-to-swim, water-confidence
                    sessions and special needs classes, subject to coach
                    availability. Share your needs in the enquiry form and we
                    will advise on the best fit.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Right: Side card */}
            <aside className="bg-sky-50 border border-sky-100 rounded-3xl p-6 md:p-8 h-fit">
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">
                Still have questions?
              </h2>
              <p className="text-sm md:text-base text-slate-700 mb-4">
                If you don&apos;t see your question here, drop us a message with
                your child&apos;s age, swimming background and preferred
                location. We&apos;ll reply with a personalised recommendation.
              </p>
              <Link to="/Contact">
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full px-6 py-3 text-sm md:text-base">
                  Contact Our Team
                </Button>
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
