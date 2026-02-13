"use client"
import React, { useEffect, useRef, useState } from "react";

interface SectionItem {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
}

interface UsageProps {
  title: string;
  sections: SectionItem[];
}

const Usage: React.FC<UsageProps> = ({ title, sections }) => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1) {
              setActiveSection(index);
            }
          }
        });
      },
      {
        root: null,
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [sections]);

  return (
    <div
      id="usage"
      className="mx-auto max-w-7xl pt-32 select-none pointer-events-none border-x border-zinc-200"
    >
      <h1 className="text-4xl font-medium max-w-md ml-8 lg:-mb-12">
        {title}
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-3/5 md:sticky md:top-0 md:h-screen flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`absolute w-full h-full flex items-center justify-center transition-opacity duration-500 ${
                  activeSection === index ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <img
                  alt={section.imageAlt || section.title}
                  className="max-w-full max-h-full object-contain rounded-r-[18px] border-r border-y border-zinc-200/70"
                  src={section.imageSrc}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 md:ml-auto">
          {sections.map((section, index) => (
            <div
              key={index}
              ref={(el) => { sectionRefs.current[index] = el; }}
              className="lg:min-h-screen h-[45rem] flex items-center overflow-hidden"
              style={{ willChange: "transform" }}
            >
              <div className="max-w-xl">
                <div className="p-8 lg:pl-20">
                  <h2 className="text-5xl font-medium mb-4">{section.title}</h2>
                  <p className="text-xl text-zinc-600 max-w-94">
                    {section.description}
                  </p>
                </div>
                <div className="h-80 md:hidden mt-6 flex items-center justify-center">
                  <img
                    alt={`${section.imageAlt || section.title} (mobile view)`}
                    className="max-h-full object-contain"
                    src={section.imageSrc}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Usage;