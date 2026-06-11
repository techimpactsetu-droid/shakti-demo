"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Project Ujjwala",
    category: "Women Empowerment",
    location: "Rural Firozabad",
    date: "Jan 2024 - Present",
    image: "/images/project_ujjwala.png",
    progress: 75,
    goal: 5000000,
    raised: 3750000,
    description: "Setting up micro-enterprises for 500 women in rural areas through seed funding and mentorship.",
  },
  {
    title: "Vidya Foundation School",
    category: "Education",
    location: "Shikohabad Slums",
    date: "Mar 2023 - Present",
    image: "/images/vidya_foundation.png",
    progress: 90,
    goal: 2000000,
    raised: 1800000,
    description: "Building modern classrooms and providing digital literacy programs for underprivileged children.",
  },
  {
    title: "Kaushal Vikas Kendra",
    category: "Skill Development",
    location: "Agra District",
    date: "Oct 2024 - Upcoming",
    image: "/images/kaushal_vikas.png",
    progress: 30,
    goal: 3000000,
    raised: 900000,
    description: "Establishing a state-of-the-art skill development center focused on IT and vocational training.",
  }
];

function NumberCounter({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Easing function (easeOutExpo)
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(Math.floor(ease * value));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return <span ref={ref}>₹{count.toLocaleString('en-IN')}</span>;
}

export function CurrentProjects() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 tracking-tight">Current Initiatives</h2>
              <div className="w-24 h-1.5 bg-accent rounded-full mb-8" />
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                Explore our ongoing projects where your contributions are actively making a difference on the ground right now.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 group flex flex-col"
            >
              {/* Image Mask Reveal */}
              <div className="relative h-64 overflow-hidden">
                <motion.div
                  initial={{ y: 0 }}
                  whileInView={{ y: "-100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: index * 0.2 + 0.2 }}
                  className="absolute inset-0 z-10 bg-white"
                />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-primary rounded-full z-20 shadow-sm">
                  {project.category}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{project.title}</h3>
                
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6 font-medium">
                  <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-md">
                    <MapPin className="w-4 h-4 text-secondary" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-md">
                    <Calendar className="w-4 h-4 text-secondary" />
                    {project.date}
                  </div>
                </div>

                <p className="text-slate-600 mb-8 text-base flex-1 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <div className="flex justify-between text-sm font-bold mb-3">
                    <span className="text-primary text-base"><NumberCounter value={project.raised} /> raised</span>
                    <span className="text-slate-500">Goal: ₹{project.goal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full mb-8 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                      className="bg-secondary h-full rounded-full relative"
                    >
                      <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                    </motion.div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-xl h-12">
                      Support Now
                    </Button>
                    <Link href={`/projects/${project.title.toLowerCase().replace(/ /g, '-')}`}>
                      <Button variant="outline" size="icon" className="shrink-0 border-primary text-primary hover:bg-primary hover:text-white rounded-xl h-12 w-12 transition-colors">
                        <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
