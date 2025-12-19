'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ChairmanQuote: React.FC = () => {
    // Define the primary brand colors for reuse
    const primaryColor = '#3facc4'; // Cyan/Blue
    const secondaryColor = '#f6a736'; // Orange/Yellow

    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[90%] mx-auto">
                {/* Header Section */}
                <div className="relative w-full flex flex-col items-center justify-center mb-12">
                   
                     <div className="flex items-center space-x-4">
                        <h2 className="text-4xl md:text-4xl font-extrabold text-black tracking-tight text-center">
                            Leadership Message
                        </h2>
                        <div className="flex h-12 space-x-1">
                            {/* Blue Bar: #3facc4 */}
                            <div className="w-1" style={{ backgroundColor: '#3facc4' }}></div>
                            {/* Orange Bar: #f6a736 */}
                            <div className="w-1" style={{ backgroundColor: '#f6a736' }}></div>
                        </div>
                    </div>
                    <p className="mt-2 text-xl text-gray-500 max-w-xl text-center">A vision for a sustainable future.</p>
                </div>

                {/* Content Block */}
                <div className={`relative overflow-hidden bg-gradient-to-l from-[${primaryColor}] to-[${secondaryColor}] backdrop-blur-sm rounded-3xl p-8 lg:p-16 grid lg:grid-cols-5 gap-12 lg:gap-16 items-center border border-white/10 shadow-2xl`}>

                    {/* Image Section (Modern, Clean Crop) */}
                    <div className="lg:col-span-2 flex justify-center lg:justify-start">
                        <div className="relative w-full max-w-sm aspect-[4/5] overflow-hidden rounded-xl">
                            {/* Decorative gradient border/frame */}
                            <div className={`absolute inset-0 rounded-xl  bg-white/20`}>
                                <Image
                                    className="relative w-full h-full object-cover rounded-xl"
                                    // NOTE: Replace with the actual image path
                                    src="/home/md/md.webp" 
                                    alt="Mr Avinash Rao, Managing Director and CEO"
                                    width={400}
                                    height={500}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Quote Section (Focus on Impact) */}
                    <div className="lg:col-span-3  bg-white/20 p-7 rounded-xl space-y-6">
                        <div className="relative">
                            {/* Stylized Quote Icon */}
                            <svg className={`absolute rotate-180 -top-8 -left-4 w-16 h-16 text-[${primaryColor}] opacity-30 transform -scale-x-100`} fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10z"/>
                            </svg>
                            
                            {/* Quote Text: Prominent and focused on the future */}
                            <blockquote className="text-base md:text-xl font-light text-black relative pl-10 pr-4">
                                "The global energy transition has reached an inflection point, and the narrative must shift from “when renewables will dominate” to “how rapidly we can scale and minimize the use of fossil fuels”. As India makes way to becoming the 3rd largest producer of solar energy and 4th in total capacity, India's renewable energy leadership is a pathway to a thriving planet, resilient communities and a prosperous economy."
                            </blockquote>
                             <svg className={`absolute -bottom-10 right-1 w-16 h-16 text-[${primaryColor}] opacity-30 transform -scale-x-100`} fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10z"/>
                            </svg>
                        </div>

                        {/* Attribution */}
                        <div className="space-y-2 pt-6 pl-10">
                            <div className={`h-1 w-20 bg-gradient-to-r from-[${primaryColor}] to-[${secondaryColor}] rounded-full`}></div>
                            <div>
                                <p className="text-xl font-bold text-black tracking-wide">Avinash Rao</p>
                                <p className="text-sm text-gray-800 font-medium tracking-wider uppercase">
                                    MD and CEO
                                </p>
                            </div>
                        </div>

                        {/* Read More Button (Stylized with animation) */}
                        <div className="ml-10 pt-4">
                            <Link
                                href="/leadership-message"
                                className={`group inline-flex items-center py-3 px-6 rounded-full font-bold text-sm tracking-wide text-white transition-all duration-500 border border-black`}
                            >
                                <span className='text-black'>Read Full Message</span>
                                <svg
                                    className="ml-3 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    stroke="black"
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChairmanQuote;