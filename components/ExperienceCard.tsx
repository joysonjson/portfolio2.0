import React from "react";
import { motion } from "framer-motion";
type Props = {
  value: number;
};

const ExpereinceCard = ({ value }: Props) => {
  return (
    <article className=" flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-3/12 md:w-[600px] xl:[w-900px] snap-center bg-[#292929] p-10  cursor-pointer transition-opacity duration-200 overflow-hidden ">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          delay: 1.3,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://images.unsplash.com/photo-1572059002053-8cc5ad2f4a38?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div>
        <p className="font-bold text-lg mt-1 text-white">
          {" "}
          Helpshift Techonlogies
        </p>
        <h4 className=" text-lg font-light text-gray-500 ">SDE-{value}</h4>

        <div className=" flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://banner2.cleanpng.com/20190623/yp/kisspng-python-computer-icons-programming-language-executa-5d0f0aa79779a6.6143656815612668556205.jpg"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://banner2.cleanpng.com/20190623/yp/kisspng-python-computer-icons-programming-language-executa-5d0f0aa79779a6.6143656815612668556205.jpg"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://banner2.cleanpng.com/20190623/yp/kisspng-python-computer-icons-programming-language-executa-5d0f0aa79779a6.6143656815612668556205.jpg"
          />
        </div>
        <p className=" uppercase py-5 text-gray-300">
          Started work... - Ended...
        </p>
        <ul className=" list-disc space-y-4 ml-5 text-md text-gray-100">
          <li>Summary ponts</li>
          <li>Summary ponts</li>
          <li>Summary ponts</li>
          <li>Summary ponts</li>
        </ul>
      </div>
    </article>
  );
};

export default ExpereinceCard;
