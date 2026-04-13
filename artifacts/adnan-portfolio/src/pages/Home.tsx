import React, { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Download, Award, Briefcase, FileImage, Layout, Star, Mail, Linkedin, Instagram, Twitter } from "lucide-react";
import adnanPhoto from "@assets/AI_Eraser_image_(9)_(1)_(1)_1776065620675.jpg";

// --- Components ---

const Cursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button'
      );
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <>
      <div 
        className="cursor-dot" 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          backgroundColor: isPointer ? 'hsl(var(--accent))' : 'hsl(var(--primary))',
          boxShadow: isPointer ? '0 0 10px hsl(var(--accent)), 0 0 20px hsl(var(--accent))' : '0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary))'
        }} 
      />
      <div 
        className="cursor-ring" 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          width: isPointer ? '60px' : '40px',
          height: isPointer ? '60px' : '40px',
          borderColor: isPointer ? 'hsl(var(--primary))' : 'hsl(var(--secondary))'
        }} 
      />
    </>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Services", href: "/#services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Experience", href: "/#experience" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass border-b" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif font-bold text-gradient tracking-tighter">AG</Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            link.href.startsWith("/#") ? (
              <a key={link.name} href={link.href} className="text-sm font-mono uppercase tracking-widest text-muted-foreground hover:text-white transition-colors">
                {link.name}
              </a>
            ) : (
              <Link key={link.name} href={link.href} className="text-sm font-mono uppercase tracking-widest text-muted-foreground hover:text-white transition-colors">
                {link.name}
              </Link>
            )
          ))}
          <a href="#contact" className="px-5 py-2 border border-primary text-primary font-mono text-sm uppercase tracking-wider rounded shadow-[0_0_10px_rgba(255,60,172,0.3)] hover:bg-primary hover:text-white hover:shadow-[0_0_20px_rgba(255,60,172,0.6)] transition-all duration-300">
            Hire Me
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full glass border-b flex flex-col items-center py-8 space-y-6 md:hidden"
          >
            {navLinks.map((link) => (
              link.href.startsWith("/#") ? (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-mono uppercase tracking-widest text-muted-foreground hover:text-white transition-colors">
                  {link.name}
                </a>
              ) : (
                <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-mono uppercase tracking-widest text-muted-foreground hover:text-white transition-colors">
                  {link.name}
                </Link>
              )
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)} className="px-6 py-3 bg-primary text-white font-mono text-sm uppercase tracking-wider rounded shadow-[0_0_15px_rgba(255,60,172,0.5)]">
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-[#07070C] border-t border-t-white/10 pt-20 pb-10 mt-auto">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12 mb-16">
        <div>
          <Link href="/" className="text-3xl font-serif font-bold text-gradient tracking-tighter block mb-4">AG</Link>
          <p className="text-muted-foreground text-sm max-w-xs">Designing ideas into impact. Graphic designer specializing in branding, UI/UX, and digital experiences.</p>
        </div>
        
        <div>
          <h4 className="text-white font-mono uppercase tracking-widest text-sm mb-6">Quick Links</h4>
          <ul className="space-y-3">
            {['Home', 'About', 'Portfolio', 'Services', 'Contact'].map(link => (
              <li key={link}>
                {link === 'Portfolio' ? (
                  <Link href={`/${link.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">{link}</Link>
                ) : (
                  <a href={`/#${link.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">{link}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-mono uppercase tracking-widest text-sm mb-6">Get In Touch</h4>
          <a href="mailto:adnangull@email.com" className="text-muted-foreground hover:text-white transition-colors text-sm flex items-center mb-6">
            <Mail className="w-4 h-4 mr-2" /> adnangull@email.com
          </a>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 hover:shadow-[0_0_15px_rgba(43,134,197,0.3)] transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-secondary hover:border-secondary/50 hover:shadow-[0_0_15px_rgba(120,75,160,0.3)] transition-all">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-muted-foreground">
        <p>© 2026 Adnan Gull. All Rights Reserved.</p>
        <p className="mt-4 md:mt-0">Crafted with passion <span className="text-primary">✦</span></p>
      </div>
    </div>
  </footer>
);

export { Cursor, Navbar, Footer };

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('ag-loaded');
    if (hasLoaded) {
      setIsLoading(false);
    } else {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('ag-loaded', '1');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);
  
  const filters = ["All", "Logos", "Social Media", "Posters", "Business Cards", "UI/UX"];
  
  const portfolioItems = [
    { id: 1, title: "Tech Startup Identity", category: "Logos", color: "from-[#FF3CAC] to-[#784BA0]" },
    { id: 2, title: "E-commerce App Redesign", category: "UI/UX", color: "from-[#2B86C5] to-[#00F5A0]" },
    { id: 3, title: "Summer Festival Campaign", category: "Social Media", color: "from-[#FF6B35] to-[#FF3CAC]" },
    { id: 4, title: "Corporate Branding", category: "Business Cards", color: "from-[#1A1A2E] to-[#784BA0]" },
    { id: 5, title: "Cyberpunk Event", category: "Posters", color: "from-[#0A0A0F] to-[#2B86C5]" },
    { id: 6, title: "Minimalist Crypto Logo", category: "Logos", color: "from-[#00F5A0] to-[#784BA0]" }
  ];

  const filteredPortfolio = activeFilter === "All" ? portfolioItems : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="bg-[#07060F] min-h-screen text-foreground selection:bg-primary selection:text-white">
      {isLoading && (
        <div className="fixed inset-0 z-[9999] bg-[#07060F] flex flex-col items-center justify-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-[5rem] font-serif font-bold text-gradient">AG</h1>
            <div className="w-48 h-1 bg-white/10 mt-8 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              />
            </div>
          </motion.div>
        </div>
      )}
      
      <Cursor />
      <div className="noise-overlay" />
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
        
        {/* Layer 2: Animated Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-65">
          <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-[#FF3CAC] filter blur-[80px] rounded-[60%_40%_70%_30%/50%_60%_40%_70%] animate-blob-1" />
          <div className="absolute top-1/4 right-10 w-[600px] h-[600px] bg-[#784BA0] filter blur-[80px] rounded-[60%_40%_70%_30%/50%_60%_40%_70%] animate-blob-2" />
          <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#2B86C5] filter blur-[80px] rounded-[60%_40%_70%_30%/50%_60%_40%_70%] animate-blob-3" />
          <div className="absolute top-10 right-1/4 w-[300px] h-[300px] bg-[#FF6B35] filter blur-[80px] rounded-[60%_40%_70%_30%/50%_60%_40%_70%] animate-blob-4" />
          <div className="absolute bottom-1/4 right-10 w-[250px] h-[250px] bg-[#00F5A0] filter blur-[80px] rounded-[60%_40%_70%_30%/50%_60%_40%_70%] animate-blob-5" />
        </div>

        {/* Layer 3: Floating Design Tool Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div animate={{ y: [-15, 15, -15] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/4 left-1/4 text-white/10 font-serif text-[80px] select-none">Aa</motion.div>
          <motion.div animate={{ y: [15, -15, 15], rotate: [-5, 5, -5] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/3 right-1/3 text-white/10 text-[60px] select-none">✦</motion.div>
          <motion.div animate={{ y: [-10, 20, -10] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-1/3 left-1/3 w-20 h-20 border-[4px] border-white/10 rounded-full flex items-center justify-center">
            <div className="w-10 h-10 border-[2px] border-white/10 rounded-full" />
          </motion.div>
          <motion.div animate={{ y: [10, -20, 10], rotate: [5, -5, 5] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-1/4 right-1/4 text-white/10 font-mono text-[50px] select-none">#</motion.div>
          <motion.div animate={{ y: [-15, 15, -15] }} transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-20 right-20 flex flex-col gap-1 rotate-12">
            <div className="w-6 h-6 bg-[#FF3CAC] rounded-sm opacity-50" />
            <div className="w-6 h-6 bg-[#784BA0] rounded-sm opacity-50" />
            <div className="w-6 h-6 bg-[#00F5A0] rounded-sm opacity-50" />
          </motion.div>
          <motion.div animate={{ y: [15, -15, 15], rotate: [0, 45, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-20 left-20 w-16 h-16 bg-white/5" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }} />
          <motion.div animate={{ y: [-20, 10, -20] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/2 right-10 w-12 h-12 bg-white/5 rotate-45" />
        </div>

        {/* Layer 4: Grid Overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        {/* Content Container (Two Column) */}
        <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 mt-10">
          
          {/* Left Column (Text) */}
          <div className="w-full lg:w-[55%] flex flex-col items-start text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-8 border border-[#FF3CAC]/50 bg-[#FF3CAC]/10 shadow-[0_0_20px_rgba(255,60,172,0.3)]"
            >
              <span className="w-2 h-2 rounded-full bg-[#00F5A0] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-white/90">Available for Freelance Work ✦</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[clamp(4rem,8vw,7.5rem)] font-serif font-bold mb-4 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              style={{
                background: "linear-gradient(135deg, #FFFFFF 0%, #FF3CAC 50%, #784BA0 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: 1.0,
                letterSpacing: "-0.02em"
              }}
            >
              Adnan Gull
            </motion.h1>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-xl font-mono uppercase tracking-[0.25em] text-[#FF3CAC] mb-6 flex items-center"
            >
              Graphic Designer & Visual Creative
              <span className="inline-block w-[2px] h-6 bg-[#FF3CAC] ml-2 animate-[blink_1s_infinite]" />
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-[clamp(1.2rem,2.5vw,1.6rem)] font-light text-white/85 max-w-[520px] mb-4"
            >
              Designing visuals that turn ideas into impact.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-[1rem] text-white/50 max-w-[480px] mb-10"
            >
              Creating modern, engaging, and meaningful designs for brands and businesses.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center gap-6 mb-10"
            >
              <Link href="/portfolio" className="px-10 py-4 font-mono uppercase tracking-widest text-sm text-white transition-all hover:scale-105" style={{ background: "linear-gradient(135deg, #FF3CAC, #784BA0)", borderRadius: "50px", boxShadow: "0 0 30px rgba(255,60,172,0.4)" }}>
                View Portfolio
              </Link>
              <a href="#contact" className="px-10 py-4 font-mono uppercase tracking-widest text-sm text-white transition-all hover:scale-105 hover:bg-[#FF3CAC]/10" style={{ border: "2px solid rgba(255,60,172,0.6)", borderRadius: "50px" }}>
                Hire Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex items-center space-x-3 text-white/50 font-mono text-[11px] uppercase"
            >
              <span>Trusted by 50+ clients worldwide</span>
              <span>✦</span>
              <span>Freelance Designer</span>
            </motion.div>
          </div>

          {/* Right Column (Visual) */}
          <div className="w-full lg:w-[45%] relative mt-16 lg:mt-0 flex justify-center items-center h-[500px]">
            
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[420px] z-20"
              style={{
                borderRadius: "24px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(20px)",
                padding: "24px",
                boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 40px rgba(255,60,172,0.1)",
                transform: "rotate(2deg)"
              }}
            >
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                <div className="font-mono text-[11px] text-white/40">brand_identity_v3.ai</div>
              </div>

              {/* Mock Logo */}
              <div className="flex flex-col items-center mb-8">
                <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(255,60,172,0.4)]" style={{ background: "linear-gradient(135deg, #FF3CAC, #784BA0)" }}>
                  <span className="text-white font-serif font-bold text-2xl">AG</span>
                </div>
                <span className="font-mono text-[11px] uppercase text-white/40 tracking-widest">Brand Identity</span>
              </div>

              {/* Palette */}
              <div className="mb-8">
                <div className="flex justify-center space-x-3 mb-2">
                  {['#FF3CAC', '#784BA0', '#2B86C5', '#FF6B35', '#1A1A2E'].map(c => (
                    <div key={c} className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: c }} />
                  ))}
                </div>
                <div className="text-center font-mono text-[11px] text-white/40 uppercase">Brand Colors</div>
              </div>

              {/* Font Samples */}
              <div className="flex justify-center space-x-10">
                <div className="text-center">
                  <div className="font-serif text-3xl text-white mb-1">Aa</div>
                  <div className="font-mono text-[10px] text-white/40 uppercase">Playfair</div>
                </div>
                <div className="text-center">
                  <div className="font-sans text-3xl text-white mb-1">Aa</div>
                  <div className="font-mono text-[10px] text-white/40 uppercase">DM Sans</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Mini Cards */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [5, -5, 5] }}
              transition={{ opacity: { delay: 1.8 }, scale: { delay: 1.8 }, y: { duration: 6, repeat: Infinity, delay: 1 } }}
              className="absolute bottom-10 -left-4 lg:-left-12 z-30 flex items-center px-4 py-2 rounded-full"
              style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)", transform: "rotate(4deg)" }}
            >
              <span className="text-xs font-mono text-white/90">★ 5.0 Client Rating</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [-10, 10, -10] }}
              transition={{ opacity: { delay: 2 }, y: { duration: 4.5, repeat: Infinity } }}
              className="absolute bottom-0 right-10 z-10 flex flex-col gap-1 -rotate-12"
            >
              <div className="w-5 h-5 bg-[#2B86C5] rounded-sm" />
              <div className="w-5 h-5 bg-[#00F5A0] rounded-sm" />
              <div className="w-5 h-5 bg-[#FF6B35] rounded-sm" />
            </motion.div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="font-mono text-[0.7rem] uppercase text-white/40 tracking-[0.2em] mb-3">scroll to explore</span>
          <motion.div 
            animate={{ scaleY: [0, 1, 0], transformOrigin: ["top", "top", "bottom"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-white/30"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden flex justify-center items-center w-full h-full z-0">
          <span className="text-[clamp(6rem,15vw,12rem)] font-serif font-bold text-white/[0.03]">ABOUT</span>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] w-full max-w-md mx-auto relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#784BA0] via-[#07060F] to-[#FF3CAC] rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                <div className="absolute inset-0 border border-white/10 rounded-2xl overflow-hidden">
                  <img
                    src={adnanPhoto}
                    alt="Adnan Gull"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07060F]/60 via-transparent to-transparent" />
                </div>
                
                <div className="absolute -bottom-8 -right-8 glass px-6 py-4 rounded-lg shadow-2xl border-primary/30">
                  <p className="font-serif text-3xl text-white font-bold">3+</p>
                  <p className="font-mono text-xs text-primary uppercase tracking-wider">Years Experience</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-primary font-mono text-sm uppercase tracking-widest block mb-4">About Me</span>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Passion Meets Precision</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I'm Adnan Gull — a graphic designer who believes that great design is more than aesthetics. It's communication. I specialize in crafting visual identities, social media content, and digital experiences that make brands unforgettable. With hands-on experience in freelancing, teaching, and organizational design work, I bring both creativity and strategy to every project.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="glass p-4 rounded-lg text-center border-t-[#784BA0]/50">
                  <h4 className="text-2xl font-serif text-white mb-1">100%</h4>
                  <p className="text-xs font-mono text-muted-foreground uppercase">Happy Clients</p>
                </div>
                <div className="glass p-4 rounded-lg text-center border-t-[#2B86C5]/50">
                  <h4 className="text-2xl font-serif text-white mb-1">3+</h4>
                  <p className="text-xs font-mono text-muted-foreground uppercase">Years Active</p>
                </div>
              </div>
              
              <a
                href="/Adnan_Gull_CV.pdf"
                download="Adnan_Gull_CV.pdf"
                className="flex items-center space-x-2 px-6 py-3 border border-white/20 rounded hover:border-[#FF3CAC] hover:text-[#FF3CAC] transition-colors font-mono uppercase text-sm tracking-wider group"
              >
                <Download size={16} className="group-hover:translate-y-1 transition-transform" />
                <span>Download CV</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-card/30 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden flex justify-center items-center w-full h-full z-0">
          <span className="text-[clamp(6rem,15vw,12rem)] font-serif font-bold text-white/[0.03]">SKILLS</span>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#784BA0] font-mono text-sm uppercase tracking-widest block mb-4">Tools & Expertise</span>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white drop-shadow-[0_0_15px_rgba(120,75,160,0.5)]">My Arsenal</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Adobe Illustrator", level: "Advanced", percent: 95, color: "bg-orange-500", shadow: "rgba(249,115,22,0.4)" },
              { name: "Adobe Photoshop", level: "Advanced", percent: 92, color: "bg-blue-500", shadow: "rgba(59,130,246,0.4)" },
              { name: "Canva", level: "Advanced", percent: 95, color: "bg-cyan-400", shadow: "rgba(34,211,238,0.4)" },
              { name: "UI/UX Design", level: "Intermediate", percent: 78, color: "bg-[#FF3CAC]", shadow: "rgba(255,60,172,0.4)" },
              { name: "AI Prompting", level: "Advanced", percent: 90, color: "bg-[#784BA0]", shadow: "rgba(120,75,160,0.4)" },
            ].map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300 group bg-[#07060F]/50"
              >
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <h4 className="text-xl font-serif text-white mb-1">{skill.name}</h4>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{skill.level}</p>
                  </div>
                  <span className="text-2xl font-serif font-bold" style={{ color: skill.color.replace('bg-', '').includes('#') ? skill.color.replace('bg-', '').replace('[', '').replace(']', '') : skill.color.replace('bg-', '') }}>{skill.percent}%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    className={`h-full ${skill.color} rounded-full`}
                    style={{ boxShadow: `0 0 10px ${skill.shadow}` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-[#2B86C5] font-mono text-sm uppercase tracking-widest block mb-4">What I Do</span>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">End-to-end design solutions for brands that want to stand out.</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Logo Design", desc: "Unique, memorable logos that capture your brand's soul.", icon: <Award className="w-10 h-10 text-[#FF3CAC]" /> },
              { title: "Social Media Design", desc: "Scroll-stopping posts, stories, and banners for every platform.", icon: <Layout className="w-10 h-10 text-[#784BA0]" /> },
              { title: "Branding & Identity", desc: "Complete visual identity systems that make brands unforgettable.", icon: <Star className="w-10 h-10 text-[#2B86C5]" /> },
              { title: "UI/UX Design", desc: "Clean, user-centered interfaces designed to convert and delight.", icon: <FileImage className="w-10 h-10 text-[#FF3CAC]" /> },
              { title: "Business Cards", desc: "Professional cards that leave a lasting first impression.", icon: <Briefcase className="w-10 h-10 text-[#784BA0]" /> },
              { title: "Posters & Flyer Design", desc: "Eye-catching promotional prints that demand attention and drive action.", icon: <FileImage className="w-10 h-10 text-[#2B86C5]" /> },
            ].map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-8 rounded-xl group hover:border-[#FF3CAC]/50 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF3CAC]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#FF3CAC]/20 transition-colors" />
                <div className="mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-serif text-white mb-3">{service.title}</h4>
                <p className="text-muted-foreground mb-8">{service.desc}</p>
                <a href="#contact" className="inline-flex items-center text-sm font-mono uppercase tracking-widest text-white group-hover:text-[#FF3CAC] transition-colors">
                  Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 bg-card/30 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden flex justify-center items-center w-full h-full z-0">
          <span className="text-[clamp(6rem,15vw,12rem)] font-serif font-bold text-white/[0.03]">WORK</span>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="mb-8 md:mb-0">
              <span className="text-[#FF3CAC] font-mono text-sm uppercase tracking-widest block mb-4">Selected Works</span>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">A showcase of creativity, strategy, and craft.</h3>
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {portfolioItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-none bg-[#07060F] border border-white/5"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-80 group-hover:scale-105 transition-transform duration-700`} />
                  
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 group-hover:opacity-10 transition-opacity">
                    <span className="text-9xl font-serif font-bold text-white">{item.category.charAt(0)}</span>
                  </div>

                  <div className="absolute inset-0 bg-black/60 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col justify-end p-6">
                    <span className="text-[#00F5A0] font-mono text-xs uppercase tracking-widest mb-2">{item.category}</span>
                    <h4 className="text-xl font-serif text-white mb-4">{item.title}</h4>
                    <Link href={`/portfolio?category=${encodeURIComponent(item.category)}`} className="self-start text-sm font-mono text-white flex items-center hover:text-[#FF3CAC] transition-colors cursor-none">
                      View Project <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          <div className="mt-16 text-center">
            <Link href="/portfolio" className="inline-block px-8 py-4 border border-[#784BA0] text-white font-mono uppercase tracking-widest text-sm rounded shadow-[0_0_15px_rgba(120,75,160,0.3)] hover:bg-[#784BA0] transition-all hover:scale-105">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-32 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden flex justify-center items-center w-full h-full z-0">
          <span className="text-[clamp(6rem,15vw,12rem)] font-serif font-bold text-white/[0.03]">JOURNEY</span>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-[#784BA0] font-mono text-sm uppercase tracking-widest block mb-4">My Journey</span>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">Experience that shaped my craft.</h3>
          </div>
          
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />
            
            {[
              {
                role: "Graphic Design Instructor",
                company: "Ujala Technical Institute",
                desc: "Teaching is one of the most rewarding parts of my journey. At Ujala Technical Institute, I guide students through the world of graphic design — from foundational principles to industry-standard tools — helping them build skills they can turn into real careers."
              },
              {
                role: "Freelance Graphic Designer",
                company: "Freelance",
                desc: "Working independently with clients from across the globe — from startups needing their first logo to established businesses refreshing their brand. Every project is a new challenge I genuinely enjoy solving."
              },
              {
                role: "Graphic Designer",
                company: "Adobe Stock Contributor",
                desc: "Designing and uploading high-quality vector graphics and digital assets for commercial licensing on Adobe Stock — building a growing library of work used by creators and businesses worldwide."
              },
              {
                role: "Graphic Designer",
                company: "University Literature Society",
                desc: "Creative work for a literary community is something close to my heart. I handled all visual communication — posters, event banners, social media — helping the society build a strong, recognizable identity on campus."
              },
              {
                role: "Local Business Projects",
                company: "Various Clients",
                desc: "Working closely with local entrepreneurs taught me the value of practical design — visuals that don't just look good, but actually help a business grow and connect with its audience."
              }
            ].map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-start mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#784BA0] shadow-[0_0_10px_rgba(120,75,160,0.8)] -translate-x-[7px] md:-translate-x-1/2 mt-1.5 z-10" />
                
                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}
                >
                  <div className="glass p-6 rounded-xl border-l-[#784BA0]/50 border-l-2 hover:border-l-[#FF3CAC] transition-colors">
                    <h4 className="text-xl font-serif text-white mb-1">{exp.role}</h4>
                    <p className="text-sm font-mono text-[#784BA0] mb-4 uppercase tracking-wider">{exp.company}</p>
                    <p className="text-muted-foreground">{exp.desc}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF3CAC]/10 via-[#784BA0]/10 to-[#2B86C5]/10 mesh-bg-1 opacity-50" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <span className="glass inline-block px-4 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-white mb-8 border-[#FF3CAC]/30">Ready to create something great?</span>
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Have an idea or project? Whether it's a brand identity, social media presence, or UI design — let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="mailto:adnangull@email.com" className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-[#FF3CAC] to-[#784BA0] text-white font-mono uppercase tracking-widest text-sm rounded shadow-[0_0_20px_rgba(255,60,172,0.4)] hover:shadow-[0_0_30px_rgba(255,60,172,0.7)] transition-all hover:scale-105 flex justify-center">
              Hire Me
            </a>
            <a href="mailto:adnangull@email.com" className="w-full sm:w-auto px-10 py-5 border border-white/20 text-white font-mono uppercase tracking-widest text-sm rounded hover:bg-white/5 transition-all hover:scale-105 hover:border-white/50 flex justify-center">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}