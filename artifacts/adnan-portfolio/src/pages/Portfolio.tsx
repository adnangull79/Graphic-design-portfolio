import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Cursor, Navbar, Footer } from "./Home";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    if (category) {
      setActiveFilter(category);
    }
  }, []);

  const categories = ["All", "Logos", "Social Media", "Posters", "Business Cards", "UI/UX", "Branding", "AI-Generated"];

  const portfolioItems = [
    // Logos
    { id: 1, title: "Tech Startup Logo", desc: "Modern minimalist wordmark", category: "Logos", color: "from-[#FF3CAC] to-[#784BA0]" },
    { id: 2, title: "Restaurant Brand Mark", desc: "Organic circular emblem", category: "Logos", color: "from-[#2B86C5] to-[#00F5A0]" },
    { id: 3, title: "Fashion Label Logo", desc: "Elegant serif typographic logo", category: "Logos", color: "from-[#FF6B35] to-[#FF3CAC]" },
    // Social Media
    { id: 4, title: "Eid Campaign Posts", desc: "Series of festive social graphics", category: "Social Media", color: "from-[#784BA0] to-[#2B86C5]" },
    { id: 5, title: "Product Launch Story", desc: "Instagram story set", category: "Social Media", color: "from-[#FF3CAC] to-[#FF6B35]" },
    { id: 6, title: "Motivational Quote Series", desc: "Typography-forward posts", category: "Social Media", color: "from-[#00F5A0] to-[#2B86C5]" },
    // Posters
    { id: 7, title: "Music Festival Poster", desc: "Bold typographic design", category: "Posters", color: "from-[#1A1A2E] via-[#FF3CAC] to-[#784BA0]" },
    { id: 8, title: "Corporate Event Flyer", desc: "Clean professional layout", category: "Posters", color: "from-[#0A0A0F] to-[#2B86C5]" },
    // Business Cards
    { id: 9, title: "Luxury Business Card", desc: "Minimal dark card design", category: "Business Cards", color: "from-[#111118] to-[#784BA0]" },
    { id: 10, title: "Creative Studio Card", desc: "Bold colorful identity", category: "Business Cards", color: "from-[#FF6B35] to-[#FF3CAC]" },
    // UI/UX
    { id: 11, title: "E-Commerce App UI", desc: "Mobile shopping interface", category: "UI/UX", color: "from-[#0A0A0F] via-[#2B86C5] to-[#00F5A0]" },
    { id: 12, title: "Dashboard Design", desc: "SaaS analytics dashboard", category: "UI/UX", color: "from-[#784BA0] to-[#FF3CAC]" },
    // Branding
    { id: 13, title: "Full Brand Identity", desc: "Complete brand system", category: "Branding", color: "from-[#FF3CAC] via-[#784BA0] to-[#2B86C5]" },
    // AI-Generated
    { id: 14, title: "AI Brand Concept", desc: "AI-assisted brand identity", category: "AI-Generated", color: "from-[#00F5A0] to-[#784BA0]" },
    { id: 15, title: "Surreal Digital Art", desc: "AI-prompted visual artwork", category: "AI-Generated", color: "from-[#FF3CAC] to-[#2B86C5]" }
  ];

  const filteredPortfolio = activeFilter === "All" ? portfolioItems : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="bg-[#07060F] min-h-screen text-foreground selection:bg-[#FF3CAC] selection:text-white flex flex-col">
      <Cursor />
      <div className="noise-overlay" />
      <Navbar />

      {/* Page Hero */}
      <section className="relative min-h-[40vh] flex flex-col items-center justify-center pt-32 pb-16 overflow-hidden">
        {/* Animated Blobs Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#FF3CAC] filter blur-[100px] rounded-full animate-blob-1" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#784BA0] filter blur-[100px] rounded-full animate-blob-2" />
          <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] bg-[#2B86C5] filter blur-[100px] rounded-full animate-blob-3" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-mono text-sm text-white/50"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">→</span>
            <span className="text-[#FF3CAC]">Portfolio</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[clamp(3rem,6vw,5rem)] font-serif font-bold mb-4 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            style={{
              background: "linear-gradient(135deg, #FFFFFF 0%, #FF3CAC 50%, #784BA0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            My Work
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            A showcase of creativity, strategy, and craft.
          </motion.p>
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <div className="sticky top-[80px] z-40 bg-[#07060F]/80 backdrop-blur-md border-y border-white/5 py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-nowrap overflow-x-auto pb-2 gap-3 hide-scrollbar items-center justify-start md:justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`whitespace-nowrap px-6 py-2.5 font-mono text-xs uppercase tracking-widest rounded-full transition-all duration-300 ${
                  activeFilter === category 
                    ? 'bg-gradient-to-r from-[#FF3CAC] to-[#784BA0] text-white shadow-[0_0_20px_rgba(255,60,172,0.4)]' 
                    : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <section className="py-20 flex-grow">
        <div className="container mx-auto px-6 md:px-[60px]">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            <AnimatePresence>
              {filteredPortfolio.map(item => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="group relative rounded-2xl overflow-hidden cursor-none bg-[#111118] border border-white/5 shadow-xl hover:shadow-[0_0_30px_rgba(255,60,172,0.15)] hover:border-[#FF3CAC]/30 hover:-translate-y-2 transition-all duration-500"
                >
                  {/* Image Area */}
                  <div className="h-[240px] relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-80 group-hover:scale-105 transition-transform duration-700`} />
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <span className="text-8xl font-serif font-bold text-white select-none">{item.category.charAt(0)}</span>
                    </div>
                    {/* Simulated mockup shapes */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-1/2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-4 shadow-lg flex flex-col gap-2">
                      <div className="w-1/3 h-3 bg-white/20 rounded-full" />
                      <div className="w-full h-2 bg-white/10 rounded-full mt-2" />
                      <div className="w-4/5 h-2 bg-white/10 rounded-full" />
                    </div>
                  </div>

                  {/* Info Area */}
                  <div className="p-6 relative bg-[#111118] z-10">
                    <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono uppercase tracking-widest text-[#00F5A0] mb-4">
                      {item.category}
                    </span>
                    <h4 className="text-xl font-serif font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-white/50 text-sm mb-6 line-clamp-1">{item.desc}</p>
                    <div className="flex items-center text-sm font-mono uppercase text-white group-hover:text-[#FF3CAC] transition-colors">
                      View Project <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-20">
                    <span className="text-5xl font-light text-white mb-4">+</span>
                    <span className="font-mono text-sm uppercase tracking-widest text-white">View Project</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 relative overflow-hidden bg-card/30">
        <div className="absolute inset-0 bg-gradient-to-t from-[#FF3CAC]/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Want to see more work?</h2>
          <p className="text-lg text-white/60 mb-10">
            These are just highlights. Get in touch to see the full portfolio or discuss how we can collaborate on your next project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="mailto:adnangull@email.com" className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-[#FF3CAC] to-[#784BA0] text-white font-mono uppercase tracking-widest text-sm rounded-full shadow-[0_0_20px_rgba(255,60,172,0.4)] hover:shadow-[0_0_30px_rgba(255,60,172,0.7)] transition-all hover:scale-105 flex justify-center">
              Contact Me
            </a>
            <Link href="/" className="w-full sm:w-auto px-10 py-4 border border-white/20 text-white font-mono uppercase tracking-widest text-sm rounded-full hover:bg-white/5 transition-all hover:scale-105 flex justify-center">
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}