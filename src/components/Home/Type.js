import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AI Native Software Engineer",
          "Full-Stack Developer",
          "React & Node.js Developer",
          "AI Enthusiast",
          "Lifelong Learner",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
