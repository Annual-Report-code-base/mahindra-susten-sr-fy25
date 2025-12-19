import React from 'react'

const Presence = () => {
    return (
        <div className='pt-6 bg-gradient-to-b from-[#ade3e6] to-white'>
            <div className='marginal text-[#58595b] text-md'>
                <h1 className='text-2xl text-black font-bold mb-5'>
                    Our Presence
                </h1>
                <h1 className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold mb-2 pb-3'>
                    Reimagining Energy
                    Spanning Borders
                </h1>
                <h2 className='text-xl font-bold mb-5'>
                    As a prominent player in India’s solar renewable energy landscape, we
                    continue to broaden our footprint through responsibly developed, utilityscale projects. Guided by a focus on innovation and enduring impact we
                    are charting a course towards carbon neutrality while delivering reliable,
                    clean energy to communities and stakeholders nationwide.
                </h2>
                <div className='grid md:grid-cols-3 grid-cols-1'>
                    <div className='pb-3'>
                        <div className='text-[#a4c639] text-4xl w-fit font-bold pb-3 border-b border-[#40ad48]'>
                            1.54 GWp
                        </div>
                        <p className='pt-1 text-sm'>Developed portfolio</p>
                    </div>
                    <div className='pb-3 '>
                        <div className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold pb-3 border-b border-[#40ad48]'>
                            3.6 GWp+
                        </div>
                        <p className='pt-1 text-sm'>Under development</p>
                    </div>
                    <div className='pb-3'>
                        <div className='text-[#40ad48] text-4xl w-fit font-bold pb-3 border-b border-[#40ad48]'>
                            5 GWp+
                        </div>
                        <p className='pt-1 text-sm'>Renewable Energy projects
                            under portfolio till date</p>
                    </div>
                </div>
                <div className='w-[80%] mx-auto'>
                    <img src="/Presence/india.png" alt="" className='rounded-3xl mt-4'/>
                </div>
            </div>
        </div>
    )
}

export default Presence