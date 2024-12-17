import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  const whatsappLink =
    "https://api.whatsapp.com/send?phone=+918792093075&text=Hi,%20I%20would%20like%20to%20know%20more%20about%20products";
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
        {/* todo logo */}
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
          target="_blank"
          fgColor="#E47530"
          bgColor="transparent"
          url="https://www.instagram.com/tail_treat/"
        />
        <SocialIcon
          fgColor="#E47530"
          network="whatsapp"
          bgColor="transparent"
          url={whatsappLink}
          target="_blank"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-[#E47530]">
          Get In Tough
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
