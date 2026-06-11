"use client";

import { useEffect, useState } from "react";
import { Heart, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  // Hide on donate or volunteer pages where the CTA is already prominent
  const isHiddenPage = pathname === "/donate" || pathname === "/volunteer";

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isHiddenPage) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-40 flex flex-col gap-3"
        >
          <Link href="/volunteer">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary border border-slate-200 shadow-lg rounded-full w-14 h-14 flex items-center justify-center hover:bg-slate-50 transition-colors"
              title="Become a Volunteer"
            >
              <Users className="w-6 h-6" />
            </motion.div>
          </Link>
          <Link href="/donate">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-white shadow-lg rounded-full w-14 h-14 flex items-center justify-center hover:bg-accent/90 transition-colors"
              title="Donate Now"
            >
              <Heart className="w-6 h-6" />
            </motion.div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
