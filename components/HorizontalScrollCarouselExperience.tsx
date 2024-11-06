import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ExpereinceCard from "./ExperienceCard";
import Project from "./Project";
import { expereinceData } from "@/utils/data";

const HorizontalScrollCarouselExperience = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-neutral-900">
      <h3 className="pt-4 sticky top-16 uppercase tracking-[20px] text-gray-500 text-2xl text-center">
        Experience
      </h3>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
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
              <div className="relative w-full flex gap-4  overflow-y-hidden overflow-x-hidden snap-x snap-mandatory z-20">
                {expereinceData.map(
                  ({ logo, name, roles, title, duration, url }) => {
                    return (
                      <ExpereinceCard
                        duration={duration}
                        title={title}
                        key={logo}
                        logo={logo}
                        company={name}
                        roles={roles}
                        url={url}
                      />
                    );
                  }
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarouselExperience;
