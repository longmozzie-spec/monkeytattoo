import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-[72px]">
        <section className="py-32 px-6">
          <div className="max-w-[1400px] mx-auto">
            <ScrollReveal>
              <h1 className="font-display text-5xl md:text-7xl font-extrabold uppercase tracking-tighter leading-[1.3] md:leading-[1.05]">
                Về <span className="text-accent">Monkey Tattoo</span>
              </h1>
            </ScrollReveal>

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <ScrollReveal>
                <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                  <p>
                    Monkey Tattoo ra đời từ niềm đam mê bất tận với nghệ thuật
                    xăm hình. Chúng tôi tin rằng mỗi hình xăm là một tác phẩm
                    nghệ thuật, xứng đáng được đầu tư thời gian, kỹ thuật và
                    cảm xúc.
                  </p>
                  <p>
                    Đội ngũ nghệ sĩ của chúng tôi chuyên về black & grey
                    realism, Japanese traditional, fine line, và thiết kế custom.
                    Mỗi buổi xăm bắt đầu bằng một cuộc trao đổi kỹ lưỡng để
                    hiểu rõ câu chuyện bạn muốn kể.
                  </p>
                  <p>
                    Studio hoạt động theo hình thức đặt lịch trước, đảm bảo mỗi
                    khách hàng nhận được sự chú ý trọn vẹn trong không gian
                    riêng tư và chuyên nghiệp.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="relative aspect-[4/3] bg-surface overflow-hidden">
                  <Image
                    src="/images/about/studio.png"
                    alt="Monkey Tattoo Studio"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
