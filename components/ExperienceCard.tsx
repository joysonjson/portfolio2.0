import React from "react";
import { motion } from "framer-motion";
type Props = {
  company: string;
  logo: string;
  title: string;
  roles: string[];
  duration: string;
  url: string;
};

const ExpereinceCard = ({
  company,
  logo,
  title,
  roles,
  duration,
  url,
}: Props) => {
  return (
    <article className=" hover:cursor-pointer flex flex-col rounded-lg items-center space-y-7 flex-shrink-0  snap-center bg-[#292929] p-2 ml-2 md:p-10  cursor-pointer transition-opacity duration-200 overflow-hidden shadow-2xl ">
      <button className=" text-left" onClick={() => window.open(url, "_blank")}>
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 1.3,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          key={logo}
          className=" w-48  object-cover object-center text-center mx-auto py-2"
          src={logo}
        />
        <div>
          <p className="font-bold text-lg mt-1 text-white"> {company}</p>
          <h4 className=" text-lg font-light text-gray-500 ">{title}</h4>

          {/* <div className=" flex space-x-2 my-2">
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
        </div> */}
          {/* <p className=" uppercase py-5 text-gray-300">{duration}</p> */}
          {/* <ul className=" list-disc space-y-4 ml-5 text-md text-gray-100">
          {roles.map((role, index) => (
            <li key={role}>{role}</li>
          ))}
        </ul> */}
          <ul className="list-disc mt-5 space-y-4 ml-5 text-md text-gray-100">
            {/* Display all roles on larger screens */}
            <div className="hidden md:block">
              {roles.map((role, index) => (
                <li key={role}>{role}</li>
              ))}
            </div>

            {/* Display only three roles on smaller screens */}
            <div className="md:hidden">
              {roles.slice(0, 3).map((role, index) => (
                <li key={role}>{role}</li>
              ))}
            </div>
          </ul>
        </div>
      </button>
    </article>
  );
};

export default ExpereinceCard;
