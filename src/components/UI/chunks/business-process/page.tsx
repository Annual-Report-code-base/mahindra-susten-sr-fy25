import React from 'react'

const BusinessProcess = () => {
  return (
    <div>
      <div className='marginal text-[#58595b] text-md'>
        <h1 className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold mb-2 pb-3'>
          Business Process
        </h1>
        <h2 className='text-xl font-bold mb-5'>
          Our business process follows a structured, end-to-end approach to renewable
          energy project development starting from project origination to postcommissioning asset management. With a strong in-house EPC capability,
          we ensures quality execution, compliance and long-term operational value.
          Each function plays a distinct role in ensuring timely, high-quality delivery and
          sustainable energy solutions across India.
        </h2>
        <img src="/BusinessProcess/image.png" alt="" className='md:w-[80%] mx-auto mb-4' />
        {/* Business Functions Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
          {/* Business Development and Regulatory Affairs */}
          <div className='border-l-4 border-[#f6a537] pl-4'>
            <h3 className='text-xl text-[#005c33] font-bold mb-3'>
              Business Development and Regulatory Affairs
            </h3>
            <p className='text-[#58595b]'>
              This function leads early-stage project development by identifying tender opportunities, securing land, crafting bid strategies, and facilitating approvals. It also interfaces with Group Public Affairs for policy advocacy and ensures a smooth handover post Power Purchase Agreement (PPA) to the execution team.
            </p>
          </div>

          {/* Design & Engineering */}
          <div className='border-l-4 border-[#f6a537] pl-4'>
            <h3 className='text-xl text-[#005c33] font-bold mb-3'>
              Design & Engineering
            </h3>
            <p className='text-[#58595b]'>
              The function develops detailed layouts and technical specifications for solar, wind and hybrid systems. Designs are optimized for generation efficiency, site conditions and long-term performance, incorporating feasibility studies and environmental considerations.
            </p>
          </div>

          {/* Supply Chain Management */}
          <div className='border-l-4 border-[#f6a537] pl-4'>
            <h3 className='text-xl text-[#005c33] font-bold mb-3'>
              Supply Chain Management
            </h3>
            <p className='text-[#58595b]'>
              Responsible for sourcing major components like modules, inverters, and transformers, the supply chain function ensures quality compliance, vendor evaluation and timely delivery. Strategic procurement planning and risk mitigation are central to this function.
            </p>
          </div>

          {/* Projects */}
          <div className='border-l-4 border-[#f6a537] pl-4'>
            <h3 className='text-xl text-[#005c33] font-bold mb-3'>
              Projects
            </h3>
            <div className='text-[#58595b]'>
              <p className='mb-3'>This function manages end-to-end on-site execution, which includes:</p>
              <div className='space-y-2'>
                <div className='flex items-start gap-2'>
                  <div className='w-2 h-2 bg-[#005c33] rounded-full mt-2 flex-shrink-0'></div>
                  <p><strong>Civil Works:</strong> Site levelling, road construction, and foundation work.</p>
                </div>
                <div className='flex items-start gap-2'>
                  <div className='w-2 h-2 bg-[#005c33] rounded-full mt-2 flex-shrink-0'></div>
                  <p><strong>Electrical Works:</strong> Installation of cabling, substations and power systems.</p>
                </div>
                <div className='flex items-start gap-2'>
                  <div className='w-2 h-2 bg-[#005c33] rounded-full mt-2 flex-shrink-0'></div>
                  <p><strong>Installation:</strong> Assembly and deployment of energy systems as per design.</p>
                </div>
                <div className='flex items-start gap-2'>
                  <div className='w-2 h-2 bg-[#005c33] rounded-full mt-2 flex-shrink-0'></div>
                  <p><strong>Commissioning:</strong> Final system testing and validation to ensure readiness for power generation.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Asset Management */}
          <div className='border-l-4 border-[#f6a537] pl-4'>
            <h3 className='text-xl text-[#005c33] font-bold mb-3'>
              Asset Management
            </h3>
            <p className='text-[#58595b]'>
              Post-commissioning, this team oversees plant performance through monitoring, preventive maintenance and analytics. Operations are executed via O&M partners, with a focus on efficiency, safety and system longevity.
            </p>
          </div>

          {/* Leadership Card with Leaf */}
          <div className='relative border-2 border-[#7ab800] rounded-2xl p-6 bg-white'>
            <img 
              src="/LeadershipMessage/leaf.png" 
              alt="leaf" 
              className='absolute -top-8 left-6 w-16 h-16'
            />
            <div className='mt-4'>
              <img 
                src="/BusinessProcess/SaurabhMehta.png" 
                alt="Mr. Saurabh Mehta" 
                className='w-full h-48 object-contain rounded-lg mb-4 bg-[#d8e6e2]'
              />
              <p className='text-[#58595b] mb-4'>
                As the renewable energy landscape evolves, we remain engaged in policy advocacy and regulatory alignment to accelerate clean energy adoption. Our strategic direction supports national climate goals while driving business growth.
              </p>
              <h4 className='text-xl text-[#6cb42c] font-bold mb-1'>
                Mr. Saurabh Mehta
              </h4>
              <p className='text-[#005c33] font-semibold'>
                Head, Business Development & Regulatory Affairs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BusinessProcess