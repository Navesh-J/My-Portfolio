import React, { useState } from "react";
import { NavLink,useNavigate } from "react-router";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate=useNavigate();

  const categories = [
    { id: "about", title: "The Wanderer's Tales", path: "/about" },
    { id: "skills", title: "The Armory of Skills", path: "/skills" },
    { id: "projects", title: "Works Wrought by Hands and Mind", path: "/projects" },
    { id: "contact", title: "Summoning Circle", path: "/contact" },
  ];

  const handleNavigation = (path) => {
    setIsOpen(false);
    navigate(path); // Navigate manually to update route
  };

  return (
    <div className="md:w-96 w-full bg-none p-5 lg:relative fixed top-0 left-0 z-10">
      {/* Hamburger Menu */}
      <div className="flex justify-between items-center lg:hidden">
        {/* <h1 className="text-white text-xl font-serif">Menu</h1> */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Sidebar Content */}
      <ul
        className={`space-y-5 lg:flex lg:flex-col flex-col lg:space-y-5 absolute lg:static top-14 left-0 w-full bg-slate-950 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:bg-transparent`}
      >
        {categories.map((category) => (
          <li key={category.id} className="relative">
            <NavLink
              to={category.path}
              className={({ isActive }) =>
                `block p-3 px-8 text-lg font-serif text-white transition-all duration-150 text-center shadow-md border-[#2b2620] border-x-2 ${
                  isActive ? "bg-[#5e3c19] scale-105 wood-effect" : "bg-slate-950 hover:scale-105"
                } `
              }
              onClick={() => handleNavigation(category.path)} // Close menu on item click
            >
              {category.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
