import React from 'react'

const StructuredApproachToSafetyManagement = () => {
  return (
    <div>
      <div className='marginal text-[#58595b] text-md'>
        <h1 className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold pb-3'>
          Structured Approach to Safety Management
        </h1>

        <p className='text-[#58595b] text-xl font-bold mb-5'>
          We follow a structured and comprehensive process to manage contractor safety and high-risk activities, ensuring safe and consistent practices across all project sites.
        </p>

        <p className='text-[#58595b] mb-5'>
          This process begins with contractor safety evaluation through the SCAR process, followed by a briefing on safety requirements during pre-work allocation meetings. On-site, we conduct safety kick-off meetings and provide a detailed safety induction outlining site-specific safety protocols.
        </p>

        {/* Three Core Pillars Section */}
        <h3 className='text-2xl text-[#005c33] font-bold mb-8'>
          Our contractor safety framework has three core pillars
        </h3>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
          {/* Leadership Pillar */}
          <div className='bg-[#e8f5f0] rounded-lg p-8 text-center'>
            <img 
              src="/SafetyManagement/i1.png" 
              alt="Leadership" 
              className='w-20 h-20 mx-auto mb-4'
            />
            <h4 className='text-xl font-bold text-[#58595b] mb-2'>Leadership</h4>
          </div>

          {/* Structural Pillar */}
          <div className='bg-[#e8f5f0] rounded-lg p-8 text-center'>
            <img 
              src="/SafetyManagement/i2.png" 
              alt="Structural" 
              className='w-20 h-20 mx-auto mb-4'
            />
            <h4 className='text-xl font-bold text-[#58595b] mb-2'>Structural</h4>
          </div>

          {/* Process Pillar */}
          <div className='bg-[#e8f5f0] rounded-lg p-8 text-center'>
            <img 
              src="/SafetyManagement/i3.png" 
              alt="Process" 
              className='w-20 h-20 mx-auto mb-4'
            />
            <h4 className='text-xl font-bold text-[#58595b] mb-2'>Process</h4>
          </div>
        </div>

        {/* Two Column Layout - Text and Photo */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Left Column - Text */}
          <div>
            <p className='text-[#58595b]'>
              The pillars include activity-based safety requirements, worker welfare provisions, defined roles and responsibilities for line management, integrated organizational structures and regular motivation and awareness efforts. Continuous audits, incident investigations, training programs and clear communication channels ensure that safety practices are consistently implemented and enhanced. The process also includes a performance-based evaluation to monitor compliance and encourage continual improvement.
            </p>
          </div>

          {/* Right Column - Photo */}
          <div className='md:w-[60%'>
            <img 
              src="/ms/rpl1.webp" 
              alt="Safety briefing with workers" 
              className='w-full h-full object-cover'
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default StructuredApproachToSafetyManagement
