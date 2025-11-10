"use client";

import Typewriter from "typewriter-effect";

function Role() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Passionate Coder",
          "Lifelong Learner",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Role;