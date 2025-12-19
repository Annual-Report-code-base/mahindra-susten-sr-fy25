"use client";

import MaskText from '@/components/Common/MaskText/page';
import React, { useState, useEffect, useRef } from 'react';

// New Marquee component using CSS animation for better performance
const Marquee = ({ children, speed, className }: { children: React.ReactNode, speed: number, className?: string }) => {
    return (
        <div className={`overflow-hidden whitespace-nowrap ${className}`}>
            <style jsx>{`
                @keyframes scroll {
                    from {
                        transform: translateX(0%);
                    }
                    to {
                        transform: translateX(-50%);
                    }
                }
                .animate-marquee {
                    animation: scroll ${speed}s linear infinite;
                }
            `}</style>
            <div className="inline-flex animate-marquee will-change-transform">
                {children}
                {children}
            </div>
        </div>
    );
};

// Marquee cards data
const marqueeItems = [
    { text: "Navratna CPSE", subText: "under MoHUA" },
    { text: "One of the largest", subText: "construction companies in India" },
    { text: "Presence across", subText: "India and Overseas" },
    { text: "64+", subText: "Years of experience" },
    { text: "₹1,20,533 Cr", subText: "Orderbook (Consolidated)" },
    { text: "₹22,110 Cr", subText: "Market cap as on March 31, 2025" },
];

export default function App() {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setWindowWidth(window.innerWidth);
            }, 150);
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeoutId);
        };
    }, []);

    const isMobile = windowWidth < 768;

    return (
        <div className="relative w-full min-h-scree pb-20 mt-6 rounded-3xl overflow-hidden font-sans text-white bg-gray-900">
            {/* Background image and overlay removed */}
            <div className="relative z-10">
                {/* Header section */}
                <div className="relative w-full h-50 flex flex-col items-center justify-center rounded-b-3xl">
                    <h1 className="relative z-10 text-4xl sm:text-4xl font-thin text-center px-4 mb-3">
                        <MaskText phrases={["Business Overview"]} tag="h1" />
                    </h1>
                    <div className="text-xl text-gray-300">
                        <MaskText phrases={["Driving Performance. Delivering Results."]} tag="h1" />
                    </div>
                </div>

                {/* Marquee section */}
                <div className="relative -mt-2 z-20">
                    <Marquee speed={isMobile ? 12 : 24} className="h-48">
                        {marqueeItems.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col items-center bg-white/20 px-12 py-14 mx-4 rounded-xl shadow-lg border border-white/20 space-y-2"
                            >
                                <p className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400 font-semibold whitespace-nowrap">
                                    {item.text}
                                </p>
                                <div className='w-14 h-[1px] bg-white'></div>
                                <p className="text-sm font-semibold whitespace-nowrap">{item.subText}</p>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
}