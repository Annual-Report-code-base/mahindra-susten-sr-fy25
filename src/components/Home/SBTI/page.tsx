// components/SBTiTargets.tsx

import React from 'react';
// Import Lucide icons from react-icons/lu
import { LuTarget, LuZap, LuLeaf } from 'react-icons/lu';

// --- DATA STRUCTURE ---
const targetData = {
    company: "Mahindra Susten Pvt. Ltd.",
    title: "Approved Near-Term Science-Based Targets (SBTi)",
    baseYear: "FY2021",
    targetYear: "FY2030",
    alignment: "1.5°C Trajectory",
    targets: [
        {
            id: 1,
            scope: "Scope 1 & 2 Emissions",
            icon: LuZap, // Lightning icon for energy/direct emissions
            metric: "Absolute Reduction",
            value: "51.8%",
            description: "Commitment to reduce absolute Scope 1 and 2 GHG emissions by FY2030 from a FY2021 base year.",
        },
        {
            id: 2,
            scope: "Scope 3 Emissions",
            icon: LuLeaf, // Leaf icon for indirect/value chain emissions
            metric: "Intensity Reduction",
            value: "51.6%",
            unit: "per MWp",
            description: "Commitment to reduce Scope 3 GHG emissions intensity per MWp within the same timeframe.",
        },
    ],
    note: "Targets cover 100% of Scope 1 & 2 emissions and Scope 3 categories representing over 99% of total Scope 3 emissions.",
};

// --- SUB-COMPONENT: TargetCard ---
interface TargetCardProps {
    scope: string;
    icon: React.ElementType;
    metric: string;
    value: string;
    unit?: string;
    description: string;
}

const TargetCard: React.FC<TargetCardProps> = ({ scope, icon: Icon, metric, value, unit, description }) => (
    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
        <div className="flex items-center space-x-4 mb-4">
            {/* Gradient Icon Circle */}
            <div className="p-3 rounded-full bg-gradient-to-br from-indigo-500 to-sky-500 text-white">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{scope}</h3>
        </div>

        <div className="flex-grow">
            <p className="text-sm font-medium text-indigo-600 uppercase tracking-wider">{metric}</p>
            {/* Highlighted Value */}
            <div className="flex items-baseline mt-1 mb-3">
                <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-500">
                    {value}
                </span>
                {unit && (
                    <span className="ml-2 text-lg text-gray-500 font-medium">
                        {unit}
                    </span>
                )}
            </div>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    </div>
);

// --- MAIN COMPONENT: SBTiTargets ---
const SBTI: React.FC = () => {
    return (
        // Component container with nice padding and background
        <div className="py-16 sm:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center mb-12">

                    {/* <h2 className="pb-2 text-3xl font-semibold bg-gradient-to-r from-[#2db6d5] to-[#fb9d1b] bg-clip-text text-transparent sm:text-4xl">
                        {targetData.title}
                    </h2> */}
                    <div className="flex justify-center items-center mb-6 space-x-4">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tigh leading-14 text-center">
                            {targetData.title}
                        </h2>
                        <div className="flex h-12 mt-3 space-x-1">
                            {/* Blue Bar: #3facc4 */}
                            <div className="w-1" style={{ backgroundColor: '#3facc4' }}></div>
                            {/* Orange Bar: #f6a736 */}
                            <div className="w-1" style={{ backgroundColor: '#f6a736' }}></div>
                        </div>
                    </div>
                    <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                        Setting a clear path for decarbonization in line with climate science.
                    </p>
                </div>

                {/* Key Details Section */}
                <div className="flex justify-center mb-12 space-x-8 text-center">
                    <div className="p-3 border-r-2 border-indigo-200">
                        <p className="text-xs font-medium uppercase text-gray-500">Target Year</p>
                        <p className="text-xl font-bold text-gray-800">{targetData.targetYear}</p>
                    </div>
                    <div className="p-3 border-r-2 border-indigo-200">
                        <p className="text-xs font-medium uppercase text-gray-500">Base Year</p>
                        <p className="text-xl font-bold text-gray-800">{targetData.baseYear}</p>
                    </div>
                    <div className="p-3">
                        <p className="text-xs font-medium uppercase text-gray-500">Alignment</p>
                        <p className="text-xl font-bold text-green-600">
                            {targetData.alignment}
                        </p>
                    </div>
                </div>

                {/* Targets Grid */}
                <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
                    {targetData.targets.map((target) => (
                        <TargetCard key={target.id} {...target} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default SBTI;