"use client"

import MaskText from '@/components/Common/MaskText/page';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

const Projects = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const projects = [
        {
            id: 1,
            image: "/imgs/Overseas Project Under Execution/Project1.webp",
            cost: "130",
            currency: "USD",
            unit: "Mn",
            title: "Construction of 2000 Social housing units in Hulhumale Maldives",
            location: "Maldives"
        },
        {
            id: 2,
            image: "/imgs/Overseas Project Under Execution/Project2.webp",
            cost: "1.78",
            currency: "USD",
            unit: "Mn",
            title: "Construction of Chancery, Cultural Centre and Residences for High Commission of India, Victoria (Mahe), Seychelles",
            location: "Seychelles"
        },
        {
            id: 3,
            image: "/imgs/Overseas Project Under Execution/Project3.webp",
            cost: "1.07",
            currency: "USD",
            unit: "Mn",
            title: "PMC services for Construction of Chancery cum Residential complex for Consulate General of India in Jeddah",
            location: "Jeddah"
        },
        {
            id: 4,
            image: "/imgs/Overseas Project Under Execution/Project4.webp",
            cost: "3.10",
            currency: "USD",
            unit: "Mn",
            title: "Bank of Baroda, Mauritius",
            location: "Mauritius"
        },
        {
            id: 5,
            image: "/imgs/Overseas Project Under Execution/Project5.webp",
            cost: "0.64",
            currency: "USD",
            unit: "Mn",
            title: "Mauritius Police academy",
            location: "Mauritius"
        },
        {
            id: 6,
            image: "/imgs/Overseas Project Under Execution/Project6.webp",
            cost: "0.59",
            currency: "USD",
            unit: "Mn",
            title: "Forensic Science Laboratory, Mauritius",
            location: "Mauritius"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white">
            {/* Header */}
            <div className="mb-8">
                {/* <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                    Overseas Project Under Execution
                </h1> */}
                <div className="text-4xl text-center lg:text-4xl font-thin tracking-tight">
                    <MaskText phrases={["Overseas Project Under Execution"]} tag="h1" />
                </div>
            </div>

            {/* Slider Container */}
            <div className="relative overflow-hidden rounded-2xl bg-gray-50">
                <div
                    className="flex transition-transform duration-[1200ms] ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {projects.map((project, index: number) => (
                        <div key={project.id} className="w-full flex-shrink-0">
                            <div className="grid md:grid-cols-2 gap-0 min-h-[500px]">
                                {/* Image Section */}
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover rounded-2xl"
                                        sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,50vw"
                                        priority={index === 0} // preload first image
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                                </div>

                                {/* Content Section */}
                                <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
                                    <div className="mb-6">
                                        <div className="flex items-baseline gap-2 mb-4">
                                            <span className="text-orange-500 text-sm font-medium uppercase tracking-wider">
                                                {project.currency}
                                            </span>
                                            <span className="text-4xl md:text-6xl font-bold text-orange-500">
                                                {project.cost}
                                            </span>
                                            <span className="text-orange-500 text-lg font-medium">
                                                {project.unit}
                                            </span>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                            {project.title}
                                        </p>
                                        {/* <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                            <span className="text-gray-500 text-sm font-medium">
                                                {project.location}
                                            </span>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 group"
                >
                    <LuChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-gray-800" />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 group"
                >
                    <LuChevronRight className="w-6 h-6 text-gray-600 group-hover:text-gray-800" />
                </button>
            </div>

            {/* Pagination Dots */}
            {/* <div className="flex justify-center gap-3 mt-6">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${currentSlide === index
                            ? 'bg-orange-500 w-8'
                            : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                    />
                ))}
            </div> */}

            {/* Project Counter */}
            {/* <div className="flex justify-center mt-4">
        <span className="text-gray-500 text-sm">
          {currentSlide + 1} of {projects.length}
        </span>
      </div> */}
        </div>
    );
};

export default Projects;