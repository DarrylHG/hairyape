// src/pages/Contact.jsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-slate-900 min-h-screen">
      {/* Hero */}
      <section className="bg-sky-50 text-slate-900">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            Book a Trial or Ask Us Anything
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl">
            Share a few details about your child and preferred location. Our
            team will WhatsApp you with available slots and a recommended
            programme.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid lg:grid-cols-[2fr,1.2fr] gap-10 lg:gap-16">
            {/* Left: Form */}
            <div className="bg-sky-50/70 border border-sky-100 rounded-3xl p-6 md:p-8 shadow-sm">
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
                Enquiry Form
              </h2>
              <p className="text-sm md:text-base text-slate-700 mb-6">
                We usually reply within one working day. For urgent enquiries,
                feel free to WhatsApp us directly.
              </p>

              <form className="space-y-4">
                {/* Parent details */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Parent&apos;s Name
                    </label>
                    <Input
                      type="text"
                      placeholder="E.g. Tan Mei Ling"
                      className="bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Mobile / WhatsApp
                    </label>
                    <Input
                      type="tel"
                      placeholder="E.g. +65 9XXX XXXX"
                      className="bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Email (optional)
                  </label>
                  <Input
                    type="email"
                    placeholder="for a copy of your enquiry"
                    className="bg-white"
                  />
                </div>

                {/* Child details */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Child&apos;s Name
                    </label>
                    <Input
                      type="text"
                      placeholder="E.g. Jayden"
                      className="bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Child&apos;s Age
                    </label>
                    <Input
                      type="number"
                      min="1"
                      max="18"
                      placeholder="E.g. 6"
                      className="bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Swimming Experience
                  </label>
                  <select className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500">
                    <option value="">Select one</option>
                    <option>Totally new to water</option>
                    <option>Comfortable in shallow pool, can&apos;t swim yet</option>
                    <option>Can swim a short distance</option>
                    <option>Confident swimmer, needs stroke refinement</option>
                  </select>
                </div>

                {/* Location / timing */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Condo / Area or Preferred Pool
                  </label>
                  <Input
                    type="text"
                    placeholder="E.g. Punggol – Waterway Terraces, or Jurong East Swimming Complex"
                    className="bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Preferred Days &amp; Timing
                  </label>
                  <Input
                    type="text"
                    placeholder="E.g. Weekday evenings after 6pm, or Sat mornings"
                    className="bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Anything else we should know?
                  </label>
                  <Textarea
                    rows={4}
                    placeholder="Share special needs, water confidence level, siblings joining, etc."
                    className="bg-white"
                  />
                </div>

                <div className="pt-2">
                  <Button className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full px-8 py-3 text-sm md:text-base">
                    Send Enquiry
                  </Button>
                  <p className="mt-2 text-xs text-slate-500">
                    * This is a demo form – you can later connect it to email,
                    WhatsApp or a booking system.
                  </p>
                </div>
              </form>
            </div>

            {/* Right: Contact info card */}
            <aside className="space-y-6">
              <div className="bg-slate-900 text-sky-50 rounded-3xl p-6 md:p-8 shadow-lg">
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  Talk to a Human Coach
                </h2>
                <p className="text-sm md:text-base text-sky-100 mb-4">
                  Prefer to chat first? Reach out via WhatsApp or email and we&apos;ll
                  help you figure out the best next step for your child.
                </p>

                <div className="space-y-3 text-sm md:text-base">
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 text-cyan-300" />
                    <div>
                      <p className="font-semibold text-white">WhatsApp</p>
                      <p className="text-sky-100">+65 XXXX XXXX</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 text-cyan-300" />
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <p className="text-sky-100">hello@hairyapeswims.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 text-cyan-300" />
                    <div>
                      <p className="font-semibold text-white">Based in</p>
                      <p className="text-sky-100">Singapore (ActiveSG &amp; condo pools)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 text-cyan-300" />
                    <div>
                      <p className="font-semibold text-white">Response Hours</p>
                      <p className="text-sky-100">
                        Mon–Fri: 10am – 7pm
                        <br />
                        Sat: 9am – 1pm
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Button
                    asChild
                    className="w-full rounded-full py-3 text-sm md:text-base font-semibold
                              bg-emerald-500 hover:bg-emerald-600 text-white shadow-md"
                  >
                    <a
                      href="https://wa.me/6589510121"  // put your real WhatsApp number here
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp Us Now
                    </a>
                  </Button>
                </div>
              </div>

              <p className="text-xs md:text-sm text-slate-500">
                By contacting us, you consent to Hairy Ape Swims reaching out
                via WhatsApp, SMS or email regarding swimming lessons and
                related updates. We respect your privacy and will not spam you.
              </p>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
