import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.2,
      }}
      className=" my-16 flex flex-col relative text-left max-w-[2000px] xl:px-10  justify-center xl:space-y-0 mx-auto items-center gap-28"
    >
      <div>
        <h3 className="uppercase tracking-[20px] font-bold  text-2xl ">
          Kindness
        </h3>
      </div>
      <div>
        <p className=" text-base  text-black mx-3 text-center max-w-[800px]">
          At Tail Treat, we believe kindness begins at home and extends to every
          furry friend in need. While treating your beloved pets, why not share
          the love by feeding stray dogs in your locality? Together, we can make
          a difference, one Tail Treat biscuit at a time, spreading joy and care
          to all dogs, everywhere.
        </p>
      </div>
    </motion.div>
  );
};

export default Skills;
