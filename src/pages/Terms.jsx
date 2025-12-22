// src/pages/Terms.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Terms() {
  return (
    <div className="bg-slate-900 min-h-screen">
      {/* Hero */}
      <section className="bg-sky-50 text-slate-900">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl">
            Please read our lesson package inclusions and cancellation policy before booking.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto bg-sky-50/70 border border-sky-100 rounded-3xl p-6 md:p-10 shadow-sm">
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">
              Ape Champs Swim – Terms &amp; Conditions
            </h2>

            <div className="text-slate-700 space-y-6 text-sm md:text-base leading-relaxed">
              <div>
                <p className="font-semibold text-slate-800 mb-2">
                  What’s included in every lesson package
                </p>
                <ul className="space-y-1">
                  <li>• 4 lesson credits</li>
                  <li>• 2 bad weather cancellations</li>
                  <li>• 2 medical certificate (MC) cancellations</li>
                  <li>• 1 discretionary cancellation</li>
                </ul>
              </div>

              <p>
                At Ape Champs Swim, we care about both our swimmers and our coaches. When a lesson is
                cancelled, it affects a coach’s schedule and income. These terms are here to keep
                things fair for everyone, while still giving families flexibility when life happens.
                Thank you for supporting our coaches and respecting the guidelines below.
              </p>

              <div>
                <p className="font-semibold text-slate-800 mb-2">🦍 Wet Weather Plan</p>
                <p>
                  Swimming is an outdoor sport, and weather can be unpredictable.
                </p>
                <p className="mt-2">
                  • Light rain: Lessons will continue as planned.
                  <br />
                  • Heavy rain or lightning alert: Coaches may switch to dryland training. This can
                  include age-appropriate fitness work and simple theory modules to help swimmers
                  understand technique and mechanics better.
                </p>
                <p className="mt-2">
                  If you prefer to skip dryland training, each package includes 2 bad weather
                  cancellations. Bad weather cancellations can only be used within 1.5 hours before
                  lesson time.
                </p>
                <p className="mt-2">
                  After the 2 bad weather cancellations are fully used, further cancellations in place
                  of dryland training will be charged at 50% of the lesson fee. We strongly encourage
                  families to save bad weather cancellations for genuinely unsafe conditions rather
                  than light drizzle. Thank you for helping us keep lessons safe, consistent and fair.
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-800 mb-2">🤒 Feeling Unwell or Injured</p>
                <p>
                  We understand swimmers may occasionally be unwell or injured. Each package includes
                  2 MC cancellations, which may be used upon submission of a valid medical certificate
                  issued by a registered General Practitioner in Singapore.
                </p>
                <p className="mt-2">
                  After the 2 MC cancellations have been used, any further cancellations will be
                  charged at 50% of the lesson fee. We appreciate your understanding as this helps
                  our coaches plan their time responsibly.
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-800 mb-2">
                  ⏰ Discretionary Cancellation (No Questions Asked)
                </p>
                <p>
                  Each package includes 1 discretionary cancellation, which can be used for any reason,
                  no questions asked. To help our coaches manage their schedules, please inform us at
                  least 4 hours before lesson time when using this cancellation.
                </p>
                <p className="mt-2">
                  All lesson credits are strictly non-refundable. Thank you for your cooperation.
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-800 mb-2">
                  👨‍👩‍👧 Group Lesson Cancellation Policy
                </p>
                <p>
                  For group lessons, cancellations must be unanimously agreed upon by all swimmers or
                  parents in the group. If unanimous agreement is not reached, the lesson will proceed
                  as scheduled and be charged accordingly.
                </p>
                <p className="mt-2">
                  All payments and lesson credits are strictly non-refundable.
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-800 mb-2">Thank you for your understanding
                </p>
                <p>
                 Thank you for being part of the Ape Champs Swim family 🦍
                 Your understanding helps us create a positive, respectful and sustainable environment 
                 for our swimmers and coaches alike.
                </p>
              </div>

              <div className="pt-2">
                <Link to="/FAQ">
                  <Button className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full px-6 py-3 text-sm md:text-base">
                    Back to FAQ
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Terms;
