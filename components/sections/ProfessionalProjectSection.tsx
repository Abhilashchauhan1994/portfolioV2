"use client";

import { motion } from "motion/react";
import { professionalProjects } from "../data/professionalprojects";
import { SectionTitle } from "../shared/SectionTitle";
import { ProfessionalProjectCard } from "../cards/ProfessionalProjectCard";

export function ProfessionalProjectsSection() {
  return (
    <section
      id="professional-projects"
      className="py-24 md:py-32 border-t border-border"
    >
      <div className="container mx-auto px-4">
        <SectionTitle title="Professional Projects" centered />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {professionalProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              className={project.id === "proj-2" ? "md:col-span-2" : ""}
            >
              <ProfessionalProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
