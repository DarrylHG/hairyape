// netlify-plugin-prerender.js
// Simple prerender list for critical pages to ensure HTML is crawlable on first load
module.exports = {
  onPreBuild: async () => {
    const pagesToPrerender = [
      "/",
      "/programmes",
      "/rates",
      "/faq",
      "/reviews",
      "/roadmap",
      "/punggol-kids-swimming-lessons",
      "/condo-kids-swimming-lessons-singapore",
      "/best-kids-swimming-lessons-singapore",
    ];
    console.log("[prerender] pages:", pagesToPrerender.join(", "));
  },
};
