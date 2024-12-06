import React, { useRef } from "react";

const VideoComponent = () => {
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <video
      ref={videoRef}
      src="src\assets\Running.mp4"
      autoPlay
      loop
      muted
      className="w-80 cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-500"
      onClick={handleVideoClick}
    ></video>
  );
};

export default VideoComponent;
