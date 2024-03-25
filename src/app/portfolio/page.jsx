"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
    {
        id: 1,
        //color: "from-red-300 to-blue-300",
        //title: "Voice Assistant",
        desc: " I discovered the power of Next.js and Framer Motion through a tutorial, which led me to create this dynamic and captivating portfolio. My portfolio stands as a testament to my growth and determination as a web developer.",
        img: "/post.png",
        link: "https://www.behance.net/gallery/194679095/Personal-Portfolio_Shades-of-Black-White",
        link2: "https://github.com/Linahapham/Huyenpost.git",
    },
    {
        id: 2,
        //color: "from-blue-300 to-violet-300",
        //title: "UX-Design",
        desc: "Welcome to the new Citizens Advice Bristol website—a user-friendly hub for community support. Simplified navigation, enhanced search, and tailored resources await. Join us on this journey of empowerment..",
        img: "/bab.png",
        link: "https://lama.dev",
        link2: "https://www.behance.net/gallery/193529083/Sustainable-food-choices-for-students",
    },
    {
        id: 3,
        //color: "from-violet-300 to-purple-300",
        //title: "Design Solution ",
        desc: "Be Productive is your ultimate productivity companion, built with Kotlin for Android. It follows the Pomodoro Technique, helping users focus for 25 minutes and take a 5-minute break. Plus, it includes note-taking and articles features, all designed on Figma and developed to perfection.",
        img: "/bepro.png",
        link: "https://www.behance.net/gallery/193525385/BeProductive_Kotlin-Mobile-Application",
        link2: "http://localhost:3000/portfolio",
    },
    {
        id: 4,
        //color: "from-purple-300 to-red-300",
        //title: "Mobile Application",
        desc: "BeProductive is an Android application developed using the Kotlin programming language. Designed and developed as part of a mobile application module, it aims to enhance productivity by offering intuitive task management and scheduling features. Are you curious about how it all comes together? ",
        img: "/sustainable.png",
        link: "https://www.behance.net/gallery/193525385/BeProductive_Kotlin-Mobile-Application",
        link2: "http://localhost:3000/portfolio",
    },

    {
        id: 5,
        //color: "from-red-300 to-yellow-300",
        //title: "BikePal",
        desc: "BikePal is my first Bootstrap 5 project, born from my Graphic and Web Studio module at UWE. It's where I learned the ropes of web design and development. From crafting an intriguing logo to mastering responsive layouts, BikePal encapsulates my journey and newfound skills in a sleek and user-friendly website.",
        img: "/bikepal.png",
        link: "https://t47-nguyen.github.io/BikePal/",
        link2: "http://localhost:3000/portfolio",
    },
    {
        id: 6,
        //color: "from-red-300 to-yellow-300",
        //title: "Clo-CloDry",
        desc: "Clo_CloDry marks my inaugural venture into website development, proudly showcasing my HTML5 UP and CSS skills honed during the Graphic and Web Studio module in my first year at UWE. From conceptualization to execution, I meticulously crafted every aspect of the site, including the logo, posters, menu design, and content. This project not only demonstrates my technical proficiency but also reflects my creative vision and dedication to delivering an immersive digital experience.",
        img: "/cloclodry.png",
        link: "https://t47-nguyen.github.io/Clo-CloDry/",
        link2: "https://github.com/T47-Nguyen/Clo-CloDry.git",
    },
    {
        id: 7,
        //color: "from-red-300 to-yellow-300",
        //title: "Clo-CloDry",
        desc: "I've created a 2D animated video using After Effects to  capture the poignant narrative of academic pressure experienced by students in Vietnam due to parental expectations. It's a powerful portrayal of a universal issue, highlighting the importance of empathy and understanding in supporting students' mental and emotional well-being.",
        img: "/mp.png",
        link: "https://youtu.be/EutHQKlLNeI",
        link2: "https://youtu.be/EutHQKlLNeI",
    },
];

const PortfolioPage = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({ target: ref });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);

    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className="h-[600vh] relative" ref={ref}>
                <div className="w-screen h-[calc(100vh-6rem)] flex flex-col gap-20 text-4xl font-bold md:text-4xl lg:text-5xl xl:text-8xl items-center justify-center text-center">
                    <h1>
                        HUYEN@PROJECTS
                    </h1>

                    {/* Move the SVG here */}
                    <motion.svg
                        initial={{ opacity: 0.2, y: 0 }}
                        animate={{ opacity: 1, y: "10px" }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width={50}
                        height={50}
                        onClick={() => {
                            // Scroll to the section below using smooth behavior
                            document.getElementById("projectSection").scrollIntoView({ behavior: "smooth" });
                        }}
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
                <div id="projectSection" className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden bg-gradient-to-b from-red-100 to-blue-100">
                    <motion.div style={{ x }} className="flex">
                        <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-b from-red-100 to-blue-100 " />
                        {items.map((item) => (
                            <div
                                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-b from-red-100 to-blue-100 `}
                                key={item.id}
                            >
                                <div className="flex flex-col gap-8 text-gray-600">
                                    <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                                        {item.title}
                                    </h1>
                                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[350px]">
                                        <Image src={item.img} alt="" fill />
                                    </div>
                                    <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                                        {item.desc}
                                    </p>
                                    <div className="flex">
                                        <Link href={item.link} className="flex justify-end">
                                            <button className="p-2 text-wrap text-sm md:p-4 md:text-md lg:p-4 lg:text-lg ring-1 ring-black  hover:bg-black hover:text-white font-semibold m-4 rounded">See Demo</button>

                                        </Link>
                                        <Link href={item.link2} className="flex justify-end">
                                            <button className=" p-2 text-wrap text-sm md:p-4 md:text-md lg:p-4 lg:text-lg ring-1 ring-black  hover:bg-black hover:text-white font-semibold m-4 rounded">Github</button>

                                        </Link>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center bg-gradient-to-b from-blue-100 to-red-200">
                <h1 className="text-xl font-bold md:text-4xl lg:text-5xl xl:text-8xl">Do you have a project?</h1>
                <div className="relative">
                    <motion.svg
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                        viewBox="0 0 300 300"
                        className="w-64 h-64 md:w-[500px] md:h-[500px] "
                    >
                        <defs>
                            <path
                                id="circlePath"
                                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                            />
                        </defs>
                        <text fill="#000">
                            <textPath xlinkHref="#circlePath" className="text-xl">
                                Front-end Developer and UI Designer
                            </textPath>
                        </text>
                    </motion.svg>
                    <Link
                        href="/contact"
                        className="font-semibold w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white  hover:bg-white hover:text-black  rounded-full flex items-center justify-center"
                    >
                        Hire Me
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default PortfolioPage;