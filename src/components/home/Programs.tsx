"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Scissors, Leaf, Users, Shield, Briefcase } from "lucide-react";
import Link from "next/link";
import React from "react";

const programs = [
  {
    title: "Women Empowerment",
    description: "Empowering women through financial literacy, entrepreneurship, and self-reliance programs.",
    icon: <Users className="w-10 h-10 text-accent" />,
    color: "bg-accent/10",
  },
  {
    title: "Skill Development",
    description: "Vocational training programs bridging the gap between education and employability.",
    icon: <Briefcase className="w-10 h-10 text-secondary" />,
    color: "bg-secondary/10",
  },
  {
    title: "Handicraft Promotion",
    description: "Supporting local artisans by preserving traditional crafts and providing market linkages.",
    icon: <Scissors className="w-10 h-10 text-primary" />,
    color: "bg-primary/10",
  },
  {
    title: "Youth Development",
    description: "Mentorship and educational support to help youth realize their full potential.",
    icon: <BookOpen className="w-10 h-10 text-blue-500" />,
    color: "bg-blue-500/10",
  },
  {
    title: "Livelihood Support",
    description: "Creating sustainable livelihood opportunities for marginalized rural communities.",
    icon: <Leaf className="w-10 h-10 text-green-600" />,
    color: "bg-green-600/10",
  },
  {
    title: "Human Rights Awareness",
    description: "Advocating for social equality, justice, and fundamental human rights.",
    icon: <Shield className="w-10 h-10 text-purple-500" />,
    color: "bg-purple-500/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

function TiltCard({ program, children }: { program: typeof programs[0]; children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      variants={itemVariants}
      className="h-full"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="h-full relative z-10"
      >
        <Card className="h-full border border-slate-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 group bg-white/80 backdrop-blur-md">
          <CardContent className="p-8 h-full flex flex-col" style={{ transform: "translateZ(30px)" }}>
            <div className={`w-20 h-20 rounded-2xl ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
              {program.icon}
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">{program.title}</h3>
            <p className="text-slate-600 mb-8 flex-1 leading-relaxed">
              {program.description}
            </p>
            <Link href={`/#programs`} className="inline-flex items-center text-secondary font-semibold group/link mt-auto">
              Learn More 
              <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-2 transition-transform" />
            </Link>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export function Programs() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Premium Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100 -skew-x-12 translate-x-20 z-0 opacity-50" />
      <div className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[100px] z-0 pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 tracking-tight">Our Focus Areas</h2>
              <div className="w-24 h-1.5 bg-secondary rounded-full mb-8" />
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                We operate across multiple domains to create holistic, sustainable change. Our targeted programs address the root causes of inequality and poverty.
              </p>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
            <Link href="/#programs">
              <Button variant="outline" className="gap-2 border-primary/20 text-primary hover:bg-primary hover:text-white rounded-full px-8 h-12">
                View All Programs
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {programs.map((program, index) => (
            <TiltCard key={index} program={program}>
              {null}
            </TiltCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
