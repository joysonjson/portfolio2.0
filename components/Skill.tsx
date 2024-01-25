import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  src: string;
};

const Skill = ({ directionLeft, src }: Props) => {
  return (
    <div className=" group relative flex cursor-pointer">
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
    </div>
  );
};

export default Skill;
