import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

const Skill = ({ directionLeft }: Props) => {
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
        transition={{
          duration: 0.8,
        }}
        className=" rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGmL8iLXjb8OanZKnhlCfqrOCqgebnnnxwtA&usqp=CAU"
      />
    </div>
  );
};

export default Skill;
