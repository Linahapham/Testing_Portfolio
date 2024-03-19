"use client";

import Image from "next/image";
import { motion, useInView, useScroll } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}

      transition={{ duration: 1 }}
    >
      <div className="h-full flex items-center flex-col lg:flex-row px-4 sm:px-8 justify-center md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div

          className="  lg:w-1/2 relative flex items-center justify-center pb-4"
        >
          <img
            src="/hlogo.png"
            alt=""
            layout="fill"
            objectFit="cover"
            className="w-full h-auto max-w-50  max-h-50 mx-auto lg:w-35 lg:h-35 rounded-full object-contain "

          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            A Front-end Developer & Web Designer.
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Hello and welcome to my portfolio! Dive into a world where creativity thrives and innovation flourishes. Explore the diverse range of projects that reflect my passion for design and dedication to excellence. Enjoy your journey through my digital showcase!
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">


            <Link href="/portfolio"> <button
              className="text-wrap p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-white hover:text-black">
              View My Work
            </button></Link>
            <Link href="/contact">  <button className="text-wrap p-4 rounded-lg ring-1 ring-black  hover:bg-black hover:text-white">
              Contact Me
            </button></Link>
          </div>
        </div>



      </div>
    </motion.div>
  );
};

export default Homepage;