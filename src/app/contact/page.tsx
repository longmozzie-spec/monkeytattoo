import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="pt-[72px]">
        <section className="py-32 px-6">
          <div className="max-w-[700px] mx-auto">
            <ScrollReveal>
              <h1 className="font-display text-5xl md:text-7xl font-extrabold uppercase tracking-normal">
                Đặt <span className="text-accent">Lịch Xăm</span>
              </h1>
              <p className="mt-6 text-text-secondary text-lg leading-relaxed">
                Chỉ nhận khách đặt lịch trước. Điền form bên dưới, chúng tôi sẽ
                liên hệ để sắp xếp buổi tư vấn miễn phí.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mt-12">
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
