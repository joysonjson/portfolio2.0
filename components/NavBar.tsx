import React, { ReactNode, useRef } from "react";
import { MdWork } from "react-icons/md";
import { FaCode, FaHammer, FaHome } from "react-icons/fa";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { useRouter } from "next/router";
import Linker from "./Linker";

type Props = {};

const NavBar = (props: Props) => {
  const router = useRouter();
  return (
    <div className=" h-10 mx-auto sticky flex items-center justify-evenly bottom-5 my-4 bg-gray-400/20 rounded-xl max-w-[650px]">
      <Linker
        heading={<FaHome className="nav-icon" />}
        hint="Home"
        imgSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        href="/#"
      />
      <Linker
        heading={<FaPersonCircleQuestion className="nav-icon" />}
        hint="About"
        imgSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        href="/#about"
      />
      <Linker
        heading={<FaCode className="nav-icon" />}
        hint="Skills"
        imgSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        href="/#skills"
      />
      <Linker
        heading={<MdWork className="nav-icon" />}
        hint="Work"
        imgSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        href="/#experience"
      />
      <Linker
        heading={<FaHammer className="nav-icon" />}
        hint="Projects"
        imgSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        href="/#projects"
      />
    </div>
  );
};

export default NavBar;
