import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ExpereinceCard from "./ExperienceCard";

const HorizontalScrollCarouselExperience = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {[1, 2, 3, 4, 5].map((card) => {
            return <ExpereinceCard value={card} key={card} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarouselExperience;
