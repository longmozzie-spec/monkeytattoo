import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArtistsSection } from "@/components/artist-card";

export default function ArtistsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-[72px]">
        <ArtistsSection />
      </main>
      <Footer />
    </>
  );
}
