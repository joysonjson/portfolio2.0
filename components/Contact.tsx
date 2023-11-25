import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className=" h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10  mx-auto items-center justify-center">
      <h3 className=" absolute top-12 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <form className=" flex flex-col space-y-2 w-fit mx-auto mt-10">
        <div className=" space-y-2">
          <input
            placeholder="Name"
            className="contactInput w-full"
            type="text"
          />
          <input
            placeholder="Email"
            className="contactInput  w-full"
            type="text"
          />
        </div>
        <input placeholder="Subject" className="contactInput" type="text" />
        <textarea placeholder="Message" className="contactInput" />
        <button className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
