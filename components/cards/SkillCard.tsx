import { motion } from 'motion/react';
import type { Skill } from '../../types';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative p-6 rounded-xl bg-card border border-border hover:border-blue-500/50 transition-all cursor-pointer overflow-hidden"
    >
      {/* Gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-foreground">{skill.name}</h3>
          {skill.proficiency && (
            <span className="text-xs font-mono text-muted-foreground">
              {skill.proficiency}%
            </span>
          )}
        </div>

        {/* Proficiency Bar */}
        {skill.proficiency && (
          <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.proficiency}%` }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 + 0.2, duration: 0.8, ease: 'easeOut' }}
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            />
          </div>
        )}
      </div>

      {/* Shine effect on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
        initial={false}
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
      >
        <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
      </motion.div>
    </motion.div>
  );
}
