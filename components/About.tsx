import React from "react";
import { motion } from "framer-motion";
type Props = {};

const About = (props: Props) => {
  return (
    <div className="sm:h-screen md:h-min my-5 mb-10 flex flex-col relative text-center md:text-left md:flex-row max-w-5xl px-10 justify-evenly mx-auto items-center">
      {/* <h3 className=" absolute top-0 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3> */}
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
        src="/images/vectors/feed-dog.svg"
        className=" h-72 flex-shrink-0 rounded-md  md:my-5 mx-auto object-cover"
      />
      <div className=" space-y-10 px-0 md:ml-10 ">
        <h4 className=" text-2xl hidden md:block font-semibold text-black">
          👋 Hey there!
        </h4>
        <p className=" text-base  text-black">
          Welcome to Tail Treat, where we believe every dog deserves a healthy
          and delicious snack! Our mission is to provide <b> affordable</b> ,
          <b>high-quality </b> <span className="text-[#E47530]"> dog 🐶</span>{" "}
          biscuits specially crafted to meet the nutritional needs of dogs.
          <br />
          <br />
          <span>
            At Tail Treat, we aim to ensure that our furry friends enjoy treats
            designed just for them, steering clear of human foods that may harm
            their health. With a focus on quality and affordability, we’re
            dedicated to making nutritious snacking accessible to all dogs.
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
