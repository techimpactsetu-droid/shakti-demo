"use client";

import { motion } from "framer-motion";
import { Play, Quote } from "lucide-react";

const stories = [
  {
    name: "Aarti Devi",
    location: "Firozabad",
    quote: "The skill development program gave me the confidence to start my own tailoring business. Today, I employ three other women from my village.",
    image: "https://picsum.photos/seed/v725j6/800/600",
    impact: "Now earning ₹15,000/month",
  },
  {
    name: "Rahul Kumar",
    location: "Shikohabad",
    quote: "Education was a distant dream until Shakti Foundation provided me with a scholarship and mentorship. I am now pursuing my engineering degree.",
    image: "https://picsum.photos/seed/lxvi0g/800/600",
    impact: "First generation college student",
  }
];

export function SuccessStories() {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.4) 0%, transparent 50%)' }} />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Stories of Transformation</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Real impact measured not just in numbers, but in the changed lives of the people we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Main Featured Video Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden group cursor-pointer aspect-video bg-slate-800"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('https://picsum.photos/seed/lv25ej/1200/800')" }}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-accent/90 rounded-full flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform shadow-xl shadow-accent/20">
                <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
              <span className="bg-secondary text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full mb-3 inline-block">
                Featured Documentary
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">The Artisans of UP</h3>
              <p className="text-slate-200">How traditional crafts are creating new livelihoods.</p>
            </div>
          </motion.div>

          {/* Testimonial Cards */}
          <div className="flex flex-col gap-6">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col sm:flex-row gap-6 hover:bg-white/10 transition-colors"
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 rounded-xl overflow-hidden relative">
                  <img src={story.image} alt={story.name} className="object-cover w-full h-full" />
                </div>
                <div className="flex-1">
                  <Quote className="w-8 h-8 text-white/20 mb-2" />
                  <p className="text-slate-200 italic mb-4 leading-relaxed">"{story.quote}"</p>
                  <div className="flex justify-between items-end">
                    <div>
                      <h4 className="font-bold text-white text-lg">{story.name}</h4>
                      <p className="text-secondary text-sm font-medium">{story.location}</p>
                    </div>
                    <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-slate-300">
                      {story.impact}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
