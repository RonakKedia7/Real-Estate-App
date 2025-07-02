import { useState, useEffect, useRef } from "react";
import { projectsData } from "../assets/assets";
import { FaPause, FaPlay } from "react-icons/fa";
import { motion } from "motion/react";

const Projects = () => {
  const [cardsToShow, setCardsToShow] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  // Update cards to show based on screen width
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1280) {
        setCardsToShow(4);
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  // Infinite scroll with pause/resume
  useEffect(() => {
    const scrollSpeed = 1;
    let animationFrame;

    const scroll = () => {
      if (!isPaused) {
        setTranslateX((prev) => {
          const container = containerRef.current;
          if (!container) return prev;

          const card = container.querySelector(".project-card");
          if (!card) return prev;

          const cardWidth = card.offsetWidth + 32; // gap-8 = 32px
          const totalScrollWidth = cardWidth * projectsData.length;

          const newTranslateX = prev + scrollSpeed;
          return newTranslateX >= totalScrollWidth ? 0 : newTranslateX;
        });
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [cardsToShow, isPaused]); // 🔥 include isPaused here!

  const duplicatedProjects = [...projectsData, ...projectsData];

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Crafting Spaces, Building Legacies — Explore Our Portfolio
      </p>

      <div className="text-center mb-6">
        <button
          onClick={() => setIsPaused(!isPaused)}
          title={isPaused ? "Resume Scrolling" : "Pause Scrolling"}
          className="bg-neutral-800 text-white hover:bg-blue-600 hover:text-white px-4 py-3 rounded-full shadow-md transition duration-200 ease-in-out inline-flex items-center justify-center"
        >
          {isPaused ? <FaPlay size={20} /> : <FaPause size={20} />}
        </button>
      </div>

      <div className="overflow-hidden">
        <div
          ref={containerRef}
          className="flex gap-8"
          style={{
            transform: `translateX(-${translateX}px)`,
            flexWrap: "nowrap",
            transition: "none",
          }}
        >
          {duplicatedProjects.map(
            ({ image, title, price, location }, index) => (
              <div
                key={index}
                className="project-card relative flex-shrink-0"
                style={{
                  width: `calc((100% - ${
                    (cardsToShow - 1) * 2
                  }rem) / ${cardsToShow})`,
                }}
              >
                <img
                  src={image}
                  alt={title || "Project image"}
                  className="w-full h-auto mb-14 rounded-lg"
                />
                <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                  <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md rounded-md">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {title}
                    </h2>
                    <p className="text-gray-500 text-sm">
                      {price} <span className="px-1">|</span> {location}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
