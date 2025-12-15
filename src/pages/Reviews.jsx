import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, Quote, BadgeCheck } from "lucide-react";

function StarRow({ value = 5 }) {
  const full = Math.max(0, Math.min(5, Math.round(value)));
  return (
    <div className="flex items-center gap-1" aria-label={`${full} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < full ? "text-amber-400 fill-amber-400" : "text-slate-300"}`}
        />
      ))}
    </div>
  );
}

function Avatar({ name = "Parent" }) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

  return (
    <div className="h-10 w-10 rounded-full bg-sky-100 border border-sky-200 flex items-center justify-center">
      <span className="text-sm font-bold text-sky-800">{initials || "P"}</span>
    </div>
  );
}

export default function Reviews() {
  // Edit these anytime
  const reviews = [
    {
      platform: "Google",
      name: "Ms Tan",
      child: "6yo (Beginner)",
      rating: 5,
      date: "Dec 2025",
      location: "Punggol",
      verified: true,
      text:
        "Coach Harry is super patient. My kid used to be scared of water, now can float and kick confidently. Lessons are structured and fun.",
    },
    {
      platform: "WhatsApp",
      name: "Mr Lim",
      child: "8yo (SwimSafer)",
      rating: 5,
      date: "Nov 2025",
      location: "Sengkang",
      verified: false,
      text:
        "Clear progress every few weeks. Coach explains what to practise, and sends quick updates after lesson. Very reassuring for parents.",
    },
    {
      platform: "Google",
      name: "Aileen",
      child: "4yo (Water Confidence)",
      rating: 5,
      date: "Oct 2025",
      location: "Pasir Ris",
      verified: true,
      text:
        "Love the play-based approach. My girl looks forward to lessons and is much calmer in the pool now.",
    },
    {
      platform: "WhatsApp",
      name: "Jason",
      child: "Adult (Beginner)",
      rating: 4,
      date: "Sep 2025",
      location: "Tampines",
      verified: false,
      text:
        "Supportive coaching and no pressure. Finally learned proper breathing and can swim a short distance without panicking.",
    },
  ];

  const [minStars, setMinStars] = useState(0);
  const [platform, setPlatform] = useState("All");

  const filtered = useMemo(() => {
    return reviews.filter((r) => {
      const okStars = r.rating >= minStars;
      const okPlatform = platform === "All" ? true : r.platform === platform;
      return okStars && okPlatform;
    });
  }, [reviews, minStars, platform]);

  const avg = useMemo(() => {
    if (!reviews.length) return 0;
    const s = reviews.reduce((a, r) => a + (r.rating || 0), 0);
    return Math.round((s / reviews.length) * 10) / 10;
  }, [reviews]);

  return (
    <div className="bg-slate-900 min-h-screen">
      {/* Hero */}
      <section className="bg-sky-50 text-slate-900">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            Parent Reviews & Results
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl">
            Real feedback from families learning with Hairy Ape Swims, from first splashes to confident swimmers.
          </p>

          {/* Summary */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-2xl bg-white border border-slate-200 px-4 py-2 shadow-sm">
              <span className="text-2xl font-extrabold text-slate-900">{avg}</span>
              <StarRow value={avg} />
              <span className="text-sm text-slate-500">({reviews.length} reviews)</span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-2xl bg-white border border-slate-200 px-4 py-2 shadow-sm">
              <span className="text-sm font-semibold text-slate-700">Filter:</span>

              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="All">All platforms</option>
                <option value="Google">Google</option>
                <option value="WhatsApp">WhatsApp</option>
              </select>

              <select
                value={minStars}
                onChange={(e) => setMinStars(Number(e.target.value))}
                className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value={0}>All stars</option>
                <option value={5}>5★ only</option>
                <option value={4}>4★ and up</option>
                <option value={3}>3★ and up</option>
              </select>
            </div>

            <Link to="/Contact" className="ml-auto">
              <Button className="rounded-full bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 shadow">
                Book a Trial
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {filtered.map((r, i) => (
              <div
                key={i}
                className="bg-sky-50/70 border border-sky-100 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col h-full"
              >
                {/* Header */}
                <div className="flex items-start gap-4">
                  <Avatar name={r.name} />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-bold text-slate-900">{r.name}</p>
                      {r.verified && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                          <BadgeCheck className="h-3.5 w-3.5" />
                          Verified
                        </span>
                      )}
                      <span className="text-xs font-semibold text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded-full">
                        {r.platform}
                      </span>
                    </div>

                    <div className="mt-1 flex items-center justify-between gap-2">
                      <StarRow value={r.rating} />
                      <span className="text-xs text-slate-500">{r.date}</span>
                    </div>

                    <p className="mt-2 text-sm text-slate-600">
                      <span className="font-semibold text-slate-700">{r.child}</span>
                      {r.location ? <span> • {r.location}</span> : null}
                    </p>
                  </div>
                </div>

                {/* Body */}
                <div className="mt-4 relative">
                  <Quote className="h-5 w-5 text-sky-300 absolute -top-2 -left-1" />
                  <p className="text-slate-700 leading-relaxed pl-6">{r.text}</p>
                </div>

                <div className="mt-auto pt-5 text-xs text-slate-500">
                  * Results vary by swimmer’s starting level, attendance and practice.
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {!filtered.length && (
            <div className="mt-10 text-center text-slate-600">
              No reviews match your filter. Try lowering the minimum stars.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
