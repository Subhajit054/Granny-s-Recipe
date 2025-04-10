
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import PremiumFeatures from "@/components/PremiumFeatures";
import Footer from "@/components/Footer";

const Premium = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PremiumFeatures />
      </main>
      <Footer />
    </div>
  );
};

export default Premium;
