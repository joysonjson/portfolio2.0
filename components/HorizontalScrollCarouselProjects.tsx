import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Project from "./Project";
import { porjectData } from "@/utils/data";

const HorizontalScrollCarouselProjects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-90%"]);

  return (
    <section ref={targetRef} className="relative h-[250vh] bg-neutral-900">
      <h3 className=" sticky pt-5  uppercase tracking-[20px] text-gray-500 text-2xl text-center">
        Projects
      </h3>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div className="flex gap-4">
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
            style={{ x }}
            className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
          >
            <div className="relative w-full flex space-x-5 overflow-y-hidden snap-x snap-mandatory z-20">
              {porjectData.map(({ name, description, image, url }) => {
                return (
                  <Project
                    src={image}
                    key={name}
                    name={name}
                    description={description}
                    url={url}
                  />
                );
              })}
            </div>
            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarouselProjects;
