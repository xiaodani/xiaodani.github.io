import React, { useEffect, useRef, useState } from "react";
import Typewriter from "../components/TypeWriter";
import ScrollTextSection from "components/ScrollText";

const ScrollImagesSection = () => {
  const images = [
    "https://www.schoolbag.edu.sg/api/media/0babd86d-3fa9-4c8c-9222-96574893e3b5/ia26_sect2-learnabout.png",
    "https://www.schoolbag.edu.sg/api/media/025d6ea9-40a6-45b4-9648-5d4837bd7969/ia26_sect2-learnuse.png",
    "https://www.schoolbag.edu.sg/api/media/936e55a9-3558-48cf-acdd-d893be870a9e/ia26_sect2-learnwith.png"
  ];

  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();

      const progress = Math.min(Math.max(-rect.top / (rect.height - window.innerHeight), 0), 1);

      const newIndex = Math.floor(progress * images.length);

      setIndex(Math.min(newIndex, images.length - 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} style={{ height: "300vh" }}>
      
      {/* sticky image */}
      <div className="sticky top-0 h-screen flex items-center justify-center bg-black">
        <div className="relative w-[80%] h-[60%]">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              className={`absolute w-full h-full object-cover rounded-lg transition-opacity duration-500
                ${i === index ? "opacity-100" : "opacity-0"}
              `}
            />
          ))}
        </div>
      </div>

    </div>
  );
};


export default function MoeScrollTest() {
  const [active, setActive] = useState(0);
  const refs = useRef<HTMLDivElement[]>([]);

  const sections = [
    {
      title: "School Updates on AI",
      text: "MOE schools and teachers have kept an eye on AI developments even before large language models (LLMs) like ChatGPT gained mainstream popularity. When it comes to using AI in education, it’s not about racing to a yet-to-be-determined finish line. It’s about evaluating AI tools’ capabilities, as well as potential pitfalls, so our students acquire the essential skills to succeed in an AI-transformed world.",
      img: "https://www.schoolbag.edu.sg/api/media/1c5999cb-f92c-490d-a0dd-b0b6def77f4c/ia26_intro-chat_loop.gif"
    },
    {
      title: "Worries on AI’s Effects on Human Intelligence",
      text: "Worries about AI’s negative effects on human intelligence are not unfounded. But in an AI-transformed world, avoidance is not the solution. We need to see Artificial Intelligence as Intelligence Augmentation — AI as IA — to increase human intelligence. Schools, working together with parents, play a crucial role in imparting the human skills and competencies required to do this.",
      img: "https://www.schoolbag.edu.sg/api/media/df8f7dba-8d88-473f-b345-0cf464290083/ia26_intro-illus1.png"
    },
  ];

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
      { threshold: 0.6,
         }
    );

    refs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-12 text-center">
        MOE Information
      </h1>

      {sections.map((sec, i) => (
        <div
          key={i}
          data-index={i}
          ref={(el) => (refs.current[i] = el!)}
          className="mb-40"
        >
          {/* Title */}
          <h2 className="text-2xl font-semibold">{sec.title}</h2>

          {/* Image with fade-in */}
          <div
            className={`mt-4 transition-all duration-700 ease-out
              ${
                active === i
                  ? "opacity-100 translate-y-0"
                  : "opacity-30 translate-y-6"
              }
            `}
          >
            <img
              src={sec.img}
              alt=""
              className="rounded-lg shadow-md w-full"
            />
          </div>

          {/* Typewriter text */}
          <Typewriter text={sec.text} active={active === i} />
        </div>
      ))}

      {/* 🔥 INSERT SCROLL IMAGE EXPERIENCE HERE */}
      <div className="mt-40">
        <ScrollImagesSection />
      </div>
      <div className="mt-40">
        <ScrollTextSection  />
      </div>

    </div>
  );
}