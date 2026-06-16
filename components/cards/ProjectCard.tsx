import { motion } from "motion/react";
import { ExternalLink, Award } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import type { PersonalProject } from "../../types";
import { TechBadge } from "../shared/TechBadge";
import { Button } from "../ui/button";

interface ProjectCardProps {
  project: PersonalProject;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group h-full flex flex-col p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/10"
    >
      {/* Category Badge */}
      <div className="flex items-center justify-between mb-4">
        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-xs font-semibold text-blue-400">
          {project.category}
        </span>
        {project.metrics && project.metrics.length > 0 && (
          <Award className="h-5 w-5 text-yellow-500" />
        )}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
        {project.name}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
        {project.description}
      </p>

      {/* Highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <div className="space-y-2 mb-6">
          {project.highlights.slice(0, 3).map((highlight, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              </div>
              <p className="text-sm text-foreground/80">{highlight}</p>
            </div>
          ))}
        </div>
      )}

      {/* Metrics */}
      {project.metrics && project.metrics.length > 0 && (
        <div className="grid grid-cols-3 gap-3 p-4 rounded-lg bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-blue-500/10 mb-6">
          {project.metrics.slice(0, 3).map((metric, i) => (
            <div key={i} className="text-center">
              <div className="text-lg font-bold text-blue-400">
                {metric.value}
              </div>
              <div className="text-xs text-muted-foreground">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.slice(0, 6).map((tech) => (
          <TechBadge key={tech} name={tech} variant="outline" />
        ))}
        {project.technologies.length > 6 && (
          <span className="px-3 py-1 rounded-full text-xs text-muted-foreground">
            +{project.technologies.length - 6} more
          </span>
        )}
      </div>

      {/* Links */}
      <div className="flex gap-3 mt-auto">
        {project.githubUrl && (
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-blue-500/50 hover:bg-blue-500/10"
            asChild
          >
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
        )}
        {project.liveUrl && (
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-purple-500/50 hover:bg-purple-500/10"
            asChild
          >
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live
            </a>
          </Button>
        )}
      </div>
    </motion.div>
  );
}
