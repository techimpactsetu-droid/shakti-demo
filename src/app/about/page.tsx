"use client";

import { PageHeader } from "@/components/ui/page-header";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Shield, Users, Lightbulb } from "lucide-react";

const values = [
  { icon: <Heart className="w-8 h-8 text-accent" />, title: "Compassion", desc: "Acting with empathy and understanding towards all." },
  { icon: <Shield className="w-8 h-8 text-primary" />, title: "Integrity", desc: "Maintaining transparency and honesty in our operations." },
  { icon: <Users className="w-8 h-8 text-secondary" />, title: "Equality", desc: "Promoting equal opportunities regardless of gender or caste." },
  { icon: <Lightbulb className="w-8 h-8 text-yellow-500" />, title: "Innovation", desc: "Finding creative solutions to deep-rooted social problems." },
];

const timeline = [
  { year: "2010", title: "Foundation Established", desc: "Shakti Foundation was born with a mission to empower rural women in UP." },
  { year: "2014", title: "First Skill Center", desc: "Opened the first vocational training center for youth in Shikohabad." },
  { year: "2018", title: "100+ Villages Reached", desc: "Expanded operations to cover over 100 villages across the district." },
  { year: "2022", title: "Project Ujjwala Launch", desc: "Initiated our flagship women entrepreneurship program." },
  { year: "2024", title: "National Recognition", desc: "Awarded for outstanding contribution to rural development." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="About Shakti Foundation" 
        description="Learn about our journey, our mission, and the core values that drive us to create sustainable social change."
        image="https://picsum.photos/seed/flglcp/2000/800"
      />

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Story</h2>
              <div className="w-20 h-1 bg-secondary rounded-full mb-8" />
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Founded in 2010, Shakti Foundation began as a small initiative by a group of dedicated social workers in Shikohabad, Uttar Pradesh. Witnessing the struggles of women and marginalized communities in rural areas, we set out to create a platform that would not just provide aid, but enable self-reliance.
                </p>
                <p>
                  Over the past decade, we have grown from a localized effort into a comprehensive NGO impacting thousands of lives. Our approach shifted from charity to empowerment, focusing on education, skill development, and livelihood generation as the primary tools for social transformation.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl"
            >
              <img 
                src="https://picsum.photos/seed/3vvgio/1200/800" 
                alt="Our Story" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-6">Our Vision</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                To build an equitable society where every individual, regardless of their background, has access to opportunities, education, and the power to shape their own destiny.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-6">Our Mission</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                To empower women, youth, and underserved communities through sustainable programs in skill development, livelihood generation, and human rights advocacy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Core Values</h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-slate-100 transition-colors">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">{value.title}</h4>
                <p className="text-slate-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden shrink-0 border-4 border-white/20">
                <img 
                  src="https://picsum.photos/seed/4ngflv/800/600" 
                  alt="Founder" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Message from the Founder</h2>
                <h3 className="text-secondary font-medium mb-6">Mrs. Neha Sharma</h3>
                <p className="text-slate-200 italic text-lg leading-relaxed mb-6">
                  "When we started Shakti Foundation, we had one simple belief: true empowerment comes from within. We do not just provide resources; we provide the tools and confidence for individuals to rewrite their own stories. Seeing a woman earn her first income, or a youth secure their first job, is what drives us forward every single day."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Journey</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Center Line */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 md:-translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-secondary md:-translate-x-1/2 mt-6 md:mt-0 ring-4 ring-white" />
                  
                  {/* Content */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-12 flex flex-col justify-center">
                    <div className={`bg-white p-6 rounded-2xl shadow-sm border border-slate-100 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <span className="text-accent font-bold text-xl mb-2 block">{item.year}</span>
                      <h4 className="text-lg font-bold text-primary mb-2">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
