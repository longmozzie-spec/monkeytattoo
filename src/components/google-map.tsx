import { ScrollReveal } from "./scroll-reveal";

export function GoogleMap() {
  return (
    <section className="py-32 px-6 bg-surface">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight leading-[0.9] mb-6">
            Tìm Đến <span className="text-accent">Chúng Tôi</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-[50ch] mb-12">
            Ghé thăm studio để trải nghiệm không gian sáng tạo và trao đổi ý
            tưởng cùng đội ngũ nghệ sĩ.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="relative w-full aspect-[16/7] md:aspect-[16/5] overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5!2d106.7!3d10.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a089b6f38f652f%3A0x557c63277881d728!2sMonkey%20Tattoo!5e0!3m2!1svi!2svn!4v1718784000000"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Monkey Tattoo - Google Maps"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
