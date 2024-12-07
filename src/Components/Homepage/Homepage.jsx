import React from "react";
import { useNavigate } from "react-router";

const WelcomePage = () => {
    const navigate=useNavigate();
    const handleNavigate=()=>{
        navigate('/about')
    }
  return (
    <div className="h-screen text-white flex flex-col justify-center items-center text-center font-serif">
      <h1 className="text-5xl font-extrabold text-[#f4bec4]">Welcome, Adventurer</h1>
      <p className="text-xl mt-4 text-[#d1d1d1] max-w-3xl">
        Venture forth into a world of innovative projects, crafted with passion and skill.
        Embark upon the journey that lies within.
      </p>
      <button className="mt-8 py-2 px-6 bg-[#755256] hover:bg-[#e0d7c6] hover:text-black text-lg text-[#f4f4f4] rounded-md shadow-lg transition-all duration-500"
      onClick={handleNavigate}
      >
        Begin Your Journey
      </button>
    </div>
  );
};

export default WelcomePage;
