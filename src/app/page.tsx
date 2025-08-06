import Clients from "@/components/clients";
import HeroSection from "@/components/heroSection";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Our Clients Section */}
      <Clients />
    </div>
  );
}