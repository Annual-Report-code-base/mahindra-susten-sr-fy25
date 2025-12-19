"use client";

import { useState, useEffect } from "react"; // <--- Import useEffect
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const slideData = [
    { image: "/slider/1.webp", label: "" },
    { image: "/slider/2.webp", label: "" },
    { image: "/slider/3.webp", label: "" },
    { image: "/slider/4.webp", label: "" },
    { image: "/slider/5.webp", label: "" },
    { image: "/slider/6.webp", label: "" },
    { image: "/slider/7.webp", label: "" },
    { image: "/slider/8.webp", label: "" },
    { image: "/slider/9.webp", label: "" },
    { image: "/slider/10.webp", label: "" },
];

const AUTO_PLAY_DELAY = 2000; // Time in milliseconds (e.g., 5000ms = 5 seconds)

const About: React.FC = () => {
    const [page, setPage] = useState(0);

    const paginate = (dir: number) => {
        // Use a functional update to ensure we have the latest 'page' value
        setPage((prev) => (prev + dir + slideData.length) % slideData.length);
    };

    // --- Autoplay Logic ---
    useEffect(() => {
        const intervalId = setInterval(() => {
            // Advance to the next slide every AUTO_PLAY_DELAY milliseconds
            paginate(1);
        }, AUTO_PLAY_DELAY);

        // Cleanup function: clear the interval when the component unmounts
        // or when the dependencies (which are none in this case) change.
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures this effect runs once on mount
    // ----------------------

    const imageVariants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.6,
            },
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 py-16 px-4 md:px-12 items-center justify-center gap-12 overflow-hidden">
            {/* Left Content */}
            <motion.div
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <p className="text-xl md:text-2xl text-gray-600 mb-6">
                    Mahindra Susten at a Glance
                </p>
                {/* <h2 className="text-4xl md:text-4xl font-semibold bg-gradient-to-r from-[#2db6d5] to-[#fb9d1b] pb-6  w-fit bg-clip-text text-transparent leading-tight">
                    Empowering India for <br /> 15 Years and Beyond
                </h2> */}
                <div className="flex  items-cente mb-6 space-x-4">
                    <h2 className="text-4xl md:text-4xl font-extrabold text-black tracking-tigh leading-14 text-center">
                        Empowering India for <br /> 15 Years and Beyond
                    </h2>
                     <div className="flex h-22 mt-3 space-x-1">
                            {/* Blue Bar: #3facc4 */}
                            <div className="w-1" style={{ backgroundColor: '#3facc4' }}></div>
                            {/* Orange Bar: #f6a736 */}
                            <div className="w-1" style={{ backgroundColor: '#f6a736' }}></div>
                        </div>
                </div>
                <p className="text-base text-gray-800 font-bold mb-3 max-w-lg">
                    Mahindra Susten is among the early entrants of India’s renewable energy sector. Since our inception, we have assembled an IPP renewable asset portfolio surpassing 1.54 GWp, with an additional 3.6 GWp currently under development. Our journey highlights our meaningful contribution to the country’s clean energy imperatives.
                </p>
                {/* <p className="text-sm text-gray-500 mb-8 max-w-2xl">
                    Founded in 1945, the Mahindra Group is among India’s most respected and diversified federations, with operations in over 100 countries. It holds leadership positions in farm equipment, utility vehicles, financial services, and IT, while also maintaining a strong presence in renewable energy, agriculture, logistics, hospitality, and real estate. Guided by its purpose of Rise, Mahindra is committed to driving sustainable growth and positive change across communities and industries.
                </p> */}
                <div className="border mb-8 flex text-white md:flex-row flex-col w-full gap-3">
                    <div className="p-2 h-36 flex flex-col bg-gradient-to-br from-[#3facc4] to-[#f6a736] items-center justify-center md:w-[30%] rounded-2xl">
                        <h1 className="text-4xl font-bold text-center mb-2">294</h1>
                        <p className="text-lg text-center">Total headcount</p>
                    </div>
                    <div className="p-2 flex flex-col bg-gradient-to-br from-[#3facc4] to-[#f6a736] items-center justify-center md:w-[30%] rounded-2xl">
                        <h1 className="text-4xl font-bold mb-2 text-center">17%</h1>
                        <p className="text-lg text-center">Diversity</p>
                    </div>
                    <div className="p-2 flex flex-col bg-gradient-to-br from-[#3facc4] to-[#f6a736] items-center justify-center md:w-[30%] rounded-2xl">
                        <h1 className="text-4xl text-center font-bold mb-2">6,802</h1>
                        <p className="text-lg text-center">Total training hours</p>
                    </div>
                </div>
                {/* Read More Button */}
                <div className="w-fit border rounded-xl border-[#05aac5] px-6">
                    <Link
                        href="/corporate-overview"
                        className="group inline-flex items-center py-2 font-semibold text-sm tracking-wide transition-all duration-300 group-hover:text-gray-900 transform "
                    >
                        <span>Read More</span>
                        <svg
                            className="ml-3 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
                            fill="none"
                            stroke="#f8a923"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </Link>
                </div>
            </motion.div>

            {/* Right Image */}
            <div className="relative w-full md:w-1/2 max-w-xl aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <AnimatePresence initial={false}>
                    <motion.div
                        key={page}
                        className="absolute inset-0 z-10"
                        variants={imageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <Image
                            src={slideData[page].image}
                            alt={slideData[page].label}
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </AnimatePresence>

               

                {/* Arrows */}
                <div className="absolute top-4 right-4 flex gap-3 z-30">
                    <button
                        onClick={() => paginate(-1)}
                        className="bg-white/30 text-white backdrop-blur-sm p-3 rounded-full hover:bg-white/50 transition"
                    >
                        <FaArrowLeft />
                    </button>
                    <button
                        onClick={() => paginate(1)}
                        className="bg-white/30 text-white backdrop-blur-sm p-3 rounded-full hover:bg-white/50 transition"
                    >
                        <FaArrowRight />
                    </button>
                </div>

    
            </div>
        </div>
    );
};

export default About;