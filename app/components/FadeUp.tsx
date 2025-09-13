// Components remake from https://www.eldoraui.site/docs/components/fadeup
"use client";
import { motion, Variants } from "framer-motion";
import clsx from "clsx";
import React, { ElementType, ReactNode } from "react";

interface FadeUpProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

export const FadeUp = ({ as: Component = "div", children, className }: FadeUpProps) => {
  const MotionComponent = motion.create(Component);

  const variants: Variants = {
    hidden: { opacity: 0, y: 5 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  return (
    <MotionComponent
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={variants}
      className={clsx(className)}
    >
      {children}
    </MotionComponent>
  );
};
