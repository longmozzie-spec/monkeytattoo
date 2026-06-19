"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ScrollVelocity } from "@/components/ui/scroll-velocity";

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
  return (
    <section id="masters" className="relative bg-black py-12 md:py-32 overflow-hidden">
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
              className="relative h-[200px] w-[150px] md:h-[320px] md:w-[240px] overflow-hidden rounded-sm"
            >
              <Image
                src={src}
                alt="Tattoo artwork"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 150px, 240px"
              />
            </div>
          ))}
        </ScrollVelocity>

        <ScrollVelocity velocity={-3}>
          {row2.map((src) => (
            <div
              key={src}
              className="relative h-[200px] w-[150px] md:h-[320px] md:w-[240px] overflow-hidden rounded-sm"
            >
              <Image
                src={src}
                alt="Tattoo artwork"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 150px, 240px"
              />
            </div>
          ))}
        </ScrollVelocity>
      </div>
    </section>
  );
}
