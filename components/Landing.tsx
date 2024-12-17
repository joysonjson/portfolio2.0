import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
type Props = {};

const Landing = (props: Props) => {
  const [text, helper] = useTypewriter({
    words: [
      "Affordable Dog biscuit 🧽",
      "Best Alternative for your Stray Dogs 🐕",
      "Choice of Dog lovers ❤️",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className=" h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      {/* <BackgroundCircles /> */}
      <img
        className=" relative rounded-2xl h-80 h-80 mx-auto object-cover"
        src="/images/vectors/trail-logo.jpeg"
        alt="headhost"
      />
      <div className="z-20">
        {/* <h2 className=" text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Enginner
        </h2> */}
        <h1 className=" text-xl lg:text-5xl font-semibold scroll-px-10">
          <span className=" text-black mr-3"> {text}</span>
          <Cursor cursorColor="#F&AB0A" />
        </h1>
      </div>
    </div>
  );
};

export default Landing;
