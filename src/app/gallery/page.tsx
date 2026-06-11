"use client";

import { PageHeader } from "@/components/ui/page-header";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { X, ZoomIn } from "lucide-react";

const categories = ["All", "Programs", "Events", "Community Outreach", "Women Empowerment", "Youth Development"];

const galleryImages = [
  { id: 1, src: "https://picsum.photos/seed/shakti1/800/600", category: "Women Empowerment", title: "Skill Training Session", aspect: "aspect-[4/3]" },
  { id: 2, src: "https://picsum.photos/seed/shakti2/800/800", category: "Youth Development", title: "Digital Literacy Class", aspect: "aspect-[3/4]" },
  { id: 3, src: "https://picsum.photos/seed/shakti3/800/800", category: "Community Outreach", title: "Village Meeting", aspect: "aspect-square" },
  { id: 4, src: "https://picsum.photos/seed/shakti4/1200/800", category: "Events", title: "Annual Foundation Day", aspect: "aspect-[16/9]" },
  { id: 5, src: "https://picsum.photos/seed/shakti5/800/1000", category: "Programs", title: "Tailoring Workshop", aspect: "aspect-[3/4]" },
  { id: 6, src: "https://picsum.photos/seed/shakti6/800/600", category: "Events", title: "Education Drive", aspect: "aspect-[4/3]" },
  { id: 7, src: "https://picsum.photos/seed/shakti7/800/800", category: "Programs", title: "Artisan Support", aspect: "aspect-square" },
  { id: 8, src: "https://picsum.photos/seed/shakti8/1200/800", category: "Community Outreach", title: "Health Camp", aspect: "aspect-[16/9]" },
  { id: 9, src: "https://picsum.photos/seed/shakti9/800/600", category: "Women Empowerment", title: "Leadership Seminar", aspect: "aspect-[4/3]" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <>
      <PageHeader 
        title="Impact Gallery" 
        description="A visual journey of our work, the lives we've touched, and the communities we've transformed."
        image="https://picsum.photos/seed/zwpu8t/2000/800"
      />

      <section className="py-16 bg-white min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-white shadow-md"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry Grid Simulation (using CSS columns) */}
          <motion.div 
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            <AnimatePresence>
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative group cursor-pointer rounded-2xl overflow-hidden break-inside-avoid shadow-sm hover:shadow-xl transition-all border border-slate-100"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className={`w-full ${image.aspect} relative`}>
                    <img 
                      src={image.src} 
                      alt={image.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 backdrop-blur-[2px]">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-md">
                        <ZoomIn className="w-6 h-6" />
                      </div>
                      <div className="text-center px-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h4 className="text-white font-bold text-lg mb-1">{image.title}</h4>
                        <span className="text-secondary text-sm font-medium bg-white/10 px-3 py-1 rounded-full">{image.category}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">No images found for this category.</p>
              <button 
                onClick={() => setActiveCategory("All")}
                className="mt-4 text-primary font-medium hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-5xl w-full p-0 overflow-hidden bg-transparent border-none shadow-none">
          <DialogTitle className="sr-only">
            {selectedImage?.title}
          </DialogTitle>
          {selectedImage && (
            <div className="relative flex flex-col items-center">
              <DialogClose className="absolute -top-12 right-0 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors">
                <X className="w-6 h-6" />
              </DialogClose>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title} 
                className="w-full max-h-[85vh] object-contain rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent rounded-b-xl">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                <span className="text-secondary font-medium">{selectedImage.category}</span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
