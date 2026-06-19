"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const clientPhotos = [
  { src: "/images/clients/clients-01.jpg", alt: "Khách hàng 1" },
  { src: "/images/clients/clients-02.jpg", alt: "Khách hàng 2" },
  { src: "/images/clients/clients-03.jpg", alt: "Khách hàng 3" },
  { src: "/images/clients/clients-04.jpg", alt: "Khách hàng 4" },
  { src: "/images/clients/clients-05.jpg", alt: "Khách hàng 5" },
];

export function ClientsSection() {
  const reduce = useReducedMotion();

  return (
    <section className="py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-4xl md:text-6xl font-extrabold uppercase tracking-tighter leading-[1.3] md:leading-[0.9]">
            Những Gương Mặt &<br />
            <span className="text-accent">Những Tác Phẩm Để Đời</span>
          </h2>
          <p className="mt-8 text-text-secondary text-lg leading-relaxed max-w-[65ch]">
            Hình xăm trên da là dấu ấn của riêng bạn, nhưng khoảnh khắc chúng
            ta tạo ra nó là kỷ niệm chung. Tại đây, chúng tôi không chỉ tạo ra
            nghệ thuật, mà còn tạo ra những sự kết nối tuyệt vời. Cảm ơn các
            anh em, bạn bè đã đến, tin tưởng và cháy hết mình cùng đam mê. Dưới
            đây là những gương mặt đã cùng chúng tôi tạo nên những tác phẩm để
            đời.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-3">
          {clientPhotos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={reduce ? false : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative aspect-square bg-surface overflow-hidden group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
