import React, { useState } from "react";

const topics = [
  {
    title: "Lower primary",
    tabs: [
      {
        label: "How Students Learn",
        text: [
          "Basic motor skills and sensory processing areas like vision and hearing are rapidly developing. ",
          "Language processing and the prefrontal cortex, where decision-making and impulse control happens, is still maturing.",
          "The ability to process different senses, like visuals, sounds, and smells, are developing."
        ],
        img: "https://www.schoolbag.edu.sg/api/media/6b7792e9-61fe-4c57-b40f-f51a9a7c3b7e/ia26_sect3-lowpri-a.png",
      },
      {
        label: "How It's Taught",
        text: [
          "Concrete, tactile, and physical learning experiences are prioritised. Tech is used very lightly, or not at all. Students learn what AI is, without using AI.",
          "Plenty of face-to-face interactions to build relationships and learn social skills.",
          "A physical learning environment is crucial for students to learn through touch, sound, and sight (maybe taste too, if it’s safe!)."
        ],
        img: "https://www.schoolbag.edu.sg/api/media/2c1d88b2-f588-477d-801e-080a473a2644/ia26_sect3-lowpri-b.png",
      }
    ]
  },
  {
    title: "Upper primary",
    tabs: [
      {
        label: "How Students Learn",
        text: [
          "The hippocampus, which controls long-term memory formation  in the brain, develops more.",
          "Storing memories and being able to recall them helps in decision-making. Students at this age are growing in their ability to organise and plan",
        ],
        img: "https://www.schoolbag.edu.sg/api/media/f06d0b98-09b8-46b3-9230-c82c6562bbf5/ia26_sect3-upppri-a.png",
      },
      {
        label: "How It's Taught",
        text: [
          "AI and other tech tools can be introduced gradually, under teacher supervision. Use is structured and limited, as part of learning activities, for short durations.",
          "Students primarily use AI tools in SLS, which are designed with safety guardrails.",
          "Teachers teach about the strengths and weaknesses of AI tools and how to use them."
        ],
        img: "https://www.schoolbag.edu.sg/api/media/79a6fe37-3526-4450-b6f0-1a6f8df1588c/ia26_sect3-upppri-b.png",
      }
    ]
  },
  {
    title: "Secondary",
    img: "https://via.placeholder.com/600x400/ffcccc",
    tabs: [
      {
        label: "How Students Learn",
        text: [
          "Early adolescence is when students grow in independence and build their sense of self. There continues to be a period of learning and brain development especially in higher-order skills.",
          "There is stronger capacity for abstract thinking and problem-solving.",
          "The prefrontal cortex undergoes significant growth; impulse control and planning improves, but are still immature."
        ],
        img: "https://www.schoolbag.edu.sg/api/media/3ad54e7e-f28c-4a21-aac9-e4976417ecd3/ia26_sect3-sec-a.png",
      },
      {
        label: "How It's Taught",
        text: [
          "The Personalised Digital Learning Programme  is introduced at Sec 1, together with Personalised Learning Devices (PLDs).",
          "These PLDs are installed with a Device Management Application to protect students and restrict inappropriate use",
          "Teachers design learning activities that let students explore independently, while still being guided. "
        ],
        img: "https://www.schoolbag.edu.sg/api/media/bfd3e2fb-ba32-4b07-8011-4d4a08b2b818/ia26_sect3-sec-b.png",
      }
    ]
  },
  {
    title: "Pre-University",
    img: "https://via.placeholder.com/600x400/fff2cc",
    tabs: [
      {
        label: "How Students Learn",
        text: [
          "Brain maturation stabilises, especially in the frontal lobes that are responsible for reasoning and decision-making.",
          "Students are better at sustained attention, abstract reasoning, and long-term planning.",
          "The prefrontal cortex, the last part of the brain to fully develop, usually matures around age 25."
        ],
        img: "https://www.schoolbag.edu.sg/api/media/d7dbff64-8ea0-4b5c-86bf-7080b4c9b701/ia26_sect3-preu-a.png",
      },
      {
        label: "How It's Taught",
        text: [
          "After building foundations of how to use and learn with AI from the primary to secondary levels, students use AI more independently at the Pre-U level. They augment their problem-solving and critical thinking skills, as they prepare for higher education and their future workplace."
        ],
        img: "https://www.schoolbag.edu.sg/api/media/752b4a3b-e9ea-47e7-ac15-c843429db8ac/ia26_sect3-preu-b.png",
      }
    ]
  },
];

export default function MoeImagePanel() {
  const [active, setActive] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  const currentTopic = topics[active];
  const currentTab = currentTopic.tabs[activeTab];

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">

      <h1 className="text-3xl font-bold text-center mb-10">
        AI in Education
      </h1>

      <div className="flex flex-col md:flex-row gap-8">

        {/* LEFT NAV */}
        <div className="md:w-1/5 space-y-2">
          {topics.map((t, i) => (
            <button
              key={i}
              onClick={() => {
                setActive(i);
                setActiveTab(0);
              }}
              className={`w-full text-left px-4 py-2 rounded border transition
                ${active === i ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"}
              `}
            >
              {t.title}
            </button>
          ))}
        </div>

        {/* RIGHT PANEL */}
        <div className="md:w-3/4 flex flex-col md:flex-row gap-6 items-start">

          {/* IMAGE (NOW FROM TAB) */}
          <div className="md:w-1/2">
            <img
              src={currentTab.img}
              className="rounded-lg shadow-md w-full transition-all duration-500"
              alt=""
            />
          </div>

          {/* CONTENT */}
          <div className="md:w-1/2">

            <h2 className="text-2xl font-semibold mb-4">
              {currentTopic.title}
            </h2>

            {/* TABS */}
            <div className="flex gap-2 mb-2">
              {currentTopic.tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`px-3 py-1 text-sm border rounded-full transition
                    ${activeTab === i
                      ? "bg-gray-200 font-semibold"
                      : "hover:bg-gray-100"
                    }
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* TEXT */}
            <div className="text-gray-600 leading-normal">
              {currentTab.text.map((para, i) => (
                <div
                  key={i}
                  className="py-3 border-b border-gray-200 last:border-b-0"
                >
                  {para}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}