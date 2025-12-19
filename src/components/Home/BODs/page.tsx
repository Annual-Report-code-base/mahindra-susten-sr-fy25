"use client";

import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// Define a type for the committee names
type CommitteeName =
  | "Audit Committee"
  | "Nomination & Remuneration Committee"
  | "Corporate Social Responsibility Committee"
  | "Environmental, Social, Governance and Health Committee (“EHS”)";

// Define a type for a committee member
type CommitteeMember = {
  name: CommitteeName;
  role: "C" | "M" | "O";
};

// Define a type for a director
type Director = {
  id: number;
  image: string;
  name: string;
  designation: string;
  din: string;
  tenure: string;
  committee: CommitteeMember[];
};

const BODs = () => {
  const sliderRef = useRef<Slider | null>(null);

  // Define committee colors with the new type
  const committeeColors: Record<CommitteeName, string> = {
    "Audit Committee": "#3facc4", // Tailwind's red-500 equivalent
    "Nomination & Remuneration Committee": "#a4c63a", // Tailwind's blue-500 equivalent
    "Corporate Social Responsibility Committee": "#1d5c33", // Tailwind's green-500 equivalent
    "Environmental, Social, Governance and Health Committee (“EHS”)": "#4bbc80", // Tailwind's yellow-500 equivalent
  };

  const directors: Director[] = [
    {
      id: 1,
      image: "/home/md/Anjali pic 1.webp",
      name: "Ms. Anjali Gupta",
      designation: "Independent Director",
      din: "",
      tenure: "2 years 1 months",
      committee: [
        { name: "Nomination & Remuneration Committee", role: "M" },
        { name: "Audit Committee", role: "M" },
      ],
    },
    {
      id: 2,
      image: "/home/md/Ramesh Iyer.webp",
      name: "Mr. Ramesh Iyer",
      designation: "Chairman and Non-Executive Director",
      din: "",
      tenure: "6 years 5 months",
      committee: [
        { name: "Nomination & Remuneration Committee", role: "M" },
        { name: "Audit Committee", role: "M" },
        { name: "Environmental, Social, Governance and Health Committee (“EHS”)", role: "C" },
      ],
    },
    {
      id: 3,
      image: "/home/md/md.webp",
      name: "Mr. Avinash Rao",
      designation: "Managing Director and CEO",
      din: "(w.e.f. 24th Sept' 2025)",
      tenure: "",
      committee: [
        { name: "Environmental, Social, Governance and Health Committee (“EHS”)", role: "M" },
      ],
    },
    {
      id: 4,
      image: "/home/md/bod-puneet.webp",
      name: "Mr. Puneet Renjhen",
      designation: "Director",
      din: "",
      tenure: "Tenure - 2 years 11 months",
      committee: [
        { name: "Nomination & Remuneration Committee", role: "M" },
        { name: "Environmental, Social, Governance and Health Committee (“EHS”)", role: "M" },
      ],
    },
    {
      id: 5,
      image: "/home/md/Diwakar Gupta.webp",
      name: "Mr. Diwakar Gupta",
      designation: "Independent Director",
      din: "",
      tenure: "4 years 5 months",
      committee: [
        { name: "Audit Committee", role: "C" },
        { name: "Nomination & Remuneration Committee", role: "C" },
        { name: "Corporate Social Responsibility Committee", role: "C" },
      ],
    },
    {
      id: 6,
      image: "/home/md/bod-amit-kumar.webp",
      name: "Mr. Amit Kumar Sinha",
      designation: "Non-Executive Director",
      din: "",
      tenure: "3 years 8 months",
      committee: [
        { name: "Environmental, Social, Governance and Health Committee (“EHS”)", role: "M" },
        { name: "Corporate Social Responsibility Committee", role: "M" },
      ],
    },
    {
      id: 7,
      image: "/home/md/Deb Hajara_INR.webp",
      name: "Mr. Debapratim Hajara",
      designation: "Non-Executive Director",
      din: "",
      tenure: "2 years 3 months",
      committee: [
        { name: "Audit Committee", role: "M" },
        { name: "Nomination & Remuneration Committee", role: "M" },
        { name: "Environmental, Social, Governance and Health Committee (“EHS”)", role: "M" },
        { name: "Corporate Social Responsibility Committee", role: "M" },
      ],
    },
    {
      id: 8,
      image: "/home/md/amar-jyoti.webp",
      name: "Mr. Amarjyoti Barua",
      designation: "Non-Executive Director",
      din: "",
      tenure: "10 months",
      committee: [
        { name: "Audit Committee", role: "O" },
      ],
    },
    {
      id: 9,
      image: "/home/md/Bruce R Crane_INR.webp",
      name: "Mr. Bruce Ross Crane",
      designation: "Non-Executive Director",
      din: "",
      tenure: "2 years 3 months",
      committee: [
      ],
    },
    {
      id: 9,
      image: "/home/md/Saurabh Linkedin.webp",
      name: "Mr. Saurabh Rastogi",
      designation: "Director",
      din: "",
      tenure: "11 months",
      committee: [
      ],
    },
  ];

  // Custom bottom arrows
  const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      onClick={onClick}
      className="bg-gray-200 cursor-pointer hover:bg-gray-50 shadow-md rounded-full p-3 border border-gray-200 hover:border-gray-300"
    >
      <LuChevronRight className="w-5 h-5 text-gray-700" />
    </button>
  );

  const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      onClick={onClick}
      className="bg-gray-200 cursor-pointer hover:bg-gray-50 shadow-md rounded-full p-3 border border-gray-200 hover:border-gray-300"
    >
      <LuChevronLeft className="w-5 h-5 text-gray-700" />
    </button>
  );

  // Slider settings
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false, // hide default arrows
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-  bg-white">
      {/* Header */}
      <div className="mb8 w-fit mx-auto text-center">
        <h1 className="text-4xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-[#3facc4] to-[#f6a736] bg-clip-text text-transparent leading-tight">
          Board Structure and Responsibilities
        </h1>
         <h2 className="text-xl  text-gray-500">
          Our Board of Directors provides strategic oversight that is both forward looking and anchored in integrity. The board is composed to reflect a balance of experience, independence and domain expertise.
        </h2>
      </div>

      {/* Slick Slider */}
      <Slider ref={sliderRef} {...settings}>
        {directors.map((director) => (
          <div key={director.id} className="px-2 sm:px-4">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-500 h-full">
              {/* Image */}
              <div className="relative w-full bg-gradient-to-tr from-gray-400 to-gray-100 h-[280px] sm:h-[350px] md:h-[360px] overflow-hidden rounded-lg">
                <Image
                  src={director.image}
                  alt={director.name}
                  fill
                  className="object-cover object-top scale-"
                />
              </div>

              {/* Content */}
              <div className="p-4 text-center h-34">
                <h3 className="text-base sm:text-lg text-[#40ad48] font-sans font-bold mb-1 leading-tight">
                  {director.name}
                </h3>
                <p className="text-gray-600 font-light text-sm mb-1">
                  {director.designation}
                </p>
                <p className="text-gray-600 font-light text-xs sm:text-sm">
                  {director.din}
                </p>
                {director.tenure && (
                  <p className="text-gray-600 font-light text-xs sm:text-sm">
                    <span className="text-[#40ad48] font-sans font-bold">Tenure</span> {director.tenure}
                  </p>
                )}


                {/* Committee Circles */}
                {director.committee && director.committee.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-2 mt-2">
                    {director.committee.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center font-sans justify-center w-6 h-6 rounded-full text-white font-bold text-sm"
                        style={{ backgroundColor: committeeColors[item.name] }}
                      >
                        {item.role}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Legend */}
      <div className="flex flex-col items-center gap-6 mt-8">
        {/* Committees Legend */}
        <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-700">
          <p className="font-semibold">Committees:</p>
          {Object.keys(committeeColors).map((committeeName, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: committeeColors[committeeName as CommitteeName] }}
              ></div>
              <span>{committeeName}</span>
            </div>
          ))}
        </div>

        {/* Roles Legend */}
        <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-700">
          <p className="font-semibold">Roles:</p>
          <div className="flex items-center gap-2">
            <span className="font-bold">C</span>
            <span>Chairman</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">M</span>
            <span>Member</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">O</span>
            <span>Observer</span>
          </div>
        </div>
      </div>

      {/* Bottom arrows */}
      <div className="flex justify-center gap-6 mt-6">
        <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
        <NextArrow onClick={() => sliderRef.current?.slickNext()} />
      </div>
    </div>
  );
};

export default BODs;