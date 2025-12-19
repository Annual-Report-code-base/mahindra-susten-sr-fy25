"use client";

import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import Image from "next/image";

interface CardData {
    id: number;
    title: string;
    image: string;
    href: string;
    description: string;
    color: string;
}

const cardData: CardData[] = [
    {
        id: 1,
        title: "Financial Capital",
        image:
            "/imgs/Financial Capital/Financial-Capital-Background.webp",
        href: "/digital-solutions",
        description: "Next-gen digital transformation",
        color: "from-violet-500 to-purple-600",
    },
    {
        id: 2,
        title: "Manufactured and Intellectual Capital",
        image:
            "/imgs/Manufactured and Intellectual Capital/Manufactured and Intellectual Capital Background.webp",
        href: "/cloud-platform",
        description: "Scalable infrastructure solutions",
        color: "from-yellow-300 to-yellow-600",
    },
    {
        id: 3,
        title: "Human Capital",
        image:
            "/imgs/Human Capital/Human-capital.webp",
        href: "/data-insights",
        description: "Intelligent analytics platform",
        color: "from-red-500 to-red-600",
    },
    {
        id: 4,
        title: "Social and Relationship Capital",
        image:
            "/imgs/Social and Relationship Capital/Social and Relationship Capital.webp",
        href: "/security-suite",
        description: "Advanced protection systems",
        color: "from-sky-400 to-blue-600",
    },
    {
        id: 5,
        title: "Natural Capital",
        image:
            "/imgs/Natural Capital/Natural Capital.webp",
        href: "/ai-automation",
        description: "Smart process optimization",
        color: "from-green-500 to-green-600",
    },
];

// Custom Arrow Components
const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
        onClick={onClick}
        className="w-10 h-10 flex cursor-pointer items-center justify-center rounded-full bg-gray-200 text-black hover:bg-gray-3 00 transition absolute -bottom-12 right-1/2 translate-x-12"
    >
        <LuChevronRight size={20} />
    </button>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
        onClick={onClick}
        className="w-10 h-10 flex cursor-pointer items-center justify-center rounded-full bg-gray-200 text-black hover:bg-gray-300 transition absolute -bottom-12 left-1/2 -translate-x-12"
    >
        <LuChevronLeft size={20} />
    </button>
);

const Capitals: React.FC = () => {
    const handleCardClick = (href: string) => {
        console.log(`Navigating to: ${href}`);
    };

    const settings: Settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <div className="bg-gray-100 py-6 px-6 relative">
            <div className="max-w-[90%] mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl md:text-4xl font-thin text-gray-900 mb-6 tracking-tight">
                        Our Capitals
                    </h1>
                </div>

                {/* Slick Slider */}
                <Slider {...settings}>
                    {cardData.map((card) => (
                        <div
                            key={card.id}
                            className="px-4 group cursor-pointer"
                            onClick={() => handleCardClick(card.href)}
                        >
                            <div className="relative bg-white rounded-3xl overflow-hidden transition-all duration-700 ease-out group-hover:shadow-2xl group-hover:shadow-gray-200/50 border border-gray-100/50 group-hover:border-transparent">
                                {/* Image Section */}
                                <div className="relative h-82 overflow-hidden">
                                    <div className="w-full h-full relative">
                                        <Image
                                            src={card.image}
                                            alt={card.title}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover transition-all duration-1000 group-hover:scale-105 group-hover:brightness-110"
                                        />
                                    </div>
                                    {/* Gradient Overlay and Arrow remain the same */}

                                    {/* Gradient Overlay */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-20 transition-opacity duration-700`}
                                    ></div>

                                    {/* Floating Up-Right Arrow */}
                                    <div className="absolute top-6 right-6 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out transform translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 shadow-lg">
                                        <svg
                                            className="w-5 h-5 text-gray-800 transform transition-transform duration-300 group-hover:scale-110"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M7 17L17 7M17 7H7M17 7V17"
                                            />
                                        </svg>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-4">
                                    <h3 className="text-sm font-medium text-gray-500 mb-3 tracking-[0.02em]">
                                        {card.title}
                                    </h3>

                                </div>

                                {/* Subtle Hover Line */}
                                <div
                                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${card.color} w-0 group-hover:w-full transition-all duration-700 ease-out`}
                                ></div>
                            </div>
                        </div>
                    ))}
                </Slider>

                {/* Bottom Section */}
                <div className="w-fit mx-auto my-16">
                    <a
                        href="#"
                        className="group inline-flex items-center py-2 border-b font-semibold text-sm tracking-wide transition-all duration-300 hover:text-gray-900 hover:shadow-xl transform hover:-translate-y-1"
                    >
                        <span>Read More</span>
                        <svg
                            className="ml-3 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Capitals;
