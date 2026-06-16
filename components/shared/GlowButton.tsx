import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';

interface GlowButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  href?: string;
}

export function GlowButton({
  children,
  onClick,
  variant = 'primary',
  className = '',
  href,
}: GlowButtonProps) {
  const Component = motion.div;

  const button = (
    <Button
      onClick={onClick}
      className={`relative overflow-hidden ${
        variant === 'primary'
          ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500'
          : 'bg-transparent border-2 border-blue-500 hover:bg-blue-500/10'
      } ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0"
          whileHover={{ opacity: 0.3 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </Button>
  );

  return (
    <Component
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      {href ? <a href={href}>{button}</a> : button}
    </Component>
  );
}
