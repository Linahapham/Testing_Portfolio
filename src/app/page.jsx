"use client";

import Image from "next/image";
import { motion } from "framer-motion";
//import Link from "next/link";

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
          initial={{ opacity: 0, scale: 2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            delay: 0.8,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          className="h-1/2 lg:h-full lg:w-1/2 relative"
        >
          <img
            src="/huyen.png"
            alt=""
            width={600}
            height={600}
            className="w-35 h-35 rounded-full object-cover"
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
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button
              href="/portfolio " className="p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-white hover:text-black">
              View My Work
            </button>
            <button href="/contact " className="p-4 rounded-lg ring-1 ring-black  hover:bg-black hover:text-white">
              Contact Me
            </button>
          </div>
        </div>



      </div>
    </motion.div>
  );
};

export default Homepage;