import { motion } from "motion/react";
import { Briefcase, MapPin, Calendar, TrendingUp } from "lucide-react";
import type { Experience } from "../../types";
import { TechBadge } from "../shared/TechBadge";

interface TimelineCardProps {
  experience: Experience;
  index: number;
  isLeft?: boolean;
}

export function TimelineCard({
  experience,
  index,
  isLeft = false,
}: TimelineCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      className="relative"
    >
      <div className="group p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
              {experience.position}
            </h3>
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Briefcase className="h-4 w-4" />
              <span className="font-semibold text-foreground">
                {experience.company}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>
                  {experience.startDate} - {experience.endDate}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>

          {/* Current badge */}
          {experience.endDate === "Present" && (
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 text-sm font-medium self-start"
            >
              Current
            </motion.div>
          )}
        </div>

        {/* Description */}
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {experience.title}
        </p>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {experience.description}
        </p>

        {/* Achievements */}
        <div className="space-y-3 mb-6">
          {experience.achievements.map((achievement, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + i * 0.1 }}
              className="flex items-start gap-3"
            >
              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-blue-400" />
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed">
                {achievement}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Impact Metrics */}
        {experience.impact && experience.impact.length > 0 && (
          <div className="flex flex-wrap gap-4 mb-6 p-4 rounded-lg bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-blue-500/10">
            {experience.impact.map((metric, i) => (
              <div key={i} className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-400" />
                <span className="text-sm">
                  <span className="font-bold text-green-400">
                    {metric.value}
                  </span>
                  <span className="text-muted-foreground ml-1">
                    {metric.metric}
                  </span>
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <TechBadge key={tech} name={tech} variant="gradient" />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
