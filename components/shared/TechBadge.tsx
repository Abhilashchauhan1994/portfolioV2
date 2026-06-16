import { motion } from 'motion/react';

interface TechBadgeProps {
  name: string;
  variant?: 'default' | 'outline' | 'gradient';
}

export function TechBadge({ name, variant = 'default' }: TechBadgeProps) {
  const variants = {
    default: 'bg-secondary text-secondary-foreground',
    outline: 'border border-border text-foreground hover:bg-secondary',
    gradient: 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-foreground border border-blue-500/20',
  };

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors ${variants[variant]}`}
    >
      {name}
    </motion.span>
  );
}
