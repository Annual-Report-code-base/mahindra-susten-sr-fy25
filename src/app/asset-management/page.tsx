import React from 'react'

const AssetManagement = () => {
  return (
    <div>
      <div className='marginal text-[#58595b] text-md'>
        <h1 className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold mb-2 pb-3'>
          Asset Management
          Strategy and Operations
        </h1>
        <h2 className='text-xl font-bold mb-5'>
          Our asset management function plays a pivotal  role in sustaining long term plant performance post-commissioning. The focus extends beyond
          generation targets to achieving operational excellence through integrated
          environmental and safety considerations. Every operational process—from
          module cleaning cycles to auxiliary power usage is monitored and optimized
          to reduce resource consumption and environmental impact.
        </h2>
        <p className='mb-5'>
          The team works closely with design and engineering units through structured cross-functional collaboration, ensuring
          operational insights are built into project planning. Preventive maintenance is driven by SCADA-based analytics and OEM
          protocols, while predictive technologies are being rolled out to further enhance equipment uptime and energy efficiency.
        </p>
        <p className='mb-8'>
          By aligning operational practices with sustainability goals, we continue to maintain high plant availability and safety
          performance across geographies, while contributing to the group's broader vision of responsible growth.
        </p>

        {/* Leadership Card and Solar Farm Image Section */}
        <div className='flex flex-col lg:flex-row gap-8 items-start mb-12'>
          {/* Left side - Leadership Card */}
          <div className='w-full lg:w-2/5'>
            <div className='relative border-2 border-[#7ab800] rounded-2xl p-6 bg-white'>
              <img
                src="/LeadershipMessage/leaf.png"
                alt="leaf"
                className='absolute -top-8 left-6 w-16 h-16'
              />
              <div className='mt-4'>
                <img
                  src="/AssetManagement/Deven.png"
                  alt="Mr. Deven Maskara"
                  className='w-full h-74 object-contain rounded-lg bg-[#d8e6e2] mb-6'
                />
                <p className='text-[#58595b] mb-4'>
                  Sustainability is embedded into the core of our business strategy. We are focused on identifying opportunities that align with our decarbonization roadmap, ensuring resilience, relevance and long-term impact.
                </p>
                <h4 className='text-xl text-[#6cb42c] font-bold mb-1'>
                  Mr. Deven Maskara
                </h4>
                <p className='text-[#005c33] font-semibold'>
                  Head, Strategy & Finance
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Solar Farm Image */}
          <div className='w-full lg:w-3/5'>
            <img
              src="/AssetManagement/image.png"
              alt="Solar farm at sunset"
              // removed h-full, added fixed height to prevent it from being too tall
              className='w-full h-[400px] lg:h-[550px] object-cover rounded-xl'
            />
          </div>
        </div>

        {/* Integration of Sustainability into Plant Operation */}
        <div className='mb-8'>
          <h3 className='text-2xl text-[#005c33] font-bold mb-6'>
            Integration of Sustainability into Plant Operation
          </h3>

          {/* 4 Column Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {/* Column 1 - Sustainable Generation */}
            <div>
              <h4 className='text-xl text-[#7ab800] font-bold mb-3'>
                Sustainable Generation
              </h4>
              <div className='w-16 h-1 bg-[#7ab800] mb-4'></div>
              <p className='text-[#58595b]'>
                Performance is not measured by output alone, but by how efficiently and responsibly it is achieved.
              </p>
            </div>

            {/* Column 2 - HSE Focus */}
            <div>
              <h4 className='text-xl text-[#7ab800] font-bold mb-3'>
                HSE Focus
              </h4>
              <div className='w-16 h-1 bg-[#7ab800] mb-4'></div>
              <p className='text-[#58595b]'>
                Continuous emphasis on Health, Safety, and Environment (HSE) through risk registers, SOPs, trainings and audits.
              </p>
            </div>

            {/* Column 3 - Preventive Measures */}
            <div>
              <h4 className='text-xl text-[#7ab800] font-bold mb-3'>
                Preventive Measures
              </h4>
              <div className='w-16 h-1 bg-[#7ab800] mb-4'></div>
              <p className='text-[#58595b]'>
                Proactive interventions such as module cleaning schedules, water use optimization and display of SOPs on-site.
              </p>
            </div>

            {/* Column 4 - Auxiliary Consumption */}
            <div>
              <h4 className='text-xl text-[#7ab800] font-bold mb-3'>
                Auxiliary Consumption
              </h4>
              <div className='w-16 h-1 bg-[#7ab800] mb-4'></div>
              <p className='text-[#58595b]'>
                Focus on reducing power usage by sourcing from surplus plant generation itself.
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className='mb-5'>
            We are leveraging automation, analytics and smarter engineering choices to improve plant performance while reducing
            environmental and operational risks. From robotic cleaning systems to real-time diagnostics, our focus is on long-term, costeffective and sustainable operations.
          </p>
          <img src="/AssetManagement/image2.png" alt="" className='mb-3' />
          <p className='mb-5'>
            By embedding technology into every stage of asset operations, we are ensuring our renewable energy
            assets remain resilient, efficient and future-ready.
          </p>
          <img src="/AssetManagement/image3.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default AssetManagement
