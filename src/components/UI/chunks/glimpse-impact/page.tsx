"use client";

import React from 'react'

const Glimpse = () => {
    return (
        <div className='bg-[#f1f7ef]'>
            <div>
                <div className='marginal text-[#58595b] text-md'>
                    <h1 className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold mb-12 pb-3'>
                        A Glimpse into Our Impact
                    </h1>
                    {/* Grid Layout */}
                    <div className='grid grid-cols-3 gap-6'>
                        {/* Row 1 */}
                        <div className=' p-6 rounded-lg border-b-4 border-[#4caf50]'>
                            <img src="/AboutTheReprt/image3.png" alt="Science Based Targets" className='w-32 mb-4' />
                            <h2 className='text-[#4caf50] text-6xl font-bold mb-2'>SBTi</h2>
                            <p className=''>targets approved in Dec'24</p>
                        </div>

                        <div className=' p-6 rounded-lg border-b-4 border-[#4caf50]'>
                            <h2 className='text-[#4caf50] text-6xl font-bold mb-2'>21+</h2>
                            <p className=''>Supplier ESG assessments completed</p>
                        </div>

                        <div className='relative overflow-hidden rounded-xl'>
                            <img src="/AboutTheReprt/smart-agriculture-iot-with-hand-planting-tree-background.webp" alt="Hands holding plant" className='absolute top-0 right-0 w-full h-full' />
                        </div>

                        {/* Row 2 */}
                        <div className=' p-6 rounded-lg border-b-4 border-[#4caf50]'>
                            <h2 className='text-[#4caf50] text-6xl font-bold mb-2'>5 GWp+</h2>
                            <p className=''>Portfolio (Execution till date)</p>
                        </div>

                        <div className=' p-6 rounded-lg border-b-4 border-[#4caf50]'>
                            <h2 className='text-[#4caf50] text-6xl font-bold mb-2'>55.08 <span className='text-4xl'>Mn+</span></h2>
                            <p className=''>Safe Man Hours till date</p>
                        </div>

                        <div className=' p-6 rounded-lg border-b-4 border-[#4caf50]'>
                            <h2 className='text-[#4caf50] text-6xl font-bold mb-2'>3.02 <span className='text-4xl'>Lakhs</span></h2>
                            <p className=''>Lives Impacted through CSR (since 2016)</p>
                        </div>

                        {/* Row 3 */}
                        <div className=' p-6 rounded-lg border-b-4 border-[#4caf50]'>
                            <h2 className='text-[#4caf50] text-6xl font-bold mb-2'>3.6 GWp+</h2>
                            <p className=''>Total projects under development pipeline</p>
                        </div>

                        <div className=' p-6 rounded-lg border-b-4 border-[#4caf50]'>
                            <h2 className='text-[#4caf50] text-6xl font-bold mb-2'>Zero</h2>
                            <p className=''>No of complaints received on non-compliance</p>
                        </div>

                        <div className=' p-6 rounded-lg border-b-4 border-[#4caf50]'>
                            <h2 className='text-[#4caf50] text-6xl font-bold mb-2'>100%</h2>
                            <p className=''>ESIA & CCRA completed for ongoing projects</p>
                        </div>

                        {/* Row 4 */}
                        <div className=' p-6 rounded-lg border-b-4 border-[#4caf50]'>
                            <h2 className='text-[#4caf50] text-6xl font-bold mb-2'>1<sup>st</sup></h2>
                            <p className=' text-sm'>Solar-wind hybrid project launched<br />(Cap: 150 MW - Hybrid, 100 MW Wind, 50 MW - Solar)</p>
                        </div>

                        <div className='rounded-xl relative overflow-hidden'>
                            <img src="/AboutTheReprt/solar-panels-wind-turbines-green-energy-concept.webp" className='w-full h-full object-cover rounded' />
                        </div>

                        <div className=' p-6 rounded-lg border-b-4 border-[#4caf50]'>
                            <h2 className='text-[#4caf50] text-6xl font-bold mb-2'>₹1,448<br /><span className='text-4xl'>crore</span></h2>
                            <p className=''>financial closure secured for Solar projects in FY25</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Glimpse