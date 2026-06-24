"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useReducedMotion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";

const studioImages = [
  { src: "/images/studio/studio-1.png", alt: "Không gian tiệm xăm MonKey Tattoo" },
  { src: "/images/studio/studio-2.png", alt: "Khu vực tư vấn" },
  { src: "/images/studio/studio-3.png", alt: "Góc làm việc nghệ sĩ" },
  { src: "/images/studio/studio-4.png", alt: "Nội thất tiệm" },
];

function StudioImageCard({
  src,
  alt,
  index,
}: {
  src: string;
  alt: string;
  index: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden bg-surface"
    >
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors duration-500" />
      </div>
    </motion.div>
  );
}

export function StudioGallery() {
  const reduce = useReducedMotion();

  return (
    <section id="studio" className="py-24 md:py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-3">
              Không Gian Của Chúng Tôi
            </p>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase">
              Một Nơi Để
              <br />
              <span className="text-accent">Nghệ Thuật Ra Đời</span>
            </h2>
          </motion.div>

          <motion.p
            initial={reduce ? false : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-text-secondary text-base leading-relaxed max-w-[40ch] md:text-right"
          >
            Không gian tiệm được thiết kế để bạn cảm thấy thoải mái, an tâm và
            hoàn toàn tập trung vào trải nghiệm nghệ thuật.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {studioImages.map((img, i) => (
            <StudioImageCard key={img.src} src={img.src} alt={img.alt} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex justify-center"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-3 border border-border text-text-secondary px-8 py-4 text-sm font-bold uppercase tracking-wider hover:border-accent hover:text-accent transition-colors duration-300"
          >
            Đặt Lịch Thăm Tiệm
            <ArrowRight size={16} weight="bold" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
