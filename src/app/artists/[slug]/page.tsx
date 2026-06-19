import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { artists } from "@/lib/artists-data";
import Image from "next/image";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return artists.map((a) => ({ slug: a.slug }));
}

export default async function ArtistPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artist = artists.find((a) => a.slug === slug);

  if (!artist) return notFound();

  return (
    <>
      <Navigation />
      <main className="pt-[72px]">
        <section className="py-32 px-6">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
              <div className="lg:col-span-2">
                <ScrollReveal>
                  <div className="relative aspect-[3/4] bg-surface overflow-hidden">
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                </ScrollReveal>
              </div>

              <div className="lg:col-span-3">
                <ScrollReveal>
                  <h1 className="font-display text-4xl md:text-6xl font-extrabold uppercase tracking-tighter leading-[0.9]">
                    {artist.name}
                  </h1>
                  <p className="mt-4 text-accent text-sm font-bold uppercase tracking-wider">
                    {artist.specialty}
                  </p>
                  <p className="mt-8 text-text-secondary text-lg leading-relaxed max-w-[55ch]">
                    Mỗi tác phẩm là sự kết hợp giữa tâm huyết và kỹ thuật.
                    Luôn tận tâm tạo ra những hình xăm độc nhất, kể câu chuyện
                    riêng của bạn.
                  </p>

                  <div className="mt-12">
                    <h3 className="font-display text-xl font-bold uppercase tracking-wider mb-6">
                      Tác Phẩm
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <div
                          key={n}
                          className="relative aspect-square bg-surface overflow-hidden"
                        >
                          <div className="absolute inset-0 flex items-center justify-center text-text-secondary/50 text-xs">
                            work-{String(n).padStart(2, "0")}.jpg
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href="/contact"
                    className="mt-12 inline-block bg-accent text-foreground px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-accent/85 transition-colors duration-300"
                  >
                    Đặt Lịch với {artist.name.split(" ")[0]}
                  </a>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
