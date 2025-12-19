import React from 'react'
import Image from 'next/image'

const AtAGlancePage = () => {
  return (
    <div>
      <div className='marginal text-[#58595b] text-md'>
        <h1 className='text-2xl text-black font-bold mb-5'>
          Mahindra Susten at a Glance
        </h1>
        <h1 className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold mb-2 pb-3'>
          Empowering India for
          15 Years and Beyond
        </h1>
        <h2 className='text-xl font-bold mb-5'>
          Mahindra Susten is among the early entrants of India’s renewable energy
          sector. Since our inception, we have assembled a IPP renewable asset
          portfolio surpassing 1.54 GWp, with an additional 3.6 GWp currently under
          development. Our journey highlights our meaningful contribution to the
          country’s clean energy imperatives.
        </h2>
        <p className='mb-5'>
          As the clean-tech arm of the Mahindra Group, we have executed upwards of 5 GWp in renewable energy
          projects as an EPC player, across both domestic and global markets. Backed by a strong in-house
          EPC capability, we continue to catalyse the nation’s transition to a low-carbon future while advancing
          Environmental, Social and Governance (ESG) priorities through every stage of our operations
        </p>
        <h3 className='text-[#005c33] font-extrabold text-2xl'>
          Our Business Portfolio
        </h3>
        {/* Assuming image1.png is a diagram for the business portfolio */}
        <img src="/AtAGlance/image1.png" alt="Business Portfolio Diagram" className='md:w-[80%]' />
      </div>

      <div className='bg-gradient-to-b from-[#ade3e6] to-white'>
        <div className='marginal pt-12 pb-12'>
          {/* Main container for the "Our Purpose" section, styled with the curved top-left and right corners */}
          <div className='relative p-8 lg:p-12 rounded-3xl overflow-hidden border border-[#005c33]'>
            
            {/* Background elements (wind turbine and solar panel outline) */}
            <div className='absolute inset-0 z-0'>
              <div className='absolute right-0 top-0 w-1/2 h-full'>
                <Image
                  src="/AtAGlance/image2.png" // Placeholder for the line art of the wind turbine and solar panels
                  alt=""
                  layout="fill"
                  objectFit="contain"
                  className="z-0"
                />
              </div>
            </div>
            <div className='relative z-10'>
              <h1 className='text-4xl font-extrabold text-[#40ad48] mb-4'>
                Our Purpose
              </h1>
              <h2 className='text-2xl font-semibold text-[#58595b] mb-10'>
                Re-imagining clean energy.... <br/>Empowering lives!
              </h2>

              <h1 className='text-4xl font-extrabold text-[#005c33] mb-4 mt-8'>
                Vision
              </h1>
              <p className='text-2xl text-[#58595b] max-w-lg'>
                To be a leading provider of sustainable energy solutions by developing renewable energy assets and creating enduring value for our stakeholders and communities.
              </p>
            </div>
          </div>

          {/* Image and CFO Box Section */}
          <div className='grid grid-cols-1 lg:grid-cols-5 gap-6 mt-10'>
            <div className='lg:col-span-3 relative rounded-xl overflow-hidden shadow-xl flex'>
              <img src="/AtAGlance/RUVNL (1).webp" alt="" className='object-cover'/>
            </div>

            <div className='lg:col-span-2 relative p-4 lg:p-6 border border-gray-300 rounded-xl shadow-lg bg-white mt-8 lg:mt-0'>
              {/* Decorative Leaf Icon */}
              <div className='absolute -top-8 left-1/8 transform -translate-x-1/2 lg:translate-x-0 w-12 h-12'>
                <Image
                  src="/LeadershipMessage/leaf.png" // Placeholder for the green leaf icon
                  alt="Leaf Icon"
                  width={48}
                  height={48}
                />
              </div>
              <div className='pt-6 lg:pt-0'>
                {/* CFO Image */}
                <div className='flex justify-center mb-4'>
                  <div className='h-50 w-100 rounded-2xl overflow-hidden bg-[#d8e6e2] flex justify-center'>
                    <img src="/AtAGlance/Rakesh-2.webp" alt="" className='object-cover w-60 object-top'/>
                  </div>
                </div>

                {/* Message */}
                <p className='text-sm text-center mb-4'>
                  Our financial strategy continues to prioritize sustainability-led investments that deliver both long-term value and measurable environmental benefits. Guided by our vision to be a leading provider of sustainable energy solutions, we ensure that financial planning and capital allocation not only advance our decarbonisation journey but also create enduring value for our stakeholders and communities.
                </p>

                {/* Name and Title */}
                <div className='text-center'>
                  <p className='text-base font-bold text-[#40ad48]'>
                    Mr. Rakesh Khaitan
                  </p>
                  <p className='text-sm text-black'>
                    Chief Financial Officer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AtAGlancePage