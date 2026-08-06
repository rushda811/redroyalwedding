import type { ReactNode } from "react";
import { motion } from "motion/react";
import { useReveal } from "./use-motion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: RevealProps) {

  const { ref, visible } = useReveal();

  return (
    <motion.div
      ref={ref}
      className={className}

      initial={{
        opacity: 0,
        y: 30,
        scale: 0.98,
        filter: "blur(6px)",
      }}

      animate={
        visible
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }
          : undefined
      }

      transition={{
        duration: 0.75,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}

      style={{
        willChange: "transform, opacity",
      }}
    >
      {children}
    </motion.div>
  );
}