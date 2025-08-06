import AboutUs from "@/components/home/aboutUs";
import Clients from "@/components/home/clients";
import HeroSection from "@/components/home/heroSection";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Our Clients Section */}
      <Clients />

      {/* About Us Section */}
      <AboutUs />
    </div>
  );
}