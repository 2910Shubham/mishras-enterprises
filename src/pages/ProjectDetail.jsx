import React from "react";
import { useParams } from "react-router-dom";
import { ExternalLink, Github } from "lucide-react";
import { projectsData } from "../constants/data/Projectsdata";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="text-center mt-20 text-xl text-red-600 font-semibold">
        Project not found.
      </div>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">{project.title}</h2>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-96 object-cover rounded mb-6"
        />
        <p className="text-lg text-muted-foreground mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-block bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.link}
            className="text-blue-600 hover:text-blue-800 flex items-center"
          >
            <ExternalLink size={16} className="mr-1" />
            View Project
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 flex items-center"
          >
            <Github size={16} className="mr-1" />
            Source Code
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
