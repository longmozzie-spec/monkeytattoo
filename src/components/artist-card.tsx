"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { artists } from "@/lib/artists-data";

export function ArtistsSection() {
  const reduce = useReducedMotion();

  return (
    <section className="py-32 px-6 bg-surface">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="font-display text-4xl md:text-6xl font-extrabold uppercase tracking-tighter leading-[1.5] md:leading-[1.3] mb-16">
          Đội Ngũ <span className="text-accent">Nghệ Sĩ</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {artists.map((artist, i) => (
            <motion.div
              key={artist.slug}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link href={`/artists/${artist.slug}`} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden bg-background">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="font-display text-lg font-bold uppercase tracking-wider">
                      {artist.name}
                    </p>
                    <p className="text-sm text-text-secondary mt-1">
                      {artist.specialty}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
