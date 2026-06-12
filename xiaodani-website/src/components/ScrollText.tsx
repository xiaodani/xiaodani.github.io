import React, { useEffect, useRef, useState } from "react";
import Typewriter from "./TypeWriter";

const ScrollTextSection = () => {
  const chapters = [
    {
      title: "AI in Education",
      text: "MOE schools are actively studying how AI tools can support learning while ensuring critical thinking is preserved. MOE schools are actively studying how AI tools can support learning while ensuring critical thinking is preserved. MOE schools are actively studying how AI tools can support learning while ensuring critical thinking is preserved."
    },
    {
      title: "Human + AI",
      text: "AI is seen as augmentation of intelligence, not replacement of human thinking. AI is seen as augmentation of intelligence, not replacement of human thinking. AI is seen as augmentation of intelligence, not replacement of human thinking. AI is seen as augmentation of intelligence, not replacement of human thinking."
    },
    {
      title: "Future Classroom",
      text: "Education will integrate digital tools while keeping human skills at the core. Education will integrate digital tools while keeping human skills at the core. Education will integrate digital tools while keeping human skills at the core. Education will integrate digital tools while keeping human skills at the core."
    }
  ];

  const [active, setActive] = useState(0);
  const refs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActive(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    refs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="my-40">

      {/* Sticky reading panel */}
      <div className="sticky top-10 bg-white p-6 rounded-lg shadow-md mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          {chapters[active].title}
        </h2>

        <Typewriter
          text={chapters[active].text}
          active={true}
        />
      </div>

      {/* Scroll triggers */}
      <div className="space-y-[60vh]">
        {chapters.map((_, i) => (
          <div
            key={i}
            data-index={i}
            ref={(el) => (refs.current[i] = el!)}
            className="h-[60vh]"
          />
        ))}
      </div>

    </div>
  );
};

export default ScrollTextSection;