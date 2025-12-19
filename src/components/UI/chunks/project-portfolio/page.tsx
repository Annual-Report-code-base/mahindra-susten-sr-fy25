import React from 'react'

const ProjectPortfolio = () => {
    return (
        <div>
            <div className='marginal text-[#58595b] text-md'>
                <h1 className='text-2xl text-black font-bold mb-5'>
                    Our Upcoming Project Portfolio
                </h1>
                <h1 className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold pb-3'>
                    Towards a Greener Future,
                    One Project at a Time
                </h1>
                <h2 className='text-xl font-bold mb-5'>
                    We are extending our renewable energy footprint through a robust pipeline
                    of utility-scale and open access projects across India.
                </h2>
                <p className='mb-5'>
                    With a focus on strategic project acquisition, technological integration and regional diversification, we are strongly positioned
                    to support the national energy transition. The portfolio outlined below represents projects secured through competitive
                    bidding mechanisms, encompassing both solar and hybrid installations.
                </p>
                <h3 className='text-[#005c33] text-center mb-2 font-extrabold text-xl'>
                    Utility scale projects won (PPA bases)
                </h3>
                <img src="/ProjectPortfolio/table1.png" alt="Business Portfolio Diagram" className='md:w-[80%] mx-auto' />

                <h3 className='text-[#005c33] text-center mb-2 font-extrabold text-xl mt-3'>
                    Open Access projects
                </h3>
                <img src="/ProjectPortfolio/table2.png" alt="Business Portfolio Diagram" className='md:w-[80%] mx-auto' />
            </div>
        </div>
    )
}

export default ProjectPortfolio