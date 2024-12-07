import React from "react";
import { NavLink } from "react-router";

const Sidebar = () => {
  const categories = [
    { id: "about", title: "The Wanderer's Tales", path: "/about" },
    { id: "skills", title: "The Armory of Skills", path: "/skills" },
    { id: "projects", title: "Works Wrought by Hands and Mind", path: "/projects" },
    // { id: "achievements", title: "Trophies of the Realm", path: "/achievements" },
    { id: "contact", title: "Summoning Circle", path: "/contact" },
  ];

  return (
    <div className="w-96 ml-4 bg-none p-5">
      <ul className="space-y-5">
        {categories.map((category) => (
          <li key={category.id} className="relative">
            <NavLink
              to={category.path}
              className={({ isActive }) =>
                `block p-3 px-8  text-lg font-serif text-white transition-all duration-150 text-center shadow-md border-[#2b2620] border-x-2  ${
                  isActive ? "bg-[#5e3c19] scale-105 wood-effect" : "bg-slate-950 hover:scale-105"
                } `
              }
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
