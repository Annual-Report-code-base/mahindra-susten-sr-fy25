import React from 'react'

const PpeManagementAndChemicalSafetyControls = () => {
  return (
    <div>
      <div className='marginal text-[#58595b] text-md'>
        <h1 className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold pb-3'>
          PPE Management and Chemical Safety Controls
        </h1>

        <p className='text-[#58595b] text-lg mb-5'>
          The effective use of Personal Protective Equipment (PPE) is critical in managing residual risk. Mahindra Susten employs an activity-based PPE matrix that aligns protective gear requirements with specific job functions. Monthly audits ensure that PPE inventory is stocked, fit for purpose and accessible at all times.
        </p>

        {/* Two Column Layout */}
        <div className=''>
          {/* Left Column - PPE Implementation */}
          <div>
            <h3 className='text-2xl text-black font-bold mb-6'>
              PPE usage is implemented through
            </h3>

            {/* Timeline/Dots List */}
            <div className='space-y-6 mb-8 flex gap-10'>
              <div className='flex items-start gap-4'>
                <div className='w-6 h-6 rounded-full bg-[#65acac] flex-shrink-0 mt-1'></div>
                <p className='text-[#58595b]'>Daily toolbox talks</p>
              </div>

              <div className='flex items-start gap-4'>
                <div className='w-6 h-6 rounded-full bg-[#65acac] flex-shrink-0 mt-1'></div>
                <div>
                  <p className='text-[#58595b]'>Visual boards</p>
                  <p className='text-[#58595b]'>at training centers</p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='w-6 h-6 rounded-full bg-[#65acac] flex-shrink-0 mt-1'></div>
                <div>
                  <p className='text-[#58595b]'>Dummy installations at key</p>
                  <p className='text-[#58595b]'>points of entry</p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='w-6 h-6 rounded-full bg-[#65acac] flex-shrink-0 mt-1'></div>
                <div>
                  <p className='text-[#58595b]'>Non-compliance warnings</p>
                  <p className='text-[#58595b]'>followed by retraining</p>
                  <p className='text-[#58595b]'>or penalties</p>
                </div>
              </div>
            </div>

            {/* Chemical Safety Paragraph */}
            <p className='text-[#58595b]'>
              Chemical safety is managed through the use of Material Safety Data Sheets (MSDS), on-site spill containment kits, training in safe handling procedures and SOPs for emergency response. All chemical storage areas are labeled, locked and monitored by site-level teams.
            </p>
          </div>

          {/* Right Column - Building Safety First Mindset */}
          <div className='border-2 border-[#f6a537] rounded-2xl p-6 bg-gradient-to-br from-[#e8f5e9] to-[#e1f5fe] mt-5'>
            <h3 className='text-2xl text-[#6cb42c] font-bold mb-6'>
              Building a safety-first mindset
            </h3>

            <p className='text-[#58595b] mb-6'>
              Safety awareness extends beyond our sites to the communities around our projects. During the <strong>54th National Safety Week and 36th National Road Safety Week</strong>, Mahindra Susten conducted workshops, emergency drills and awareness sessions in partnership with local authorities, schools and community leaders. These engagements covered vehicle safety, road usage, emergency response and first aid.
            </p>

            {/* Photo */}
            <img 
              src="/PpeManagement/image.png" 
              alt="54th National Safety Week event with workers holding banner" 
              className='w-full rounded-lg'
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default PpeManagementAndChemicalSafetyControls
