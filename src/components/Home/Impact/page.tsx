"use client";

import React, { useState, useEffect } from 'react';

// 1. Cleaned up Marquee Component
const Marquee = ({ 
    children, 
    speed, 
    className 
}: { 
    children: React.ReactNode, 
    speed: number, 
    className?: string 
}) => {
    return (
        <div className={`overflow-hidden whitespace-nowrap ${className}`}>
            {/* Define Keyframes globally within the component scope for portability */}
            <style>
                {`
                @keyframes scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                .animate-marquee-scroll {
                    animation: scroll var(--marquee-duration) linear infinite;
                }
                /* Optional: Pause on hover */
                .animate-marquee-scroll:hover {
                    animation-play-state: paused;
                }
                `}
            </style>
            
            <div 
                className="inline-flex animate-marquee-scroll will-change-transform"
                style={{ 
                    // @ts-ignore: Custom CSS variable
                    '--marquee-duration': `${speed}s`,
                    width: 'max-content' // Ensures the container fits all items
                }}
            >
                {children}
                {children}
            </div>
        </div>
    );
};

const marqueeItems = [
    { text: "SBTi", subText: "targets approved in Dec'24" },
    { text: "21+", subText: "Supplier ESG assessments completed" },
    { text: "5 GWp+", subText: "Portfolio (Execution till date)" },
    { text: "55.08 mn+", subText: "Safe Man Hours till date" },
    { text: "3.02 Lakhs", subText: "Lives Impacted through CSR (since 2016)" },
    { text: "3.6 GWp+", subText: "Total projects under development pipeline" },
    { text: "Zero", subText: "NO. of complaints received on non-compliance" },
    { text: "100%", subText: "ESIA & CCRA cpmpleted for ongoing projects" },
    { text: "1st", subText: "Solar-wind hybrid project launched (Cap: 150 MW - Hybrid, 100 MW Wind, 50 MW - Solar)" },
    { text: "₹1,448 crore", subText: "financial closure secured for Solar projects in FY25" },
];

export default function ImpactRedesigned() {
    const [windowWidth, setWindowWidth] = useState(0);

    // Initialize state immediately to avoid hydration mismatch if possible, 
    // or handle initial load carefully.
    useEffect(() => {
        setWindowWidth(window.innerWidth);
        
        let timeoutId: NodeJS.Timeout;
        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setWindowWidth(window.innerWidth);
            }, 150);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeoutId);
        };
    }, []);

    const isMobile = windowWidth < 768;

    return (
        <div className="relative w-full mx-auto py-20 overflow-hidden 
                    bg-fixed bg-cover bg-center 
                    bg-[url('/home/lineart1.webp')]">

            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>

            <div className="relative z-10 space-y-12">
                {/* Header section */}
                <div className="relative w-full flex flex-col items-center justify-center px-4">
                    <div className="flex items-center space-x-4">
                        <h2 className="text-4xl md:text-4xl font-extrabold text-white tracking-tight text-center">
                            A Glimpse into Our Impact
                        </h2>
                        <div className="flex h-12 space-x-1">
                            <div className="w-1" style={{ backgroundColor: '#3facc4' }}></div>
                            <div className="w-1" style={{ backgroundColor: '#f6a736' }}></div>
                        </div>
                    </div>

                    <p className="mt-2 text-xl text-white max-w-3xl text-center">
                        Driving sustainable change and setting new benchmarks in the industry.
                    </p>
                </div>

                {/* Marquee section */}
                <div className="relative z-20 overflow-hidden py-4 -my-4">
                    {/* Increased speed duration for mobile to make it readable */}
                    <Marquee speed={isMobile ? 25 : 60} className="h-64 md:h-72">
                        {marqueeItems.map((item, idx) => (
                            <div
                                key={idx}
                                // Added flex-shrink-0 to ensure items don't squish
                                className="relative flex-shrink-0 flex flex-col justify-center items-center w-[280px] h-64 md:w-[320px] md:h-52 bg-gradient-to-br from-[#3facc4] to-[#f6a736] backdrop-blur-3xl border border-gray-700 mx-4 md:mx-6 rounded-3xl shadow-2xl p-6 transition-all duration-300 hover:scale-[1.03] hover:border-[#3facc4] group"
                            >
                                <p className="text-4xl md:text-4xl font-semibold font-sans text-white text-center leading-tight transition-all duration-300 group-hover:drop-shadow-lg group-hover:scale-[1.05]">
                                    {item.text}
                                </p>
                                <div className="w-14 h-[1px] bg-white mt-2 mb-2 rounded-full"></div>
                                <p className="text-base font-medium text-white text-center whitespace-normal">
                                    {item.subText}
                                </p>
                                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br from-[#3facc4] to-[#f6a736] blur-xl"></div>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
}