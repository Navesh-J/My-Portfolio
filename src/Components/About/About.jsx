import React from "react";
import { div } from "motion/react-client";
import VideoComponent from "./VideoComponent";

const About = () => {
  return (
    <div className="flex items-center">
      <div className="font-serif p-6 mx-12 w-3/5">
        <h1 className="text-4xl text-[#dddddd] font-semibold mb-4">
          The Call to the Adventure
        </h1>
        <p className="mb-5 text-[#f4bec4]">
          Lo and behold, dear wanderer of the digital realm, for here begins the
          tale of one who ventured into the labyrinth of logic and wonder. The
          path was not always clear, but with a heart aflame with curiosity and
          the will to craft, I embarked on this grand journey.
        </p>
        <h2 className="text-2xl text-[#dddddd] font-semibold mb-2">
          Tales of Tinkering and Triumphs
        </h2>
        <p className="text-[#f4bec4]">
          In my adventures, I have wandered through the lands of Java , delved
          into the depths of JavaScript, and navigated the structured paths of C
          and Python. The artistry of HTML and CSS has adorned many of my
          creations, while React have been my loyal companions in crafting
          dynamic realms. And, of course, Unity, where imagination breathes life
          into virtual worlds. Each of these tools has left its mark on my
          journey, some as victories, others as lessons in the art of
          perseverance
        </p>
        {/* <h2 className="text-2xl font-semibold mt-4 mb-2">The Journey Ahead</h2>
      <p>
        As the tale unfolds, the path ahead glimmers with promise. To craft, to
        learn, to forge greater tools of wonder—this is the wanderer's vow. What
        tales await beyond the horizon? Only time, and a steadfast heart, shall
        reveal.
      </p> */}
      </div>
      <div>
        <VideoComponent/>
      </div>
    </div>
  );
};

export default About;
