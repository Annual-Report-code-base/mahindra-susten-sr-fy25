import React from 'react'

const EnsuringRegulatoryCompliance = () => {
  return (
    <div>
      <div className='marginal text-[#58595b] text-md'>
        <h1 className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold pb-3'>
          Ensuring Regulatory Compliance
        </h1>

        <p className='text-[#58595b] text-lg mb-5'>
          Mahindra Susten is certified to ISO 45001: Occupational Health and Safety Management Systems, which serves as the backbone of our structured and preventive approach. All our HSE practices are aligned to national statutory frameworks, including the Building and Other Construction Workers (BOCW) Act as well as international reference frameworks such as the IFC Environmental and Social Performance Standards.
        </p>

        {/* Two Column Layout */}
        <div className=''>
          {/* Left Column - Safety Policy Compliance Process */}
          <div>
            <h3 className='text-2xl text-[#005c33] font-bold mb-6'>
              Safety Policy compliance process
            </h3>

            {/* 4 Steps Grid */}
            <div className='grid grid-cols-2 gap-6'>
              {/* Step 01 */}
              <div className='bg-gradient-to-br from-[#e8f5e9] to-[#c8e6c9] p-6 rounded-lg'>
                <h4 className='text-4xl font-bold text-black mb-4'>01</h4>
                <p className='text-[#58595b] text-sm'>
                  Identification of HSE legal requirement
                </p>
              </div>

              {/* Step 02 */}
              <div className='bg-gradient-to-br from-[#e8f5e9] to-[#c8e6c9] p-6 rounded-lg'>
                <h4 className='text-4xl font-bold text-black mb-4'>02</h4>
                <p className='text-[#58595b] text-sm'>
                  Role and responsibility identification of compliance
                </p>
              </div>

              {/* Step 03 */}
              <div className='bg-gradient-to-br from-[#e8f5e9] to-[#c8e6c9] p-6 rounded-lg'>
                <h4 className='text-4xl font-bold text-black mb-4'>03</h4>
                <p className='text-[#58595b] text-sm'>
                  Periodic compliance tracking of legal register compliance
                </p>
              </div>

              {/* Step 04 */}
              <div className='bg-gradient-to-br from-[#e8f5e9] to-[#c8e6c9] p-6 rounded-lg'>
                <h4 className='text-4xl font-bold text-black mb-4'>04</h4>
                <p className='text-[#58595b] text-sm'>
                  Quarterly review and revision of legal requirements
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Legatrix & Testimonial */}
          <div>
            <p className='text-[#58595b] mb-6 mt-5'>
              Legal audits and internal inspections are conducted monthly, assessed against risk-based checklists, ISO criteria and applicable labour and welfare codes. All audit findings are analyzed centrally, shared with senior leadership and translated into preventive actions that are implemented on the ground.
            </p>

            <p className='text-[#58595b] mb-8'>
              Mahindra Susten leverages Legatrix as a key compliance management tool to strengthen governance across its operations. The platform streamlines regulatory tracking, automates compliance workflows, and ensures transparency across governance frameworks. By integrating Legatrix, the organization has enhanced its capability to monitor adherence to legal, ethical, and governance standards, improving audits, reporting, and risk management. This strategic approach reinforces corporate governance while supporting ESG objectives, fostering trust, accountability, and sustainable growth among stakeholders.
            </p>

            {/* Testimonial Box with Leaf */}
            <div className='relative p-[2px] rounded-2xl bg-[#a4c639]'>
              <div className='bg-white rounded-2xl p-6'>
                {/* Leaf icon */}
                <img
                  src="/LeadershipMessage/leaf.png"
                  alt="leaf"
                  className='absolute -top-8 right-8 w-12 h-12'
                />
                <div className='flex justify-center items-center'>
                <img 
                  src="/RegulatoryCompliance/image.png" 
                  alt="Mr. Mohsin Mujawar" 
                  className='w-100 h-52 object-cover object-top rounded-lg mb-4'
                />
                </div>

                <p className='text-[#58595b] mb-4'>
                  We believe that every successful project begins with strong groundwork. From securing land and crafting bid strategies to navigating policy landscapes and obtaining early-stage approvals, our focus is on de-risking execution and ensuring a seamless handover from vision to value.
                </p>

                <p className='text-[#6cb42c] font-bold text-lg mb-1'>
                  Mr. Mohsin Mujawar
                </p>
                <p className='text-[#58595b] text-sm'>
                  Head – Legal
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default EnsuringRegulatoryCompliance
