import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a small delay before triggering animations
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-light to-white -z-10" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-royalblue rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute top-40 left-40 w-72 h-72 bg-gold-dark rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 pb-24 md:pb-32">
        <div className="text-center">
          <img
            src="assets/logo1.png"
            alt="Mishra's Enterprises Logo"
            className="mx-auto mb-6 h-20 w-20 sm:h-24 sm:w-24 rounded bg-white border-2 border-gold shadow"
          />
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-royalblue ${
              isVisible ? "fade-in-up" : "opacity-0"
            }`}
          >
            <span className="block">Excellence in</span>
            <span className="block mt-2 bg-gradient-to-r from-royalblue to-gold text-transparent bg-clip-text leading-tight md:leading-[1.1] lg:leading-[1.1]">
              Catering Services
            </span>
          </h1>
          <p
            className={`mt-6 max-w-2xl mx-auto text-lg md:text-xl text-royalblue/80 ${
              isVisible ? "fade-in-up animate-stagger-1" : "opacity-0"
            }`}
          >
            Serving quality food across three major railway divisions - Danapur,
            Dhanbad, and Maldah. Specializing in railway canteens, catering
            stalls, MPS, and Bedroll services.
          </p>

          {/* Contact Information */}
          <div
            className={`mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 text-royalblue/70 ${
              isVisible ? "fade-in-up animate-stagger-2" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-gold" />
              <span>+91 7766842702, +91 92632 31519</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-gold" />
              <span>mishrasenterprises74@gmail.com</span>
            </div>
          </div>

          <div
            className={`mt-4 flex flex-col items-center justify-center gap-2 text-royalblue/70 ${
              isVisible ? "fade-in-up animate-stagger-3" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gold" />
              <span>
                Rai Jai krishna Road, Mittan Ghat, Gurhatta, Patna city, Bihar -
                800008
              </span>
            </div>
            <span className="text-xs font-semibold text-gold-dark mt-1 tracking-wide">
              GSTIN: 10AXKPM4550C1ZY
            </span>
          </div>

          <div
            className={`mt-10 flex flex-col sm:flex-row justify-center gap-4 ${
              isVisible ? "fade-in-up animate-stagger-4" : "opacity-0"
            }`}
          >
            <Button className="px-8 py-6 text-lg bg-royalblue text-white hover:bg-gold hover:text-royalblue hover-scale font-semibold">
              <a href="#contact">Contact Us</a>
            </Button>
            <Button
              variant="outline"
              className="px-8 py-6 text-lg hover-scale border-gold text-gold hover:bg-gold-light hover:text-royalblue"
            >
              <a href="#services">Our Services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
