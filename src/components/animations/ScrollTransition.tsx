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
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "800px" });
  
  // Disable scroll transitions on mobile to prevent blank loading buffers
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    // Passive listener for performance
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

    // On mobile, force visible state immediately
    const animateState = isMobile ? "visible" : (isInView ? "visible" : "hidden");
    const initialState = isMobile ? "visible" : "hidden";

    return (
      <motion.div
        ref={ref}
        className={className}
        initial={initialState}
        animate={animateState}
        variants={containerVariants}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
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

  // On mobile, skip the initial hidden state and set variants to final animate state
  const initialProps = isMobile ? getAnimate() : getInitial();
  const animateProps = isMobile ? getAnimate() : (isInView ? getAnimate() : getInitial());

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initialProps}
      animate={animateProps}
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
