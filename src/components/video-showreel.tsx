"use client";

import { ScrollReveal } from "./scroll-reveal";

const videos = [
  "/videos/clip-01.mp4",
  "/videos/clip-02.mp4",
  "/videos/clip-03.mp4",
  "/videos/clip-04.mp4",
  "/videos/clip-05.mp4",
  "/videos/clip-06.mp4",
  "/videos/clip-07.mp4",
  "/videos/clip-08.mp4",
  "/videos/clip-09.mp4",
  "/videos/clip-10.mp4",
  "/videos/clip-11.mp4",
];

export function VideoShowreel() {
  const displayVideos = [...videos, ...videos];

  return (
    <section className="py-32 bg-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 mb-16">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold uppercase tracking-tighter leading-[1.5] md:leading-[1.3]">
            Quá Trình
            <br />
            <span className="text-accent">Sáng Tạo</span>
          </h2>
          <p className="mt-6 text-text-secondary text-lg max-w-[50ch]">
            Theo dõi hành trình từ ý tưởng đến tác phẩm hoàn chỉnh qua từng
            đường kim tỉ mỉ.
          </p>
        </ScrollReveal>
      </div>

      <div className="relative w-full">
        <div className="flex gap-4 animate-scroll-left hover:[animation-play-state:paused]">
          {displayVideos.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="flex-shrink-0 w-[300px] md:w-[400px] aspect-[9/16] rounded-lg overflow-hidden bg-surface"
            >
              <video
                src={src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
