"use client";

import React, { useState, useEffect } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { FaCircleCheck } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

// --- Utility ---
const parseSuperscript = (text: string) => {
  return text.replace(/\*([^*]+)\*/g, "<sup>$1</sup>");
};

// --- Data ---
const journeyData = [
  {
    year: "2024",
    title: "Secured 1*st* Hybrid project",
    description: [
      "Secured 1*st* Hybrid project of 170 MWp in Maharashtra.",
      "Co-sponsored India's largest renewable energy InvIT",
      "Secured near-term net zero targets (SBTi)",
    ],
  },
  {
    year: "2023",
    title: "Commissioned advanced projects",
    description: [
      "Commissioned projects with 100% bifacial modules, fully automated dry cleaning.",
    ],
  },
  {
    year: "2022",
    title: "Utility-scale PV plant",
    description: ["Designed a utility-scale PV plant using 100% bifacial modules."],
  },
  {
    year: "2021",
    title: "Integrated Project with BESS",
    description: [
      "Commissioned one of India's largest solar parks in Rajasthan.",
      "India's 1*st* Solar integrated project with 15 MWh BESS",
    ],
  },
  {
    year: "2020",
    title: "Launched sustainable services",
    description: [
      "Partnership with Mitsui & Co. Ltd.",
      "Surpassed 2 GW portfolio. Initiated India's first floating solar pilot.",
    ],
  },
  {
    year: "2019",
    title: "Global leader in Solar & Storage",
    description: [
      "Recognized as GREAT PLACE TO WORK for 2*nd* consecutive year.",
      "Sakaka project commissioned (405 MWp, KSA)",
    ],
  },
  {
    year: "2018",
    title: "Recognized as GREAT PLACE TO WORK",
    description: [
      "Recognized as GREAT PLACE TO WORK",
      "Portfolio: IPP (1 GW) and overall (3 GW)",
    ],
  },
  {
    year: "2017",
    title: "Secured India's first 28 MWh BESS",
    description: ["Secured India's first 28 MWh BESS tender for NLC"],
  },
  {
    year: "2016",
    title: "Achieved 1 GW of installed capacity",
    description: ["Crossed turnover of ₹1000 Crore"],
  },
  {
    year: "2015",
    title: "Rebranded to Mahindra Susten",
    description: ["In-house designed Single axis tracker"],
  },
  {
    year: "2014",
    title: "1*st* IOT product launched",
    description: ["1*st* IOT product launched SolerPulse"],
  },
  {
    year: "2012",
    title: "1*st* to implement thin film modules",
    description: ["1*st* to implement First Solar thin film modules as IPP"],
  },
  {
    year: "2011",
    title: "India's 1*st* 5 MW tracker installation",
    description: ["India's 1*st* 5 MW single-axis tracker (Sunpower) installation"],
  },
  {
    year: "2010",
    title: "Incorporated as clean energy arm",
    description: ["Incorporated as the clean energy arm of the Mahindra Group."],
  },
];

