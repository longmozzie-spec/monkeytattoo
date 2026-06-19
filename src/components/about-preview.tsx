import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "./scroll-reveal";

export function AboutPreview() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-6xl font-extrabold uppercase tracking-tighter leading-[1.3] md:leading-[1.1]">
              Không chỉ là
              <br />
              <span className="text-accent">hình xăm</span>
            </h2>
            <p className="mt-8 text-text-secondary text-lg leading-relaxed max-w-[50ch]">
              Monkey Tattoo là nơi nghệ thuật gặp gỡ đam mê. Chúng tôi chuyên
              về black & grey realism, Japanese traditional, và thiết kế custom
              độc nhất cho riêng bạn.
            </p>
            <div className="mt-10 flex gap-4 flex-wrap">
              <Link
                href="/artists"
                className="text-sm border-2 border-border px-6 py-3 text-foreground font-bold uppercase tracking-wider hover:border-accent hover:text-accent transition-colors duration-300"
              >
                Đội Ngũ Nghệ Sĩ
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-2">
          <ScrollReveal delay={0.15}>
            <div className="relative aspect-[3/4] bg-surface overflow-hidden">
              <Image
                src="/images/about/studio.png"
                alt="Monkey Tattoo Studio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

const teamMembers = [
  { src: "/images/team/member-01.png", name: "Thành viên 1" },
  { src: "/images/team/member-02.png", name: "Thành viên 2" },
  { src: "/images/team/member-03.png", name: "Thành viên 3" },
  { src: "/images/team/member-04.png", name: "Thành viên 4" },
  { src: "/images/team/member-05.png", name: "Thành viên 5" },
  { src: "/images/team/member-06.png", name: "Thành viên 6" },
];

export function TeamSection() {
  return (
    <section className="py-32 px-6 bg-surface">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold uppercase tracking-tighter leading-[1.3] md:leading-[1.1] mb-4">
            Dàn Nhân Sự
            <br />
            <span className="text-accent">Tràn Đầy Nhiệt Huyết</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-[55ch] mb-16">
            Cùng với dàn nhân sự tràn đầy kỹ năng và nhiệt huyết, chúng tôi
            luôn sẵn sàng đồng hành cùng bạn trên hành trình nghệ thuật.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {teamMembers.map((member, i) => (
            <ScrollReveal key={member.src} delay={i * 0.1}>
              <div className="relative aspect-[3/4] overflow-hidden group">
                <Image
                  src={member.src}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
