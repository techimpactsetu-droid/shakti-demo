"use client";

import { PageHeader } from "@/components/ui/page-header";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  }

  return (
    <>
      <PageHeader 
        title="Get in Touch" 
        description="Whether you want to volunteer, partner with us, or just learn more about our work, we'd love to hear from you."
        image="https://picsum.photos/seed/va1vf/2000/800"
      />

      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            
            {/* Contact Information */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Contact Information</h2>
                <div className="w-16 h-1 bg-secondary rounded-full mb-10" />
                
                <div className="space-y-8 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-slate-100 text-primary">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-lg mb-1">Our Office</h4>
                      <p className="text-slate-600 leading-relaxed">
                        Shakti Bhawan, 29B Neha Enclave,<br />
                        Station Road, Shikohabad,<br />
                        Firozabad, Uttar Pradesh, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-slate-100 text-primary">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-lg mb-1">Call Us</h4>
                      <div className="flex flex-col gap-1">
                        <a href="tel:+919412535459" className="text-slate-600 hover:text-secondary transition-colors">+91 94125 35459</a>
                        <a href="tel:+919639876503" className="text-slate-600 hover:text-secondary transition-colors">+91 96398 76503</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-slate-100 text-primary">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-lg mb-1">Email Us</h4>
                      <a href="mailto:shaktifoundationskb@gmail.com" className="text-slate-600 hover:text-secondary transition-colors break-all">
                        shaktifoundationskb@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/919412535459" target="_blank" rel="noreferrer" className="flex-1">
                  <Button className="w-full h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white gap-2 shadow-lg shadow-[#25D366]/20">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Us
                  </Button>
                </a>
                <a href="tel:+919412535459" className="flex-1">
                  <Button variant="outline" className="w-full h-14 border-primary text-primary hover:bg-primary hover:text-white gap-2">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 h-full">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">Message Sent!</h3>
                    <p className="text-slate-600 mb-8 max-w-md mx-auto">
                      Thank you for reaching out. We have received your message and will get back to you within 24-48 hours.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline">
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-primary mb-2">Send us a Message</h3>
                    <p className="text-slate-500 mb-8">Fill out the form below and we'll get back to you shortly.</p>
                    
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Your Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="John Doe" {...field} className="bg-slate-50" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                  <Input placeholder="john@example.com" type="email" {...field} className="bg-slate-50" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject</FormLabel>
                              <FormControl>
                                <Input placeholder="How can we help you?" {...field} className="bg-slate-50" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <textarea 
                                  {...field}
                                  placeholder="Write your message here..."
                                  className="flex min-h-[150px] w-full rounded-md border border-input bg-slate-50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button type="submit" className="w-full h-14 text-lg bg-primary hover:bg-primary/90 gap-2">
                          <Send className="w-5 h-5" />
                          Send Message
                        </Button>
                      </form>
                    </Form>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="h-[400px] w-full bg-slate-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113642.48206271966!2d78.52924155184236!3d27.111812847055403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3975a5933970b809%3A0xc3f14a60db2a5f5f!2sShikohabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1709214589218!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Shakti Foundation Location"
        />
      </section>
    </>
  );
}
