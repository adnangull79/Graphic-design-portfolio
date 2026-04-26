import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
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
import imgPosterGullAcademy from "@assets/posters/GULL ACDMY POSTER FINAL.png";
import imgPosterMain from "@assets/posters/POSTER.png";
import imgPosterSpringTemp from "@assets/posters/SPRING TEMP.png";
import imgPosterUntitled2 from "@assets/posters/Untitled-2.png";
import imgPosterChristmasCard from "@assets/posters/vecteezy_christmas-card-with-santa-claus-merry-christmas-and-happy-new-year_ [Converted].png";
import imgPosterHolidayParty from "@assets/posters/vecteezy_christmas-holiday-party-background-happy-new-year-and-merry_3755142 [Converted].png";
import imgPosterMerryTypography from "@assets/posters/vecteezy_merry-christmas-and-new-year-typography-on-shiny-xmas_3572416 [Converted] [Recovered].png";

type PortfolioItem = {
  id: number;
  title: string;
  desc: string;
  category: string;
  color: string;
  image?: string;
};

type PortfolioCardProps = {
  item: PortfolioItem;
  onSelect: (item: PortfolioItem) => void;
  isWideLayout?: boolean;
};

const PortfolioCard = React.memo(function PortfolioCard({ item, onSelect, isWideLayout = false }: PortfolioCardProps) {
  return (
    <div
      onClick={() => onSelect(item)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect(item);
        }
      }}
      role="button"
      tabIndex={0}
      className="group relative rounded-2xl overflow-hidden bg-[#111118] border border-white/5 shadow-xl hover:shadow-[0_0_22px_rgba(255,60,172,0.12)] hover:border-[#FF3CAC]/30 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
      style={{ contain: "layout paint style", contentVisibility: "auto", containIntrinsicSize: "480px" }}
    >
      <div className="absolute -right-8 top-1/3 h-24 w-20 bg-[#FF3CAC]/35 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

      <div className={`${isWideLayout ? "h-[320px] md:h-[420px]" : "h-[240px]"} relative overflow-hidden`}>
        {item.image ? (
          <>
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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

      <div className="p-6 relative bg-[#111118] z-10">
        <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono uppercase tracking-widest text-[#00F5A0] mb-4">
          {item.category}
        </span>
        <h4 className="text-xl font-serif font-bold text-white mb-2">{item.title}</h4>
        <p className="text-white/50 text-sm line-clamp-2">{item.desc}</p>
      </div>
    </div>
  );
});

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [visibleCount, setVisibleCount] = useState(9);

  const adobeStockImageModules = useMemo(
    () =>
      import.meta.glob("@assets/adobe stock/*.{png,jpg,jpeg,webp}", {
        eager: true,
        import: "default",
      }) as Record<string, string>,
    [],
  );

  const socialMediaImageModules = useMemo(
    () =>
      import.meta.glob("@assets/Social media Post/*.{png,jpg,jpeg,webp}", {
        eager: true,
        import: "default",
      }) as Record<string, string>,
    [],
  );

  const aiGeneratedImageModules = useMemo(
    () =>
      import.meta.glob("@assets/ai generations/*.{png,jpg,jpeg,webp}", {
        eager: true,
        import: "default",
      }) as Record<string, string>,
    [],
  );

  const logoImageModules = useMemo(
    () =>
      import.meta.glob("@assets/logo/*.{png,jpg,jpeg,webp}", {
        eager: true,
        import: "default",
      }) as Record<string, string>,
    [],
  );

  const uiImageModules = useMemo(
    () =>
      import.meta.glob("@assets/UI/*.{png,jpg,jpeg,webp}", {
        eager: true,
        import: "default",
      }) as Record<string, string>,
    [],
  );

  const fileTokenFixes: Record<string, string> = {
    fruites: "Fruits",
    hourse: "Horse",
    loin: "Lion",
    facce: "Face",
    jeely: "Jelly",
    illuration: "Illustration",
    girllll: "Girl",
    flowe: "Flower",
    flr: "Floral",
    pic: "Visual",
    kek: "Tech",
    vrc: "Vector",
    footbol: "Football",
    hirran: "Deer",
    santa: "Santa",
  };

  const toTitleCase = (value: string) =>
    value
      .split(" ")
      .filter(Boolean)
      .map((word) => (word.length <= 2 ? word.toUpperCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()))
      .join(" ");

  const buildAdobeStockTitle = (fileName: string, index: number) => {
    const stem = fileName
      .replace(/\.[^.]+$/, "")
      .replace(/[\[\]()~]/g, " ")
      .replace(/[_.-]+/g, " ")
      .replace(/\b(converted|recovered|final|temp|new)\b/gi, " ")
      .replace(/\s+/g, " ")
      .trim();

    const normalized = stem
      .split(" ")
      .map((token) => {
        const lower = token.toLowerCase();
        return fileTokenFixes[lower] ?? token;
      })
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();

    const tokens = normalized
      .toLowerCase()
      .split(" ")
      .filter((token) => /^[a-z]+$/.test(token));

    const has = (word: string) => tokens.includes(word);

    if (has("christmas") || has("santa")) {
      if (has("background")) return "Christmas Festive Background";
      return "Christmas Holiday Illustration";
    }

    if (has("icon") || has("icons")) return "Minimal Icon Set";
    if (has("pattern") && (has("fruit") || has("fruits"))) return "Fruits Seamless Pattern";
    if (has("pattern")) return "Seamless Vector Pattern";
    if (has("flower") || has("floral") || has("rose")) return "Botanical Floral Illustration";
    if (has("playing") && has("cards")) return "Playing Cards Illustration";

    if (has("eagle")) return "Eagle Emblem Illustration";
    if (has("lion")) return "Lion Character Illustration";
    if (has("cat")) return "Cat Character Illustration";
    if (has("dog") || has("pet")) return "Dog Character Illustration";
    if (has("fish") || has("jelly") || has("shark") || has("octopus")) return "Marine Life Illustration";
    if (has("crocodile")) return "Crocodile Character Illustration";
    if (has("deer")) return "Deer Character Illustration";
    if (has("horse")) return "Horse Character Illustration";

    if (has("face") || has("sketch") || has("girl") || has("man")) return "Portrait Sketch Illustration";
    if (has("apple")) return "Apple Vector Illustration";
    if (has("fire")) return "Fire Icon Illustration";
    if (has("house")) return "House Illustration";
    if (has("monster")) return "Monster Character Illustration";
    if (has("machine")) return "Mechanical Vector Illustration";

    if (!normalized || /^\d+$/.test(normalized)) {
      return `Adobe Stock Artwork ${index + 1}`;
    }

    const cleanedName = normalized
      .replace(/\b\d+\b/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    if (!cleanedName) return `Adobe Stock Artwork ${index + 1}`;

    return `${toTitleCase(cleanedName)} Illustration`;
  };

  const buildAdobeStockDesc = (title: string) => {
    const lower = title.toLowerCase();

    if (lower.includes("icon")) return `${title} featuring clean vector symbols designed for UI kits, branding systems, and app interfaces`;
    if (lower.includes("pattern")) return `${title} with repeat-ready composition developed for packaging, textile, and surface design applications`;
    if (lower.includes("flower") || lower.includes("floral") || lower.includes("rose")) return `${title} showcasing decorative botanical vector styling for editorial and commercial graphics`;
    if (lower.includes("christmas") || lower.includes("santa")) return `${title} crafted as festive seasonal artwork for greeting cards, social campaigns, and holiday promotions`;
    if (lower.includes("cat") || lower.includes("dog") || lower.includes("fish") || lower.includes("shark") || lower.includes("octopus") || lower.includes("crocodile") || lower.includes("lion") || lower.includes("horse") || lower.includes("eagle") || lower.includes("deer")) {
      return `${title} built as a character-led vector illustration with bold silhouette and high visual contrast`;
    }
    if (lower.includes("card")) return `${title} arranged as a print-friendly layout concept with strong hierarchy and display-ready composition`;
    if (lower.includes("face") || lower.includes("sketch") || lower.includes("girl") || lower.includes("man")) return `${title} focused on portrait-style drawing and expressive linework for creative editorial usage`;

    return `${title} prepared as commercial Adobe Stock artwork for multi-platform creative and branding projects`;
  };

  const adobeStockGradients = [
    "from-[#FF3CAC] via-[#784BA0] to-[#2B86C5]",
    "from-[#2B86C5] via-[#784BA0] to-[#FF3CAC]",
    "from-[#00F5A0] via-[#2B86C5] to-[#784BA0]",
    "from-[#FF6B35] to-[#FF3CAC]",
    "from-[#784BA0] to-[#2B86C5]",
    "from-[#FF3CAC] to-[#00F5A0]",
  ];

  const socialMediaGradients = [
    "from-[#784BA0] to-[#2B86C5]",
    "from-[#FF3CAC] to-[#FF6B35]",
    "from-[#00F5A0] to-[#2B86C5]",
    "from-[#FF3CAC] to-[#784BA0]",
    "from-[#2B86C5] to-[#00F5A0]",
    "from-[#FF6B35] to-[#FF3CAC]",
    "from-[#00F5A0] to-[#784BA0]",
    "from-[#1A1A2E] to-[#FF3CAC]",
  ];

  const aiGeneratedGradients = [
    "from-[#2B86C5] to-[#784BA0]",
    "from-[#784BA0] to-[#FF3CAC]",
    "from-[#00F5A0] to-[#2B86C5]",
    "from-[#FF3CAC] to-[#2B86C5]",
    "from-[#FF6B35] to-[#FF3CAC]",
    "from-[#0A0A0F] to-[#2B86C5]",
  ];

  const logoGradients = [
    "from-[#0d1117] to-[#1c2a3a]",
    "from-[#0a0a0a] to-[#002233]",
    "from-[#000] to-[#222]",
    "from-[#0a2040] to-[#1a3a60]",
    "from-[#021a18] to-[#0a2a20]",
  ];

  const uiGradients = [
    "from-[#0A0A0F] via-[#2B86C5] to-[#00F5A0]",
    "from-[#2B86C5] to-[#00F5A0]",
    "from-[#1A1A2E] to-[#2B86C5]",
    "from-[#00F5A0] to-[#784BA0]",
  ];

  const toCompactStem = (fileName: string) =>
    fileName.replace(/\.[^.]+$/, "").toLowerCase().replace(/[^a-z0-9]/g, "");

  const existingLogoStems = new Set([
    "202308092035470000",
    "202308162055550000",
    "202309162009490000",
    "202401150813310000",
    "202401161153260000",
    "202401171732120000",
    "202401181533150000",
    "202401190651020000",
    "adnancreation2",
    "coast11",
    "coast2",
    "grace2",
    "gullart6",
    "huge2",
    "icon",
    "innovativeelectronics4",
    "kitab2",
    "nukta6",
    "rza3",
  ]);

  const buildLogoTitle = (fileName: string, index: number) => {
    const lower = fileName.toLowerCase();
    if (lower.includes("food") || lower.includes("bowl")) return "Food Brand Logo Concept";
    if (lower.includes("kitchen")) return "Kitchen Brand Identity";
    if (lower.includes("academy")) return "Academy Identity Logo";
    if (lower.includes("mountain")) return "Mountain Emblem Logo";
    if (lower.includes("masjid")) return "Masjid Symbol Mark";
    if (lower.includes("crown")) return "Crown Royal Logo Concept";
    if (lower.includes("panther") || lower.includes("face")) return "Character Logo Mark";
    if (lower.includes("fiver")) return "Freelance Brand Logo";

    const cleaned = fileName
      .replace(/\.[^.]+$/, "")
      .replace(/[_.-]+/g, " ")
      .replace(/[()]/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    if (!cleaned || /^\d+$/.test(cleaned)) return `Logo Concept ${index + 1}`;
    return toTitleCase(cleaned);
  };

  const buildLogoDesc = (title: string) =>
    `${title} developed as a brand identity concept focusing on recognisable form, clean typography, and strong visual recall`;

  const buildUITitle = (fileName: string, index: number) => {
    const lower = fileName.toLowerCase();
    if (lower === "1.jpeg") return "TalkSync Translate Screen";
    if (lower === "2.jpeg") return "TalkSync History Screen";
    if (lower === "3.jpeg") return "TalkSync Saved Screen";
    if (lower === "4.jpeg") return "TalkSync Settings Screen";
    if (lower.includes("eraser")) return "TalkSync UI Showcase";
    return `UI Screen Design ${index + 1}`;
  };

  const buildUIDesc = (title: string) =>
    `${title} from a mobile translation app UI flow, designed with consistent dark-theme components and usability-first hierarchy`;

  const buildAIGeneratedTitle = (fileName: string, index: number) => {
    const lower = fileName.toLowerCase();

    if (lower.startsWith("gemini_generated_image")) return `Gemini AI Concept ${index + 1}`;
    if (lower.startsWith("chatgpt image")) return `ChatGPT AI Artwork ${index + 1}`;
    if (lower.startsWith("whatsapp image")) return `AI Concept Snapshot ${index + 1}`;
    if (lower.includes("logo")) return "AI Minimal Logo Concept";
    if (lower.includes("eraser")) return `AI Retouched Composition ${index + 1}`;

    const cleaned = fileName
      .replace(/\.[^.]+$/, "")
      .replace(/[_.-]+/g, " ")
      .replace(/[()]/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    if (!cleaned || /^\d+$/.test(cleaned)) return `AI Visual Exploration ${index + 1}`;
    return `${toTitleCase(cleaned)} Concept`;
  };

  const buildAIGeneratedDesc = (fileName: string, title: string) => {
    const lower = fileName.toLowerCase();

    if (lower.includes("logo")) return `${title} exploring AI-assisted logo form, typography direction, and minimal brand identity structure`;
    if (lower.includes("eraser")) return `${title} refined with AI cleanup workflow to enhance composition clarity and visual focus`;
    if (lower.startsWith("gemini_generated_image")) return `${title} generated from Gemini prompt workflows for style testing, concept variation, and visual ideation`;
    if (lower.startsWith("chatgpt image")) return `${title} created using ChatGPT image prompting for creative direction and rapid concept development`;
    if (lower.startsWith("whatsapp image")) return `${title} documenting AI concept iterations shared during project exploration and review stages`;

    return `${title} developed through AI image generation experiments to evaluate visual storytelling, mood, and art direction`;
  };

  const socialMediaMeta: Record<string, { title: string; desc: string }> = {
    "20250717_134204.jpg": {
      title: "Islamic Academy Course Offer",
      desc: "Dark-themed educational promo post highlighting Quran classes, free trial, and online session details",
    },
    "Dark Green and Yellow Digital Marketing Agency Instagram Post.png": {
      title: "Islamic Academy Green Campaign Post",
      desc: "Clean green-and-cream course promotion layout featuring service list, trial offer, and contact information",
    },
    "post 1.jpg": {
      title: "Read Your Quran Quote Post",
      desc: "Monochrome inspirational Islamic quote creative built for engagement-focused social publishing",
    },
    "SPRING TEMPELTE.png": {
      title: "Spring Festival Social Template",
      desc: "Seasonal tulip-themed social post template with decorative border and editable center content area",
    },
    "V.S.2.png": {
      title: "Valentine Hanging Hearts Sale",
      desc: "Promotional hearts composition with hanging typography and discount call-to-action for holiday campaigns",
    },
    "V2.png": {
      title: "Cupid Valentine Greeting Post",
      desc: "Bright valentine greeting design with cupid motif, heart elements, and celebratory date composition",
    },
    "V4.png": {
      title: "Layered Heart Valentine Banner",
      desc: "Bold layered-heart social graphic with central message area and playful cupid visual accents",
    },
    "VALENT SALE.png": {
      title: "Valentine 70 Percent Sale Post",
      desc: "Red retail-style social sale creative featuring heart icons and strong promotional hierarchy",
    },
    "VALENTINES DAY.png": {
      title: "Valentine Balloon Hearts Layout",
      desc: "Minimal valentine social visual with floating heart balloons and soft romantic typography treatment",
    },
    "VS STOCK.png": {
      title: "Valentine Offer Stock Post",
      desc: "Stock-ready valentine sales post with layered heart framing, hanging letters, and discount badge",
    },
  };

  const socialMediaItems: PortfolioItem[] = useMemo(
    () =>
      Object.entries(socialMediaImageModules)
        .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
        .map(([path, image], index) => {
          const fileName = path.split("/").pop() || `Social Asset ${index + 1}`;
          const matched = socialMediaMeta[fileName];

          const fallbackTitle = toTitleCase(
            fileName
              .replace(/\.[^.]+$/, "")
              .replace(/[_.-]+/g, " ")
              .replace(/\s+/g, " ")
              .trim(),
          );

          return {
            id: 2000 + index,
            title: matched?.title ?? `${fallbackTitle} Post`,
            desc:
              matched?.desc ??
              `${fallbackTitle} social media creative designed for high-visibility campaign engagement and brand promotion`,
            category: "Social Media",
            color: socialMediaGradients[index % socialMediaGradients.length],
            image,
          };
        }),
    [socialMediaImageModules],
  );

  const adobeStockItems: PortfolioItem[] = useMemo(
    () =>
      Object.entries(adobeStockImageModules)
        .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
        .map(([path, image], index) => {
          const fileName = path.split("/").pop() || `Asset ${index + 1}`;
          const title = buildAdobeStockTitle(fileName, index);

          return {
            id: 2900 + index,
            title,
            desc: buildAdobeStockDesc(title),
            category: "Adobe Stock",
            color: adobeStockGradients[index % adobeStockGradients.length],
            image,
          };
        }),
    [adobeStockImageModules],
  );

  const aiGeneratedItems: PortfolioItem[] = useMemo(
    () =>
      Object.entries(aiGeneratedImageModules)
        .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
        .map(([path, image], index) => {
          const fileName = path.split("/").pop() || `AI Asset ${index + 1}`;
          const title = buildAIGeneratedTitle(fileName, index);

          return {
            id: 4000 + index,
            title,
            desc: buildAIGeneratedDesc(fileName, title),
            category: "AI-Generated",
            color: aiGeneratedGradients[index % aiGeneratedGradients.length],
            image,
          };
        }),
    [aiGeneratedImageModules],
  );

  const logoItems: PortfolioItem[] = useMemo(
    () => {
      const seen = new Set<string>();

      return Object.entries(logoImageModules)
        .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
        .map(([path, image], index) => {
          const fileName = path.split("/").pop() || `Logo ${index + 1}`;
          const compact = toCompactStem(fileName);
          return { image, fileName, compact, index };
        })
        .filter(({ compact }) => {
          if (existingLogoStems.has(compact) || seen.has(compact)) return false;
          seen.add(compact);
          return true;
        })
        .map(({ image, fileName, index }, listIndex) => {
          const title = buildLogoTitle(fileName, index);

          return {
            id: 1500 + listIndex,
            title,
            desc: buildLogoDesc(title),
            category: "Logos",
            color: logoGradients[listIndex % logoGradients.length],
            image,
          };
        });
    },
    [logoImageModules],
  );

  const uiItems: PortfolioItem[] = useMemo(
    () =>
      Object.entries(uiImageModules)
        .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
        .map(([path, image], index) => {
          const fileName = path.split("/").pop() || `UI ${index + 1}`;
          const title = buildUITitle(fileName, index);

          return {
            id: 2600 + index,
            title,
            desc: buildUIDesc(title),
            category: "UI/UX",
            color: uiGradients[index % uiGradients.length],
            image,
          };
        }),
    [uiImageModules],
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    if (category) {
      setActiveFilter(category);
    }
  }, []);

  useEffect(() => {
    setVisibleCount(9);
  }, [activeFilter]);

  const categories = ["All", "Logos", "Social Media", "Posters", "UI/UX", "Adobe Stock", "AI-Generated"];

  const portfolioItems: PortfolioItem[] = useMemo(
    () => [
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
      { id: 19, title: "RZA Associates",            desc: "Real estate logo — rooftop arch framing a city skyline",         category: "Logos", color: "from-[#000] to-[#001040]",          image: imgRza },
      // Logos — newly added from attached_assets/logo (deduped)
      ...logoItems,
      // Social Media — auto-loaded from attached_assets/Social media Post
      ...socialMediaItems,
      // Posters — 7 cards
      { id: 23, title: "I'M FOR THE LOST CAUSE",    desc: "High-contrast monochrome illustration with pirate-unicorn mascot and expressive lettering", category: "Posters",      color: "from-[#1A1A2E] via-[#FF3CAC] to-[#784BA0]", image: imgPosterMain },
      { id: 24, title: "Gull Online Quran Academy", desc: "Promotional educational poster with Islamic motifs, course list, and contact-focused layout", category: "Posters",      color: "from-[#0A0A0F] to-[#2B86C5]", image: imgPosterGullAcademy },
      { id: 39, title: "Spring Season Floral Banner", desc: "Decorative spring-themed composition using mirrored blossoms, branches, and botanical framing", category: "Posters",      color: "from-[#784BA0] to-[#2B86C5]", image: imgPosterSpringTemp },
      { id: 40, title: "Holiday Line Art Background", desc: "Minimal festive vector background with hanging ornaments and clean yellow stroke icons", category: "Posters",      color: "from-[#FF6B35] to-[#FF3CAC]", image: imgPosterUntitled2 },
      { id: 41, title: "Santa Greeting Card Poster", desc: "Split-layout Christmas greeting design featuring character illustration and seasonal message", category: "Posters",      color: "from-[#00F5A0] to-[#2B86C5]", image: imgPosterChristmasCard },
      { id: 42, title: "Christmas Holiday Party Background", desc: "Festive New Year party visual with decorative holiday elements for event and social use", category: "Posters",      color: "from-[#FF3CAC] to-[#784BA0]", image: imgPosterHolidayParty },
      { id: 52, title: "Merry Christmas Winter Scene", desc: "Typography-led holiday artwork with snowy landscape, stars, and pine tree illustrations", category: "Posters",      color: "from-[#2B86C5] to-[#784BA0]", image: imgPosterMerryTypography },
      // UI/UX — auto-loaded from attached_assets/UI
      ...uiItems,
      // Adobe Stock — auto-loaded from attached_assets/adobe stock
      ...adobeStockItems,
      // AI-Generated — auto-loaded from attached_assets/ai generations
      ...aiGeneratedItems,
    ],
    [adobeStockItems, socialMediaItems, aiGeneratedItems, logoItems, uiItems],
  );

  const filteredPortfolio = useMemo(
    () =>
      activeFilter === "All"
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === activeFilter),
    [activeFilter, portfolioItems],
  );

  const visiblePortfolio = useMemo(
    () => filteredPortfolio.slice(0, visibleCount),
    [filteredPortfolio, visibleCount],
  );

  const hasMoreItems = visibleCount < filteredPortfolio.length;
  const closeProjectModal = useCallback(() => setSelectedItem(null), []);
  const handleSelectItem = useCallback((item: PortfolioItem) => setSelectedItem(item), []);
  const isUIFilterActive = activeFilter === "UI/UX";

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
          <div className={isUIFilterActive ? "grid grid-cols-1 gap-[24px]" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]"}>
              {visiblePortfolio.map(item => (
                <PortfolioCard
                  key={item.id}
                  item={item}
                  onSelect={handleSelectItem}
                  isWideLayout={isUIFilterActive}
                />
              ))}
          </div>

          {hasMoreItems && (
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setVisibleCount((current) => current + 9)}
                className="px-8 py-3 rounded-full border border-white/20 text-white font-mono text-xs uppercase tracking-widest hover:bg-white/5 transition-all"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProjectModal}
            className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-md p-4 md:p-8 flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-4xl max-h-[92vh] overflow-hidden rounded-2xl border border-white/10 bg-[#0E0D17] shadow-[0_0_60px_rgba(255,60,172,0.25)]"
            >
              <div className="relative">
                <button
                  type="button"
                  onClick={closeProjectModal}
                  className="absolute top-4 right-4 z-20 h-10 w-10 rounded-full border border-white/20 bg-black/50 text-white hover:bg-black/70 transition-colors flex items-center justify-center"
                  aria-label="Close preview"
                >
                  <X className="w-5 h-5" />
                </button>

                {selectedItem.image ? (
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full max-h-[58vh] object-contain bg-black"
                  />
                ) : (
                  <div className={`h-[58vh] w-full bg-gradient-to-br ${selectedItem.color} flex items-center justify-center`}>
                    <span className="text-7xl font-serif font-bold text-white/30 select-none">{selectedItem.category.charAt(0)}</span>
                  </div>
                )}
              </div>

              <div className="p-6 md:p-8 overflow-y-auto max-h-[34vh]">
                <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono uppercase tracking-widest text-[#00F5A0] mb-4">
                  {selectedItem.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3">{selectedItem.title}</h3>
                <p className="text-white/65 text-sm md:text-base leading-relaxed">{selectedItem.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
