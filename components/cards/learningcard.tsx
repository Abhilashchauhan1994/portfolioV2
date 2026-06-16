"use client";

import { motion } from "motion/react";
import { BookOpen, GraduationCap, Brain, CheckCircle2 } from "lucide-react";
import type { Learning } from "../../types";

interface LearningCardProps {
  learning: Learning;
  index: number;
}

export function LearningCard({ learning, index }: LearningCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1,
        duration: 0.4,
      }}
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      className="group rounded-xl border border-border bg-card p-6 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
          <GraduationCap className="h-7 w-7 text-blue-400" />
        </div>

        <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 border border-blue-500/20 text-blue-400">
          {learning.type}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
        {learning.platform}
      </h3>

      {/* Course/Path */}
      <p className="text-sm text-muted-foreground mb-4">{learning.title}</p>

      {/* Description */}
      <p className="text-sm leading-relaxed text-muted-foreground mb-5">
        {learning.description}
      </p>

      {/* Topics */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="h-4 w-4 text-cyan-400" />
          <span className="text-sm font-medium">Topics Covered</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {learning.topics.map((topic) => (
            <span
              key={topic}
              className="px-2 py-1 rounded-md text-xs bg-secondary text-secondary-foreground"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Status */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-green-400" />
          <span className="text-sm text-green-400 font-medium">
            {learning.status}
          </span>
        </div>

        <div className="flex items-center gap-2 text-muted-foreground">
          <Brain className="h-4 w-4" />
          <span className="text-sm">Continuous Learning</span>
        </div>
      </div>
    </motion.div>
  );
}
