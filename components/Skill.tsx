import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  src: string;
  skill: string;
};

const Skill = ({ directionLeft, src, skill }: Props) => {
  return (
    <div className=" group relative flex cursor-pointer flex-col justify-center items-center">
      <motion.img
        initial={{
          opacity: 0,
          x: directionLeft ? -200 : 200,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className=" rounded-full  object-cover w-24 h-24 xl:w-32 xl:h-32 filter transition duration-300 ease-in-out"
        src={src}
      />
      <p className="text-white py-2 text-center"> {skill}</p>
    </div>
  );
};

export default Skill;
