import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ExpereinceCard from "./ExperienceCard";
import Project from "./Project";

const expereinceData = [
  {
    logo: "/images/vectors/helpshift.svg",
    name: "Helpshift, Inc.",
    title: "Software Enginner",
    url: "https://www.helpshift.com/",
    roles: [
      "Develop and maintain SDKX for iOS platform, enhancing customer support experiences.",
      "Write comprehensive documentation and review code for optimal performance.",
      "Collaborate with cross-functional teams to implement new features and improvements.",
      "Mentor team members and contribute to a culture of continuous learning.",
      "Create and maintain plugins for React Native, Unreal Engine, Unity, Cocos.",
    ],
    duration: "Jul 2022 - Present",
  },
  {
    logo: "/images/vectors/mobishaala.svg",
    name: "Mobishaala Edu Tech Pvt Ltd",
    title: "Software Enginner",
    url: "https://mobishaala.com/",
    roles: [
      "Sole iOS developer in a small team, responsible for designing, implementing, testing, and deploying education-based mobile applications.",
      "Handle end-to-end responsibilities, from concept to deployment.",
      "Collaborate closely with teammates to design user-friendly interfaces and seamless user experiences.",
      "Take ownership of both website and app development for online tutoring, ensuring quality and performance.",
    ],
    duration: "Aug 2020 - Jul 2022",
  },
  {
    logo: "/images/vectors/cumulations.webp",
    name: "Cumulations Technologies",
    title: "Software Enginner",
    url: "https://www.cumulations.com/",

    roles: [
      "Collaborate with product managers and cross-functional teams to define software requirements.",
      "Design, develop, and maintain high-quality software applications.",
      "Write clean and efficient code, conduct code reviews, and ensure code quality standards.",
      "Debug and resolve software defects and issues promptly.",
      "Work closlely with QA and design team to meet the requirements",
    ],
    duration: "Feb 2019 - July 2020",
  },
];

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
