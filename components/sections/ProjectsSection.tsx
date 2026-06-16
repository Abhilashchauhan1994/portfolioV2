"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { projects, getAllTechnologies } from "../data/personalprojects";
import type { ProjectCategory } from "../../types";
import { SectionTitle } from "../shared/SectionTitle";
import { ProjectCard } from "../cards/ProjectCard";
import { Button } from "../ui/button";

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<
    ProjectCategory | "All"
  >("All");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const categories: (ProjectCategory | "All")[] = [
    "All",
    "Kubernetes",
    "CI/CD",
    "Infrastructure",
    "Automation",
    "Monitoring",
    "Platform Engineering",
    "Security",
  ];

  const topTechnologies = getAllTechnologies().slice(0, 10);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesTech =
      !selectedTech || project.technologies.includes(selectedTech);
    return matchesCategory && matchesTech;
  });

  return (
    <section id="projects" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Featured Projects"
          subtitle="Open-source tools and infrastructure solutions used in production"
          centered
        />

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setSelectedCategory(category);
                setSelectedTech(null);
              }}
              className={
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500"
                  : "border-border hover:bg-accent"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Technology Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {topTechnologies.map((tech) => (
            <motion.button
              key={tech}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                setSelectedTech(selectedTech === tech ? null : tech)
              }
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                selectedTech === tech
                  ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white"
                  : "bg-secondary hover:bg-accent text-foreground"
              }`}
            >
              {tech}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div key={project.id} layout>
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-16"
            >
              <p className="text-muted-foreground text-lg">
                No projects found matching your filters
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedTech(null);
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20"
        >
          <h3 className="text-2xl font-bold mb-3">More on GitHub</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Check out my GitHub profile for more open-source contributions,
            infrastructure templates, and DevOps tools.
          </p>
          <Button
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500"
            asChild
          >
            <a
              href="https://github.com/alexmorgan-devops"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