const Timeline = () => {
  // State management
  const [lockedIndex, setLockedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Determine what to show: Hover takes priority, falling back to Lock
  const displayedIndex = hoveredIndex !== null ? hoveredIndex : lockedIndex;

  // --- Responsive Logic ---
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- Track Positioning Logic ---
  const calculateTrackX = () => {
    if (isMobile) return -(slideIndex * 100);
    const visibleItems = 5;
    const maxScrollIndex = journeyData.length - visibleItems;
    const safeIndex = Math.min(slideIndex, maxScrollIndex);
    return -(safeIndex * 20);
  };

  const trackX = calculateTrackX();

  const handleNext = () => {
    const visibleItems = isMobile ? 1 : 5;
    if (slideIndex < journeyData.length - visibleItems) {
      setSlideIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (slideIndex > 0) setSlideIndex((prev) => prev - 1);
  };

  const handleYearClick = (index: number) => {
    // If clicking the already locked item, unlock it. Otherwise, lock the new one.
    if (lockedIndex === index) {
      setLockedIndex(null);
    } else {
      setLockedIndex(index);
    }
  };

  return (
    <section className="py-8 bg-gray-100 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 relative">

         <div className="flex justify-center items-center mb-6 space-x-4">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tigh leading-14 text-center">
                            Our Sustainable Journey
                        </h2>
                        <div className="flex h-12 mt-3 space-x-1">
                            {/* Blue Bar: #3facc4 */}
                            <div className="w-1" style={{ backgroundColor: '#3facc4' }}></div>
                            {/* Orange Bar: #f6a736 */}
                            <div className="w-1" style={{ backgroundColor: '#f6a736' }}></div>
                        </div>
                    </div>

        {/* --- MAIN INTERACTION AREA --- */}
        <div className="relative" onMouseLeave={() => setHoveredIndex(null)}>
          
          {/* TRACK CONTAINER: Added styling to look good when empty */}
          <div className="relative bg-white rounded-2xl border border-slate-200 shadow-sm py-6 px-4 md:px-12 mb-8">
            
            {/* Navigation Buttons (Inside container now for cleaner look) */}
            <button
                onClick={handlePrev}
                disabled={slideIndex === 0}
                className={`absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-40 p-2 rounded-full bg-white shadow border border-slate-200 transition-all
                ${slideIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-slate-50 hover:text-[#3facc4]'}
                `}
            >
                <LuChevronLeft size={24} />
            </button>

            <button
                onClick={handleNext}
                disabled={slideIndex >= journeyData.length - (isMobile ? 1 : 5)}
                className={`absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-40 p-2 rounded-full bg-white shadow border border-slate-200 transition-all
                ${slideIndex >= journeyData.length - (isMobile ? 1 : 5) ? 'opacity-30 cursor-not-allowed' : 'hover:bg-slate-50 hover:text-[#3facc4]'}
                `}
            >
                <LuChevronRight size={24} />
            </button>

            {/* MASK & TRACK */}
            <div className="overflow-hidden w-full h-[140px]">
                <motion.div
                className="flex items-start w-full relative h-full"
                initial={false}
                animate={{ x: `${trackX}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                
                {/* CONNECTING LINE */}
                <div className="absolute top-[72px] left-0 h-[2px] bg-slate-200 z-0 w-[500%] origin-left"></div>

                {journeyData.map((item, index) => {
                    const isHovered = hoveredIndex === index;
                    const isLocked = lockedIndex === index;
                    const isActive = isHovered || isLocked;

                    return (
                    <div
                        key={index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onClick={() => handleYearClick(index)}
                        className="relative flex-shrink-0 flex flex-col items-center cursor-pointer group outline-none z-10 pt-4"
                        style={{ flexBasis: isMobile ? "100%" : "20%" }}
                    >
                        {/* Year Pill */}
                        <div className="relative h-[40px] flex items-center justify-center">
                        <div
                            className={`
                            px-5 py-2 rounded-full font-bold text-base md:text-lg border-2 transition-all duration-300
                            ${isActive
                                ? "bg-slate-900 text-white border-slate-900 scale-110 shadow-lg"
                                : "bg-white text-slate-500 border-slate-200 group-hover:border-[#3facc4] group-hover:text-[#3facc4]"
                            }
                            `}
                        >
                            {item.year}
                        </div>
                        </div>

                        {/* Dot Connection */}
                        <div className="mt-8 flex items-center justify-center h-[20px]">
                            {/* Standard Dot */}
                            <div
                                className={`
                                w-4 h-4 rounded-full border-[3px] shadow-sm transition-all duration-300 relative z-20 box-border
                                ${isActive 
                                    ? "bg-[#f6a736] border-white scale-150 ring-4 ring-[#f6a736]/30" 
                                    : "bg-white border-slate-300 group-hover:border-[#3facc4] group-hover:scale-125"
                                }
                                ${isLocked && !isHovered ? "ring-4 ring-[#f6a736]" : ""} 
                                `}
                            ></div>
                        </div>
                        
                        {/* "Locked" Indicator Label (Optional visual cue) */}
                        <div className={`mt-2 text-[10px] font-semibold text-[#f6a736] uppercase tracking-wider transition-opacity duration-300 ${isLocked ? 'opacity-100' : 'opacity-0'}`}>
                            Selected
                        </div>

                    </div>
                    );
                })}
                </motion.div>
            </div>
          </div>
          
          {/* --- CONTENT BOX --- */}
          {/* We keep a min-height to prevent layout jumping, but the box animates in/out */}
          <div className="relative w-full max-w-4xl mx-auto ">
             <AnimatePresence mode="wait">
                {displayedIndex !== null && (
                    <motion.div
                        key={displayedIndex} // This key ensures Framer animates when switching between years
                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-20"
                    >
                        <div className="p-6 md:p-10 bg-gradient-to-bl from-[#3facc4] to-[#f6a736]">
                            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start">
                                
                                <div className="md:w-1/4 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-white/20 pb-6 md:pb-0 md:pr-6">
                                    <span className="text-xs font-bold text-white/70 uppercase tracking-widest mb-1">Year</span>
                                    <span className="text-5xl md:text-6xl font-extrabold text-white tracking-tighter shadow-black drop-shadow-sm">
                                        {journeyData[displayedIndex].year}
                                    </span>
                                </div>

                                {/* Text Content */}
                                <div className="md:w-3/4 w-full text-center md:text-left">
                                    <h3 
                                        className="text-xl md:text-2xl font-bold text-white mb-6 leading-tight"
                                        dangerouslySetInnerHTML={{ __html: parseSuperscript(journeyData[displayedIndex].title) }}
                                    ></h3>
                                    
                                    <ul className="space-y-4 inline-block text-left">
                                        {journeyData[displayedIndex].description.map((desc, i) => (
                                        <li key={i} className="flex items-start gap-3 text-white text-[15px] md:text-base leading-relaxed opacity-95">
                                            <div className="mt-1 bg-white/20 p-1 rounded-full flex-shrink-0">
                                                <FaCircleCheck className="w-3 h-3 text-white" />
                                            </div>
                                            <span dangerouslySetInnerHTML={{ __html: parseSuperscript(desc) }} />
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Decorative bottom bar */}
                        <div className="h-1.5 w-full bg-[#f6a736]"></div>
                    </motion.div>
                )}
             </AnimatePresence>
             
             {/* Empty State Placeholder (Visible when nothing is selected) */}
             {displayedIndex === null && (
                 <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center h-full text-slate-400"
                >
                   
                 </motion.div>
             )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Timeline;