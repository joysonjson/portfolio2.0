import React from "react";
import { motion } from "framer-motion";
type Props = {};

const About = (props: Props) => {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className=" absolute top-5 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        src="/images/vectors/about.png"
        className=" -mb-20 md:mb-0 flex-shrink-0 rounded-md  h-56 mt-10 md:mt-0 mx-auto object-cover  xl:h-[600px]"
      />
      <div className=" space-y-10 px-0 md:ml-10 ">
        <h4 className=" text-2xl hidden md:block font-semibold text-gray-500">
          Here is a{" "}
          <span className=" underline decoration-[#F7AB0A]/50"> little </span>
          background
        </h4>
        <p className=" text-base text-justify text-center text-white">
          Motivated and results-driven Software Developer with 5 years of
          experience in designing, developing, testing, and deploying mobile
          applications. Proven expertise in utilizing technologies such as
          Xcode, Swift, React Native, and more to deliver high-quality software
          solutions. Adept at collaborating with cross-functional teams and
          taking ownership of end-to-end project responsibilities.
          {/* <br />
          <br />
          Beyond technical proficiency, my journey in the dynamic field of
          mobile app development has instilled in me a set of invaluable soft
          skills. Adaptability is a cornerstone of my approach, evidenced by my
          smooth transition from a junior role to taking on the responsibilities
          of a solo developer, showcasing my ability to navigate diverse
          challenges. I am a strong advocate for clear and concise
          communication, fostering an environment where ideas flow seamlessly
          and teamwork thrives. Throughout my career, I have demonstrated a keen
          sense of adaptability, collaborating effectively with cross-functional
          teams. Additionally, I take pride in my mentoring abilities, always
          ready to assist team members, contributing to a culture of continuous
          learning and growth. */}
          <br />
          <br />
          <span className="hidden md:block">
            {" "}
            Outside the world of coding, I am a drummer and guitar maestro 🎸, a
            chess enthusiast ♟️, and a board game aficionado 🎲. As a tech
            explorer 💻, I embrace the latest advancements in the ever-evolving
            tech landscape. Naruto fan 🍥 and indulge my curiosity through
            podcasts and TED Talks 🎧. Furthermore, I am an avid cycling
            enthusiast 🚴‍♂️, finding both relaxation and inspiration on the open
            road.
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
