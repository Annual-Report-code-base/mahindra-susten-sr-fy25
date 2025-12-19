"use client";
// components/Header2.tsx (Elegant Version with react-icons/fa)

import { useState } from 'react';
import Link from 'next/link';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import { IoCloudDownloadOutline } from 'react-icons/io5';

// --- 1. Define TypeScript Interfaces ---

interface SubmenuItem {
    name: string;
    href: string;
}

interface DropdownMenuProps {
    title: string;
    submenus: SubmenuItem[];
}

interface MainMenuItem extends DropdownMenuProps { }


/**
 * 👑 Elevated Dropdown Menu Component
 */
const ElegantDropdownMenu = ({ title, submenus }: DropdownMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);

    // Define premium colors
    const primaryColor = 'text-gray-700 hover:text-slate-800';
    const accentColor = 'hover:bg-gray-50';

    return (
        <div
            className="relative group h-full flex items-center"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            {/* Main Menu Item */}
            <button
                style={{ fontFamily: "georama" }}
                // FIX: Changed font-[00] to font-medium (500) to match other links
                className={`flex items-center ${primaryColor} px-4 py-2 text-sm font-medium transition duration-300 ease-in-out relative
        after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-slate-800 after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:scale-x-100`}
            >
                {title}
                <FaChevronDown
                    className={`w-3 h-3 ml-2 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
                />
            </button>

            {/* Dropdown Content */}
            <div
                className={`absolute z-30 top-full left-1/2 transform -translate-x-1/2 mt-1 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden 
          transition-all duration-300 ease-out origin-top
          ${isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-90 invisible'}`}
            >
                <div className="py-2">
                    {submenus.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`block px-5 py-2 text-sm text-gray-800 ${accentColor} hover:text-slate-800 font-medium transition duration-200 border-l-4 border-transparent hover:border-slate-800`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Define your menu structure
const menuItems: MainMenuItem[] = [
    {
        title: 'About',
        submenus: [
            { name: 'About the report', href: '/corporate-overview' },
        ]
    },
    {
        title: 'Environment',
        submenus: [
            { name: 'Climate Strategy and Sustainability', href: '/climate_strategy' },
            { name: 'Environmental Management', href: '/environmental_management' },
        ]
    },
    {
        title: 'Social',
        submenus: [
            { name: 'Empowering Our People', href: '/empowering_our_people' },
            { name: 'Occupational Health and Safety', href: '/occupational_health_safety' },
            { name: 'Community Investments', href: '/community_investments' },
        ]
    },
    {
        title: 'Governance',
        submenus: [
            { name: 'Leadership and Oversight', href: '/leadership_and_oversight' },
            { name: 'Operational Excellence', href: '/operational_excellence' },
        ]
    },
];


/**
 * Main Navbar Component - Header2
 */
const Header2 = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-lg/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* 1. Left - Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="-m-1.5 p-1.5 font-bold text-black">
                            <Image
                                src="/logo.svg"
                                alt="Company Logo"
                                width={100}
                                height={60}
                                className=""
                            />
                        </Link>
                    </div>

                    {/* 2. Center - Desktop Menus */}
                    <div className="hidden lg:flex items-center lg:space-x-1">
                        {menuItems.map((item) => (
                            <ElegantDropdownMenu
                                key={item.title}
                                title={item.title}
                                submenus={item.submenus}
                            />
                        ))}
                        
                        {/* Awards & Appendices Link - FIXED */}
                        <div className="relative ml-4 group px-4 py-2"> 
                            <Link
                                href='/awards-and-appendices'
                                style={{ fontFamily: "georama" }} // FIX: Added font family
                                className="relative z-10 font-medium text-sm text-gray-700 hover:text-slate-800 transition duration-300" // FIX: Added colors and font-medium
                            >
                                Awards & Appendices
                            </Link>

                            <span
                                className="absolute left-0 bottom-0 h-[2px] w-full bg-slate-800
                                origin-center scale-x-0 transition-transform duration-300 ease-in-out
                                group-hover:scale-x-100
                                block"></span>
                        </div>

                    </div>

                    {/* 3. Right - Primary CTA Button */}
                    <div className="hidden lg:flex items-center">
                        <Link
                            target='_blank'
                            href="https://www.mahindrasusten.com/sites/default/files/2025-10/Mahindra%20Susten_Final%20SR_26.09.2025%20%281%29.pdf#toolbar=0&navpanes=0&scrollbar=0"
                            className="flex items-center gap-2 rounded-full border px-6 py-2.5 font-figtree font-semibold text-sm border-neutral-300 text-black hover:border-black transition-colors"
                        >
                            Download Full Report
                            <IoCloudDownloadOutline className="h-5 w-5 text-black" />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-slate-900 focus:outline-none transition duration-300"
                            aria-label="Toggle navigation"
                        >
                            {isMobileMenuOpen ? (
                                <FaTimes className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <FaBars className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile Menu Panel */}
            <div
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden transition-all duration-300 ease-in-out border-t border-gray-100`}
            >
                <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
                    {menuItems.map((item) => (
                        <div key={item.title} className="py-2 border-b border-gray-50 last:border-b-0">
                            <p className="text-slate-800 font-bold px-3 uppercase tracking-wider text-xs mb-1">{item.title}</p>
                            {item.submenus.map((sub) => (
                                <Link
                                    key={sub.name}
                                    href={sub.href}
                                    className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-slate-800 rounded-lg transition duration-200"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {sub.name}
                                </Link>
                            ))}
                        </div>
                    ))}

                    <Link
                        href="/download-report"
                        className="mt-4 block w-full text-center px-4 py-3 border border-transparent text-sm font-semibold rounded-full shadow-md text-white bg-slate-800 hover:bg-slate-900 transition duration-300 ease-in-out"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Download Full Report
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Header2;