import React from "react";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Gallery = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // This will be populated with actual images later
  const galleryItems = [
    {
      title: "Kiul Station Canteen",
      category: "Danapur Division",
      image: "assets/kiulMps.jpg", // Replace with actual image
    },
    {
      title: "Chopan Station Services",
      category: "Dhanbad Division",
      image: "assets/chopan.jpg", // Replace with actual image
    },
    {
      title: "Jamalpur Station",
      category: "Maldah Division",
      image: "assets/chopan2.jpg", // Replace with actual image
    },
    {
      title: "Bhagalpur Services",
      category: "Maldah Division",
      image: "assets/chopan3.jpg", // Replace with actual image
    },
    // Add more gallery items as needed
  ];

  return (
    <section id="gallery" className="py-20 bg-gold-light/30" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 ${inView ? "fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-royalblue mb-4">
            Our Gallery
          </h2>
          <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-royalblue/80">
            Explore our presence across various stations and witness our commitment to quality service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <Card
              key={index}
              className={`overflow-hidden hover-lift bg-white border-2 border-gold hover:border-royalblue ${
                inView ? `fade-in-up animate-stagger-${index + 1}` : "opacity-0"
              }`}
            >
              <CardContent className="p-0 relative group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 border-b border-gold"
                />
                <div className="absolute inset-0 bg-royalblue/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-gold">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.category}</p>
                  <Button className="mt-4 bg-gold text-royalblue hover:bg-royalblue hover:text-gold">
                    <Plus className="w-4 h-4 mr-2" />
                    View More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
