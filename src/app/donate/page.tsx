"use client";

import { PageHeader } from "@/components/ui/page-header";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, ShieldCheck, ArrowRight } from "lucide-react";

const amounts = [
  { value: 500, impact: "Provides nutrition for a child for one month." },
  { value: 1000, impact: "Supports skill training materials for youth." },
  { value: 2500, impact: "Supports women entrepreneurship seed fund." },
  { value: 5000, impact: "Funds community development infrastructure." },
];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number>(2500);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const currentImpact = isCustom 
    ? "Your custom donation will be allocated where it's needed most."
    : amounts.find(a => a.value === selectedAmount)?.impact;

  const handleDonate = () => {
    setIsProcessing(true);
    // Placeholder for Razorpay/UPI integration
    setTimeout(() => {
      alert(`Proceeding to payment gateway for ₹${isCustom ? customAmount : selectedAmount}`);
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <>
      <PageHeader 
        title="Make a Difference Today" 
        description="Your contribution enables us to reach more villages, empower more women, and provide better opportunities for the youth."
        image="https://picsum.photos/seed/l4l3m9/2000/800"
      />

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Content */}
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-bold text-primary mb-6">Why Donate?</h2>
              <div className="w-16 h-1 bg-secondary rounded-full mb-8" />
              
              <div className="space-y-6 text-slate-600 mb-8 leading-relaxed">
                <p>
                  At Shakti Foundation, we ensure that 100% of your public donations go directly towards our programs. Our administrative costs are covered by our core CSR partners.
                </p>
                <p>
                  By donating, you are not just giving money; you are investing in a child's education, a woman's financial independence, and a community's sustainable future.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">80G Tax Exemption</h4>
                  <p className="text-sm text-slate-500">All donations are 50% tax exempt under section 80G of the Income Tax Act.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Secure Payments</h4>
                  <p className="text-sm text-slate-500">We use industry-standard encryption to protect your payment details.</p>
                </div>
              </div>
            </div>

            {/* Right Donation Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-10" />
                
                <h3 className="text-2xl font-bold text-primary mb-2">Choose Donation Amount</h3>
                <p className="text-slate-500 mb-8">Select an amount or enter a custom one.</p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  {amounts.map((amount) => (
                    <button
                      key={amount.value}
                      onClick={() => {
                        setSelectedAmount(amount.value);
                        setIsCustom(false);
                      }}
                      className={`py-4 rounded-xl border-2 font-bold text-lg transition-all ${
                        !isCustom && selectedAmount === amount.value
                          ? "border-secondary bg-secondary/5 text-secondary"
                          : "border-slate-100 text-slate-600 hover:border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      ₹{amount.value}
                    </button>
                  ))}
                </div>

                <div className="mb-8">
                  <div 
                    className={`flex items-center border-2 rounded-xl transition-colors ${
                      isCustom ? "border-secondary bg-secondary/5" : "border-slate-100"
                    }`}
                  >
                    <span className={`pl-4 font-bold text-xl ${isCustom ? "text-secondary" : "text-slate-400"}`}>₹</span>
                    <Input 
                      type="number"
                      placeholder="Custom Amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setIsCustom(true);
                      }}
                      className="border-0 bg-transparent text-xl font-bold h-14 focus-visible:ring-0 shadow-none pl-2"
                    />
                  </div>
                </div>

                <motion.div 
                  key={isCustom ? "custom" : selectedAmount}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-primary/5 border border-primary/10 p-6 rounded-xl mb-8 flex gap-4 items-start"
                >
                  <Heart className="w-6 h-6 text-accent shrink-0 mt-0.5" fill="currentColor" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Your Impact</h4>
                    <p className="text-slate-600">{currentImpact}</p>
                  </div>
                </motion.div>

                <div className="space-y-4">
                  <Button 
                    onClick={handleDonate} 
                    disabled={isProcessing || (isCustom && !customAmount)}
                    className="w-full h-14 text-lg bg-accent hover:bg-accent/90 flex items-center justify-center gap-2 shadow-lg shadow-accent/20"
                  >
                    {isProcessing ? "Processing..." : "Donate Securely"}
                    {!isProcessing && <ArrowRight className="w-5 h-5" />}
                  </Button>
                  
                  <div className="flex items-center justify-center gap-4 py-4 opacity-60 grayscale hover:grayscale-0 transition-all">
                    {/* Placeholder logos for UPI / Razorpay */}
                    <div className="text-xs font-bold px-3 py-1 border rounded bg-slate-100">RAZORPAY</div>
                    <div className="text-xs font-bold px-3 py-1 border rounded bg-slate-100">UPI</div>
                    <div className="text-xs font-bold px-3 py-1 border rounded bg-slate-100">VISA</div>
                    <div className="text-xs font-bold px-3 py-1 border rounded bg-slate-100">MASTERCARD</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
