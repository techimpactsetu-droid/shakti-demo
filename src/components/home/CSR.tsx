"use client";

import { motion } from "framer-motion";
import { Handshake, Target, BarChart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
  {
    title: "Strategic CSR Projects",
    description: "Align your corporate social responsibility goals with our impactful grassroots projects.",
    icon: <Target className="w-6 h-6 text-primary" />,
  },
  {
    title: "Employee Volunteering",
    description: "Engage your workforce in meaningful community service and team-building activities.",
    icon: <Users className="w-6 h-6 text-primary" />,
  },
  {
    title: "Transparent Reporting",
    description: "Receive detailed impact assessment reports and fund utilization certificates.",
    icon: <BarChart className="w-6 h-6 text-primary" />,
  },
];

export function CSR() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-slate-50 rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col lg:flex-row">
          
          {/* Content Side */}
          <div className="p-10 md:p-16 lg:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <Handshake className="w-8 h-8 text-secondary" />
              <span className="text-secondary font-bold uppercase tracking-wider text-sm">Corporate Partnerships</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Partner With Us To Create Lasting Impact
            </h2>
            
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              We collaborate with forward-thinking corporations to design and implement sustainable social initiatives that create measurable value for communities and align with your brand's purpose.
            </p>

            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-slate-100">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg mb-1">{feature.title}</h4>
                    <p className="text-slate-500 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href="/contact" className="inline-block">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg bg-primary hover:bg-primary/90">
                Become a CSR Partner
              </Button>
            </Link>
          </div>

          {/* Image Side */}
          <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full hidden md:block">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://picsum.photos/seed/0w1ruc/1200/800')" }}
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-transparent lg:w-32" />
          </div>
        </div>
      </div>
    </section>
  );
}
