"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Home, GraduationCap, MapPin } from "lucide-react";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function Counter({ end, suffix = "", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-primary">
      {count}{suffix}
    </span>
  );
}

const impacts = [
  {
    icon: <Home className="w-8 h-8 text-secondary" />,
    count: 5000,
    suffix: "+",
    label: "Families Supported",
    delay: 0.1,
  },
  {
    icon: <Heart className="w-8 h-8 text-accent" />,
    count: 2500,
    suffix: "+",
    label: "Women Empowered",
    delay: 0.2,
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
    count: 1000,
    suffix: "+",
    label: "Youth Trained",
    delay: 0.3,
  },
  {
    icon: <MapPin className="w-8 h-8 text-yellow-500" />,
    count: 100,
    suffix: "+",
    label: "Villages Reached",
    delay: 0.4,
  },
];

export function ImpactCounter() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Impact So Far</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: impact.delay }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                {impact.icon}
              </div>
              <Counter end={impact.count} suffix={impact.suffix} />
              <p className="text-slate-600 mt-2 font-medium">{impact.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
