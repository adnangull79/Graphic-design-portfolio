import React, { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Download, Award, Briefcase, FileImage, Layout, Star, Mail, Linkedin, Instagram, Twitter } from "lucide-react";
import { SiFiverr } from "react-icons/si";

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
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass border-b" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <a href="#home" className="text-2xl font-serif font-bold text-gradient tracking-tighter">AG</a>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-mono uppercase tracking-widest text-muted-foreground hover:text-white transition-colors">
              {link.name}
            </a>
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
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-mono uppercase tracking-widest text-muted-foreground hover:text-white transition-colors">
                {link.name}
              </a>
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

// --- Main Page ---

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filters = ["All", "Logos", "Social Media", "Posters", "Business Cards", "UI/UX"];
  
  const portfolioItems = [
    { id: 1, title: "Tech Startup Identity", category: "Logos", color: "from-blue-600 to-cyan-400" },
    { id: 2, title: "E-commerce App Redesign", category: "UI/UX", color: "from-purple-600 to-pink-500" },
    { id: 3, title: "Summer Festival Campaign", category: "Social Media", color: "from-orange-500 to-yellow-400" },
    { id: 4, title: "Corporate Branding", category: "Business Cards", color: "from-slate-700 to-slate-500" },
    { id: 5, title: "Cyberpunk Event", category: "Posters", color: "from-pink-600 to-purple-800" },
    { id: 6, title: "Minimalist Crypto Logo", category: "Logos", color: "from-emerald-500 to-teal-400" },
    { id: 7, title: "Finance Dashboard", category: "UI/UX", color: "from-indigo-600 to-blue-500" },
    { id: 8, title: "Fashion Brand Grid", category: "Social Media", color: "from-rose-500 to-red-400" },
    { id: 9, title: "Premium Real Estate", category: "Business Cards", color: "from-amber-600 to-orange-500" },
    { id: 10, title: "Indie Film Release", category: "Posters", color: "from-gray-800 to-gray-600" },
  ];

  const filteredPortfolio = activeFilter === "All" ? portfolioItems : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white">
      <Cursor />
      <div className="noise-overlay" />
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-primary/30 rounded-full blur-[100px] mix-blend-screen mesh-bg-1" />
          <div className="absolute top-1/3 right-1/4 w-[40vw] h-[40vw] bg-secondary/30 rounded-full blur-[100px] mix-blend-screen mesh-bg-2" />
          <div className="absolute bottom-1/4 left-1/3 w-[45vw] h-[45vw] bg-accent/30 rounded-full blur-[100px] mix-blend-screen mesh-bg-3" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Available for Freelance Work ✦</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[clamp(4rem,10vw,8rem)] leading-none font-serif font-bold text-white mb-4 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            Adnan Gull
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-[clamp(1rem,3vw,1.5rem)] font-mono uppercase tracking-[0.3em] text-accent mb-6"
          >
            Graphic Designer & Visual Creative
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            Designing visuals that turn ideas into impact.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <a href="#portfolio" className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-mono uppercase tracking-widest text-sm rounded shadow-[0_0_20px_rgba(255,60,172,0.4)] hover:shadow-[0_0_30px_rgba(255,60,172,0.7)] transition-all hover:scale-105">
              View Portfolio
            </a>
            <a href="#contact" className="px-8 py-4 border border-accent text-accent font-mono uppercase tracking-widest text-sm rounded shadow-[0_0_15px_rgba(43,134,197,0.3)] hover:bg-accent hover:text-white transition-all hover:scale-105">
              Hire Me
            </a>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent opacity-50" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] w-full max-w-md mx-auto relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary via-background to-primary rounded-lg blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                <div className="absolute inset-0 border border-white/10 rounded-lg bg-card/80 backdrop-blur-sm flex items-center justify-center text-8xl font-serif text-white/20">
                  AG
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
              
              <div className="grid grid-cols-3 gap-4 mb-10">
                <div className="glass p-4 rounded-lg text-center border-t-primary/50">
                  <h4 className="text-2xl font-serif text-white mb-1">50+</h4>
                  <p className="text-xs font-mono text-muted-foreground uppercase">Projects</p>
                </div>
                <div className="glass p-4 rounded-lg text-center border-t-secondary/50">
                  <h4 className="text-2xl font-serif text-white mb-1">100%</h4>
                  <p className="text-xs font-mono text-muted-foreground uppercase">Happy Clients</p>
                </div>
                <div className="glass p-4 rounded-lg text-center border-t-accent/50">
                  <h4 className="text-2xl font-serif text-white mb-1">1</h4>
                  <p className="text-xs font-mono text-muted-foreground uppercase">Certification</p>
                </div>
              </div>
              
              <button className="flex items-center space-x-2 px-6 py-3 border border-white/20 rounded hover:border-primary hover:text-primary transition-colors font-mono uppercase text-sm tracking-wider group">
                <Download size={16} className="group-hover:translate-y-1 transition-transform" />
                <span>Download CV</span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-card/30 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-secondary font-mono text-sm uppercase tracking-widest block mb-4">Tools & Expertise</span>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white drop-shadow-[0_0_15px_rgba(120,75,160,0.5)]">My Arsenal</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Adobe Illustrator", level: "Advanced", percent: 95, color: "bg-orange-500", shadow: "rgba(249,115,22,0.4)" },
              { name: "Adobe Photoshop", level: "Advanced", percent: 92, color: "bg-blue-500", shadow: "rgba(59,130,246,0.4)" },
              { name: "Canva", level: "Advanced", percent: 95, color: "bg-cyan-400", shadow: "rgba(34,211,238,0.4)" },
              { name: "UI/UX Design", level: "Intermediate", percent: 78, color: "bg-primary", shadow: "rgba(255,60,172,0.4)" },
              { name: "AI Prompting", level: "Intermediate", percent: 72, color: "bg-secondary", shadow: "rgba(120,75,160,0.4)" },
            ].map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300 group"
              >
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <h4 className="text-xl font-serif text-white mb-1">{skill.name}</h4>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{skill.level}</p>
                  </div>
                  <span className="text-2xl font-serif font-bold" style={{ color: skill.color.replace('bg-', '') }}>{skill.percent}%</span>
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
            <span className="text-accent font-mono text-sm uppercase tracking-widest block mb-4">What I Do</span>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">End-to-end design solutions for brands that want to stand out.</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Logo Design", desc: "Unique, memorable logos that capture your brand's soul.", icon: <Award className="w-10 h-10 text-primary" /> },
              { title: "Social Media Design", desc: "Scroll-stopping posts, stories, and banners for every platform.", icon: <Layout className="w-10 h-10 text-secondary" /> },
              { title: "Branding & Identity", desc: "Complete visual identity systems that make brands unforgettable.", icon: <Star className="w-10 h-10 text-accent" /> },
              { title: "UI/UX Design", desc: "Clean, user-centered interfaces designed to convert and delight.", icon: <FileImage className="w-10 h-10 text-primary" /> },
              { title: "Business Cards", desc: "Professional cards that leave a lasting first impression.", icon: <Briefcase className="w-10 h-10 text-secondary" /> },
            ].map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-8 rounded-xl group hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors" />
                <div className="mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-serif text-white mb-3">{service.title}</h4>
                <p className="text-muted-foreground mb-8">{service.desc}</p>
                <a href="#contact" className="inline-flex items-center text-sm font-mono uppercase tracking-widest text-white group-hover:text-primary transition-colors">
                  Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 bg-card/30 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="mb-8 md:mb-0">
              <span className="text-primary font-mono text-sm uppercase tracking-widest block mb-4">Selected Works</span>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">A showcase of creativity, strategy, and craft.</h3>
            </div>
            
            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {filters.map(filter => (
                <button 
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 font-mono text-xs uppercase tracking-wider rounded-full transition-all ${activeFilter === filter ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-[0_0_15px_rgba(255,60,172,0.4)] border-transparent' : 'glass text-muted-foreground hover:text-white border-white/10'}`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredPortfolio.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-none bg-card border border-white/5"
                >
                  {/* Placeholder gradient for image */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-80 group-hover:scale-105 transition-transform duration-700`} />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col justify-end p-6">
                    <span className="text-accent font-mono text-xs uppercase tracking-widest mb-2">{item.category}</span>
                    <h4 className="text-xl font-serif text-white mb-4">{item.title}</h4>
                    <button className="self-start text-sm font-mono text-white flex items-center hover:text-primary transition-colors">
                      View Project <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          <div className="mt-16 text-center">
            <a href="#contact" className="inline-block px-8 py-4 border border-secondary text-white font-mono uppercase tracking-widest text-sm rounded shadow-[0_0_15px_rgba(120,75,160,0.3)] hover:bg-secondary transition-all hover:scale-105">
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-secondary font-mono text-sm uppercase tracking-widest block mb-4">My Journey</span>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">Experience that shaped my craft.</h3>
          </div>
          
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />
            
            {[
              {
                role: "Graphic Design Instructor",
                company: "Ujala Technical Institute",
                desc: "Teaching is one of the most rewarding parts of my journey. At Ujala Technical Institute, I guide students through the world of graphic design — from foundational principles to industry-standard tools — helping them build skills they can turn into real careers."
              },
              {
                role: "Freelance Graphic Designer",
                company: "Fiverr",
                desc: "Through Fiverr, I've had the privilege of working with clients from across the globe — from startups needing their first logo to established businesses refreshing their brand. Every project is a new challenge I genuinely enjoy solving."
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
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-secondary shadow-[0_0_10px_rgba(120,75,160,0.8)] -translate-x-[7px] md:-translate-x-1/2 mt-1.5 z-10" />
                
                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}
                >
                  <div className="glass p-6 rounded-xl border-l-secondary/50 border-l-2 hover:border-l-primary transition-colors">
                    <h4 className="text-xl font-serif text-white mb-1">{exp.role}</h4>
                    <p className="text-sm font-mono text-secondary mb-4 uppercase tracking-wider">{exp.company}</p>
                    <p className="text-muted-foreground">{exp.desc}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold text-white">Certifications</h3>
          </div>
          <div className="max-w-2xl mx-auto glass p-8 rounded-xl flex flex-col sm:flex-row items-center sm:space-x-8 border border-accent/20 shadow-[0_0_30px_rgba(43,134,197,0.1)] hover:shadow-[0_0_40px_rgba(43,134,197,0.2)] transition-shadow">
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mb-6 sm:mb-0 shrink-0">
              <Award className="w-10 h-10 text-accent" />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-2xl font-serif text-white mb-2">DigiSkills — Graphic Design Course</h4>
              <p className="text-muted-foreground font-mono text-sm mb-3">Issued by: DigiSkills.pk</p>
              <span className="inline-flex items-center text-xs font-mono uppercase text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                <Star className="w-3 h-3 mr-1 fill-current" /> Verified Certificate
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm uppercase tracking-widest block mb-4">Testimonials</span>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">What Clients Say.</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "Adnan delivered exactly what I envisioned — and then some. His creativity and professionalism made the whole process seamless.", author: "Sarah K.", role: "Brand Owner" },
              { text: "Outstanding quality and great communication throughout. My social media engagement increased significantly after his designs.", author: "Bilal M.", role: "Digital Entrepreneur" },
              { text: "Highly recommended. Adnan understands branding on a deep level. He designed our full identity and we couldn't be happier.", author: "Amina R.", role: "Startup Founder" }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass p-8 rounded-xl relative group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="text-6xl font-serif text-white/5 absolute top-4 left-6 pointer-events-none group-hover:text-primary/10 transition-colors">"</div>
                <div className="flex mb-6 text-primary">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-muted-foreground mb-8 relative z-10 italic">"{testimonial.text}"</p>
                <div>
                  <p className="text-white font-serif text-lg">{testimonial.author}</p>
                  <p className="text-xs font-mono text-muted-foreground uppercase">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 mesh-bg-1 opacity-50" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <span className="glass inline-block px-4 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-white mb-8 border-primary/30">Ready to create something great?</span>
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Have an idea or project? Whether it's a brand identity, social media presence, or UI design — let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="mailto:adnangull@email.com" className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-primary to-secondary text-white font-mono uppercase tracking-widest text-sm rounded shadow-[0_0_20px_rgba(255,60,172,0.4)] hover:shadow-[0_0_30px_rgba(255,60,172,0.7)] transition-all hover:scale-105 flex justify-center">
              Hire Me
            </a>
            <a href="mailto:adnangull@email.com" className="w-full sm:w-auto px-10 py-5 border border-white/20 text-white font-mono uppercase tracking-widest text-sm rounded hover:bg-white/5 transition-all hover:scale-105 hover:border-white/50 flex justify-center">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#07070C] border-t border-t-white/10 pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <a href="#home" className="text-3xl font-serif font-bold text-gradient tracking-tighter block mb-4">AG</a>
              <p className="text-muted-foreground text-sm max-w-xs">Designing ideas into impact. Graphic designer specializing in branding, UI/UX, and digital experiences.</p>
            </div>
            
            <div>
              <h4 className="text-white font-mono uppercase tracking-widest text-sm mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'About', 'Portfolio', 'Services', 'Contact'].map(link => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">{link}</a>
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
                <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-[0_0_15px_rgba(255,60,172,0.3)] transition-all">
                  <SiFiverr className="w-4 h-4" />
                </a>
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
    </div>
  );
}