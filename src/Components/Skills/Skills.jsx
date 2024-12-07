import React from "react";
import { FaJava, FaPython, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiCplusplus, SiJavascript,SiUnity } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "Java", icon: <FaJava /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React", icon: <FaReact /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Python", icon: <FaPython /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Unity", icon: <SiUnity /> },

  ];

  return (
    <div className="p-8 font-serif">
      <h1 className="text-4xl text-[#dddddd] font-bold mb-4 text-center">
        The Armory of Skills
      </h1>
      <p className="text-[#f4bec4] mb-8 text-center max-w-3xl mx-auto">
        Every wanderer needs their trusted armory, and mine is forged from
        countless trials across the lands of technology. Here lies my collection
        of honed skills and tools, ready to be wielded for crafting and creation.
      </p>
      <div className="grid grid-cols-3 gap-6 justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-[#f4bec4] hover:text-[#fff] text-4xl transition-transform transform hover:scale-110"
          >
            {skill.icon}
            <span className="mt-2 text-lg">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
