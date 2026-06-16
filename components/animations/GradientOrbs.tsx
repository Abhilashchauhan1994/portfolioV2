import { motion } from 'motion/react';

export function GradientOrbs() {
  const orbs = [
    {
      size: 'h-[500px] w-[500px]',
      position: 'top-0 -left-48',
      gradient: 'from-blue-500/30 to-purple-500/30',
      delay: 0,
    },
    {
      size: 'h-[400px] w-[400px]',
      position: 'top-1/3 -right-32',
      gradient: 'from-purple-500/20 to-pink-500/20',
      delay: 2,
    },
    {
      size: 'h-[350px] w-[350px]',
      position: 'bottom-0 left-1/4',
      gradient: 'from-cyan-500/25 to-blue-500/25',
      delay: 4,
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute ${orb.size} ${orb.position} rounded-full bg-gradient-to-br ${orb.gradient} blur-3xl`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            delay: orb.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
