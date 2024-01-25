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
      className="  flex  relative flex-col text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className=" absolute top-8 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <div className="grid grid-cols-3 gap-5">
        <Skill src="/images/vectors/swift.svg" directionLeft={true} />
        <Skill src="/images/vectors/xcode.svg" directionLeft={true} />
        <Skill src="/images/vectors/github.svg" directionLeft={true} />
        <Skill src="/images/vectors/vscode.svg" />
        <Skill src="/images/vectors/react.svg" directionLeft={true} />
        <Skill src="/images/vectors/jira.svg" />
        <Skill src="/images/vectors/firebase.svg" />
        <Skill src="/images/vectors/confluence.svg" />
      </div>
    </motion.div>
  );
};

export default Skills;
