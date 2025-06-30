import React from "react";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { projectsData } from "../constants/data/Projectsdata";

const projectCategories = ["All"];

const Projects = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-gold-light/30" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${inView ? "fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-royalblue mb-4">
            Our Projects & Holdings
          </h2>
          <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-royalblue/80">
            We are currently serving in three major railway divisions and multiple stations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <Card key={project.id} className={`border-2 border-gold hover:border-royalblue transition-all hover-lift ${inView ? `fade-in-up animate-stagger-${idx + 1}` : "opacity-0"} bg-white`}>
              <CardHeader>
                <div className="flex flex-col items-center mb-2">
                  <img src={project.image} alt="Mishra's Enterprises Logo" className="h-16 w-16 mb-2 rounded bg-white p-1 border border-gold" />
                  <CardTitle className="text-lg text-center text-royalblue">{project.title}</CardTitle>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-royalblue/70">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span>{project.technologies.join(", ")}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-2 text-center text-royalblue/80">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
