import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { expereinceData } from "@/utils/data";
import { MdWork } from "react-icons/md";
import ExpereinceCard from "./ExperienceCard";
type Props = {};

const Experience = (props: Props) => {
  const [layout, setLayout] = useState<"2-columns" | "1-column-left">(
    "2-columns"
  );

  useEffect(() => {
    const handleResize = () => {
      setLayout(window.innerWidth < 768 ? "1-column-left" : "2-columns");
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
      className=" text-center md:flex-row max-w-5xl md:max-w-7xl  justify-evenly mx-auto items-center"
    >
      <h3 className="text-gray-500 mb-10  uppercase tracking-[20px]  text-2xl">
        Experience
      </h3>
      <VerticalTimeline layout={layout} lineColor="#73737340">
        {expereinceData.map(({ logo, name, roles, title, duration, url }) => {
          return (
            <VerticalTimelineElement
              key={duration}
              className="vertical-timeline-element--work mt-5 "
              contentStyle={{
                background: "#292929",
                border: "1px solid neutral-700",
                // color: "#fff",
                padding: 0,
              }}
              contentArrowStyle={{
                borderRight: "7px solid #292929",
              }}
              dateClassName=" ml-5 text-[#F7AB0A]"
              date={duration}
              iconStyle={{ color: "#F7AB0A", borderColor: "#F7AB0A" }}
              icon={<MdWork />}
            >
              <ExpereinceCard
                duration={duration}
                title={title}
                key={logo}
                logo={logo}
                company={name}
                roles={roles}
                url={url}
              />
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      {/* <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        <HorizontalScrollCarousel />
      </div> */}
    </motion.div>
  );
};

export default Experience;
