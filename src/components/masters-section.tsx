"use client";

import Image from "next/image";
import { motion } from "motion/react";

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

export function MastersSection() {
  return (
    <section id="masters" className="relative bg-black py-12 md:py-48 overflow-hidden">
      {/* ====== TITLE ====== */}
      <div className="relative z-30 text-center mb-6 md:mb-20 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-extralight uppercase tracking-[0.2em] text-white leading-[1.5] md:leading-[1.3]"
        >
          Nghệ Thuật
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight uppercase tracking-[0.3em] text-white/50 mt-4 md:mt-8"
        >
          qua từng tác phẩm
        </motion.p>
      </div>

      {/* ====== GALLERY GRID ====== */}
      <div className="max-w-[1500px] mx-auto px-2 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
          {galleryImages.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{
                duration: 0.6,
                delay: (i % 4) * 0.1,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="relative aspect-[3/4] overflow-hidden group"
            >
              <Image
                src={src}
                alt="Tattoo artwork"
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
