"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { HiOutlineChevronDown, HiX } from "react-icons/hi";
import { LuMenu } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";



interface MenuItem {
    label: string;
    href?: string;
    submenus?: MenuItem[];
    pageRange?: string;
}

const menuData: MenuItem[] = [
    {
        label: "About the report",
        pageRange: "04-17",
        submenus: [
            { label: "About the report", href: "/about-report", pageRange: "04" },
            { label: "A Glimpse into Our Impact", href: "/glimpse-impact", pageRange: "05" },
            { label: "Leadership Message", href: "/leadership-message", pageRange: "06" },
            { label: "About Mahindra Group", href: "/about-mahindra", pageRange: "08" },
            { label: "Our Journey So Far", href: "/journey", pageRange: "12" },
            { label: "Mahindra Susten at a Glance", href: "/at-a-glance", pageRange: "14" },
            { label: "Our Presence", href: "/presence", pageRange: "16" },
            { label: "Our Upcoming Project Portfolio", href: "/project-portfolio", pageRange: "17" },
        ]
    },
    {
        label: "Leadership and Oversight",
        pageRange: "18-45",
        submenus: [
            { label: "Leadership and Oversight", href: "/leadership", pageRange: "20" },
            { label: "Board Structure and Responsibilities", href: "/board-structure", pageRange: "20" },
            { label: "Sustainability and EHS Governance", href: "/sustainability-governance", pageRange: "22" },
            { label: "Succession Planning", href: "/succession-planning", pageRange: "24" },
            { label: "Ethics and Transparency", href: "/ethics-transparency", pageRange: "25" },
            { label: "Our Policies", href: "/policies", pageRange: "26" },
            { label: "Cybersecurity Management", href: "/cybersecurity", pageRange: "28" },
            { label: "Risk Management", href: "/risk-management", pageRange: "30" },
            { label: "Mahindra Susten's ESG Roadmap", href: "/esg-roadmap", pageRange: "32" },
            { label: "Materiality Assessment and Stakeholder Engagement", href: "/materiality-assessment", pageRange: "34" },
            { label: "ESG Risk Management", href: "/esg-risk", pageRange: "42" },
        ]
    },
    {
        label: "Operational Excellence",
        pageRange: "46-61",
        submenus: [
            { label: "Business Process", href: "/business-process", pageRange: "48" },
            { label: "Supply Chain Management", href: "/supply-chain", pageRange: "49" },
            { label: "Sustainable Design", href: "/sustainable-design", pageRange: "52" },
            { label: "Quality at Every Stage", href: "/quality", pageRange: "53" },
            { label: "Empowering Progress Through Business Excellence", href: "/business-excellence", pageRange: "56" },
            { label: "Driving Seamless Execution", href: "/seamless-execution", pageRange: "59" },
            { label: "Asset Management Strategy and Operations", href: "/asset-management", pageRange: "60" },
        ]
    },
    {
        label: "Climate Strategy and Sustainability",
        pageRange: "62-75",
        submenus: [
            { label: "Environmental and Social Management System (ESMS) Framework", href: "/esms-framework", pageRange: "64" },
            { label: "Climate Change Risk Assessments Approach", href: "/climate-risk", pageRange: "66" },
            { label: "Strengthening Our Response to Emerging Climate Risks", href: "/climate-response", pageRange: "72" },
            { label: "Environmental and Social Impact Assessment", href: "/impact-assessment", pageRange: "73" },
            { label: "Accelerating Climate Action Through Science-Based Targets", href: "/climate-action", pageRange: "75" },
        ]
    },
    {
        label: "Environmental Management",
        pageRange: "76-87",
        submenus: [
            { label: "Energy and Emission Management", href: "/energy-emission", pageRange: "78" },
            { label: "Biodiversity and Land Use", href: "/biodiversity", pageRange: "82" },
            { label: "Water and Wastewater Management", href: "/water-management", pageRange: "83" },
            { label: "Waste Management", href: "/waste-management", pageRange: "84" },
        ]
    },
    {
        label: "Empowering Our People",
        pageRange: "88-103",
        submenus: [
            { label: "Investing in Our People, Driving Our Future", href: "/investing-people", pageRange: "90" },
            { label: "Seamless Onboarding and Equitable Talent Acquisition", href: "/talent-acquisition", pageRange: "91" },
            { label: "Advancing Inclusion, Fairness and Gender Equity", href: "/inclusion-equity", pageRange: "92" },
            { label: "Listening, Learning, Evolving Together", href: "/learning-together", pageRange: "96" },
            { label: "Retention Through Growth and Recognition", href: "/retention-growth", pageRange: "98" },
            { label: "Building Future-Ready Capabilities", href: "/future-capabilities", pageRange: "99" },
            { label: "Nurturing Tomorrow's Leaders", href: "/nurturing-leaders", pageRange: "101" },
            { label: "Upholding Human Rights and Ethical Conduct", href: "/human-rights", pageRange: "103" },
        ]
    },
    {
        label: "Occupational Health and Safety",
        pageRange: "104-119",
        submenus: [
            { label: "Safeguarding Employee Health and Well-Being", href: "/employee-wellbeing", pageRange: "106" },
            { label: "Health, Safety and Environment (HSE) Vision", href: "/hse-vision", pageRange: "107" },
            { label: "Governance, Accountability and Oversight", href: "/governance-oversight", pageRange: "108" },
            { label: "Ensuring Regulatory Compliance", href: "/regulatory-compliance", pageRange: "109" },
            { label: "Structured Approach to Safety Management", href: "/safety-management", pageRange: "110" },
            { label: "Risk Management and Preventive Systems", href: "/preventive-systems", pageRange: "111" },
            { label: "Training for Operational Safety Excellence", href: "/safety-training", pageRange: "113" },
            { label: "Monitoring Safety Performance", href: "/safety-performance", pageRange: "114" },
            { label: "Occupational Health and Hygiene", href: "/occupational-health", pageRange: "116" },
            { label: "Emergency Preparedness and Fire Safety", href: "/emergency-preparedness", pageRange: "117" },
            { label: "PPE Management and Chemical Safety Controls", href: "/ppe-management", pageRange: "118" },
            { label: "Recognizing and Sustaining Safe Actions", href: "/safe-actions", pageRange: "119" },
        ]
    },
    {
        label: "Community Investments",
        pageRange: "120-147",
        submenus: [
            { label: "CSR Focus Area", href: "/csr-focus", pageRange: "122" },
            { label: "Ground-Level CSR Implementation", href: "/csr-implementation", pageRange: "123" },
            { label: "Education", href: "/education", pageRange: "126" },
            { label: "Rural Development", href: "/rural-development", pageRange: "132" },
            { label: "Health and Sanitation", href: "/health-sanitation", pageRange: "134" },
            { label: "Environment Stewardship", href: "/environment-stewardship", pageRange: "136" },
            { label: "Awards", href: "/awards", pageRange: "138" },
            { label: "Appendices", href: "/appendices", pageRange: "140" },
            { label: "Abbreviations", href: "/abbreviations", pageRange: "146" },
        ]
    }
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openAccordions, setOpenAccordions] = useState<Set<string>>(new Set());
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const toggleAccordion = (label: string) => {
        const newOpenAccordions = new Set(openAccordions);
        if (newOpenAccordions.has(label)) {
            newOpenAccordions.delete(label);
        } else {
            newOpenAccordions.add(label);
        }
        setOpenAccordions(newOpenAccordions);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setOpenAccordions(new Set());
    };

    return (
        <>
            {/* Header Bar */}
            <header
                className={`fixed top-0 left-0 w-full z-50 border-b border-neutral-200 transition-all duration-300 ${
                    scrolled && !isMenuOpen
                        ? "backdrop-blur-md bg-white/90 shadow-md"
                        : "bg-white/90"
                }`}
            >
                <nav className="mx-auto flex max-w-7xl items-center justify-between gap-12 p-3 lg:px-8">
                    {/* Logo */}
                    <div className="flex lg:flex-1">
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

                    {/* Hamburger Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="relative flex items-center gap-2 z-50 p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        Menu
                        {isMenuOpen ? (
                            <HiX className="h-6 w-6 text-black" />
                        ) : (
                            <LuMenu className="h-6 w-6 text-black" />
                        )}
                    </button>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Link
                            href="/contact"
                            className="flex items-center gap-2 rounded-full border px-6 py-2.5 font-figtree font-semibold text-sm border-neutral-300 text-black hover:border-black transition-colors"
                        >
                            Download Full Report
                            <IoCloudDownloadOutline className="h-5 w-5 text-black" />
                        </Link>
                    </div>
                </nav>
            </header>

            {/* Full-Page Navigation Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-white transition-transform duration-500 ease-in-out ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Navigation Content */}
                <div className="flex flex-col h-full pt-20 pb-6">
                    {/* Scrollable Menu Area */}
                    <div className="flex-1 overflow-y-auto px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            {/* Contents Header */}
                            <div className="mb-8">
                                <h1 className="text-4xl lg:text-4xl font-bold text-teal-500 mb-2">Contents</h1>
                                <div className="w-16 h-1 bg-teal-500 rounded"></div>
                            </div>

                            {/* Menu Items */}
                            <div className="space-y-2">
                                {menuData.map((item, index) => (
                                    <div key={item.label} className="border-b border-neutral-100 last:border-b-0">
                                        <button
                                            onClick={() => toggleAccordion(item.label)}
                                            className="w-full flex items-center justify-between py-4 text-left hover:bg-neutral-50 rounded-lg px-4 transition-colors group"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="flex flex-col">
                                                    <span className="text-lg lg:text-xl font-semibold text-neutral-900 group-hover:text-teal-600 transition-colors">
                                                        {item.label}
                                                    </span>
                                                </div>
                                            </div>
                                            <HiOutlineChevronDown
                                                className={`h-5 w-5 text-neutral-400 transition-transform duration-300 ${
                                                    openAccordions.has(item.label) ? 'rotate-180' : ''
                                                }`}
                                            />
                                        </button>

                                        {/* Accordion Content */}
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                                openAccordions.has(item.label)
                                                    ? 'max-h-screen opacity-100'
                                                    : 'max-h-0 opacity-0'
                                            }`}
                                        >
                                            <div className="pl-8 pb-4 space-y-2">
                                                {item.submenus?.map((submenu) => (
                                                    <Link
                                                        key={submenu.label}
                                                        href={submenu.href || "#"}
                                                        onClick={closeMenu}
                                                        className="flex items-center justify-between py-2 px-4 rounded-lg hover:bg-neutral-100 transition-colors group"
                                                    >
                                                        <span className="text-neutral-700 group-hover:text-neutral-900 font-medium">
                                                            {submenu.label}
                                                        </span>
                                                        {submenu.pageRange && (
                                                            <span className="text-lg text-neutral-400">
                                                                <MdArrowOutward />
                                                            </span>
                                                        )}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Backdrop */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/20"
                    onClick={closeMenu}
                />
            )}
        </>
    );
};

export default Header;