import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { MastersSection } from "@/components/masters-section";
import { AboutPreview, TeamSection } from "@/components/about-preview";
import { StudioGallery } from "@/components/studio-gallery";
import { VideoShowreel } from "@/components/video-showreel";
import { ClientsSection } from "@/components/clients-section";
import { Testimonial } from "@/components/testimonial";
import { FaqAccordion } from "@/components/faq-accordion";
import { GoogleMap } from "@/components/google-map";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <MastersSection />
        <AboutPreview />
        <TeamSection />
        <StudioGallery />
        <VideoShowreel />
        <ClientsSection />
        <Testimonial />
        <FaqAccordion />
        <GoogleMap />
      </main>
      <Footer />
    </>
  );
}
