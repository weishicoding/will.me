"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-50 h-1 origin-[0%] bg-purple-500"
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
}
