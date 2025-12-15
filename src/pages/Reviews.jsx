import React from "react";

export default function Reviews() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <section className="bg-sky-50 text-slate-900">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            Parent Reviews
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            Hear what parents say about their experience with Hairy Ape Swims 🦍
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <p className="text-slate-700">
            Reviews coming soon. We’re currently collecting verified feedback
            from parents and swimmers.
          </p>
        </div>
      </section>
    </div>
  );
}
