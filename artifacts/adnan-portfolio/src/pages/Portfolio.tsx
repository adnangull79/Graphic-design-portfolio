import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Cursor, Navbar, Footer } from "./Home";

import imgTanka from "@assets/20230809_203547_0000_1776321808415.png";
import imgKalam from "@assets/20230816_205555_0000_1776321808415.png";
import imgBotho from "@assets/20230916_200949_0000_1776321808416.png";
import imgGamer from "@assets/20240115_081331_0000_1776321808416.png";
import imgUnlimitedTech from "@assets/20240116_115326_0000_1776321808416.png";
import imgHealthyFood from "@assets/20240117_173212_0000_1776321808417.png";
import imgCoffeeHouse from "@assets/20240118_153315_0000_1776321808417.png";
import imgYogaStudio from "@assets/20240119_065102_0000_1776321808417.png";
import imgBH from "@assets/Adnan_creation~2_1776321808417.jpg";
import imgCoast2 from "@assets/COAST_(2)_1776321808417.png";
import imgCoast11 from "@assets/COAST_(11)_1776321808418.png";
import imgGrace from "@assets/GRACE_(2)_1776321808418.png";
import imgGullArt from "@assets/GULL_ART_(6)_1776321808418.png";
import imgCityMobile from "@assets/huge_(2)_1776321808419.png";
import imgTechQabeela from "@assets/icon_1776321808419.png";
import imgInnovativeElec from "@assets/INNOVATIVE_ELECTRONICS_(4)_1776321808419.png";
import imgKitab from "@assets/K_I_T_A_B_(2)_1776321808419.png";
import imgMessi from "@assets/N_U_K_T_A_(6)_1776321808420.png";
import imgRza from "@assets/RZA_(3)_1776321808420.png";
import imgGullAcademyPoster from "@assets/GULL_ACDMY_POSTER_FINAL_1776745535633.png";
import imgLostCause from "@assets/POSTER_1776745535634.png";
import imgSpringTemp from "@assets/SPRING_TEMP_1776745535635.png";
import imgChristmasOrnaments from "@assets/Untitled-2_1776745535635.png";
import imgChristmasSanta from "@assets/vecteezy_christmas-card-with-santa-claus-merry-christmas-and-h_1776745535636.png";
import imgChristmasParty from "@assets/vecteezy_christmas-holiday-party-background-happy-new-year-and_1776745535636.png";
import imgChristmasTypo from "@assets/vecteezy_merry-christmas-and-new-year-typography-on-shiny-xmas_1776745535637.png";
import imgSpringTemplate from "@assets/SPRING_TEMPELTE_1776667267142.png";
import imgValSale2 from "@assets/V.S.2_1776667267143.png";
import imgVal2 from "@assets/V2_1776667267143.png";
import imgVal4 from "@assets/V4_1776667267143.png";
import imgValentSale from "@assets/VALENT_SALE_1776667267144.png";
import imgValentinesDay from "@assets/VALENTINES_DAY_1776667267144.png";
import imgVsStock from "@assets/VS_STOCK_1776667267144.png";
import imgDualStar from "@assets/1_1776612571195.png";
import imgKitchenGram from "@assets/FOOD.1_1776612571198.png";
import imgGullAcademy from "@assets/GUUL_ACADEMY_1776612571199.png";
import imgGreenFuelBowl from "@assets/HEAKTHY_BOWL_1776612571199.png";
import imgHealthyFoodOrganic from "@assets/HEALTHY_FOOD_1776612571200.png";
import imgHerbalMed from "@assets/HERBAL_MED_1776612571201.png";
import imgMrCook from "@assets/kitchen_1776612571202.png";
import imgFireyKitchen from "@assets/KITCHEN2.0_1776612571203.png";
import imgAqsaIslamic from "@assets/MASJID_1776660383014.png";
import imgNatureHold from "@assets/tree_1776660383015.png";
import imgButterflySalon from "@assets/WOMEN_&_BUTERFLY_1776660383016.png";

