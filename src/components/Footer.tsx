import React from "react";
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { ref: footerRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <footer className="bg-royalblue text-white" ref={footerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={inView ? "fade-in-up" : "opacity-0"}>
            <div className="flex items-center mb-4">
              <img
                src="assets/logo1.png"
                alt="Mishra's Enterprises Logo"
                className="h-12 w-auto mr-3 rounded bg-white p-1 border-2 border-gold"
              />
              <div>
                <h3 className="text-2xl font-bold text-royalblue bg-gold rounded px-2 mb-1">
                  Mishra's Enterprises
                </h3>
                <span className="text-xs font-semibold text-gold-light tracking-wide">
                  GSTIN: 10AXKPM4550C1ZY
                </span>
              </div>
            </div>
            <p className="text-gold-light mb-6">
              Catering excellence for Indian Railways and institutions. Quality,
              hygiene, and taste you can trust.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gold hover:text-white transition-colors hover-scale"
              >
                <Instagram size={20} />
              </a>
              <a
                href="# "
                className="text-gold hover:text-white transition-colors hover-scale"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div
            className={inView ? "fade-in-up animate-stagger-1" : "opacity-0"}
          >
            <h4 className="font-bold text-lg mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-gold-light hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gold-light hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-gold-light hover:text-white transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#licenses"
                  className="text-gold-light hover:text-white transition-colors"
                >
                  Licenses
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gold-light hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div
            className={inView ? "fade-in-up animate-stagger-2" : "opacity-0"}
          >
            <h4 className="font-bold text-lg mb-4 text-gold">Contact Info</h4>
            <ul className="space-y-3 text-gold-light">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold" /> +91 7766842702, +91
                92632 31519
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold" />{" "}
                mishrasenterprises74@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold" /> Rai Jai krishna
                Road, Mittan Ghat, Gurhatta, Patna city, Bihar - 800008
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gold pt-6 pb-2 text-center text-gold-light text-sm">
          &copy; {currentYear} Mishra's Enterprises. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
