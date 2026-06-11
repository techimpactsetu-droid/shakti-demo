"use client";

import { PageHeader } from "@/components/ui/page-header";
import { motion } from "framer-motion";
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
import { CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  mobile: z.string().min(10, "Mobile number must be at least 10 digits."),
  email: z.string().email("Please enter a valid email address."),
  city: z.string().min(2, "City is required."),
  interest: z.string().min(2, "Please select an area of interest."),
  availability: z.string().min(2, "Please select your availability."),
  message: z.string().optional(),
});

export default function VolunteerPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      mobile: "",
      email: "",
      city: "",
      interest: "",
      availability: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // In a real app, send to API here
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  }

  return (
    <>
      <PageHeader 
        title="Become a Volunteer" 
        description="Join our community of changemakers. Your time and skills can help transform lives and build a better future."
        image="https://picsum.photos/seed/qn7p8/2000/800"
      />

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
            
            {/* Left Content */}
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold text-primary mb-6">Why Volunteer With Us?</h2>
              <div className="space-y-6 text-slate-600">
                <p>
                  Volunteering at Shakti Foundation is more than just giving time; it's about being a catalyst for change.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0 mt-0.5">✓</div>
                    <span>Gain hands-on experience in social work</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0 mt-0.5">✓</div>
                    <span>Develop leadership and communication skills</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0 mt-0.5">✓</div>
                    <span>Network with like-minded individuals</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0 mt-0.5">✓</div>
                    <span>Receive a certificate of appreciation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Form */}
            <div className="md:w-2/3">
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">Thank You!</h3>
                    <p className="text-slate-600 mb-8">
                      Your application has been received. Our volunteer coordinator will contact you shortly.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline">
                      Submit Another Application
                    </Button>
                  </motion.div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="mobile"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Mobile Number</FormLabel>
                              <FormControl>
                                <Input placeholder="+91 98765 43210" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input placeholder="john@example.com" type="email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>City</FormLabel>
                              <FormControl>
                                <Input placeholder="E.g. Firozabad" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="interest"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Area of Interest</FormLabel>
                              <FormControl>
                                <select 
                                  {...field}
                                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                >
                                  <option value="">Select an area</option>
                                  <option value="Education">Education & Teaching</option>
                                  <option value="Women Empowerment">Women Empowerment</option>
                                  <option value="Event Management">Event Management</option>
                                  <option value="Fundraising">Fundraising</option>
                                  <option value="Digital Marketing">Digital Marketing</option>
                                  <option value="Field Work">Field Work / Survey</option>
                                </select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="availability"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Availability</FormLabel>
                              <FormControl>
                                <select 
                                  {...field}
                                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                >
                                  <option value="">Select availability</option>
                                  <option value="Weekends">Weekends</option>
                                  <option value="Weekdays">Weekdays</option>
                                  <option value="Flexible">Flexible</option>
                                  <option value="Full-time">Full-time (1-2 months)</option>
                                </select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message (Optional)</FormLabel>
                            <FormControl>
                              <textarea 
                                {...field}
                                placeholder="Tell us briefly about why you want to join..."
                                className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full h-12 text-lg bg-primary hover:bg-primary/90">
                        Join Our Mission
                      </Button>
                    </form>
                  </Form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
