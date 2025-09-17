"use client";
import { motion, Variants } from "framer-motion";
import clsx from "clsx";
import React, { ElementType, ReactNode } from "react";
import { usePathname } from "next/navigation";

interface FadeUpProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

export const FadeUp = ({ as: Component = "div", children, className }: FadeUpProps) => {
  const MotionComponent = motion.create(Component);
  const pathname = usePathname();

  const variants: Variants = {
    hidden: { opacity: 0, y: 5 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  return (
    <MotionComponent
      key={pathname + className}
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={variants}
      className={clsx(className)}
    >
      {children}
    </MotionComponent>
  );
};
