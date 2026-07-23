import React from 'react';
import { motion, useInView } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  duration?: number;
}

export function Reveal({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = "",
  duration = 0.6
}: RevealProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const getDirectionOffset = () => {
    switch (direction) {
      case 'up': return { y: 40, x: 0 };
      case 'down': return { y: -40, x: 0 };
      case 'left': return { x: 40, y: 0 };
      case 'right': return { x: -40, y: 0 };
      case 'none': return { x: 0, y: 0 };
      default: return { y: 40, x: 0 };
    }
  };

  const initial = {
    opacity: 0,
    ...getDirectionOffset()
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxHero({ 
  imageUrl, 
  children,
  className = "",
  focalPosition = "center"
}: { 
  imageUrl: string; 
  children: React.ReactNode;
  className?: string;
  focalPosition?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div 
        className="absolute inset-0 z-0 scale-110"
      >
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat blur-[3px]"
          style={{ backgroundImage: `url(${imageUrl})`, backgroundPosition: focalPosition }}
        />
        <div className="absolute inset-0 bg-black/55 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/75" />
      </div>
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
