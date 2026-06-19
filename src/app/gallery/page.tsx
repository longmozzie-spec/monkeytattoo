import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { GalleryGrid } from "@/components/gallery-grid";

export default function GalleryPage() {
  return (
    <>
      <Navigation />
      <main className="pt-[72px]">
        <GalleryGrid />
      </main>
      <Footer />
    </>
  );
}
