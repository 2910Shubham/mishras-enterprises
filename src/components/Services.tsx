import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  UtensilsCrossed,
  Train,
  Bed,
  Store,
  School2,
  Award,
} from "lucide-react";
import { useInView } from "react-intersection-observer";

const serviceItems = [
  {
    title: "Canteen Services",
    description:
      "Operating high-quality canteens across multiple railway stations in Danapur, Dhanbad, and Maldah divisions.",
    icon: Train,
  },
  {
    title: "Catering Stalls",
    description:
      "Strategic food stalls at key railway stations providing quick, fresh, and delicious meals to travelers.",
    icon: Store,
  },
  {
    title: "MPS (Multipurpose Stall)",
    description:
      "Multipurpose stalls offering a variety of food and beverages, ensuring convenience for passengers.",
    icon: UtensilsCrossed,
  },
  {
    title: "Bedroll Services",
    description:
      "Clean and comfortable bedroll services for railway passengers, ensuring a comfortable journey.",
    icon: Bed,
  },
  {
    title: "School Canteen Services",
    description:
      "Managing and operating hygienic and nutritious food services in educational institutions.",
    icon: School2,
  },
  {
    title: "Food License & Compliance",
    description:
      "Maintaining all necessary food licenses and following strict quality standards across all our operations.",
    icon: Award,
  },
];

const Services = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8"> {/* px-2 for mobile, px-4 for sm+ */}
        <div
          className={`text-center mb-10 sm:mb-16 ${inView ? "fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-royalblue mb-4">
            Our Services
          </h2>
          <div className="h-1 w-16 sm:w-20 bg-gold mx-auto mb-4 sm:mb-6"></div>
          <p className="max-w-full sm:max-w-2xl mx-auto text-base sm:text-lg text-royalblue/80 px-1">
            Providing quality catering services across railway stations and
            educational institutions with a focus on hygiene, taste, and customer
            satisfaction.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceItems.map((service, index) => (
            <Card
              key={index}
              className={`border-2 border-gold hover:border-royalblue transition-all hover-lift ${
                inView ? `fade-in-up animate-stagger-${index + 1}` : "opacity-0"
              } bg-gold-light/30 w-full max-w-full`}
            >
              <CardHeader className="pb-2">
                <div className="bg-gold p-2 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <service.icon className="w-6 h-6 text-royalblue" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold text-royalblue text-center">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base text-royalblue/80 text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
