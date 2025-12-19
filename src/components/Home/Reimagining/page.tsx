// src/components/Reimagining.tsx
"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import React from "react";

// Bubble Component for the background animation
const Bubbles = () => {
  const bubbles = Array.from({ length: 20 }).map((_, i) => { // Increased number of bubbles
    const duration = 15 + Math.random() * 20; // 15-35s duration
    const delay = Math.random() * 10; // 0-10s delay
    const scale = 0.5 + Math.random() * 0.8; // 0.5-1.3 scale
    const size = 200 + Math.random() * 300; // 200-500px size

    const bubbleVariants: Variants = {
      initial: {
        y: "110vh",
        scale: scale,
        opacity: 0,
        x: Math.random() * 100 - 50, // -50 to 50
      },
      animate: {
        y: "-10vh",
        scale: scale,
        opacity: [0.2, 0.6, 0.7, 0], // Higher opacity for more visibility
        transition: {
          duration: duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
          delay: delay,
        },
      },
    };

    return (
      <motion.div
        key={i}
        className="absolute rounded-full pointer-events-none"
        style={{
          width: size,
          height: size,
          left: `${Math.random() * 100}vw`,
          background: `radial-gradient(circle, rgba(135,206,235,0.4) 0%, rgba(173,216,230,0.2) 50%, rgba(135,206,235,0) 100%)`, // Skyblue
          filter: "blur(15px)", // Less blur for a more defined shape
        }}
        variants={bubbleVariants}
        initial="initial"
        animate="animate"
      />
    );
  });

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center">
        <div
          className="w-full h-full"
          style={{
            background: `radial-gradient(circle, rgba(135,206,235,0.2) 0%, rgba(173,216,230,0.2) 50%, rgba(135,206,235,0) 100%)`, // Skyblue
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            filter: "blur(25px)", // Less blur
            width: "80vw",
            height: "80vw",
          }}
        />
        <div
          className="w-full h-full"
          style={{
            background: `radial-gradient(circle, rgba(152,251,152,0.2) 0%, rgba(144,238,144,0.2) 50%, rgba(152,251,152,0) 100%)`, // Pale Green
            position: "absolute",
            top: "30%",
            left: "70%",
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            filter: "blur(25px)", // Less blur
            width: "60vw",
            height: "60vw",
          }}
        />
      </div>
      {bubbles}
    </div>
  );
};


// Split text into motion spans
const splitText = (text: string, variants: Variants) => {
  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${index}`}
      variants={variants}
      className="inline-block"
      style={{ display: "inline-block" }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ));
};

const Reimagining: React.FC = () => {
  // Container for a clean, horizontal reveal
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.5,
      },
    },
  };

  // "Horizontal Fade-In" letter animation
  const letterVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -20, // Start slightly to the left
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.6,
      },
    },
  };

  const imageVariants: Variants = {
  hidden: { opacity: 0, y: 150, rotate: -15, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      type: "tween",
      duration: 1.8,      // slow, smooth transition
      ease: "easeOut",    // smooth deceleration
      delay: 0.5,
    },
  },
};

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-[#f8fafc] py-18 overflow-hidden">
      {/* Background Animation */}
      <Bubbles />

      <div className="md:flex items-center gap-6">
      <motion.div
        className="relative z-10 text-center w-full mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-150px 0px -150px 0px" }}
        variants={containerVariants}
      >
        {/* Image */}
        <motion.div
          className="absolute z-10 will-change-transform"
          style={{ top: "-2%", left: "25%" }}
          variants={imageVariants}
        >
          <Image
            src="/home/rei.webp"
            alt="Leaf with windmills"
            width={400}
            height={400}
            priority
            className="object-contain drop-shadow-lg"
          />
        </motion.div>

        {/* Animated Text */}
        <h1 className="relative flex items-end mt-70 justify-center">
          <motion.span
            className="text-4xl font-extrabold text-[#3facc4] tracking-tight leading-none"
            variants={containerVariants}
          >
            {splitText("Re-imag", letterVariants)}
          </motion.span>

          <motion.span
            className="text-4xl font-extrabold text-[#3facc4] tracking-tight leading-none mx-1 relative"
            variants={containerVariants}
          >
            {splitText("ı", letterVariants)}
          </motion.span>

          <motion.span
            className="text-4xl font-extrabold text-[#3facc4] tracking-tight leading-none"
            variants={containerVariants}
          >
            {splitText("ning", letterVariants)}
          </motion.span>
        </h1>

        <h1 className="text-8xl pb-3 w-fit mx-auto font-extrabold bg-gradient-to-r from-[#3facc4] to-[#f6a736] bg-clip-text text-transparent tracking-tight leading-none">
            Energy
        </h1>
        <p className="text-2xl mt-2">15 years. Leading Impact. Empowering Lives</p>
      </motion.div>
      <div className="md:w-1/2">

      </div>
      </div>

    </div>
  );
};

export default Reimagining;