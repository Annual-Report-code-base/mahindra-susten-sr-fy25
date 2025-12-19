"use client"

import React from 'react'
import Image from 'next/image'

// Using a named export 'export const'
export const BoardStructure = () => {
    const boardMembers = [
        {
            name: "Mr. Ramesh Iyer",
            role: "Chairman and Non-Executive Director",
            tenure: "6 years 5 months",
            image: "/BoardStructure/M101_2022_Ramesh Iyer_014.webp",
            committees: [
                { type: "member", committee: "nomination" },
                { type: "member", committee: "audit" },
                { type: "chairman", committee: "ehs" }
            ]
        },
        {
            name: "Mr. Diwakar Gupta",
            role: "Independent Director",
            tenure: "4 years 5 months",
            image: "/BoardStructure/Diwakar Gupta.webp",
            committees: [
                { type: "chairman", committee: "nomination" },
                { type: "chairman", committee: "audit" },
                { type: "chairman", committee: "csr" }
            ]
        },
        {
            name: "Mr. Amarjyoti Barua",
            role: "Non-Executive Director",
            tenure: "10 months",
            image: "/BoardStructure/amar-jyoti.webp",
            committees: [
                { type: "observer", committee: "audit" }
            ]
        },
        {
            name: "Mr. Avinash Rao",
            role: "Managing Director and CEO",
            roleNote: "(w.e.f. 24th Sept' 2025)",
            tenure: "",
            image: "/BoardStructure/Avinash's Rao _susten CEO.webp",
            committees: [
                { type: "member", committee: "ehs" }
            ]
        },
        {
            name: "Mr. Amit Kumar Sinha",
            role: "Non-Executive Director",
            tenure: "3 years 8 months",
            image: "/BoardStructure/bod-amit-kumar.webp",
            committees: [
                { type: "member", committee: "nomination" },
                { type: "member", committee: "csr" }
            ]
        },
        {
            name: "Mr. Bruce Ross Crane",
            role: "Non-Executive Director",
            tenure: "2 years 3 months",
            image: "/BoardStructure/Bruce R Crane_INR.webp",
            committees: []
        },
        {
            name: "Ms. Anjali Gupta",
            role: "Independent Director",
            tenure: "2 years 1 months",
            image: "/BoardStructure/Anjali pic 1.webp",
            committees: [
                { type: "member", committee: "audit" },
                { type: "member", committee: "nomination" }
            ]
        },
        {
            name: "Mr. Puneet Renjhen",
            role: "Director",
            tenure: "2 years 11 months",
            image: "/BoardStructure/bod-puneet.webp",
            committees: [
                { type: "member", committee: "nomination" },
                { type: "member", committee: "audit" }
            ]
        },
        {
            name: "Mr. Debapratim Hajara",
            role: "Non-Executive Director",
            tenure: "2 years 3 months",
            image: "/BoardStructure/Deb Hajara_INR.webp",
            committees: [
                { type: "member", committee: "nomination" },
                { type: "member", committee: "audit" },
                { type: "member", committee: "csr" },
                { type: "member", committee: "ehs" }
            ]
        },
        {
            name: "Mr. Saurabh Rastogi",
            role: "Director",
            tenure: "11 months",
            image: "/BoardStructure/Saurabh Linkedin.webp",
            committees: []
        }
    ]

    const getCommitteeColor = (committee) => {
        const colors = {
            audit: "#0098a6",
            nomination: "#8cc63f",
            csr: "#006747",
            ehs: "#4bbb81"
        }
        return colors[committee] || "#666666"
    }

    const getCommitteeName = (committee) => {
        const names = {
            audit: "Audit Committee",
            nomination: "Nomination and Remuneration Committee",
            csr: "Corporate Social Responsibility Committee",
            ehs: "Environmental, Social, Governance and Health Committee ('EHS')"
        }
        return names[committee] || ""
    }

    const getRoleLabel = (type) => {
        const labels = {
            chairman: "C",
            member: "M",
            observer: "O"
        }
        return labels[type] || "M"
    }

    const getRoleName = (type) => {
        const names = {
            chairman: "Chairman",
            member: "Member",
            observer: "Observer"
        }
        return names[type] || "Member"
    }

    return (
        <div className='pt-20 pb-20'>
            <div className='marginal text-[#58595b] text-md'>
                <h1 className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold mb-2 pb-3'>
                    Board
                    Structure and
                    Responsibilities
                </h1>
                <h2 className='text-xl font-bold mb-5'>
                    Our Board of Directors
                    provides strategic oversight
                    that is both forward looking
                    and anchored in integrity. The
                    board is composed to reflect
                    a balance of experience,
                    independence and domain
                    expertise.
                </h2>

                {/* Committees Legend */}
                <div className='mt-8 mb-12'>
                    <h3 className='font-bold text-lg mb-4' style={{ color: '#8cc63f' }}>Committees</h3>
                    <div className='space-y-2 text-sm'>
                        <div className='flex items-center gap-2'>
                            <div className='w-4 h-4 rounded-full' style={{ backgroundColor: '#0098a6' }}></div>
                            <span>Audit Committee</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='w-4 h-4 rounded-full' style={{ backgroundColor: '#8cc63f' }}></div>
                            <span>Nomination and Remuneration Committee</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='w-4 h-4 rounded-full' style={{ backgroundColor: '#006747' }}></div>
                            <span>Corporate Social Responsibility Committee</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='w-4 h-4 rounded-full' style={{ backgroundColor: '#4bbb81' }}></div>
                            <span>Environmental, Social, Governance and Health Committee ("EHS")</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 mt-4 text-sm'>
                        <div className='flex items-center gap-2'>
                            <div className='w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center text-xs'>C</div>
                            <span>Chairman</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center text-xs'>M</div>
                            <span>Member</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center text-xs'>O</div>
                            <span>Observer</span>
                        </div>
                    </div>
                </div>

                {/* Board Members Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
                    {boardMembers.map((member, index) => (
                        <div key={index} className='flex flex-col'>
                            <div className='relative mb-4'>
                                <div className='absolute inset-0 border-2 border-gray-300 rounded-tl-[100px] rounded-br-[100px]'></div>
                                <div className='relative p-4'>
                                    <div className='w-full h-[350px] relative'>
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className='object-cover object-top rounded-tl-[90px] rounded-br-[90px]'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-start justify-between'>
                                <div className='flex-1'>
                                    <h3 className='font-bold text-base' style={{ color: '#8cc63f' }}>{member.name}</h3>
                                    <p className='text-sm text-[#58595b]'>{member.role}</p>
                                    {member.roleNote && (
                                        <p className='text-xs text-[#58595b]'>{member.roleNote}</p>
                                    )}
                                    {member.tenure && (
                                        <p className='text-sm mt-2'>
                                            <span className='font-bold' style={{ color: '#8cc63f' }}>Tenure - </span>
                                            <span className='text-[#58595b]'>{member.tenure}</span>
                                        </p>
                                    )}
                                </div>
                                {member.committees.length > 0 && (
                                    <div className='flex gap-1 ml-2'>
                                        {member.committees.map((item, idx) => {
                                            const color = getCommitteeColor(item.committee)
                                            const label = getRoleLabel(item.type)
                                            const title = `${getRoleName(item.type)} ${getCommitteeName(item.committee)}`
                                            return (
                                                <div
                                                    key={idx}
                                                    className='w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold'
                                                    style={{ backgroundColor: color }}
                                                    title={title}
                                                >
                                                    {label}
                                                </div>
                                            )
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}