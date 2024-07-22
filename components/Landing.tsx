import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
type Props = {};

const Landing = (props: Props) => {
  const [text, helper] = useTypewriter({
    words: [
      "Hi, I am JOY..!",
      "<Coder />",
      "The Apple-Fan-boy ",
      // "Idea gardener 🌱",
      "Musician 🎸🥁",
      "Chess enthusiast ♟️",
      "Tech explorer 💻",
      "Cycling  🚴‍♂️",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className=" h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className=" relative rounded-full h-32 w-32 mx-auto object-cover"
        src="/images/vectors/joy.png"
        alt="headhost"
      />
      <div className="z-20">
        <h2 className=" text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Enginner
        </h2>
        <h1 className=" text-4xl lg:text-5xl font-semibold scroll-px-10">
          <span className=" text-white mr-3"> {text}</span>
          <Cursor cursorColor="#F&AB0A" />
        </h1>
      </div>
    </div>
  );
};

export default Landing;
