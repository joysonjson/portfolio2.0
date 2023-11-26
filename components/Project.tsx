import React from "react";
import { motion } from "framer-motion";
type Props = {
  num: number;
};

const Project = ({ num }: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div
      className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
      key={num}
    >
      <motion.img
        initial={{
          opacity: 0,
          y: -300,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        className=" w-96"
        src="https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvamVjdHN8ZW58MHx8MHx8fDA%3D"
      />
      <div className=" space-y-10 px-4 md:px-10 ">
        <h4 className=" text-xl font-semibold text-center  text-white">
          <span className=" underline  decoration-[#F7AB0A]/50 ">
            Case Study {num} of {projects.length} :
          </span>
          UPS Clone
        </h4>
        <p className=" text-md text-cetner md:text-left text-gray-400">
          Introduction. Netflix is the biggest video streaming platform in the
          world, offering movies, seasons, biographies, reality shows, and more.
          Their video repository is growing significantly. So the engineering
          team at Netflix keeps trying to find better ways to display content to
          their consumers.
        </p>
      </div>
    </div>
  );
};

export default Project;
