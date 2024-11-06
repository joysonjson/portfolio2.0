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
        src="/images/vectors/guitar.svg"
        className=" max-h-max flex-shrink-0 rounded-md  md:my-5 mx-auto object-cover"
      />
      <div className=" space-y-10 px-0 md:ml-10 ">
        <h4 className=" text-2xl hidden md:block font-semibold text-white">
          👋 Hey there!
        </h4>
        <p className=" text-base  text-white">
          I’m Joyson, an iOS developer who loves building apps and websites.
          Although iOS development is my full-time focus, I’m also passionate
          about creating websites with React and Next.js
          <br />
          <br />
          <span>
            Beyond coding, I’m a dedicated drummer and guitar enthusiast 🎸, a
            chess player ♟️, and a board game lover 🎲. A tech explorer 💻, I
            eagerly follow the latest trends in the fast-paced tech world. I
            like animae[Naruto 🍥] and enjoy expanding my horizons through
            podcasts and TED Talks 🎧. I find relaxation actively participate in
            church community, engaging in worship and church ⛪ activities that
            deepen my faith and connection with others.
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
