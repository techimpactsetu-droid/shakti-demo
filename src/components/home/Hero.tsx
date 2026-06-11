"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MagneticButton } from "@/components/ui/magnetic-button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const ctx = gsap.context(() => {
      // Parallax effect for background
      gsap.to(".hero-bg", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Split Text Animation (Simulated using span splits)
      if (textRef.current) {
        const words = textRef.current.querySelectorAll('.word');
        gsap.fromTo(words, 
          { y: 100, opacity: 0 }, 
          { y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: "power4.out", delay: 1.5 }
        );
      }
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary pb-24"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="hero-bg absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{ backgroundImage: "url('/images/hero_bg.png')" }}
        />
        {/* Simple Gradient Overlay (optimized) */}
        <div className="absolute inset-0 bg-primary/40 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 ref={textRef} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 overflow-hidden pb-2">
            <span className="inline-block overflow-hidden"><span className="word inline-block">Creating</span></span>{' '}
            <span className="inline-block overflow-hidden"><span className="word inline-block">Sustainable</span></span>{' '}
            <span className="inline-block overflow-hidden"><span className="word inline-block">Change</span></span>{' '}
            <span className="inline-block overflow-hidden"><span className="word inline-block">Through</span></span>{' '}
            <span className="inline-block overflow-hidden"><span className="word inline-block text-secondary">Empowerment</span></span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.2, ease: "easeOut" }}
          >
            <p className="text-lg md:text-2xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Supporting women, youth and underserved communities through education, livelihood and social development initiatives across India.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 2.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <MagneticButton>
              <Link href="/donate">
                <Button size="lg" className="w-full sm:w-auto text-lg h-16 px-10 rounded-full bg-secondary hover:bg-secondary/90 gap-2 shadow-[0_0_30px_rgba(22,163,74,0.3)] hover:shadow-[0_0_50px_rgba(22,163,74,0.5)] transition-shadow">
                  <Heart className="w-5 h-5" />
                  Donate Now
                </Button>
              </Link>
            </MagneticButton>
            
            <MagneticButton>
              <Link href="/volunteer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-16 px-10 rounded-full bg-white/5 hover:bg-white/10 text-white border-white/20 backdrop-blur-md gap-2 transition-colors">
                  <Users className="w-5 h-5" />
                  Become a Volunteer
                </Button>
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Floating Impact Elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-3"
      >
        <motion.div
           animate={{ y: [0, 8, 0] }}
           transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
           className="flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-[11px] font-bold tracking-[0.3em] uppercase">Scroll to explore</span>
          <ArrowRight className="w-5 h-5 text-secondary rotate-90" />
        </motion.div>
      </motion.div>
    </section>
  );
}
