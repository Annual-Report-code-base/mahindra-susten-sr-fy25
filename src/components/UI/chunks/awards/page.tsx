import React from 'react'

const Awards = () => {
  return (
    <div>
      <div className='marginal text-[#58595b] text-md'>
        <h1 className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold pb-3'>
          Awards
        </h1>

        <p className='text-[#58595b] text-lg mb-5'>
          Over the years, our resolute focus on sustainable engineering, operational excellence and responsible business practices has garnered recognition from esteemed industry institutions and stakeholders alike. These accolades uphold the perseverance of our teams, the trust of our partners and our pursuit of creating long-term value for society and the environment.
        </p>

        {/* Awards Grid - Two Sections */}
        <div className=''>
          {/* Left Section - 6 Awards in 2 rows of 3 */}
          <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
              {/* Award 1 */}
              <div className='border-2 border-[#65acac] rounded-lg p-4'>
                <p className='text-sm text-[#58595b] mb-4 h-24'>
                  Brand of the Decade 2024 Renewable Energy category, BARC Asia
                </p>
                <img 
                  src="/Awards/a1.png" 
                  alt="Brand of the Decade Award" 
                  className='w-full  object-contain'
                />
              </div>

              {/* Award 2 */}
              <div className='border-2 border-[#65acac] rounded-lg p-4'>
                <p className='text-sm text-[#58595b] mb-4 h-24'>
                  Most Sustainable Organization Times Now, Global Sustainability Alliance Summit 2024
                </p>
                <img 
                  src="/Awards/a2.png" 
                  alt="Most Sustainable Organization Award" 
                  className='w-full  object-contain'
                />
              </div>

              {/* Award 3 */}
              <div className='border-2 border-[#65acac] rounded-lg p-4'>
                <p className='text-sm text-[#58595b] mb-4 h-24'>
                  Best in Sustainability in Procurement India Leadership Forum and Awards 2024
                </p>
                <img 
                  src="/Awards/a3.png" 
                  alt="Best in Sustainability Award" 
                  className='w-full  object-contain'
                />
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {/* Award 4 */}
              <div className='border-2 border-[#65acac] rounded-lg p-4'>
                <p className='text-sm text-[#58595b] mb-4 h-24'>
                  Excellence in Sustainability Service Category, Indian Chambers of Commerce
                </p>
                <img 
                  src="/Awards/a4.png" 
                  alt="Excellence in Sustainability Service Award" 
                  className='w-full  object-contain'
                />
              </div>

              {/* Award 5 */}
              <div className='border-2 border-[#65acac] rounded-lg p-4'>
                <p className='text-sm text-[#58595b] mb-4 h-24'>
                  Excellence in Diversity and Inclusion HR Initiatives, Adrenalin
                </p>
                <img 
                  src="/Awards/a5.png" 
                  alt="Excellence in Diversity and Inclusion Award" 
                  className='w-full  object-contain'
                />
              </div>

              {/* Award 6 */}
              <div className='border-2 border-[#65acac] rounded-lg p-4'>
                <p className='text-sm text-[#58595b] mb-4 h-24'>
                  Best project finance deal of the year Suryacon
                </p>
                <img 
                  src="/Awards/a6.png" 
                  alt="Best Project Finance Deal Award" 
                  className='w-full  object-contain'
                />
              </div>
            </div>
          </div>

          {/* Right Section - 2 Large Award Images */}
          <div className='space-y-6 mt-5'>
            {/* Top Right - CII Awards Photo */}
            <div className='border-2 border-[#65acac] rounded-lg p-4'>
              <div className='mb-3 flex gap-10'>
                <p className='text-sm text-[#58595b] mb-1'>Gold Award Service Design Category, 24th CII India Design Awards</p>
                <p className='text-sm text-[#58595b] mb-1'>Silver Award Social Impact Category, 24th CII India Design Awards</p>
                <p className='text-sm text-[#58595b]'>Top 50 Best Design Recognition, 24th CII India Design Awards</p>
              </div>
              <img 
                src="/Awards/a7.png" 
                alt="CII India Design Awards Certificates" 
                className='w-full'
              />
            </div>

            {/* Bottom Right - Mahindra Rise Awards Photos */}
            <div className='border-2 border-[#65acac] rounded-lg p-4'>
              <p className='text-sm text-[#58595b] mb-3'>
                Sustainability Rise Awards Mahindra Susten
              </p>
              <div className='grid grid-cols-2 gap-4'>
                <img 
                  src="/Awards/a8.png" 
                  alt="Mahindra Rise Awards Ceremony 1" 
                  className=''
                />
                <img 
                  src="/Awards/a9.png" 
                  alt="Mahindra Rise Awards Ceremony 2" 
                  className=''
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Awards
