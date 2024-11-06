import React from "react";
import { motion } from "framer-motion";
type Props = {
  name: string;
  description: string;
  src: string;
  url?: string;
};

const Project = ({ name, description, src, url }: Props) => {
  return (
    <div
      className=" flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:[w-900px] snap-center bg-[#292929] p-0 pb-2  cursor-pointer transition-opacity duration-200 overflow-hidden max-h-[80vh] hover:cursor-pointer"
      key={name}
    >
      <button
        onClick={() => {
          if (url) {
            window.open(url, "_blank");
          }
        }}
      >
        <motion.img className=" w-full max-h-[300px]" src={src} />
        <div className=" space-y-10 px-4 md:px-10 ">
          <h4 className=" text-xl font-semibold text-center py-2 text-white">
            {name}
          </h4>
          <p className=" text-md text-cetner md:text-left text-gray-400">
            {description}
          </p>
        </div>
      </button>
    </div>
  );
};

export default Project;
