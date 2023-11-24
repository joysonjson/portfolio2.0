import React from "react";
import { motion } from "framer-motion";
type Props = {};

const About = (props: Props) => {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className=" -mb-20 md:mb-0 flex-shrink-0 rounded-full w-56 h-56 object-cover md:rounded-lg md:rh-95 md:2-64 xl:w-[500px] xl:h-[600px]"
      />
      <div className=" space-y-10 px-0 md:10 ml-12">
        <h4 className=" text-2xl font-semibold">
          Here is a{" "}
          <span className=" underline decoration-[#F7AB0A]/50"> little </span>
          background
        </h4>
        <p className=" text-base">
          Experienced Software Engineer with a demonstrated history of working
          in the computer software industry. Skilled in iOS, React Native,
          Objective-C, Swift, React, Vue, and angular js.
        </p>
      </div>
    </div>
  );
};

export default About;
