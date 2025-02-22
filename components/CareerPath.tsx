"use client";
import React, { useEffect, useRef, useState } from "react";
import { personalCareerPath } from "@/config/common";
const CareerPath = () => {
  const lineRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (!lineRef.current) return;

      const lineElement = lineRef.current;
      const rect = lineElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const lineTop = rect.top;
      const lineHeight = rect.height;

      let progress = 0;
      if (lineTop <= windowHeight / 2 && lineTop + lineHeight >= 0) {
        progress = ((windowHeight / 2 - lineTop) / lineHeight) * 100;
        progress = Math.min(Math.max(progress, 0), 100);
      }

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative px-4 py-16 max-w-7xl mx-auto">
      {/* Timeline line with scroll animation */}
      <div
        ref={lineRef}
        className="absolute md:left-1/2 transform-none md:-translate-x-1/2 h-full border-l border-dashed border-white/20"
        style={{ width: "1px", zIndex: 0 }}
      >
        <div
          className="absolute left-0 w-[1px] bg-[#947efb] transition-all duration-100"
          style={{
            height: `${scrollProgress}%`,
            willChange: "width, height",
            marginLeft: "-1px",
          }}
        />
      </div>

      {/* Timeline content */}
      {personalCareerPath.map((step, index) => (
        <div
          key={index}
          className="relative grid grid-cols-[1fr] md:grid-cols-[1fr,auto,1fr] gap-8 mb-16"
        >
          {/* Dot container - positioned relative to the line */}
          <div className="absolute left-[-8px] md:left-1/2 md:-translate-x-1/2 top-5">
            <div className="w-4 h-4 bg-purple-600 rounded-full border-4 border-gray-900" />
          </div>

          {/* Content */}
          <div
            className={`relative pl-12 pt-5 md:pl-0 ${index % 2 === 0 ? "md:col-start-1 md:text-right" : "md:col-start-3"}`}
          >
            <div
              className={` transform transition-all duration-300 ${
                index % 2 === 0 ? "md:mr-8" : "md:ml-8"
              }`}
            >
              <div className="mb-4">
                <div className="text-purple-500 text-sm font-semibold mb-2">
                  {step.subtitle}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed whitespace-pre-line">
                {step.subtitle}
              </p>
            </div>
          </div>

          {/* Empty column for alignment on medium screens */}
          <div
            className={`hidden md:block ${index % 2 === 0 ? "md:col-start-3" : "md:col-start-1"}`}
          />
        </div>
      ))}
    </div>
  );
};

export default CareerPath;
