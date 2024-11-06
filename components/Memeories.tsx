import React from "react";
import { motion } from "framer-motion";
import { Gallery } from "react-grid-gallery";
import { images } from "@/utils/data";
type Props = {};

const Memories = (props: Props) => {
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
      className=" h-screen flex  relative flex-col"
    >
      {/* <h3 className=" absolute top-16 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Memories
      </h3> */}
      <Gallery images={images} />
    </motion.div>
  );
};

export default Memories;
