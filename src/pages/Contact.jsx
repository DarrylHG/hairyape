// src/pages/Contact.jsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  // ====== ADDED (state) ======
  const [parentName, setParentName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [experience, setExperience] = useState("");
  const [area, setArea] = useState("");
  const [preferredTiming, setPreferredTiming] = useState("");
  const [extra, setExtra] = useState("");

  // ====== ADDED (submit -> WhatsApp) ======
  function handleWhatsAppSubmit(e) {
    e.preventDefault();

    const TRIAL_TAG = "TRIAL-BOOKING";
    const WA_NUMBER = "6589510121"; // no + sign

    const message = `🦍 Hairy Ape Swims – Enquiry

🏷️ TAG: ${TRIAL_TAG}

👨‍👩‍👧 Parent: ${parentName || "-"}
📱 Mobile: ${mobile || "-"}
✉️ Email: ${email || "-"}

👶 Child: ${childName || "-"} (${childAge || "-"} yo)
🏊 Experience: ${experience || "-"}

📍 Area/Condo: ${area || "-"}
⏰ Preferred Days/Timing: ${preferredTiming || "-"}

📝 Notes: ${extra || "-"}

Thank you! Please share available trial slots.`;

    const url = `https://api.whatsapp.com/send?phone=${WA_NUMBER}&text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank", "noreferrer");
  }

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

              {/* ====== EDITED: add onSubmit ====== */}
              <form className="space-y-4" onSubmit={handleWhatsAppSubmit}>
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
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
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
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                      value={childName}
                      onChange={(e) => setChildName(e.target.value)}
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
                      value={childAge}
                      onChange={(e) => setChildAge(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Swimming Experience
                  </label>
                  <select
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                  >
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
                    Condo / Area Preference
                  </label>
                  <Input
                    type="text"
                    placeholder="E.g. Punggol – Waterway Terraces"
                    className="bg-white"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
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
                    value={preferredTiming}
                    onChange={(e) => setPreferredTiming(e.target.value)}
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
                    value={extra}
                    onChange={(e) => setExtra(e.target.value)}
                  />
                </div>

                <div className="pt-2">
                  {/* ====== EDITED: button submits form ====== */}
                  <Button
                    type="submit"
                    className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full px-8 py-3 text-sm md:text-base"
                  >
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
                  Talk to a Human Ape Now!
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
                      <p className="text-sky-100">+65 8951 0121</p>
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
                      <p className="text-sky-100">Singapore (Condo pools)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 text-cyan-300" />
                    <div>
                      <p className="font-semibold text-white">Response Hours</p>
                      <p className="text-sky-100">
                        Mon–Fri: 10am – 7pm
                        <br />
                        Sat/Sun: 9am – 5pm
                        <br />
                        Public Holidays: Closed
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
                      href="https://api.whatsapp.com/send?phone=6589510121&text=Hi%20Harry,%20I%20would%20like%20to%20enquire%20more%20about%20your%20swimming%20programmes%20available!"
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
