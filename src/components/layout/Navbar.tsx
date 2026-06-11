"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Programs", href: "/#programs" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const showDarkNavbar = !isHome || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        showDarkNavbar
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-100"
          : "bg-transparent py-5"
      )}
    >
      {/* Scroll Progress Indicator */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-secondary transition-all duration-100" style={{ width: `${isHome ? 0 : 100}%` }} id="scroll-progress-bar" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl group-hover:bg-secondary transition-colors">
              S
            </div>
            <div className="flex flex-col">
              <span className={cn("font-bold text-xl leading-tight transition-colors", showDarkNavbar ? "text-primary" : "text-white")}>
                Shakti Foundation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-secondary",
                  pathname === link.href
                    ? "text-secondary font-semibold"
                    : showDarkNavbar ? "text-slate-700" : "text-white/90"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/volunteer">
              <Button variant={showDarkNavbar ? "outline" : "secondary"} className={cn("gap-2", !showDarkNavbar && "bg-white/20 hover:bg-white/30 text-white border-0")}>
                <Users className="w-4 h-4" />
                Volunteer
              </Button>
            </Link>
            <Link href="/donate">
              <Button className="gap-2 bg-secondary hover:bg-secondary/90 text-white">
                <Heart className="w-4 h-4" />
                Donate
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn("md:hidden p-2 rounded-md", showDarkNavbar ? "text-primary" : "text-white")}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t mt-3"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-medium p-2 rounded-md transition-colors",
                    pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-slate-700 hover:bg-slate-50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t">
                <Link href="/volunteer" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full justify-center gap-2">
                    <Users className="w-4 h-4" />
                    Volunteer
                  </Button>
                </Link>
                <Link href="/donate" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full justify-center gap-2 bg-secondary hover:bg-secondary/90">
                    <Heart className="w-4 h-4" />
                    Donate
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
