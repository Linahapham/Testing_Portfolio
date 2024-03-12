"use client";
import Brain from "../components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Link from 'next/link'

const AboutPage = () => {
    const containerRef = useRef();

    const { scrollYProgress } = useScroll({ container: containerRef });

    const skillRef = useRef();
    //const isSkillRefInView1 = useInView(skillRef, { once: true });
    const isSkillRefInView = useInView(skillRef, { margin: "-80px" });

    const experienceRef = useRef();
    const isExperienceRefInView = useInView(experienceRef, { margin: "-80px" });

    const educationRef = useRef();
    const isEducationRefInView = useInView(educationRef, { margin: "-80px" });


    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            {/* CONTAINER */}
            <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
                {/* TEXT CONTAINER */}
                <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
                    {/* BIOGRAPHY CONTAINER */}
                    <div className="flex flex-col gap-12 justify-center">
                        {/* BIOGRAPHY IMAGE */}
                        <motion.div
                            initial={{ opacity: 0, scale: 5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 2,
                                delay: 0.8,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                        >
                            <img
                                src="/huyen.png"
                                alt=""
                                width={150}
                                height={150}
                                className="w-35 h-35 rounded-full object-cover"
                            />
                        </motion.div>
                        {/* BIOGRAPHY TITLE */}
                        <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
                        {/* BIOGRAPHY DESC */}
                        <p className="text-lg">
                            Hello everyone, my name is <span className="bg-black text-white rounded text-bold"> HUYEN NGUYEN</span> or you can call me LINA. I am a junior Front-End Developer (web & mobile apps). I have successfully launched and sold an online business. I specialize in website and app development in the bike rental and food delivery sectors. I consider myself to have a strong work ethic and a passion for technology, as demonstrated through my self-learning experiences.
                        </p>

                        <p className="text-xl ">
                            My obsession is to deliver a digital experience that not only serves a great purpose, but gives your business an unfair advantage.
                        </p>
                        {/* BIOGRAPHY QUOTE */}
                        <span className="italic">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </span>
                        {/* BIOGRAPHY SIGN SVG*/}
                        <div className="self-end">
                            <svg
                                width="185"
                                height="77"
                                viewBox="0 0 653 297"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M66.5 141C66.5 149.389 73.9932 105.216 55.5 77.9999C46.584 64.8787 0.241037 58.1922 2.50001 39C2.85312 36 -0.5 21 12.0556 8.99994C20 4.0555 24.2047 9.5542 30.2222 9.99994M30.2222 9.99994C32.2857 10.1528 28.2655 9.99994 30.2222 9.99994ZM30.2222 9.99994C31.6921 9.99994 37 8.93552 37 12.2222C37 34.162 36 56.0491 36 77.9999C36 103.17 41 128.262 41 153.555C41 171.695 40.137 188.161 36.2223 205.778C35.3614 209.652 32.3151 213.454 28 213C18.5784 212.008 20 189.364 20 184C20 174.303 18.8561 164.105 22.5556 154.944C26.2469 145.804 29.7477 137.151 35.5 129.055C54.219 102.71 81.7252 89.5574 106.778 70.9999C113.85 65.7613 118.018 52.6679 121 44.9999C124.878 35.0278 128.015 25.3043 128.944 14.6111C129.519 8.00884 126 1.99994 118.5 1.99994C114.654 1.99994 110.84 1.15955 107.944 4.0555C104.079 7.92104 101.193 14.616 99 19.6111C80.5903 61.5443 85 108.295 85 153C85 167.176 81.9255 185.566 87.5 198.944C89.7742 204.402 93.5128 215 101 215C108.829 215 112.62 211.516 117.778 205.555C125.793 196.293 133.207 186.119 137.222 174.555C139.974 166.63 141 156.436 141 148C141 146.479 140.207 141.94 141.056 140.667C141.15 140.526 142.911 145.659 143 146C143.733 148.809 144.541 151.575 145 154.444C146.683 164.961 149.671 175.264 151.222 185.778C151.964 190.808 154.156 203 161 203C167.346 203 171.849 194.226 175 189.5C180.609 181.086 186 171.504 186 161.055C186 158.319 183.761 141.406 186 146.444C190.186 155.863 190.588 176.78 195 186.444C202.5 206 208.5 190 218 194.5C220 199.5 237.346 188.2 239 184C241.247 178.296 243.691 172.678 246 167C247.956 162.188 248.822 157.423 250.444 152.555C251.158 150.415 251.129 147.444 252.556 151.111C255.407 158.444 258.035 165.961 264 171.5C265.809 173.18 266.749 175.097 269 176.222C273.427 178.435 275.116 170.742 276.667 167.667C281.692 157.699 285.584 147.464 290.222 137.444C290.98 135.808 291.754 134.196 292.5 132.555C292.585 132.368 293.153 130.436 293.222 130.444C295.513 130.731 294 156.225 294 159.055C294 175.702 286.724 194.683 279.5 209.444C272.301 224.156 264.281 237.803 250.667 247.333C247.024 249.883 237.195 253.034 237 246C236.509 228.314 248.825 216.081 261.167 204.389C272.897 193.276 285.831 184.575 300.5 178.055C313.222 172.401 334.214 173.037 338 156C339.304 150.131 340.514 144.392 334.445 141C332.752 140.054 329.125 137.16 327 138.222C324.98 139.232 323.62 148.086 323 150.222C321.008 157.085 315.03 180.741 324.611 185C334.603 189.441 340.668 176.493 345.556 170.111C350.833 163.22 355.168 156.131 358.778 148.222C359.845 145.884 361.345 140.099 363.222 138.222C363.615 137.83 367.729 151.489 367.945 153C368.198 154.775 367.945 170.652 367.945 172.444C367.945 175.093 368.86 153.445 369 152.5C370.876 139.841 381.475 128.026 392.222 121.778C396.487 119.298 406.18 116.516 409 122C415.365 134.376 411.633 150.523 405.556 162.389C404.367 164.709 401.111 169.603 401.111 172.444C401.111 173.497 416.469 164.356 417.722 163.667C426.809 158.669 434.435 151.696 443.333 146.444C443.513 146.338 448.158 143.684 445.389 144.278C436.047 146.28 426.659 152.158 418.333 156.444C363.483 184.688 310.829 217.56 258.111 249.555C239.401 260.911 220.74 272.883 202.889 285.555C199.629 287.87 194.5 290.758 192.333 294.278C191.612 295.449 197.39 295.003 197.667 295C232.402 294.659 266.321 277.331 297 262.889C377.334 225.071 458.331 188.59 539.333 152.222C576.319 135.616 613.515 119.435 651 104" stroke="black" stroke-width="3" stroke-linecap="round" />
                            </svg>
                        </div>
                        {/* BIOGRAPHY SCROLL SVG */}
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>
                    </div>

                    {/* SKILLS CONTAINER */}
                    <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
                        {/* SKILL TITLE */}
                        <motion.h1
                            initial={{ x: "-300px" }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            transition={{ delay: 0.5 }}
                            className="font-bold text-2xl"
                        >
                            SKILLS
                        </motion.h1>
                        {/* SKILL LIST */}
                        <motion.div
                            initial={{ x: "-300px" }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            className="flex gap-4 flex-wrap"
                        >
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                WordPress
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                HTML
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                CSS
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Adobe XD
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Figma
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Javascript
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Next.js
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                SCSS
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Tailwind CSS
                            </div>

                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Node.js
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                React.js
                            </div>



                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Framer Motion
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Three.js
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                WebGL
                            </div>



                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                AWS
                            </div>

                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Git
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Figma
                            </div>
                        </motion.div>
                        {/* SKILL SCROLL SVG */}
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>
                    </div>

                    {/* education CONTAINER */}
                    <div className="flex flex-col gap-12 justify-center" ref={educationRef}
                    >
                        {/* course TITLE */}
                        <motion.h1
                            initial={{ x: "-600px" }}
                            animate={isEducationRefInView ? { x: "0" } : {}}
                            transition={{ delay: 0.2 }}
                            className="font-bold text-2xl"
                        >Bachelor of Science (B.Sc.) in Digital Media
                        </motion.h1>
                        {/* EXPERIENCE LIST */}
                        <motion.div
                            initial={{ x: "-600px" }}
                            animate={isEducationRefInView ? { x: "0" } : {}}
                            className=""
                        >
                            {/* EXPERIENCE LIST ITEM */}
                            <div className="flex justify-between h-48">
                                {/* LEFT */}
                                <div className="w-1/3 ">
                                    {/* JOB TITLE */}
                                    <div className=" p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Graphic & Web Design Studio
                                    </div>
                                    <div className=" p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Senior React Developer
                                    </div>
                                </div>
                                {/* CENTER */}
                                <div className="w-1/6 flex justify-center">
                                    {/* LINE */}
                                    <div className="w-1 h-full bg-blue-300 rounded relative">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3 ">
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Graphic & Web Design Studio
                                    </div>
                                </div>
                            </div>
                            {/* EXPERIENCE LIST ITEM */}
                            <div className="flex justify-between h-48">
                                {/* LEFT */}
                                <div className="w-1/3 "></div>
                                {/* CENTER */}
                                <div className="w-1/6 flex justify-center">
                                    {/* LINE */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3 ">
                                    {/* JOB TITLE */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Senior React Developer
                                    </div>
                                    {/* JOB DESC */}
                                    <div className="p-3 text-sm italic">
                                        I spearheaded React-based application development,
                                        leveraging advanced skills.{" "}
                                    </div>
                                    {/* JOB DATE */}
                                    <div className="p-3 text-blue-400 text-sm font-semibold">
                                        2019 - 2024{" "}
                                    </div>
                                    {/* JOB COMPANY */}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                                        Microsoft
                                    </div>
                                </div>
                            </div>
                            {/* EXPERIENCE LIST ITEM */}
                            <div className="flex justify-between h-48">
                                {/* LEFT */}
                                <div className="w-1/3 ">
                                    {/* JOB TITLE */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Freelancer{" "}
                                    </div>
                                    {/* JOB DESC */}
                                    <div className="p-3 text-sm italic">
                                        I provided web solutions, applying a range of technologies
                                        to address client requirements.{" "}
                                    </div>
                                    {/* JOB DATE */}
                                    <div className="p-3 text-blue-400text-sm font-semibold">
                                        2010 - 2019{" "}
                                    </div>
                                </div>
                                {/* CENTER */}
                                <div className="w-1/6 flex justify-center">
                                    {/* LINE */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3 "></div>
                            </div>
                            {/* EXPERIENCE LIST ITEM */}
                            <div className="flex justify-between h-48">
                                {/* LEFT */}
                                <div className="w-1/3 "></div>
                                {/* CENTER */}
                                <div className="w-1/6 flex justify-center">
                                    {/* LINE */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3 ">
                                    {/* JOB TITLE */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Senior React Developer
                                    </div>
                                    {/* JOB DESC */}
                                    <div className="p-3 text-sm italic">
                                        I spearheaded React-based application development,
                                        leveraging advanced skills.{" "}
                                    </div>
                                    {/* JOB DATE */}
                                    <div className="p-3 text-blue-400 text-sm font-semibold">
                                        2019 - 2024{" "}
                                    </div>
                                    {/* JOB COMPANY */}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                                        Microsoft
                                    </div>
                                </div>
                            </div>

                        </motion.div>

                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>


                    </div>
                    {/* EXPERIENCE CONTAINER */}
                    <div className="flex flex-col gap-12 justify-center" ref={experienceRef}
                    >
                        {/* EXPERIENCE TITLE */}
                        <motion.h1
                            initial={{ x: "-600px" }}
                            animate={isExperienceRefInView ? { x: "0" } : {}}
                            transition={{ delay: 0.2 }}
                            className="font-bold text-2xl"
                        >
                            EXPERIENCE
                        </motion.h1>
                        {/* EXPERIENCE LIST */}
                        <motion.div
                            initial={{ x: "-600px" }}
                            animate={isExperienceRefInView ? { x: "0" } : {}}
                            className=""
                        >
                            {/* EXPERIENCE LIST ITEM */}
                            <div className="flex justify-between h-48">
                                {/* LEFT */}
                                <div className="w-1/3 ">
                                    {/* JOB TITLE */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Senior JavaScript Engineer
                                    </div>
                                    {/* JOB DESC */}
                                    <div className="p-3 text-sm italic">
                                        I led web development, offering expertise in JavaScript
                                        frameworks.{" "}
                                    </div>
                                    {/* JOB DATE */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        2024 - Present
                                    </div>
                                    {/* JOB COMPANY */}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                                        Apple
                                    </div>
                                </div>
                                {/* CENTER */}
                                <div className="w-1/6 flex justify-center">
                                    {/* LINE */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3 "></div>
                            </div>
                            {/* EXPERIENCE LIST ITEM */}
                            <div className="flex justify-between h-48">
                                {/* LEFT */}
                                <div className="w-1/3 "></div>
                                {/* CENTER */}
                                <div className="w-1/6 flex justify-center">
                                    {/* LINE */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3 ">
                                    {/* JOB TITLE */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Senior React Developer
                                    </div>
                                    {/* JOB DESC */}
                                    <div className="p-3 text-sm italic">
                                        I spearheaded React-based application development,
                                        leveraging advanced skills.{" "}
                                    </div>
                                    {/* JOB DATE */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        2019 - 2024{" "}
                                    </div>
                                    {/* JOB COMPANY */}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                                        Microsoft
                                    </div>
                                </div>
                            </div>
                            {/* EXPERIENCE LIST ITEM */}
                            <div className="flex justify-between h-48">
                                {/* LEFT */}
                                <div className="w-1/3 ">
                                    {/* JOB TITLE */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Freelancer{" "}
                                    </div>
                                    {/* JOB DESC */}
                                    <div className="p-3 text-sm italic">
                                        I provided web solutions, applying a range of technologies
                                        to address client requirements.{" "}
                                    </div>
                                    {/* JOB DATE */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        2010 - 2019{" "}
                                    </div>
                                </div>
                                {/* CENTER */}
                                <div className="w-1/6 flex justify-center">
                                    {/* LINE */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3 "></div>
                            </div>

                        </motion.div>
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>



                    </div>

                    {/*CV*/}
                    <div className="flex flex-col gap-12 justify-center pb-12">
                        <h1 className="font-bold text-2xl">
                            View Resume'
                        </h1>

                        <Link href="/about"><button className="p-4 rounded-lg ring-1 ring-black  hover:bg-black hover:text-white">
                            Download My Resume'
                        </button></Link>
                    </div>


                </div>

                {/* SVG CONTAINER */}
                <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
                    <Brain scrollYProgress={scrollYProgress} />
                </div>
            </div>
        </motion.div>


    );
};

export default AboutPage;