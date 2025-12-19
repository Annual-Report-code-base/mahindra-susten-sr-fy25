"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
// Using the more modern and minimal Lucide icons
import { LuLeaf, LuZap } from "react-icons/lu";
import Image from "next/image";

// Data for the 'Key Metrics' section to make it dynamic
const keyMetrics = [
  {
    icon: LuZap,
    value: "1.54 GWp",
    description: "Renewable Asset Portfolio",
    color: "from-blue-400 to-indigo-600",
  },
  {
    icon: LuLeaf,
    value: "3.6 GWp",
    description: "Under Development Pipeline",
    color: "from-green-400 to-emerald-600",
  },
];

const Glance: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }, // Added delay
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    // MODIFIED: Root section for a white theme
    <section className="relative py-20 px-6 lg:px-12 overflow-hidden bg-gray-100 text-gray-800">
      {/* Animated gradient background - colors adjusted for a light theme to be subtle and darker */}
      <div className="absolute inset-0 -z-10 opacity-30">
        {/* Subtly darker colors for light background */}
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-gradient-to-r from-cyan-200 to-purple-300 rounded-full blur-[200px] opacity-20 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-gradient-to-r from-pink-200 to-indigo-300 rounded-full blur-[200px] opacity-20 animate-pulse delay-2000" />
      </div>

      {/* Content grid - adjusted for a cleaner 3-column flow on large screens */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >


        <motion.div
          variants={itemVariants}
          // MODIFIED: Card styles for light background
          className="relative p-8 rounded-3xl bg-gradient-to-br from-[#3facc4] to-[#f6a736] flex flex-col justify-center items-center backdrop-blur-md"
        >
          <div className="w-[80%]">
            <div className="flex items-center gap-4 mb-4">
              {/* MODIFIED: Icon container for light background - using a dark background for the icon */}
              <div className="flex items-center p-2 justify-center h-14 w-18 invert rounded-full">
                <Image
                  src="/purpose.png" // path to your icon inside /public/icons/
                  alt="Sample Icon"
                  width={48}
                  height={48}
                  className="object-contain" // Added invert to make icon white if it's dark
                />
              </div>
              {/* MODIFIED: Text color for light background */}
              <h3 className="text-2xl font-bold text-white">Our Purpose</h3>
            </div>
            {/* MODIFIED: Text color for light background */}
            <p className="text-white text-lg font-semibold leading-relaxed">
              "Re-imagining clean energy.... Empowering lives!"
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="relative flex flex-col items-center justify-center p-8 rounded-3xl l backdrop-blur-md h-full min-h-[200px]" // Added styling and h-full for vertical centering
        >
          <div className="p-4 rounded-xl  transition-all hover:scale-[1.02] duration-300">
            <Image
              src="/home/15yr.webp" // Replace with your logo path
              alt="Company Logo"
              width={220} // Increased size
              height={90} // Increased size
              className="object-contain"
            />
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          // MODIFIED: Card styles for light background
          className="relative p-8 rounded-3xl bg-gradient-to-br from-[#3facc4] to-[#f6a736] backdrop-blur-md"
        >
          <div className="flex items-center gap-4 mb-4">
            {/* MODIFIED: Icon container for light background - using a dark background for the icon */}
            <div className="flex items-center p-2 justify-center h-14 w-18 invertrounded-full">
              <Image
                src="/vision.svg" // path to your icon inside /public/icons/
                alt="Sample Icon"
                width={48}
                height={48}
                className="object-contain" // Added invert to make icon white if it's dark
              />
            </div>
            {/* MODIFIED: Text color for light background */}
            <h3 className="text-3xl font-bold text-white">Vision</h3>
          </div>
          {/* MODIFIED: Text color for light background */}
          <p className="text-white text-lg leading-relaxed">
            To be a leading provider of sustainable energy solutions by developing renewable energy assets and creating enduring value for our stakeholders and communities.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Glance;