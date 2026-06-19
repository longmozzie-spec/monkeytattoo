"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ScrollVelocity } from "@/components/ui/scroll-velocity";
import { X } from "@phosphor-icons/react";

const galleryImages = [
  "/images/gallery/work-01.jpeg",
  "/images/gallery/work-02.jpeg",
  "/images/gallery/work-03.jpeg",
  "/images/gallery/work-04.jpeg",
  "/images/gallery/work-05.jpeg",
  "/images/gallery/work-06.jpeg",
  "/images/gallery/work-07.jpg",
  "/images/gallery/work-08.jpg",
  "/images/gallery/work-09.jpg",
  "/images/gallery/work-10.jpg",
  "/images/gallery/work-11.jpg",
  "/images/gallery/work-12.jpg",
  "/images/gallery/work-13.jpg",
  "/images/gallery/work-14.jpg",
  "/images/gallery/work-15.jpg",
  "/images/gallery/work-16.jpg",
  "/images/gallery/work-17.jpg",
  "/images/gallery/work-18.jpg",
  "/images/gallery/work-19.jpg",
  "/images/gallery/work-20.jpg",
  "/images/gallery/work-21.jpg",
  "/images/gallery/work-22.jpg",
  "/images/gallery/work-23.jpg",
  "/images/gallery/work-24.jpg",
  "/images/gallery/work-25.jpg",
  "/images/gallery/work-26.jpg",
  "/images/gallery/work-27.jpg",
  "/images/gallery/work-28.jpg",
];

const row1 = galleryImages.slice(0, 14);
const row2 = galleryImages.slice(14);

export function MastersSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="masters" className="relative bg-background py-12 md:py-32 overflow-hidden">
      {/* ====== TITLE ====== */}
      <div className="relative z-30 text-center mb-10 md:mb-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="font-display text-[clamp(2rem,7vw,6.5rem)] font-extralight uppercase tracking-[0.2em] text-white leading-[1.3]"
        >
          Nghệ Thuật
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          className="font-display text-[clamp(1.2rem,4vw,3.5rem)] font-extralight uppercase tracking-[0.3em] text-white/50 mt-2 md:mt-4"
        >
          Qua Từng Tác Phẩm
        </motion.p>
      </div>

      {/* ====== SCROLL VELOCITY GALLERY ====== */}
      <div className="flex flex-col gap-2 md:gap-4">
        <ScrollVelocity velocity={3}>
          {row1.map((src) => (
            <div
              key={src}
              className="relative h-[280px] w-[210px] md:h-[420px] md:w-[320px] overflow-hidden rounded-sm cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src}
                alt="Tattoo artwork"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 768px) 210px, 320px"
              />
            </div>
          ))}
        </ScrollVelocity>

        <ScrollVelocity velocity={-3}>
          {row2.map((src) => (
            <div
              key={src}
              className="relative h-[280px] w-[210px] md:h-[420px] md:w-[320px] overflow-hidden rounded-sm cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src}
                alt="Tattoo artwork"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 768px) 210px, 320px"
              />
            </div>
          ))}
        </ScrollVelocity>
      </div>

      {/* ====== LIGHTBOX ====== */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <X size={32} weight="bold" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl aspect-[3/4]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Tattoo artwork"
                fill
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
