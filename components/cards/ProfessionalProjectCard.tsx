import { motion } from "motion/react";
import { Briefcase, TrendingUp, Calendar, ArrowUpRight } from "lucide-react";
import type { ProfessionalProject } from "../../types";

interface ProfessionalProjectCardProps {
  project: ProfessionalProject;
  index: number;
}

export function ProfessionalProjectCard({
  project,
  index,
}: ProfessionalProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -5 }}
      className="group rounded-xl border border-border bg-card p-6 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
          <Briefcase className="h-7 w-7 text-blue-400" />
        </div>
        {project.id === "proj-2" && (
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/10 border border-yellow-500/20 text-yelloow-400">
            1000+ Instances Supported
          </span>
        )}
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 border border-blue-500/20 text-blue-400">
          {project.category}
        </span>
      </div>

      <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
        {project.title}
      </h3>

      <p className="text-muted-foreground text-sm leading-relaxed mb-5">
        {project.description}
      </p>

      <div className="grid grid-cols-2 gap-3 mb-5">
        {project.impact.map((item, idx) => (
          <div
            key={idx}
            className="rounded-lg border border-border bg-muted/30 p-3"
          >
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="h-3 w-3 text-green-400" />
              <span className="text-xs text-muted-foreground">
                {item.metric}
              </span>
            </div>

            <p className="font-bold text-lg">{item.value}</p>
          </div>
        ))}
      </div>

      <ul className="space-y-2 mb-5">
        {project.highlights.slice(0, 4).map((highlight, idx) => (
          <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 rounded-md text-xs bg-muted border border-border"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="h-3 w-3" />
          {project.duration}
        </div>

        {project.projectUrl && (
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300"
          >
            View Details
            <ArrowUpRight className="h-3 w-3" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
