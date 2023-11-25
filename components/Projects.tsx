import React from "react";
import { motion } from "framer-motion";
type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
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
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((num) => {
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
                src="https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvamVjdHN8ZW58MHx8MHx8fDA%3D"
              />
              <div className=" space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className=" text-4xl font-semibold text-center">
                  <span className=" underline decoration-[#F7AB0A]/50">
                    Case Study {num + 1} of {projects.length} :
                  </span>
                  UPS Clone
                </h4>
                <p className=" text-lg text-cetner md:text-left">
                  Introduction. Netflix is the biggest video streaming platform
                  in the world, offering movies, seasons, biographies, reality
                  shows, and more. Their video repository is growing
                  significantly. So the engineering team at Netflix keeps trying
                  to find better ways to display content to their consumers.
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
