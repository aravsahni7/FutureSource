import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ text, className = "", delay = 0 }: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "200px" });

  // Disable scroll-triggered animations on mobile to prevent blank loading buffers
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(4px)",
    },
  };

  // Using inline-flex to ensure words stay on lines correctly and spacing is maintained
  return (
    <motion.span
      ref={ref}
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial={isMobile ? "visible" : "hidden"}
      animate={isMobile ? "visible" : (isInView ? "visible" : "hidden")}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-flex mr-[0.25em] overflow-hidden leading-tight py-1">
          <motion.span variants={child} className="inline-block pb-1">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export default TextReveal;
