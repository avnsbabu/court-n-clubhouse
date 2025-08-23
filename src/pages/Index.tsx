import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SportsSection from "@/components/SportsSection";
import CourtRental from "@/components/CourtRental";
import EquipmentStore from "@/components/EquipmentStore";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <SportsSection />
      <CourtRental />
      <EquipmentStore />
      <Footer />
    </div>
  );
};

export default Index;
