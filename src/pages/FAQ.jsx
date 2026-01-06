// src/pages/FAQ.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How are the lessons structured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lessons run once a week for 30 or 45 minutes depending on the programme. We follow a clear progression from water confidence and submersion, to basic propulsion and floating, formal strokes such as freestyle and backstroke, and finally endurance and stroke refinement."
        }
      },
      {
        "@type": "Question",
        "name": "Where are lessons held?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lessons are mainly conducted at condominium pools and landed residentials. Families can share their preferred estate or area and we will match them with the nearest available coach or suggest a convenient pool."
        }
      },
      {
        "@type": "Question",
        "name": "Can my child try one class first?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We encourage a trial lesson so your child can meet the coach and experience our teaching style. After the trial, we will recommend a suitable programme and schedule."
        }
      },
      {
        "@type": "Question",
        "name": "What should my child bring for class?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Children should bring proper swimwear, goggles or a swim cap if needed, a towel, and a change of clothes. Floatation devices should only be brought if recommended by the coach."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if it rains or there is lightning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Safety comes first. If there is lightning risk or heavy rain that affects visibility, lessons may be paused or postponed. Coaches will contact families regarding make-up arrangements where possible."
        }
      },
      {
        "@type": "Question",
        "name": "Are your coaches qualified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our coaches hold recognised swim coaching and lifesaving certifications, and many are NROC-registered. We also assess their experience with young children and their ability to create a fun and encouraging environment."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer lessons for adults or special needs swimmers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We offer adult learn-to-swim, water confidence sessions and special needs classes, subject to coach availability. Families can share their needs during enquiry and we will advise on the best fit."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I read your Terms & Conditions about lessons?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our full Terms and Conditions are available on the Terms and Conditions page of our website."
        }
      },
      {
        "@type": "Question",
        "name": "What age should my child start swimming lessons?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Children can be introduced to water from as young as 6 months through gentle water orientation. Most children start structured lessons around 3 to 4 years old, when they can follow simple instructions and coordinate basic movements."
        }
      },
      {
        "@type": "Question",
        "name": "What should I look for in a good swimming class for children?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Parents should look for qualified coaches with recognised credentials, a safe coach-to-student ratio, and clear lesson progression from confidence building to floating, kicking, breathing and basic strokes. A good class should be structured but still enjoyable."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take for kids to learn to swim?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The learning timeline depends on a child's age, water confidence and lesson consistency. For many beginners, it may take about 20 to 30 consistent sessions to swim confidently across a pool, with further time needed to develop technique and stamina."
        }
      },
      {
        "@type": "Question",
        "name": "Are private or group swimming classes better for children?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both options can work depending on the child. Private lessons offer focused attention and faster confidence building, while group lessons provide social learning and motivation. Some families start with private lessons before transitioning to group classes."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqJsonLd)}
        </script>
      </Helmet>

      <div className="bg-slate-900 min-h-screen">
      {/* Hero */}
      <section className="bg-sky-50 text-slate-900">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl">
            New to Ape Champs Swim? Here are the answers to the questions
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

                {/* ===== ADDED: Terms link ===== */}
                <AccordionItem
                  value="terms"
                  className="border border-sky-100 rounded-2xl px-4"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-slate-800">
                    Where can I read your Terms &amp; Conditions about lessons?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm md:text-base text-slate-700">
                    You can view our full Terms &amp; Conditions here:{" "}
                    <Link to="/terms" className="text-cyan-700 font-semibold underline">
                      Terms &amp; Conditions
                    </Link>
                    .
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                value="starting-age"
                className="border border-sky-100 rounded-2xl px-4"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-slate-800">
                  What age should my child start swimming lessons?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm md:text-base text-slate-700">
                  Kids from 6 months old can be introduced to water early through gentle water-orientation, but most children
                  start structured lessons around 3 to 4 years old, when they can follow simple instructions
                  and coordinate basic movements better. Starting earlier usually helps children feel more
                  comfortable in water, and it builds water-safety awareness from young.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="what-to-look-for"
                className="border border-sky-100 rounded-2xl px-4"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-slate-800">
                  What should I look for in a good swimming class for children?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm md:text-base text-slate-700">
                  Look out for three things:
                  <br />
                  • Qualified coaches (with recognised coaching and lifesaving credentials)
                  <br />
                  • Safe coach-to-student ratio (smaller groups usually mean more attention and better safety)
                  <br />
                  • Clear progression (confidence → floating → kicking → breathing → basic strokes)
                  <br />
                  A good class should feel structured but still fun, so kids stay motivated and not stressed.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="how-long-to-learn"
                className="border border-sky-100 rounded-2xl px-4"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-slate-800">
                  How long does it take for kids to learn to swim?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm md:text-base text-slate-700">
                  It depends on your child’s age, water confidence and how regularly they attend.
                  For many beginners, it can take roughly 20 to 30 consistent sessions to swim across
                  a pool confidently without panic. Technique and stamina (and learning more strokes)
                  can take longer, and that’s normal.
                  <br />
                  <br />
                  We focus on mastery and confidence, not rushing. Consistent attendance and simple practice
                  between lessons helps a lot.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="private-vs-group"
                className="border border-sky-100 rounded-2xl px-4"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-slate-800">
                  Are private or group swimming classes better for children?
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm md:text-base text-slate-700">
                  Both can work, it depends on the child.
                  <br />
                  • Private lessons: more focused attention, good for nervous kids or those who need faster
                  confidence-building
                  <br />
                  • Group lessons: social learning, kids often copy peers, and it can be more fun and motivating
                  <br />
                  Some families start private to build comfort first, then move to group when the child is ready.
                  Either way, what matters most is a safe environment, a clear progression and regular practice.
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
    </>
  );
}
