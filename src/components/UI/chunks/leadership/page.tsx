import React from 'react'
import Image from 'next/image'

const Leadership = () => {
    return (
        <div className='pt-20 bg-gradient-to-b from-[#ade3e6] to-white'>
            <div className='marginal text-[#58595b] text-md'>
                <h1 className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold mb-2 pb-3'>
                    Leadership and Oversight
                </h1>
                <div className='relative pt-10 pb-20 overflow-hidden min-h-screen'>
                    <div className='absolute inset-0 z-0 opacity-40'>
                        <Image
                            src="/Leadership/image.png"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                            className="object-center"
                        />
                    </div>

                    <div className='relative z-10 flex flex-col lg:flex-row items-start lg:justify-between'>
                        <ul className='space-y-4 text-xl font-medium text-black max-w-xl pr-8'>
                            <li className='flex items-center'>
                                <span className='w-2 h-2 rounded-full bg-[#005c33] mr-4 flex-shrink-0'></span>
                                Board Structure and Responsibilities
                            </li>
                            <li className='flex items-center'>
                                <span className='w-2 h-2 rounded-full bg-[#005c33] mr-4 flex-shrink-0'></span>
                                Sustainability Governance & Oversight
                            </li>
                            <li className='flex items-center'>
                                <span className='w-2 h-2 rounded-full bg-[#005c33] mr-4 flex-shrink-0'></span>
                                Succession Planning
                            </li>
                            <li className='flex items-center'>
                                <span className='w-2 h-2 rounded-full bg-[#005c33] mr-4 flex-shrink-0'></span>
                                Ethics and Transparency
                            </li>
                            <li className='flex items-center'>
                                <span className='w-2 h-2 rounded-full bg-[#005c33] mr-4 flex-shrink-0'></span>
                                Our Policies
                            </li>
                            <li className='flex items-center'>
                                <span className='w-2 h-2 rounded-full bg-[#005c33] mr-4 flex-shrink-0'></span>
                                Cybersecurity Management
                            </li>
                            <li className='flex items-center'>
                                <span className='w-2 h-2 rounded-full bg-[#005c33] mr-4 flex-shrink-0'></span>
                                Risk Management
                            </li>
                            <li className='flex items-center'>
                                <span className='w-2 h-2 rounded-full bg-[#005c33] mr-4 flex-shrink-0'></span>
                                Mahindra Susten’s ESG Roadmap
                            </li>
                            <li className='flex items-center'>
                                <span className='w-2 h-2 rounded-full bg-[#005c33] mr-4 flex-shrink-0'></span>
                                Materiality assessment and Stakeholder Engagement
                            </li>
                            <li className='flex items-center'>
                                <span className='w-2 h-2 rounded-full bg-[#005c33] mr-4 flex-shrink-0'></span>
                                ESG Risk Management
                            </li>
                            <li className='flex items-center'>
                                <span className='w-2 h-2 rounded-full bg-[#005c33] mr-4 flex-shrink-0'></span>
                                <div className='flex space-x-2 mt-8 lg:mt-0'>
                                    <div className='w-12 h-12 flex-shrink-0'>
                                        <Image src="/Leadership/5.png" alt="SDG 5" width={100} height={100} />
                                    </div>
                                    <div className='w-12 h-12 flex-shrink-0'>
                                        <Image src="/Leadership/12.png" alt="SDG 12" width={100} height={100} />
                                    </div>
                                    <div className='w-12 h-12 flex-shrink-0'>
                                        <Image src="/Leadership/13.png" alt="SDG 13" width={100} height={100} />
                                    </div>
                                    <div className='w-12 h-12 flex-shrink-0'>
                                        <Image src="/Leadership/16.png" alt="SDG 16" width={100} height={100} />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='marginal'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    {/* Top Image (Group of people with solar panel) */}
                    <div className='relative rounded-br-full overflow-hidden'>
                        <Image
                            src="/Leadership/IMG-20240305-WA0058.webp" // Placeholder for the top image
                            alt="Group of people reviewing solar panels"
                            width={700}
                            height={500}
                            layout="responsive"
                            objectFit="cover"
                        />
                    </div>

                    {/* Metrics */}
                    <div className='grid items-center grid-cols-1'>
                        <div className='pb-3'>
                            <div className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold pb-3 border-b border-[#40ad48]'>
                                70%
                            </div>
                            <p className='pt-1 text-sm'>Non-executive Directors on Board</p>
                        </div>
                        <div className='pb-3 '>
                            <div className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold pb-3 border-b border-[#40ad48]'>
                                10%
                            </div>
                            <p className='pt-1 text-sm'>Non-executive Directors on Board</p>
                        </div>
                        <div className='pb-3'>
                            <div className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold pb-3 border-b border-[#40ad48]'>
                                20%
                            </div>
                            <p className='pt-1 text-sm'>Independent Directors on Board</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Text and Image */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10'>
                    {/* Left Text */}
                    <div className='text-xl text-justify text-[#58595b]'>
                        <p>
                            Our approach to governance transcends mere regulatory adherence, it serves as our foundation for cultivating trust, nurturing transparency and reinforcing our resilience for the long term. Operating within the arena of clean energy and infrastructure, we recognize that strong leadership and sound governance are indispensable to navigating dynamic market conditions while upholding our commitment to sustainability. Guided by an articulated framework, our leadership and Board plays an instrumental role in aligning our strategic direction with ethical conduct and evolving priorities of our stakeholders.
                        </p>
                    </div>

                    {/* Right Image (Group of workers indoors) */}
                    <div className='relative rounded-br-full overflow-hidden '>
                        <Image
                            src="/Leadership/DSC00639.webp" // Placeholder for the top image
                            alt="Group of people reviewing solar panels"
                            width={700}
                            height={500}
                            layout="responsive"
                            objectFit="cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leadership