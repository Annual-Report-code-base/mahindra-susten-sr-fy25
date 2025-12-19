import React from 'react'

const SupplyChain = () => {
  return (
    <div>
      <div className='marginal text-[#58595b] text-md'>
        <h1 className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold mb-2 pb-3'>
          Supply Chain Management
        </h1>
        <h2 className='text-xl font-bold mb-8'>
          We acknowledge that our environmental and social responsibilities extend far
          beyond the boundaries of our project sites, permeating into every tier of the
          value chain. Building a sustainable supply chain is more than a compliance
          imperative, it is central to our long-term business strategy. Our efforts focus
          on embedding ESG principles into procurement, advancing responsible
          sourcing practices and nurturing strong relationships with suppliers, who are
          aligned with our values and purpose.
        </h2>

        {/* Stats Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 gap-6 mb-8'>
          {/* 445 Total vendors */}
          <div>
            <h3 className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold mb-2'>
              445
            </h3>
            <p className='text-[#58595b] border-b border-gray-300 pb-3'>Total vendors</p>
          </div>

          {/* 100% Components sourced locally */}
          <div>
            <h3 className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold mb-2'>
              100%
            </h3>
            <p className='text-[#58595b] border-b border-gray-300 pb-3'>Components sourced locally</p>
          </div>

          {/* 21 Class A suppliers */}
          <div>
            <h3 className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold mb-2'>
              21
            </h3>
            <p className='text-[#58595b] border-b border-gray-300 pb-3'>Class A suppliers completed ESG assessments</p>
          </div>

          {/* ₹244.459 crores */}
          <div>
            <h3 className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold mb-2'>
              ₹244.459 <span className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold mb-2'>crores</span>
            </h3>
            <p className='text-[#58595b] border-b border-gray-300 pb-3'>Total spends on local sourcing in FY25</p>
          </div>
        </div>

        <div className='flex md:flex-row flex-col gap-6 mb-8'>
          <div className='md:w-[75%] space-y-4'>
            
            <h3 className='text-xl text-[#005c33] font-bold mb-4'>
              Supplier Screening and ESG Integration
            </h3>
            <div className='flex md:flex-row flex-col gap-6'>
              <div className='md:w-[70%]'>
                  <p>
              All our suppliers are required to adhere to the Mahindra Susten Supplier ESG Code of Conduct. The Code outlines expectations across critical areas such as environmental management, human rights, labour practices, occupational safety and business ethics and is aligned with globally recognized frameworks like the UN Global Compact and ILO conventions. It reinforces our broader commitment to building a responsible and ethical value chain.
            </p>
            <p>
              As part of our local sourcing commitment, all procurement is carried out entirely within Indian boundaries, with no international suppliers engaged during the reporting year. This reflects our conscious effort to support domestic capabilities and strengthen regional supplier partnerships.
            </p>
              </div>
              <div className='md:w-[30%]'>
                <div className=''>
              <img
                src="/SupplyChain/image.png"
                alt="Construction site"
                className='w-full object-cover rounded-3xl'
              />
            </div>
              </div>
            </div>
          
            <p>
              To operationalize our ESG expectations, we launched a Supplier ESG Assessment Initiative in this year, a collaborative effort between the Procurement and Sustainability teams. While we initially targeted the top eight Class A suppliers, we successfully completed ESG assessments for 21 suppliers. Each supplier was evaluated using a 179-point checklist, developed in line with global standards such as the IFC Performance Standards. Suppliers were asked to provide detailed responses with supporting documentation and links, where available. These responses were reviewed by the internal sustainability team through a thorough desktop analysis.
            </p>
            <p>
              Post-assessment, suppliers received structured feedback, including awareness sessions and customized guidance on improvement areas and practical implementation strategies. This engagement not only enhanced supplier understanding of ESG issues but also helped build their long-term capabilities.
            </p>
            <p>
              Additionally, our Procurement team conducts routine vendor assessments for all suppliers, including Class A vendors.
            </p>
          </div>
        
            <div className='md:w-[25%]'>
              
          <div className='relative border-2 border-[#7ab800] rounded-2xl p-6 bg-white'>
            <img
              src="/LeadershipMessage/leaf.png"
              alt="leaf"
              className='absolute -top-8 left-6 w-16 h-16'
            />
            <div className='mt-4 flex flex-col gap-6'>
              <img
                src="/SupplyChain/Pramod.png"
                alt="Mr. Pramod Kalyanshetti"
                className='w-full h-48 object-cover rounded-lg bg-[#d8e6e2]'
              />
              <div className='flex-1'>
                <p className='text-[#58595b] mb-4'>
                  Responsible procurement remains central to our operations. Through continued focus on supplier ESG assessments and local sourcing, we are strengthening the sustainability and integrity of our value chain.
                </p>
                <h4 className='text-xl text-[#6cb42c] font-bold mb-1'>
                  Mr. Pramod Kalyanshetti
                </h4>
                <p className='text-[#005c33] font-semibold'>
                  Chief Procurement Officer
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
        {/* ESG Screening Section */}
        <div className='mb-8'>
          <div className='gap-8'>
            {/* Left Column */}
            <div>
              <h3 className='text-xl text-[#6cb42c] font-bold mb-4'>
                ESG screening is currently prioritized for top suppliers based on spend and strategic importance.
              </h3>
              <p className='text-[#58595b] font-bold mb-3'>
                We screen other vendors on indicators including:
              </p>
              <div className='space-y-2'>
                <div className='flex items-start gap-2'>
                  <div className='w-2 h-2 bg-[#005c33] rounded-full mt-2 flex-shrink-0'></div>
                  <p className='text-[#58595b]'>GHG emissions and energy consumption</p>
                </div>
                <div className='flex items-start gap-2'>
                  <div className='w-2 h-2 bg-[#005c33] rounded-full mt-2 flex-shrink-0'></div>
                  <p className='text-[#58595b]'>Water usage and wastewater management</p>
                </div>
                <div className='flex items-start gap-2'>
                  <div className='w-2 h-2 bg-[#005c33] rounded-full mt-2 flex-shrink-0'></div>
                  <p className='text-[#58595b]'>Waste generation, handling and disposal practices</p>
                </div>
              </div>
            </div>

            {/* Middle Column */}
            <div>
              <div className='space-y-2 mb-4'>
                <div className='flex items-start gap-2'>
                  <div className='w-2 h-2 bg-[#005c33] rounded-full mt-2 flex-shrink-0'></div>
                  <p className='text-[#58595b]'>Labour welfare provisions and working conditions</p>
                </div>
                <div className='flex items-start gap-2'>
                  <div className='w-2 h-2 bg-[#005c33] rounded-full mt-2 flex-shrink-0'></div>
                  <p className='text-[#58595b]'>Occupational health and safety standards</p>
                </div>
              </div>
              <p className='text-[#58595b]'>
                Under the Supplier ESG COC, suppliers are expected to implement environment management systems, reduce emissions and effluents and comply with applicable environmental laws and permits. Social provisions encompass the prohibition of child and forced labour, fair treatment, non-discrimination and the right to collective bargaining. Governance provisions address corruption, data privacy, grievance mechanisms and conflict of interest disclosures.
              </p>
            </div>

            {/* Right Column */}
            <div>
              <p className='text-[#58595b]'>
                Onboarded suppliers must sign a compliance declaration, affirming their alignment with the Supplier ESG COC. Mahindra Susten reserves the right to conduct assessments and inspections to verify adherence. This code establishes a clear baseline for environmental, social and governance expectations, helping identify procedural shortcomings across our value chain.
              </p>
            </div>
          </div>
        </div>

        {/* Improve Performance Section */}
        <div className='mb-8'>
          <h3 className='text-2xl text-[#005c33] font-bold mb-4'>
            Improve performance through ESG screening
          </h3>
          <p className='text-[#58595b] mb-6'>
            Supplier ESG Assessment is a collaborative effort between the Procurement and Sustainability teams to enhance responsible sourcing and supplier performance.
          </p>
          <img src="/SupplyChain/image1.png" alt="" className='md:w-[80%] mx-auto mb-6' />
          <p className='text-[#58595b]'>
            Through the implementation of our ESG Screening of our suppliers,we are able to bridge the gap between policy and onground practices. These measures not only strengthen due diligence across our procurement process but also safeguard
            against operational disruptions and enable us to build a resilient supply chain.
          </p>
        </div>

        {/* Empowering MSMEs Section */}
        <div className='relative border-2 border-[#7ab800] rounded-2xl p-8 bg-white mb-8'>
          <img
            src="/LeadershipMessage/leaf.png"
            alt="leaf"
            className='absolute -top-8 right-8 w-20 h-20'
          />
          <h3 className='text-2xl text-[#005c33] font-bold mb-6'>
            Empowering MSMEs for a Greener Tomorrow
          </h3>

          <div className='mb-8'>
            <div className='text-[#58595b] mb-5'>
              <p>
                Micro, Small and Medium Enterprises (MSMEs) play a critical role in India's industrial and clean energy ambitions. At Mahindra Susten, we have actively engaged with MSMEs to co-develop components, strengthen their operational capabilities and enable their integration into large-scale renewable energy projects.
              </p>
            </div>
            <div className='text-[#58595b] mb-5'>
              <p>
                In FY25 alone, our partnerships with MSMEs generated an economic value of approximately ₹150 crore, driven through procurement, technology transfer and targeted capacity building efforts. These engagements extend beyond commercial transactions. Our teams have conducted hands-on digital training; sustainability workshops and skill development programs tailored to each partner's operational needs.
              </p>
            </div>
            <div className='text-[#58595b] mb-5'>
              <p>
                By building resilient vendor ecosystems, we support project execution and nurture long-term innovation and regional employment. Our approach ensures that MSMEs grow alongside us becoming agile, future-ready contributors to India's clean energy transition.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className='border-t border-gray-300 pt-6'>
            <p className='text-[#58595b] font-semibold mb-4'>Over</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div>
                <h4 className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold mb-2'>
                  170+
                </h4>
                <p className='text-[#58595b]'>MSMEs engaged</p>
              </div>
              <div>
                <h4 className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold mb-2'>
                  ₹150 crore
                </h4>
                <p className='text-[#58595b]'>Added in financial value</p>
              </div>
              <div>
                <h4 className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold mb-2'>
                  Upskilling
                </h4>
                <p className='text-[#58595b]'>MSMEs with hands on training</p>
              </div>
            </div>
          </div>

          {/* Read More Link */}
          <div className='mt-6'>
            <p className='text-sm text-[#58595b]'>
              <strong>READ MORE -</strong>{' '}
              <a
                href='https://www.linkedin.com/posts/mahindra-susten_msmeday2025-empoweringmsmes-greengrowth-activity-7343992884448157696-uXm5?utm_source=share&utm_medium=member_desktop&rcm=ACqAACx-A-MBfRZUZ3qcP8hB2DYXkGLDeMmcu14'
                className='text-[#4a90e2] underline break-all'
                target='_blank'
                rel='noopener noreferrer'
              >
                https://www.linkedin.com/posts/mahindra-susten_msmeday2025-empoweringmsmes-greengrowth-activity-7343992884448157696-uXm5?utm_source=share&utm_medium=member_desktop&rcm=ACqAACx-A-MBfRZUZ3qcP8hB2DYXkGLDeMmcu14
              </a>
            </p>
          </div>
        </div>

        {/* Award Section */}
        <div className=''>
          <img
            src="/SupplyChain/image2.png"
            alt="Award ceremony"
            className='w-full rounded-2xl mb-4 object-contain'
          />
          <p className='text-[#58595b] font-semibold'>
            MSPL was honored with the "Best in Sustainability in Procurement" award during the Procurement India Leadership Forum and Awards 2024.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SupplyChain