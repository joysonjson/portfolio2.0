import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  const mailToLink = "mailto:joysonpathra@gmail.com";

  return (
    <header className=" sticky top-0 flex items-start justify-between max-w-[80%] px-5 md:px-8 mx-auto z-20">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className=" flex items-center justify-center"
      >
        <SocialIcon
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
          url="https://www.linkedin.com/in/joysonps/"
        />
        <SocialIcon
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
          url="https://github.com/joysonjson"
        />
        <SocialIcon
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
          url="https://stackoverflow.com/users/11054805/joy-son"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className=" flex items-center text-gray-400"
      >
        <SocialIcon
          fgColor="gray"
          network="email"
          bgColor="transparent"
          url={mailToLink}
          target="_blank"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get In Tough
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
