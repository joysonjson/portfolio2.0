import React from "react";
import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className=" h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10  mx-auto items-center justify-center">
      <h3 className=" absolute top-12 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      {/* <div className="  flex-col space-y-10 hidden md:flex space-x-2">
        <h4 className=" text-4xl font-semibold text-center">
          <br />
          <span className="underline decoration-[#F7AB0A]/50">
            let&apos;s talk
          </span>
        </h4>
        <div className=" space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p>+122222222222</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p>+122222222222</p>
          </div>
        </div>
      </div> */}
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
