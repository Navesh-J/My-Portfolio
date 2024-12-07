import React, { useState, useRef, useEffect } from "react";
import ttLogo from "../../assets/TaskTracker.png";
import spotifyLogo from "../../assets/spotifyLogo.png";
import potato from "../../assets/potato.png";

const projects = [
  {
    title: "Task Tracker",
    thumbnail: ttLogo,
    shortDescription: "A functional to-do list app built with Local Storage.",
    description:
      "A to-do list application developed using HTML, CSS, JavaScript, and Firebase(LocalStorage).",
    features: [
      "CRUD functionality for task management",
      "User-friendly interface design",
      "Switch between Dark and Light modes",
    ],
    liveLink: "https://trackmytasks.netlify.app/personal",
    sourceCode: "https://github.com/Navesh-J/Task-Tracker",
  },
  {
    title: "Spotify UI Clone",
    thumbnail: spotifyLogo,
    shortDescription: "A front-end replica of Spotify's UI showcasing design skills.",
    description:
      "A front-end project designed to mimic Spotify's user interface, demonstrating expertise in modern web technologies.",
    features: [
      "Pixel-perfect UI replication of Spotify",
      "Dynamic navigation and interactive elements",
    ],
    liveLink: null,
    sourceCode: "https://github.com/Navesh-J/Spotify-Clone",
  },
  {
    title: "Flappy Potato",
    thumbnail: potato,
    shortDescription: "A Unity-powered game with physics-based mechanics.",
    description:
      "A quirky game developed using Unity and C#, where players guide a potato through obstacles in a fun and challenging environment.",
    features: [
      "Physics-based gameplay mechanics",
      "Engaging graphics and scoring system",
      "Custom assets and interactive gameplay",
    ],
    liveLink: null,
    sourceCode: "https://github.com/Navesh-J/Flappy-Potato",
  },
];

const Projects = () => {
  const [visiblePopupIndex, setVisiblePopupIndex] = useState(null);
  const popupRef = useRef(null);

  const togglePopup = (index) => {
    setVisiblePopupIndex(visiblePopupIndex === index ? null : index);
  };

  // Close popup on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setVisiblePopupIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="p-8 font-serif">
      <h1 className="text-4xl font-bold text-center text-[#dddddd] mb-6">
        A Gallery of Crafted Wonders
      </h1>
      <p className="text-[#f4bec4] text-center max-w-3xl mx-auto mb-10">
        Behold the fruits of labor, where technology and creativity converge.
        Each crafted wonder showcases the skills and passion woven into its
        creation.
      </p>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> */}
      <div className="flex">
        {projects.map((project, index) => (
          <div key={index} className="relative shadow-xl">
            {/* Project Thumbnail */}
            <div
              onClick={() => togglePopup(index)}
              className="cursor-pointer p-4 rounded-md hover:shadow-lg hover:scale-105 transition duration-300"
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-24 object-contain"
              />
              <h2 className="text-xl font-semibold text-[#f4bec4] mt-4">
                {project.title}
              </h2>
              <p className="text-[#dddddd] mt-2">{project.shortDescription}</p>
            </div>

            {/* Popup */}
            {visiblePopupIndex === index && (
              <div
                ref={popupRef}
                className={'absolute top-0 left-0 bg-[#755256] text-[#f4f4f4] p-4 rounded-md shadow-lg border border-[#3d2c2e] z-50'}
              >
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-sm mt-2">{project.description}</p>
                <ul className="list-disc pl-5 mt-3 text-sm italic">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="mt-4 flex gap-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400"
                    >
                      View Live
                    </a>
                  )}
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
