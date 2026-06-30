"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Plus, Minus } from "@phosphor-icons/react";

export interface FaqItem {
  question: string;
  answer: string;
}

const defaultFaqs: FaqItem[] = [
  {
    question: "Studio nằm ở đâu?",
    answer:
      "Monkey Tattoo hoạt động theo hình thức hẹn trước để đảm bảo không gian riêng tư và thoải mái cho mỗi khách hàng.",
  },
  {
    question: "Làm sao để đặt lịch?",
    answer:
      "Điền form liên hệ với ý tưởng thiết kế, nghệ sĩ bạn muốn, và thời gian rảnh. Chúng tôi sẽ phản hồi trong vòng 48 giờ để sắp xếp buổi tư vấn miễn phí.",
  },
  {
    question: "Có cần đặt cọc không?",
    answer:
      "Có, cần đặt cọc để giữ lịch hẹn. Số tiền cọc sẽ được trừ vào chi phí buổi xăm chính thức.",
  },
  {
    question: "Cần chuẩn bị gì trước buổi xăm?",
    answer:
      "Ngủ đủ giấc, ăn no trước khi đến, uống đủ nước, và mặc quần áo thoải mái giúp dễ tiếp cận vùng da cần xăm.",
  },
  {
    question: "Có nhận xăm cover-up không?",
    answer:
      "Có, nhiều nghệ sĩ của chúng tôi chuyên về cover-up. Gửi kèm ảnh hình xăm cũ trong form đặt lịch để chúng tôi tư vấn phương án tốt nhất.",
  },
];

export function FaqAccordion({ items = defaultFaqs }: { items?: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduce = useReducedMotion();

  return (
    <section className="py-32 px-6">
      <div className="max-w-[800px] mx-auto">
        <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-normal uppercase mb-16">
          Câu Hỏi <span className="text-accent">Thường Gặp</span>
        </h2>

        <div className="divide-y divide-border">
          {items.map((item, i) => (
            <div key={i} className="py-6">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between text-left gap-4"
                aria-expanded={openIndex === i}
              >
                <span className="text-lg font-medium">{item.question}</span>
                {openIndex === i ? (
                  <Minus size={20} weight="light" className="shrink-0 text-accent" />
                ) : (
                  <Plus size={20} weight="light" className="shrink-0 text-text-secondary" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={reduce ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-text-secondary leading-relaxed max-w-[60ch]">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
