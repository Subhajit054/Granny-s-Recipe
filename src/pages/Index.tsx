
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedRecipes from "@/components/FeaturedRecipes";
import AIGenerator from "@/components/AIGenerator";
import PriceComparison from "@/components/PriceComparison";
import PremiumFeatures from "@/components/PremiumFeatures";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedRecipes />
        <AIGenerator />
        <PriceComparison />
        <PremiumFeatures />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
