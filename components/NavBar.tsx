import React, { useRef } from "react";
import { MdWork } from "react-icons/md";
import { FaCode, FaHammer, FaHome } from "react-icons/fa";
import { FaCircleArrowRight, FaPersonCircleQuestion } from "react-icons/fa6";
import { useRouter } from "next/router";
import Link from "next/link";
import { useMotionValue, useSpring, useTransform, motion } from "framer-motion";

type Props = {};

const NavBar = (props: Props) => {
  const router = useRouter();
  return (
    <div className=" h-10 mx-auto sticky flex items-center justify-evenly bottom-5 my-4 bg-gray-400/20 rounded-xl max-w-[650px]">
      {/* <Link href="/">
        <FaHome />
      </Link>
      <Link href="/#about">
        <FaPersonCircleQuestion className="nav-icon" />
      </Link>
      <Link href="/#skills">
        <FaCode className="nav-icon" />
      </Link>
      <Link href="/#experience">
        <MdWork className="nav-icon" />
      </Link>
      <Link href="/#projects">
        <FaHammer className="nav-icon" />
      </Link> */}
      <Linker
        heading={<FaHome className="nav-icon" />}
        hint="Home"
        imgSrc="/imgs/random/10.jpg"
        href="/#"
      />
      <Linker
        heading={<FaPersonCircleQuestion className="nav-icon" />}
        hint="About"
        imgSrc="/imgs/random/10.jpg"
        href="/#about"
      />
      <Linker
        heading={<FaCode className="nav-icon" />}
        hint="Skills"
        imgSrc="/imgs/random/10.jpg"
        href="/#skills"
      />
      <Linker
        heading={<MdWork className="nav-icon" />}
        hint="Work"
        imgSrc="/imgs/random/10.jpg"
        href="/#experience"
      />
      <Linker
        heading={<FaHammer className="nav-icon" />}
        hint="Projects"
        imgSrc="/imgs/random/10.jpg"
        href="/#projects"
      />
    </div>
  );
};

export default NavBar;

const Linker = ({ heading, imgSrc, hint, href }: any) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e: any) => {
    const rect = ref.current?.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8 hover:text-[#F7AB0A]"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block  font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 "
        >
          <motion.span
            variants={{
              initial: { x: 0 },
              whileHover: { x: 16 },
            }}
            transition={{ type: "spring" }}
            className="inline-block text-xl md:text-2xl hover:text-4xl"
          >
            {heading}
          </motion.span>
        </motion.span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FaCircleArrowRight className="text-5xl text-neutral-50" />
        {hint}
      </motion.div>
    </motion.a>
  );
};
