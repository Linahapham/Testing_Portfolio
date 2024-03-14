"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
    {
        id: 1,
        //color: "from-red-300 to-blue-300",
        title: "Design Solution",
        desc: "Say hello to my groundbreaking final project: Voice Assistant Food Shopping. No more scribbling on scraps of paper or fumbling with your phone while navigating the aisles. With Voice Assistant Food Shopping, you can plan meals, track inventory, and even receive personalized recipe suggestions—all through the power of your voice.",
        img: "/beproductive.png",
        link: "https://lama.dev",
        link2: "http://localhost:3000/portfolio",
    },
    {
        id: 2,
        //color: "from-blue-300 to-violet-300",
        title: "UX DESIGN",
        desc: "Welcome to the new Citizens Advice Bristol website—a user-friendly hub for community support. Simplified navigation, enhanced search, and tailored resources await. Join us on this journey of empowerment..",
        img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        link: "https://lama.dev",
        link2: "https://www.behance.net/gallery/193529083/Sustainable-food-choices-for-students",
    },
    {
        id: 3,
        //color: "from-violet-300 to-purple-300",
        title: "BeProductive ",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        link: "https://lama.dev",
        link2: "http://localhost:3000/portfolio",
    },
    {
        id: 4,
        //color: "from-purple-300 to-red-300",
        title: "Mobile Application",
        desc: "BeProductive is an Android application developed using the Kotlin programming language. Designed and developed as part of a mobile application module, it aims to enhance productivity by offering intuitive task management and scheduling features. Are you curious about how it all comes together? ",
        img: "/beproductive.png",
        link: "https://www.behance.net/gallery/193525385/BeProductive_Kotlin-Mobile-Application",
        link2: "http://localhost:3000/portfolio",
    },
    {
        id: 5,
        //color: "from-red-300 to-yellow-300",
        title: "POSH NAILS WEBSITE",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "https://lama.dev",
        link2: "http://localhost:3000/portfolio",
    },
];

const PortfolioPage = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({ target: ref });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className="h-[600vh] relative" ref={ref}>
                <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
                    <motion.h1
                        animate={{
                            scale: [1, 2, 1, 1, 1],
                            //rotate: [0, 0, 180, 180, 0],
                            borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.5, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 1
                        }}

                        className="">
                        Huyen@Projects
                    </motion.h1>
                    <p>

                    </p>

                </div>
                <div className="sticky top-0 flex h-screen gap-2 overflow-hidden ">
                    <motion.div style={{ x }} className="flex">
                        <div className="h-screen w-screen flex bg-gradient-to-b from-red-100 to-blue-100" />
                        {items.map((item) => (
                            <div
                                className={`h-screen w-screen flex items-center  justify-center bg-gradient-to-b from-red-100 to-blue-100`}
                                key={item.id}
                            >
                                <div className="flex flex-col gap-8 text-gray-600">
                                    <h1 className="text-xl font-bold md:text-2xl lg:text-4xl xl:text-5xl">
                                        {item.title}
                                    </h1>
                                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                                        <Image src={item.img} alt="" fill className="rounded-lg" />
                                    </div>
                                    <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                                        {item.desc}
                                    </p>
                                    <div className="flex">
                                        <Link href={item.link} className="flex justify-end">
                                            <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-gradient-to-b from-red-200 to-blue-200 text-gray-600 font-semibold m-4 rounded">See Demo</button>

                                        </Link>
                                        <Link href={item.link2} className="flex justify-end">
                                            <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-gradient-to-b from-red-200 to-blue-200 text-gray-600 font-semibold m-4 rounded">Github</button>

                                        </Link>

                                    </div>

                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            {/*SELECTED PROJECT */}
            <div className="h-full flex flex-col-3 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 bg-gradient-to-b from-blue-100 to-yellow-100 p-4 gap-8">

                <div className="flex gap-4">
                    {/* IMAGE CONTAINER */}
                    <div className="h-1/2 lg:h-full lg:w-1/2 relative items-center justify-center"
                    >
                        <img
                            src="/beproductive.png"
                            alt="" className="lg:w-35 lg:h-35  object-contain"
                        />
                    </div>
                    <div className="h-1/2 lg:h-full lg:w-1/2 relative items-center justify-center"
                    >
                        <img
                            src="/beproductive.png"
                            alt="" className="lg:w-35 lg:h-35  object-contain"
                        />
                    </div>
                    <div className="h-1/2 lg:h-full lg:w-1/2 relative items-center justify-center"
                    >
                        <img
                            src="/beproductive.png"
                            alt="" className="lg:w-35 lg:h-35  object-contain"
                        />
                    </div>




                </div>

            </div>

            {/*Do you have project */}
            <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center bg-gradient-to-b from-yellow-100 to-red-100">
                <h1 className="text-8xl">Do you have a project?</h1>
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
                        className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
                    >
                        Hire Me
                    </Link>
                </div>
            </div>
            {/*Keep in touch */}
            <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center bg-gradient-to-b from-red-100 to-red-200">

                <Link href="/contact"> <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">GET IN TOUCH</h1> </Link>

            </div>
        </motion.div >
    );
};

export default PortfolioPage;