import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Licenses from "@/components/Licenses";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-royalblue">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Licenses />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
