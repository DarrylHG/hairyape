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
              Terms &amp; Conditions for Swimming Lessons
            </h2>

            <div className="text-slate-700 space-y-6 text-sm md:text-base leading-relaxed">
              <div>
                <p className="font-semibold text-slate-800 mb-2">Each lesson package includes:</p>
                <ul className="space-y-1">
                  <li>• 4x Lesson credits</li>
                  <li>• 2x Bad weather cancellations</li>
                  <li>• 2x Medical Certificate cancellations</li>
                  <li>• 1x Discretionary cancellation</li>
                </ul>
              </div>

              <p>
                Dear swimmers and parents, we seek your kind understanding that cancelled lessons
                equate to a loss of income for coaches. Our lesson packages aim to strike a balance
                between giving our clients a satisfying swimming experience and taking care of our
                coaches’ interest. Thank you so much respecting and adhering to the provisions
                listed in our lesson packages.
              </p>

              <div>
                <p className="font-semibold text-slate-800 mb-2">Wet Weather Plan</p>
                <p>
                  In cases of light rain, swim lessons will carry on as per normal. In the event of
                  heavy rain or lightning alert, our coaches are trained to conduct dryland training
                  which consists of fitness &amp; conditioning work and/or theory modules to help swimmers
                  understand the mechanics of swimming better. The level of difficulty for these dryland
                  curriculums would be tailored according to the swimmers’ age group.
                </p>
                <p className="mt-2">
                  Having said so, our lesson packages do include 2x Bad weather cancellations for your
                  utilization should you prefer to skip the dryland curriculums in the event of heavy rain
                  or lightning alert. Bad weather cancellations can only be used within 1.5 hours before
                  lesson time.
                </p>
                <p className="mt-2">
                  We seek your kind understanding that after the 2x Bad weather cancellations have been
                  used up, further cancellations in place of dryland curriculums would incur charges equal
                  to 50% of a single lesson’s fees. Hence, we strongly advise that you save the Bad weather
                  cancellation in the event of heavy rain instead of utilizing it during drizzling conditions.
                  We thank you for your most gracious cooperation.
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-800 mb-2">Feeling Unwell or Unfit</p>
                <p>
                  In cases should the swimmer be feeling unwell or unable to attend lesson due to injuries,
                  our lesson packages do include 2x Medical Certificate cancellations for your utilization in
                  conjunction with the submission of the swimmer’s Medical Certificate issued by a registered
                  General Practitioner in Singapore.
                </p>
                <p className="mt-2">
                  We seek your kind understanding that after the 2x Medical Certificate cancellations have been
                  used up, further cancellations of lessons would incur charges equal to 50% of a single lesson’s
                  fees. We thank you for your most gracious cooperation.
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-800 mb-2">Discretionary Cancellation</p>
                <p>
                  Our lesson packages also include a 1x Discretionary cancellation for your utilization at your
                  sole and full discretion with no questions asked. We only ask that should you wish to utilize
                  this Discretionary cancellation, kindly inform us at least 4 hours before lesson time to allow
                  our coaches to plan their schedules accordingly.
                </p>
                <p className="mt-2">
                  All our credits are strictly non refundable. We thank you for your most gracious cooperation.
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-800 mb-2">Group Class Discretionary Cancellation</p>
                <p>
                  Please take note that for group lessons, ALL swimmers/parents of swimmers must unanimously agree
                  to any utilization of cancellations. Otherwise, lessons will have to carry on and charged as per normal.
                  We thank you for your kind understanding and most gracious cooperation. Do take note all credits paid are
                  strictly non refundable.
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