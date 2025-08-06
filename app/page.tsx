import CategoriesSection from "@/components/HomePage/CategoriesSection";
import FeaturedSection from "@/components/HomePage/FeaturedSection";
import Hero from "@/components/HomePage/HeroSection";
import QuotesSection from "@/components/HomePage/QuotesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <FeaturedSection />
        <CategoriesSection />
        <QuotesSection />
      </main>
    </div>
  );
}
