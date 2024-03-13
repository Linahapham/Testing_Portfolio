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
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <motion.div
          animate={{
            //scale: [1, 2, 2, 1, 1],
            rotate: [0, 45, 45, -45, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            //repeat: Infinity,
            repeatDelay: 0.5
          }}
          className="h-1/2 lg:h-full lg:w-1/2 relative items-center justify-center"
        >
          <img
            src="/mygirl.png"
            alt=""

            className="w-full h-auto lg:w-35 lg:h-35 rounded-full object-contain"
          />
        </motion.div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            A Junior Front-end Developer & Web Designer.
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