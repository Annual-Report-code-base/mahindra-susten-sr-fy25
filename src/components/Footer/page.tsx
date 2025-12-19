"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link"; // Import Link

const Footer: React.FC = () => {
  // Menu items now use an object with a 'label' and a specific 'href'
  const menuItems = [
    { label: "About the report", href: "/corporate-overview" },
    { label: "Leadership and Oversight", href: "/leadership_and_oversight" },
    { label: "Operational Excellence", href: "/operational_excellence" },
    { label: "Climate Strategy and Sustainability", href: "/climate_strategy" },
    { label: "Environmental Management", href: "/environmental_management" },
    { label: "Empowering Our People", href: "/empowering_our_people" },
    { label: "Occupational Health and Safety", href: "/occupational_health_safety" },
    { label: "Community Investments", href: "/community_investments" },
  ];

  return (
    <footer className="w-full bg-[#07507c] border-t border-gray-800 text-gray-200">
      <div className="mx-auto max-w-[90%] px-6 py-12">
        {/* --- Links Section --- */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6 mb-12">
          {menuItems.map((item) => (
            // Use item.href for the link destination
            <Link 
              key={item.label} // Use the unique label as the key
              href={item.href} 
              passHref
            >
              <span className="text-base text-gray-200 hover:text-white transition duration-200 border-b border-gray-700 pb-1 cursor-pointer">
                {/* Use item.label for the text displayed */}
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        {/* --- Divider --- */}
        <hr className="border-gray-600 mb-8" />

        {/* --- Logo and Copyright Section --- */}
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between">
          
          {/* Logo */}
          <Image
            src="/susten_white_logo.svg" // Replace with your logo path
            alt="Company Logo"
            width={130}
            height={50}
            className="object-contain"
          />
          
          {/* Copyright */}
          <p className="text-sm tracking-wide text-gray-400">
            &copy; {new Date().getFullYear()} Mahindra Susten Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;