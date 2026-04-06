import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollTransitionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  direction?: 'up' | 'left' | 'right' | 'scale';
  stagger?: boolean;
}

export function ScrollTransition({
  children,
  className = "",
  delay = 0,
  direction = 'up',
  yOffset = 40,
  stagger = false
}: ScrollTransitionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const getInitial = () => {
    switch (direction) {
      case 'left': return { opacity: 0, x: -yOffset };
      case 'right': return { opacity: 0, x: yOffset };
      case 'scale': return { opacity: 0, scale: 0.95 };
      case 'up':
      default:
        return { opacity: 0, y: yOffset };
    }
  };

  const getAnimate = () => {
    switch (direction) {
      case 'left': case 'right': return { opacity: 1, x: 0 };
      case 'scale': return { opacity: 1, scale: 1 };
      case 'up':
      default: return { opacity: 1, y: 0 };
    }
  };

  if (stagger) {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: delay,
        }
      }
    };
    
    const childVariants = {
      hidden: getInitial(),
      visible: {
        ...getAnimate(),
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
      }
    };

    // Note: To use stagger, children must be motion components relying on variants.
    // This is useful for lists.
    return (
      <motion.div
        ref={ref}
        className={className}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            // We just wrap them in motion.div so stagger applies seamlessly
            return (
              <motion.div variants={childVariants}>
                {child}
              </motion.div>
            )
          }
          return child;
        })}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitial()}
      animate={isInView ? getAnimate() : getInitial()}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1], // Custom elite ease like Apple/Linear
      }}
    >
      {children}
    </motion.div>
  );
}

export default ScrollTransition;
