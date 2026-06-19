"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  delay?: number;
  direction?: "up" | "left" | "right";
}

function ParallaxImage({
  src,
  alt,
  className = "",
  speed = 80,
  delay = 0,
  direction = "up",
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);

  const initial = {
    opacity: 0,
    y: direction === "up" ? 100 : 0,
    x: direction === "left" ? -80 : direction === "right" ? 80 : 0,
  };

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      <motion.div
        initial={initial}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true, margin: "-8%" }}
        transition={{
          duration: 1.4,
          delay,
          ease: [0.25, 1, 0.5, 1],
        }}
        className="relative w-full h-full overflow-hidden group"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.06]"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
      </motion.div>
    </motion.div>
  );
}

export function MastersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [150, -150]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [100, -100]);

  return (
    <section id="masters" ref={sectionRef} className="relative bg-black py-32 md:py-48 overflow-hidden">
      {/* ====== TITLE ====== */}
      <div className="relative z-30 text-center mb-20 md:mb-32 px-4">
        <motion.h2
          style={isMobile ? undefined : { y: titleY }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-extralight uppercase tracking-[0.2em] text-white leading-[1.5] md:leading-[1.3]"
        >
          Nghệ Thuật
        </motion.h2>
        <motion.p
          style={isMobile ? undefined : { y: subtitleY }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight uppercase tracking-[0.3em] text-white/50 mt-3 md:mt-6"
        >
          qua từng tác phẩm
        </motion.p>
      </div>

      {/* ====== CLUSTER 1: Hero spread ====== */}
      <div className="relative max-w-[1500px] mx-auto px-4 md:px-8 mb-24 md:mb-40">
        <div className="grid grid-cols-12 gap-3 md:gap-5 items-center">
          {/* Left tall */}
          <ParallaxImage
            src="/images/gallery/work-01.jpeg"
            alt="Sleeve tattoo"
            className="col-span-4 md:col-span-3 aspect-[2/3]"
            speed={100}
            delay={0}
          />
          {/* Center hero */}
          <ParallaxImage
            src="/images/gallery/work-02.jpeg"
            alt="Full body piece"
            className="col-span-8 md:col-span-5 aspect-[4/5]"
            speed={50}
            delay={0.15}
          />
          {/* Right piece */}
          <ParallaxImage
            src="/images/gallery/work-03.jpeg"
            alt="Arm tattoo"
            className="col-span-6 md:col-span-4 aspect-[3/4] mt-12 md:mt-20"
            speed={120}
            delay={0.3}
            direction="right"
          />
        </div>
      </div>

      {/* ====== CLUSTER 2: Offset duo ====== */}
      <div className="relative max-w-[1500px] mx-auto px-4 md:px-8 mb-24 md:mb-40">
        <div className="grid grid-cols-12 gap-3 md:gap-5">
          <ParallaxImage
            src="/images/gallery/work-04.jpeg"
            alt="Tattoo artwork"
            className="col-span-5 md:col-span-4 col-start-1 aspect-[3/4]"
            speed={90}
            delay={0}
            direction="left"
          />
          <ParallaxImage
            src="/images/gallery/work-05.jpeg"
            alt="Tattoo artwork"
            className="col-span-7 md:col-span-5 col-start-6 md:col-start-6 aspect-[4/5] mt-16 md:mt-28"
            speed={60}
            delay={0.2}
          />
          <ParallaxImage
            src="/images/gallery/work-06.jpeg"
            alt="Tattoo artwork"
            className="col-span-4 md:col-span-3 col-start-9 md:col-start-10 aspect-[2/3] -mt-8 md:-mt-16"
            speed={130}
            delay={0.35}
            direction="right"
          />
        </div>
      </div>

      {/* ====== CLUSTER 3: Cinematic wide ====== */}
      <div className="relative max-w-[1500px] mx-auto px-4 md:px-8 mb-24 md:mb-40">
        <div className="grid grid-cols-12 gap-3 md:gap-5 items-end">
          <ParallaxImage
            src="/images/gallery/work-07.jpg"
            alt="Tattoo artwork"
            className="col-span-3 md:col-span-2 aspect-[2/3]"
            speed={110}
            delay={0}
          />
          <ParallaxImage
            src="/images/gallery/work-08.jpg"
            alt="Tattoo artwork"
            className="col-span-6 md:col-span-6 col-start-4 md:col-start-3 aspect-[16/10]"
            speed={40}
            delay={0.1}
          />
          <ParallaxImage
            src="/images/gallery/work-09.jpg"
            alt="Tattoo artwork"
            className="col-span-4 md:col-span-3 col-start-9 md:col-start-10 aspect-[3/4] -mb-12 md:-mb-20"
            speed={95}
            delay={0.25}
            direction="right"
          />
        </div>
      </div>

      {/* ====== CLUSTER 4: Staggered trio ====== */}
      <div className="relative max-w-[1500px] mx-auto px-4 md:px-8 mb-24 md:mb-40">
        <div className="grid grid-cols-12 gap-3 md:gap-5">
          <ParallaxImage
            src="/images/gallery/work-10.jpg"
            alt="Tattoo artwork"
            className="col-span-5 md:col-span-4 col-start-2 md:col-start-1 aspect-[3/4] mt-8 md:mt-16"
            speed={75}
            delay={0.1}
            direction="left"
          />
          <ParallaxImage
            src="/images/gallery/work-11.jpg"
            alt="Tattoo artwork"
            className="col-span-4 md:col-span-3 col-start-7 md:col-start-5 aspect-[2/3]"
            speed={110}
            delay={0}
          />
          <ParallaxImage
            src="/images/gallery/work-12.jpg"
            alt="Tattoo artwork"
            className="col-span-5 md:col-span-4 col-start-8 md:col-start-9 aspect-[4/5] mt-20 md:mt-36"
            speed={55}
            delay={0.2}
          />
        </div>
      </div>

      {/* ====== CLUSTER 5: Asymmetric scatter ====== */}
      <div className="relative max-w-[1500px] mx-auto px-4 md:px-8 mb-24 md:mb-40">
        <div className="grid grid-cols-12 gap-3 md:gap-5 items-start">
          <ParallaxImage
            src="/images/gallery/work-13.jpg"
            alt="Tattoo artwork"
            className="col-span-6 md:col-span-5 aspect-[4/5]"
            speed={65}
            delay={0.1}
          />
          <ParallaxImage
            src="/images/gallery/work-14.jpg"
            alt="Tattoo artwork"
            className="col-span-3 md:col-span-2 col-start-8 md:col-start-7 aspect-[2/3] mt-24 md:mt-40"
            speed={130}
            delay={0.25}
            direction="right"
          />
          <ParallaxImage
            src="/images/gallery/work-15.jpg"
            alt="Tattoo artwork"
            className="col-span-5 md:col-span-4 col-start-8 md:col-start-9 aspect-[3/4]"
            speed={85}
            delay={0.15}
          />
        </div>
      </div>

      {/* ====== CLUSTER 6: Final statement ====== */}
      <div className="relative max-w-[1500px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-12 gap-3 md:gap-5 items-center">
          <ParallaxImage
            src="/images/gallery/work-16.jpg"
            alt="Tattoo artwork"
            className="col-span-4 md:col-span-3 aspect-[2/3] mt-12 md:mt-20"
            speed={100}
            delay={0}
            direction="left"
          />
          <ParallaxImage
            src="/images/gallery/work-17.jpg"
            alt="Tattoo artwork"
            className="col-span-5 md:col-span-4 col-start-5 md:col-start-4 aspect-[3/4]"
            speed={50}
            delay={0.15}
          />
          <ParallaxImage
            src="/images/gallery/work-18.jpg"
            alt="Tattoo artwork"
            className="col-span-4 md:col-span-3 col-start-9 md:col-start-8 aspect-[2/3] mt-16 md:mt-28"
            speed={120}
            delay={0.3}
            direction="right"
          />
          <ParallaxImage
            src="/images/gallery/work-19.jpg"
            alt="Tattoo artwork"
            className="col-span-3 md:col-span-2 col-start-10 md:col-start-11 aspect-[3/4] -mt-8"
            speed={70}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}
