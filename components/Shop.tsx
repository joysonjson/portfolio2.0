import React from "react";
import { motion } from "framer-motion";
type Props = {};

const Shop = (props: Props) => {
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
      className=" h-screen  flex  relative flex-col text-left gap-10 max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center my-6"
    >
      <h3 className=" my-10 uppercase tracking-[20px] font-bold  text-2xl">
        Shop NOW
      </h3>
      <div className=" flex gap-8 overflow-x-auto no-scrollbar">
        {/* <img
          className=" text-center mx-auto py-2"
          src="/images/vectors/trail-treat.png"
        /> */}
        {/* <img
          className=" text-center mx-auto py-2"
          src="/images/vectors/s1.jpeg"
        /> */}
        <img
          className=" text-center mx-auto py-2"
          src="/images/vectors/t1.png"
        />

        <img
          className=" text-center mx-auto py-2"
          src="/images/vectors/s4.jpg"
        />
        <img
          className=" text-center mx-auto py-2"
          src="/images/vectors/t2.png"
        />
        {/* <img
          className=" text-center mx-auto py-2"
          src="/images/vectors/s3.jpeg"
        /> */}

        <img
          className=" text-center mx-auto py-2"
          src="/images/vectors/s5.jpg"
        />
      </div>
      <div className="flex gap-8 items-center justify-center">
        <a
          href="https://api.whatsapp.com/send?phone=+918792093075&text=Hi,%20I%20would%20like%20to%20know%20more%20about%20products"
          className="cursor-pointer"
        >
          <img className="h-12 w-12" src="/images/vectors/whatsapp.png" />
        </a>
        <a
          href="https://www.amazon.in/gp/product/B0DPG5PFSY/ref=cx_skuctr_share_ls_srb?smid=A2Y38HUZORXTZV&tag=ShopReferral_40ba1076-0298-45af-97b8-078a66d1b997"
          className="cursor-pointer"
        >
          <img className="h-12 w-12" src="/images/vectors/amazon.png" />
        </a>
        <a href="#" className="cursor-pointer">
          <img className="h-12 w-12" src="/images/vectors/flipkart.png" />
        </a>
      </div>
      <p className="text-base text-center mx-4 text-gray-600">
        Enquire now available at your nearby Pet shops, Retail stores, Medical
        stores etc..
      </p>
    </motion.div>
  );
};

export default Shop;
