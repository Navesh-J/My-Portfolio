import React from "react";
import { div } from "motion/react-client";
import VideoComponent from "./VideoComponent";

const About = () => {
  return (
    <div className="font-serif px-4 ">
      <div className="flex items-center">
        {/* Text Section */}
        <div className="p-6 mx-12 w-full md:w-3/5">
          <h1 className="text-4xl text-[#dddddd] font-semibold mb-4">
            The Call to the Adventure
          </h1>
          <p className="mb-5 text-[#f4bec4]">
            Lo and behold, dear wanderer of the digital realm, for here begins
            the tale of one who ventured into the labyrinth of logic and wonder.
            The path was not always clear, but with a heart aflame with
            curiosity and the will to craft, I embarked on this grand journey.
          </p>
          <h2 className="text-2xl text-[#dddddd] font-semibold mb-2">
            Tales of Tinkering and Triumphs
          </h2>
          <p className="text-[#f4bec4]">
            In my adventures, I have wandered through the lands of Java, delved
            into the depths of JavaScript, and navigated the structured paths of
            C and Python. The artistry of HTML and CSS has adorned many of my
            creations, while React has been my loyal companion in crafting
            dynamic realms. And, of course, Unity, where imagination breathes
            life into virtual worlds. Each of these tools has left its mark on
            my journey, some as victories, others as lessons in the art of
            perseverance.
          </p>
        </div>

        {/* Video Section - Only visible on desktop */}
        <div className="hidden lg:block">
          <VideoComponent />
        </div>
      </div>
    </div>
  );
};

export default About;
