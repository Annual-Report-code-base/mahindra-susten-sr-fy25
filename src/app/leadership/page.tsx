import React from 'react'
import Image from 'next/image'

const Leadership = () => {
    return (
        <div className='bg-gradient-to-b from-[#ade3e6] to-white'>
          
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
                            <p className='pt-1 text-sm'>Board Diversity</p>
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