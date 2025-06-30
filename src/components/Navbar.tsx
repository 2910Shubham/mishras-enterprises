import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-md" : "bg-white/80"
      } border-b border-gold h-[70px]`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            className={`flex-shrink-0 flex flex-row items-center gap-2 sm:gap-3 ${
              mounted ? "fade-in" : "opacity-0"
            }`}
          >
            <img
              src="assets/logo1.png"
              alt="Mishra's Enterprises Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded bg-white border-2 border-gold shadow-sm object-contain min-w-[40px] min-h-[40px]"
            />
            <div className="flex flex-col items-start leading-tight">
              <span className="text-lg sm:text-2xl font-bold text-royalblue whitespace-nowrap">
                Mishra's Enterprises
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-gold mt-0.5 tracking-wide whitespace-nowrap">
                GSTIN: 10AXKPM4550C1ZY
              </span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-4 sm:ml-10 flex items-center space-x-2 sm:space-x-4">
              <a
                href="#services"
                className={`text-royalblue hover:text-gold px-2 sm:px-3 py-2 rounded-md text-sm font-medium transition-transform hover:scale-105 ${
                  mounted ? "fade-in animate-stagger-1" : "opacity-0"
                }`}
              >
                Services
              </a>
              <a
                href="#projects"
                className={`text-royalblue hover:text-gold px-2 sm:px-3 py-2 rounded-md text-sm font-medium transition-transform hover:scale-105 ${
                  mounted ? "fade-in animate-stagger-2" : "opacity-0"
                }`}
              >
                Projects
              </a>
              <a
                href="#gallery"
                className={`text-royalblue hover:text-gold px-2 sm:px-3 py-2 rounded-md text-sm font-medium transition-transform hover:scale-105 ${
                  mounted ? "fade-in animate-stagger-3" : "opacity-0"
                }`}
              >
                Gallery
              </a>
              <a
                href="#licenses"
                className={`text-royalblue hover:text-gold px-2 sm:px-3 py-2 rounded-md text-sm font-medium transition-transform hover:scale-105 ${
                  mounted ? "fade-in animate-stagger-4" : "opacity-0"
                }`}
              >
                Licenses
              </a>
              <Button
                className={`bg-gold text-royalblue hover:bg-royalblue hover:text-gold hover-scale font-semibold ${
                  mounted ? "fade-in animate-stagger-5" : "opacity-0"
                }`}
              >
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </div>

          <div className={`md:hidden ${mounted ? "fade-in" : "opacity-0"}`}>
            <button
              onClick={toggleMenu}
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
              className="inline-flex items-center justify-center p-2 rounded-md text-royalblue hover:text-gold hover:bg-gold/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold"
            >
              {isOpen ? (
                <X size={28} strokeWidth={2.5} />
              ) : (
                <Menu size={28} strokeWidth={2.5} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with animation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out transform ${
          isOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-gold">
          <a
            href="#services"
            className="text-royalblue hover:text-gold block px-3 py-2 rounded-md text-base font-medium"
            onClick={toggleMenu}
          >
            Services
          </a>
          <a
            href="#projects"
            className="text-royalblue hover:text-gold block px-3 py-2 rounded-md text-base font-medium"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href="#gallery"
            className="text-royalblue hover:text-gold block px-3 py-2 rounded-md text-base font-medium"
            onClick={toggleMenu}
          >
            Gallery
          </a>
          <a
            href="#licenses"
            className="text-royalblue hover:text-gold block px-3 py-2 rounded-md text-base font-medium"
            onClick={toggleMenu}
          >
            Licenses
          </a>
          <Button className="mt-2 w-full bg-gold text-royalblue hover:bg-royalblue hover:text-gold font-semibold">
            <a href="#contact" onClick={toggleMenu}>
              Contact Us
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
