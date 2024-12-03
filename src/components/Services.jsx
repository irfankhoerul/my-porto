import React, { useState, useEffect } from "react";
import { skills } from "../assets/icons_skill/imgAssets";
import { webIcon, designIcon } from "../assets/icons/imgIcons";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../variants";

const Services = () => {
  const [skillsState, setSkillsState] = useState(skills);
  const [activeIndex, setActiveIndex] = useState(0);

  // Pergeseran elemen
  useEffect(() => {
    const interval = setInterval(() => {
      setSkillsState((prevSkills) => {
        const lastSkill = prevSkills[prevSkills.length - 1];
        const newSkills = [lastSkill, ...prevSkills.slice(0, -1)];
        return newSkills;
      });
    }, 2000); // Interval pergeseran skill
    return () => clearInterval(interval);
  }, []);

  // Nyala satu-satu
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % skillsState.length);
    }, 500); // Interval highlight skill
    return () => clearInterval(interval);
  }, [skillsState]);

  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div className="flex-col">
          {/* Header Section */}
          <motion.div
            variants={fadeIn("left", 0.45)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-col justify-items-center pb-6"
          >
            <h2 className="h2 leading-tight">What I do</h2>
            <p className="mb-6 max-w-2xl text-center">
              Build and maintain websites,{" "}
              <span className="text-accent">Web Development</span> also have a
              mentorship called MOFON. My motto is Beauty and function in equal
              measure as priority.
            </p>
          </motion.div>

          {/* Services Section */}
          <motion.div
            variants={fadeIn("right", 0.45)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex lg:flex-row flex-col items-center justify-center px-5 lg:gap-4 gap-12 mb-10"
          >
            <div className="border-2 border-indigo-800 rounded-xl p-6 flex flex-col items-center justify-center w-[280px] h-64 relative hover:shadow-lg hover:shadow-blue-800 transition-shadow duration-300">
              <div className="p-1 absolute bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full -top-8 shadow-blue-800">
                <div className="flex bg-violet-800/50 w-16 h-16 rounded-full items-center justify-center">
                  <img src={webIcon} alt="" className="w-8 h-8" />
                </div>
              </div>
              <span className="text-2xl font-bold mt-8">Web Development</span>
              <p className="text-base text-center text-zinc-400 mt-4">
                Modern and mobile-ready website that will help you reach all of
                your marketing specially with Laravel and React.
              </p>
            </div>
            <div className="border-2 border-indigo-800 rounded-xl p-6 flex flex-col items-center justify-center w-[280px] h-64 relative hover:shadow-lg hover:shadow-blue-800 transition-shadow duration-300">
              <div className="p-1 absolute bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full -top-8">
                <div className="flex bg-violet-800/50 w-16 h-16 rounded-full items-center justify-center">
                  <img src={designIcon} alt="" className="w-8 h-8" />
                </div>
              </div>
              <span className="text-2xl font-bold pb-3">Designer</span>
              <p className="text-base text-center text-zinc-400 mt-4">
                Create intuitive interfaces and delightful user experiences by
                blending aesthetics with usability.
              </p>
            </div>
          </motion.div>

          {/* Skill Section */}
          <motion.div
            variants={fadeIn("left", 0.45)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col items-center justify-center"
          >
            <h2 className="h4 leading-tight">Experience With</h2>
            <div className="flex flex-wrap max-w-md justify-center gap-4 mt-6">
              <AnimatePresence>
                {skillsState.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className={`flex items-center justify-center rounded-full bg-slate-800 h-10 w-10 shadow-xl transition-shadow duration-500 ${
                      index === activeIndex ? "shadow-blue-800/50" : ""
                    }`}
                    layout
                    transition={{ duration: 0.5 }}
                  >
                    <img src={skill.src} alt={skill.name} className="w-7 h-7" />
                    <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 grup-hover:opacity-100 transition-opacity duration-300">
                      {skill.name}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
