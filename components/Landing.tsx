import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
type Props = {};

const Landing = (props: Props) => {
  const [text, helper] = useTypewriter({
    words: [
      "Hi, I am 😂..!",
      "<Coder />",
      "The Apple-Fan-boy ",
      "Idea gardener 🌱",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className=" h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className=" relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
