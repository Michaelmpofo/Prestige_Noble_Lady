import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import CollectionsSection from '@/components/home/CollectionsSection';
import BestSellers from '@/components/home/BestSellers';
import LuxuryBanner from '@/components/home/LuxuryBanner';
import HospitalitySection from '@/components/home/HospitalitySection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import GallerySection from '@/components/home/GallerySection';
import NewsletterSection from '@/components/home/NewsletterSection';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TrustBar />
      <CollectionsSection />
      <BestSellers />
      <LuxuryBanner />
      <HospitalitySection />
      <WhyChooseUs />
      <TestimonialsSection />
      <GallerySection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
