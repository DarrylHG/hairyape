// src/pages/About.jsx
import React from "react";

export default function About() {
  return (
    <div className="bg-slate-900 min-h-screen">
      {/* Hero */}
      <section className="bg-sky-50 text-slate-900">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            About Ape Champs Swim
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl">
            Ape Champs Swim is a fun, family-friendly swim school in Singapore.
            We help kids build water confidence, strong technique, and a love
            for swimming in a safe and supportive environment.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Our Story
            </h2>
            <p className="text-slate-600 mb-4">
              Ape Champs Swim started with a simple goal: to make swimming
              lessons something children actually look forward to. Instead of
              stressful drills, we focus on games, clear progress and lots of
              encouragement.
            </p>
            <p className="text-slate-600">
              Our coaches are experienced, MOE-aligned and passionate about
              helping every child — from complete beginners to confident
              swimmers — feel safe and proud in the water.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              What We Believe In
            </h2>
            <ul className="space-y-3 text-slate-600">
              <li>• Safety and proper water confidence come first.</li>
              <li>• Small class sizes so every child gets attention.</li>
              <li>• Positive coaching that builds lifelong confidence.</li>
              <li>• Clear levels and goals, aligned with SwimSafer.</li>
              <li>• Partnering closely with parents on progress.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
<section className="py-20 bg-white text-center">
  <div className="container mx-auto px-6 max-w-4xl">

    {/* OUR MISSION */}
    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6">
      Our Mission
    </h2>
    <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-16">
      To build water confidence, life-saving skills, and a love for swimming 
      in every child, through safe, structured, and joy-filled lessons led by 
      passionate professional coaches.
    </p>

    {/* OUR VISION */}
    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6">
      Our Vision
    </h2>
    <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
      To be Singapore’s most trusted and child-friendly swim school,
      empowering the next generation to grow strong, confident, and resilient 
      — in the pool and in life.
    </p>

  </div>
</section>

      {/* Harry the Ape blurb */}
      <section className="bg-sky-100">
        <div className="container mx-auto px-4 py-12 md:py-14 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-slate-800 mb-3">
              Meet Harry the Ape
            </h2>
            <p className="text-slate-700 mb-3">
              Harry is our friendly mascot who reminds kids that it’s okay to
              start small, try again and have fun while learning.
            </p>
            <p className="text-slate-700">
              From stickers and progress cards to fun cheers at the pool, Harry
              celebrates every milestone and keeps lessons light-hearted.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
