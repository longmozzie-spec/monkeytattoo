import { ScrollReveal } from "./scroll-reveal";

export function Testimonial() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-[900px] mx-auto">
        <ScrollReveal>
          <blockquote className="border-l-4 border-accent pl-8">
            <p className="font-display text-2xl md:text-4xl font-bold">
              "Mình đã đi xăm ở nhiều nơi nhưng chưa đâu khiến mình thoải mái
              và hài lòng như ở đây. Tay nghề quá đỉnh."
            </p>
            <footer className="mt-8">
              <p className="text-foreground font-semibold">Tuấn Kiệt</p>
              <p className="text-text-secondary text-sm mt-1">
                Black & Grey Realism
              </p>
            </footer>
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
}
