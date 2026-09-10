import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutMe from "./AboutMe";

const sections = ["about", "experience", "projects", "tech", "contact"];

const sectionContent = {
  about: <AboutMe />,
  experience: <div>experience</div>,
  projects: <div>projects</div>,
  tech: <div>tech stack</div>,
  contact: <div>contact</div>,
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [direction, setDirection] = useState(0);

  const handleSectionChange = (newSection) => {
    const oldIndex = sections.indexOf(activeSection);
    const newIndex = sections.indexOf(newSection);
    setDirection(newIndex > oldIndex ? 1 : -1);
    setActiveSection(newSection);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="w-full">
      <nav className="w-full bg-white">
        <div className="navlinks px-6 py-4">
          <ol className="flex justify-start gap-5">
            {sections.map((section) => (
              <li
                key={section}
                onClick={() => handleSectionChange(section)}
                className={`cursor-pointer transition-colors duration-200 ${
                  activeSection === section
                    ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                {section === "about" && "About me"}
                {section === "experience" && "Experience"}
                {section === "projects" && "Projects"}
                {section === "tech" && "Tech stack"}
                {section === "contact" && "Contact me"}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      <main className="p-6 overflow-hidden relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeSection}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {sectionContent[activeSection]}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Navbar;
