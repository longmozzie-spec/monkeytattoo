import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";

const testimonials = [
  {
    quote:
      "Mình đã đi xăm ở nhiều nơi nhưng chưa đâu khiến mình thoải mái và hài lòng như ở đây. Tay nghề quá đỉnh.",
    name: "Tuấn Kiệt",
    context: "Black & Grey Realism",
  },
  {
    quote:
      "Từ tư vấn đến lúc hoàn thành, mọi thứ đều chuyên nghiệp. Kết quả vượt xa mong đợi.",
    name: "Hương Giang",
    context: "Japanese Traditional Sleeve",
  },
  {
    quote:
      "Không gian sạch sẽ, nghệ sĩ tài năng, và thái độ phục vụ tuyệt vời. Đã book lịch cho hình tiếp theo.",
    name: "Đức Minh",
    context: "Fine Line Work",
  },
  {
    quote:
      "Anh em ở đây rất nhiệt tình và có tâm. Hình xăm đẹp hơn cả những gì mình tưởng tượng.",
    name: "Phương Nhi",
    context: "Custom Back Piece",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-[72px]">
        <section className="py-32 px-6">
          <div className="max-w-[1000px] mx-auto">
            <ScrollReveal>
              <h1 className="font-display text-5xl md:text-7xl font-extrabold uppercase tracking-normal mb-20">
                Khách Hàng <span className="text-accent">Nói Gì</span>
              </h1>
            </ScrollReveal>

            <div className="space-y-16">
              {testimonials.map((t, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <blockquote className="border-l-4 border-accent pl-8">
                    <p className="text-xl md:text-2xl font-light leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <footer className="mt-6">
                      <p className="text-foreground font-semibold">{t.name}</p>
                      <p className="text-text-secondary text-sm mt-1">
                        {t.context}
                      </p>
                    </footer>
                  </blockquote>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