type PortfolioItem = {
  id: number;
  title: string;
  desc: string;
  category: string;
  color: string;
  image?: string;
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    if (category) {
      setActiveFilter(category);
    }
  }, []);

  const categories = ["All", "Logos", "Social Media", "Posters", "Business Cards", "UI/UX", "Adobe Stock", "AI-Generated"];

  const portfolioItems: PortfolioItem[] = [
    // Logos — real client work
    { id: 1,  title: "Tanka Traditional",         desc: "Fashion brand with red line-art clothing illustration",          category: "Logos", color: "from-[#888] to-[#ccc]",             image: imgTanka },
    { id: 2,  title: "Kalam",                     desc: "Literary brand — calligraphic pen inside geometric Urdu frame",  category: "Logos", color: "from-[#111] to-[#444]",             image: imgKalam },
    { id: 3,  title: "Botho Menswear",            desc: "Elegant menswear label with silhouette & vertical wordmark",     category: "Logos", color: "from-[#0d1117] to-[#1c2a3a]",      image: imgBotho },
    { id: 4,  title: "Gamer E-Sports Team",       desc: "Bold esports logo featuring a skull mascot & strong type",       category: "Logos", color: "from-[#000] to-[#222]",             image: imgGamer },
    { id: 5,  title: "The Unlimited Technology",  desc: "Tech startup — lightbulb fused with gear mark in electric cyan", category: "Logos", color: "from-[#0a0a0a] to-[#002233]",      image: imgUnlimitedTech },
    { id: 6,  title: "Healthy Food",              desc: "Organic food brand with leaf & fork inside a circular emblem",   category: "Logos", color: "from-[#f9f3e8] to-[#fce4ec]",      image: imgHealthyFood },
    { id: 7,  title: "Coffee House",              desc: "Café brand merging a steaming cup with a rooftop silhouette",    category: "Logos", color: "from-[#fff0e0] to-[#fce4ec]",      image: imgCoffeeHouse },
    { id: 8,  title: "Yoga Studio",               desc: "Minimalist typographic logo on warm caramel background",         category: "Logos", color: "from-[#c8905a] to-[#e0b080]",      image: imgYogaStudio },
    { id: 9,  title: "BH Monogram",               desc: "Corporate hexagonal lettermark shown in 3 colour variants",      category: "Logos", color: "from-[#0d1b3e] to-[#6b7a99]",      image: imgBH },
    { id: 10, title: "USC Coast",                 desc: "Music/media circular monogram in neon pink on dark stage",       category: "Logos", color: "from-[#0d0d0d] to-[#2a0028]",      image: imgCoast2 },
    { id: 11, title: "AKJ Studio",                desc: "Shield-shaped studio monogram in warm terracotta brown",         category: "Logos", color: "from-[#e8e0d8] to-[#c8b8a8]",      image: imgCoast11 },
    { id: 12, title: "Grace Pharmacy",            desc: "Medical brand with capsule-pill icon inside a blue circle",      category: "Logos", color: "from-[#000] to-[#001133]",          image: imgGrace },
    { id: 13, title: "Gull Art",                  desc: "Personal creative brand — AG monogram + vibrant fluid mark",     category: "Logos", color: "from-[#0a2040] to-[#1a3a60]",      image: imgGullArt },
    { id: 14, title: "City Mobile Zone",          desc: "Tech retail brand with CMZ circular lettermark & phone graphic", category: "Logos", color: "from-[#000] to-[#001a2e]",          image: imgCityMobile },
    { id: 15, title: "Tech Qabeela Institute",    desc: "EdTech logo — mountain chevron meets circuit-board lightbulb",   category: "Logos", color: "from-[#0a0a0a] to-[#1a0a2e]",      image: imgTechQabeela },
    { id: 16, title: "Innovative Electronics",    desc: "Neon-green electronics brand with gear & circuit illustration",  category: "Logos", color: "from-[#021a18] to-[#0a2a20]",      image: imgInnovativeElec },
    { id: 17, title: "KiTAB",                     desc: "Book brand — Urdu-inspired geometric letterform in monochrome",  category: "Logos", color: "from-[#000] to-[#222]",             image: imgKitab },
    { id: 18, title: "Messi Lettermark",          desc: "Sports ME monogram with a football at the heart of the mark",   category: "Logos", color: "from-[#031a0d] to-[#062a18]",      image: imgMessi },
    { id: 19, title: "RZA Associates",            desc: "Real estate logo — rooftop arch framing a city skyline",                            category: "Logos", color: "from-[#000] to-[#001040]",          image: imgRza },
    { id: 52, title: "Dual Star Foundation",      desc: "Community foundation — three human figures in grey & green with orbital ring and twin stars", category: "Logos", color: "from-[#2d6a2d] to-[#9e9e9e]",    image: imgDualStar },
    { id: 53, title: "KitchenGram",               desc: "Food-tech brand — crossed orange spoon & teal fork in a bold diagonal lock-up on dark", category: "Logos", color: "from-[#1a1a1a] to-[#FF6B35]",      image: imgKitchenGram },
    { id: 54, title: "Gull Online Quran Academy", desc: "EdTech logo — golden mosque arch cradling an open Quran with Arabic calligraphy and crescent on black", category: "Logos", color: "from-[#0a0a0a] to-[#b8960c]",    image: imgGullAcademy },
    { id: 55, title: "GreenFuel Bowl",            desc: "Healthy food brand — minimal green bowl with a sprouting leaf on a deep forest-green field", category: "Logos", color: "from-[#0d2b0d] to-[#4caf50]",    image: imgGreenFuelBowl },
    { id: 56, title: "Healthy Food Organic",      desc: "Natural food logo — green mortar & pestle with leaves framed by a crescent swirl on transparent ground", category: "Logos", color: "from-[#0a1f0a] to-[#5a9e2f]",    image: imgHealthyFoodOrganic },
    { id: 57, title: "Herbal Medicose",           desc: "Herbal pharma brand — open capsule in bright green with leaves sprouting from the split, clean minimal style", category: "Logos", color: "from-[#f0f8f0] to-[#66bb6a]",    image: imgHerbalMed },
    { id: 58, title: "Mr Cook",                   desc: "Chef brand — bold black brushstroke chef hat on a warm amber ground with hand-drawn energy", category: "Logos", color: "from-[#e65c00] to-[#f9d423]",      image: imgMrCook },
    { id: 59, title: "Firey Kitchen",             desc: "BBQ & grill brand — crossed fork & spatula framing a tri-colour flame, vintage badge on lime green", category: "Logos", color: "from-[#7dc43a] to-[#e65c00]",      image: imgFireyKitchen },
    { id: 60, title: "Aqsa Islamic Institute",    desc: "Islamic education — black mosque silhouette with twin minarets set against a bold golden circle", category: "Logos", color: "from-[#0a0a0a] to-[#d4a017]",    image: imgAqsaIslamic },
    { id: 61, title: "NatureHold Nursery",        desc: "Nursery brand — two hands forming a tree trunk lifting a canopy of green and purple leaves", category: "Logos", color: "from-[#f0f4f0] to-[#7fb800]",      image: imgNatureHold },
    { id: 62, title: "The Butterfly Salon",       desc: "Beauty salon — elegant one-line art female face with a bold black butterfly hair ornament on amber", category: "Logos", color: "from-[#e6a817] to-[#1a1a1a]",    image: imgButterflySalon },
    // Social Media — 8 cards
    { id: 20, title: "Happy Spring Template",     desc: "Seasonal social post — blue polka-dot frame with 3D tulips in white, maroon & gold around a clean 'Happy Spring / Season of Happiness' centre panel", category: "Social Media", color: "from-[#1a8fe0] to-[#00c853]", image: imgSpringTemplate },
    { id: 21, title: "Valentine's Sale Post",     desc: "High-impact sale graphic — bold paper-cut 'SALE' letters hanging on strings over a deep-red sunburst, floating pink & purple hearts, 50% Off badge", category: "Social Media", color: "from-[#8b0000] to-[#c2185b]", image: imgValSale2 },
    { id: 22, title: "Valentine's Day Cupid",     desc: "Vibrant lime-green Valentine's post — red Cupid silhouette, script headline, two glossy 3D hearts and scattered mini hearts for maximum engagement", category: "Social Media", color: "from-[#c8f400] to-[#e53935]", image: imgVal2 },
    { id: 34, title: "Valentine's Layered Card", desc: "Deep-red layered heart composition with nested paper-cut depth, cyan bold typography 'Happy Valentines Day 14 Feb', and cherub angels in each corner", category: "Social Media", color: "from-[#b71c1c] to-[#e53935]", image: imgVal4 },
    { id: 35, title: "Valentine's Day Sale 70%", desc: "Split-layout sale poster — red top with paper-cut hearts and '70% Off / Shop Now' panel, clean white bottom with bold orange 'Special Discount' CTA", category: "Social Media", color: "from-[#e53935] to-[#ffffff]", image: imgValentSale },
    { id: 36, title: "Valentine's Minimal Post", desc: "Clean white minimal design — large outline heart in pink, elegant 'Happy Valentine's Day 14 February' type, and paper-cut heart bouquets on delicate stems", category: "Social Media", color: "from-[#fce4ec] to-[#f48fb1]", image: imgValentinesDay },
    { id: 37, title: "Valentine's Sale Magenta", desc: "Rich magenta-purple sale graphic — layered heart backdrop, suspended 'SALE' letterforms, floating hearts at multiple scales, 50% Off heart tag", category: "Social Media", color: "from-[#880e4f] to-[#e91e8c]", image: imgVsStock },
    { id: 38, title: "Clothing Brand Posts",      desc: "On-brand social media content for a fashion label",                    category: "Social Media", color: "from-[#1A1A2E] to-[#FF3CAC]" },
    // Posters — 7 cards
    { id: 23, title: "Gull Online Quran Academy", desc: "Institutional promo poster — dark teal with Arabic calligraphy header, gold Ramadan lanterns, five course arrows (Nooranai Qaida, Tajweed, Translation, Namaz, Duas), hexagonal student photo and 3 Days Free Trial badge", category: "Posters", color: "from-[#004d40] to-[#00695c]", image: imgGullAcademyPoster },
    { id: 24, title: "Lost Cause Unicorn",        desc: "Bold black-and-white illustration poster — chunky hand-lettered 'I'm For The Lost Cause' type alongside a smirking pirate unicorn in a tricorn hat, sinking ship scene below", category: "Posters", color: "from-[#1a1a1a] to-[#555555]", image: imgLostCause },
    { id: 39, title: "Spring Season Template",    desc: "Seasonal horizontal poster — deep navy background, symmetrical botanical cherry-blossom branches in white and green framing a bright lime-green panel with bold 'Spring Season' text", category: "Posters", color: "from-[#1b3a4b] to-[#4caf50]", image: imgSpringTemp },
    { id: 40, title: "Christmas Ornaments Poster", desc: "Festive holiday poster — vibrant cyan-blue gradient backdrop with 14 yellow outline Christmas icons hanging on strings (star, Santa, bauble, angel, bell, deer, candy cane, stocking, gift, tree, snowman) and elegant dark script typography below", category: "Posters", color: "from-[#0097a7] to-[#00bcd4]", image: imgChristmasOrnaments },
    { id: 41, title: "Santa Claus Christmas Card", desc: "Split-panel greeting poster — silver-white left side with blue elegant 'We Wish You A Merry Christmas and Happy New Year' script message, dark red right side featuring a smiling 3D cartoon Santa peeking around the edge with snowflake accents", category: "Posters", color: "from-[#c0c0c0] to-[#b71c1c]", image: imgChristmasSanta },
    { id: 42, title: "Christmas Holiday Party",   desc: "Luxury Christmas party poster — deep forest green with golden 'Merry Christmas' calligraphy script, surrounded by realistic 3D elements: gold reindeer, jingle bells, candy canes, pine branches, red baubles and ribbon-wrapped gift boxes", category: "Posters", color: "from-[#1b5e20] to-[#d4a017]", image: imgChristmasParty },
    { id: 63, title: "Christmas Typography Night", desc: "Wintery outdoor scene — midnight-blue sky with scattered snowflakes and stars, bold yellow and blue 'Merry Christmas' hand-lettered type centre-stage, snow-covered pine trees and rolling white drifts across the foreground", category: "Posters", color: "from-[#1a237e] to-[#0d47a1]", image: imgChristmasTypo },
    // Business Cards — 4 cards
    { id: 25, title: "Luxury Business Card",      desc: "Minimal dark card design for a premium brand",                          category: "Business Cards", color: "from-[#111118] to-[#784BA0]" },
    { id: 26, title: "Creative Studio Card",      desc: "Bold colorful identity card for a design studio",                       category: "Business Cards", color: "from-[#FF6B35] to-[#FF3CAC]" },
    { id: 43, title: "Freelancer Card",           desc: "Clean typographic card with gradient accent",                           category: "Business Cards", color: "from-[#2B86C5] to-[#00F5A0]" },
    { id: 44, title: "Corporate Double-Sided",    desc: "Professional two-sided card with brand identity system",                category: "Business Cards", color: "from-[#FF3CAC] to-[#2B86C5]" },
    // UI/UX — 4 cards
    { id: 27, title: "E-Commerce App UI",         desc: "Mobile shopping interface with modern UX patterns",                     category: "UI/UX",        color: "from-[#0A0A0F] via-[#2B86C5] to-[#00F5A0]" },
    { id: 28, title: "Dashboard Design",          desc: "SaaS analytics dashboard with data visualisation",                      category: "UI/UX",        color: "from-[#784BA0] to-[#FF3CAC]" },
    { id: 45, title: "Portfolio App Screen",      desc: "Portfolio showcase mobile app UI concept",                              category: "UI/UX",        color: "from-[#FF3CAC] to-[#784BA0]" },
    { id: 46, title: "Restaurant Ordering App",   desc: "Food delivery app interface with intuitive flow",                       category: "UI/UX",        color: "from-[#00F5A0] to-[#784BA0]" },
    // Adobe Stock — 6 cards
    { id: 29, title: "Abstract Vector Pack",      desc: "Bold geometric abstract compositions for commercial licensing",          category: "Adobe Stock",  color: "from-[#FF3CAC] via-[#784BA0] to-[#2B86C5]" },
    { id: 32, title: "Digital Art Collection",    desc: "Vivid abstract digital illustrations uploaded to Adobe Stock",           category: "Adobe Stock",  color: "from-[#2B86C5] via-[#784BA0] to-[#FF3CAC]" },
    { id: 33, title: "Gradient Texture Set",      desc: "High-resolution gradient textures and backgrounds",                     category: "Adobe Stock",  color: "from-[#00F5A0] via-[#2B86C5] to-[#784BA0]" },
    { id: 47, title: "Icon Pack — Minimal",       desc: "Clean minimal icon set for UI and presentation use",                    category: "Adobe Stock",  color: "from-[#FF6B35] to-[#FF3CAC]" },
    { id: 48, title: "Social Media Templates",    desc: "Editable social graphic templates for commercial download",             category: "Adobe Stock",  color: "from-[#784BA0] to-[#2B86C5]" },
    { id: 49, title: "Brand Pattern Set",         desc: "Seamless repeating patterns for packaging and print",                   category: "Adobe Stock",  color: "from-[#FF3CAC] to-[#00F5A0]" },
    // AI-Generated — 4 cards
    { id: 30, title: "AI Brand Concept",          desc: "AI-assisted brand identity exploration",                                category: "AI-Generated", color: "from-[#00F5A0] to-[#784BA0]" },
    { id: 31, title: "Surreal Digital Art",       desc: "AI-prompted visual artwork and concept exploration",                    category: "AI-Generated", color: "from-[#FF3CAC] to-[#2B86C5]" },
    { id: 50, title: "AI Portrait Series",        desc: "Stylised AI-generated portrait artworks",                               category: "AI-Generated", color: "from-[#2B86C5] to-[#FF3CAC]" },
    { id: 51, title: "Futuristic City Concepts",  desc: "AI-generated architectural and urban concept visuals",                  category: "AI-Generated", color: "from-[#784BA0] to-[#FF6B35]" },
  ];

  const filteredPortfolio = activeFilter === "All" ? portfolioItems : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="bg-[#07060F] min-h-screen text-foreground selection:bg-[#FF3CAC] selection:text-white flex flex-col">
      <Cursor />
      <div className="noise-overlay" />
      <Navbar />

      {/* Page Hero */}
      <section className="relative min-h-[40vh] flex flex-col items-center justify-center pt-32 pb-16 overflow-hidden">
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
                    {item.image ? (
                      <>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111118] via-transparent to-transparent opacity-60" />
                      </>
                    ) : (
                      <>
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-90 group-hover:scale-105 transition-transform duration-700`} />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-[3rem] font-serif font-bold text-white opacity-20 select-none pointer-events-none">{item.category.charAt(0)}</span>
                        </div>
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                          <span className="font-mono text-[0.65rem] text-white/50 bg-black/30 px-2 py-0.5 rounded whitespace-nowrap">Coming Soon</span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Info Area */}
                  <div className="p-6 relative bg-[#111118] z-10">
                    <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono uppercase tracking-widest text-[#00F5A0] mb-4">
                      {item.category}
                    </span>
                    <h4 className="text-xl font-serif font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-white/50 text-sm mb-6 line-clamp-2">{item.desc}</p>
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
            <a href="mailto:adnan122550gull@gmail.com" className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-[#FF3CAC] to-[#784BA0] text-white font-mono uppercase tracking-widest text-sm rounded-full shadow-[0_0_20px_rgba(255,60,172,0.4)] hover:shadow-[0_0_30px_rgba(255,60,172,0.7)] transition-all hover:scale-105 flex justify-center">
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
