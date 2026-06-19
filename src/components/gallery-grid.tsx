"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ScrollReveal } from "./scroll-reveal";

const galleryImages = [
  { src: "/images/gallery/work-01.jpeg", span: "col-span-2 row-span-2" },
  { src: "/images/gallery/work-02.jpeg", span: "col-span-1 row-span-1" },
  { src: "/images/gallery/work-03.jpeg", span: "col-span-1 row-span-2" },
  { src: "/images/gallery/work-04.jpeg", span: "col-span-1 row-span-1" },
  { src: "/images/gallery/work-05.jpeg", span: "col-span-1 row-span-1" },
  { src: "/images/gallery/work-06.jpeg", span: "col-span-2 row-span-1" },
  { src: "/images/gallery/work-07.jpg", span: "col-span-1 row-span-2" },
  { src: "/images/gallery/work-08.jpg", span: "col-span-1 row-span-1" },
];

export function GalleryGrid() {
  const reduce = useReducedMotion();

  return (
    <section id="gallery" className="py-32 bg-surface overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 mb-16">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight leading-[1.3] md:leading-[1.1] mb-6">
            Tác Phẩm
          </h2>
          <p className="text-text-secondary text-lg max-w-[50ch]">
            Mỗi tác phẩm là sự kết hợp giữa kỹ thuật và cảm xúc. Xem quá
            trình sáng tạo của chúng tôi.
          </p>
        </ScrollReveal>
      </div>

      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-3">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              className={`relative overflow-hidden group ${img.span}`}
              initial={reduce ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Image
                src={img.src}
                alt={`Tác phẩm ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
