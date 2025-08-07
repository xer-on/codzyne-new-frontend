import AboutUs from "@/components/home/aboutUs";
import Clients from "@/components/home/clients";
import HeroSection from "@/components/home/heroSection";
import Navbar from "@/components/navbar";
import Solutions from "@/components/home/solutions";
import Products from "@/components/home/products";
import Mockup from "@/components/home/mockup";
import Projects from "@/components/home/projects";

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

      {/* Solutions Section */}
      <Solutions />

      {/* Products Section */}
      <Products />

      {/* Mockup Section */}
      <Mockup />

      {/* Projects Section */}
      <Projects />
    </div>
  );
}