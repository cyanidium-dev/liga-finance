"use client";

import { motion, Variants } from "framer-motion";
import { ElementType, PropsWithChildren } from "react";
import { fadeInAnimation } from "@/helpers/animation";

interface AnimatedWrapperProps extends PropsWithChildren {
  as?: ElementType; // Будь-який HTML-елемент
  className?: string;
  animation?: Variants; // Кастомна анімація
}

export default function AnimatedWrapper({
  as: Component = motion.div, // За замовчуванням анімований div
  className = "",
  animation = fadeInAnimation,
  children,
}: AnimatedWrapperProps) {
  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={animation}
      className={className}
    >
      {children}
    </Component>
  );
}
