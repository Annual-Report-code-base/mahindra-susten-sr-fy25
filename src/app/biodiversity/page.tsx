import React from 'react'

const BiodiversityLandUse = () => {
  return (
    <div>
      <div className='marginal text-[#58595b] text-md'>
        <h1 className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold mb-2 pb-3'>
          Biodiversity and Land Use
        </h1>
        <h2 className='text-xl font-bold mb-5'>
          We acknowledge the importance of preserving natural ecosystems as
          we expand our renewable energy infrastructure. Our site-level approach
          incorporates ecological sensitivity from the inception stage of the project.
          We consciously avoid locations that fall within protected zones or those
          recognized for high biodiversity significance. Layouts are configured to
          minimize land disturbance, conserve natural features and to maintain
          ecological balance wherever feasible.
        </h2>

        {/* Site-Level Environmental Assessments */}
        <div className='mb-4'>
          <h3 className='text-2xl text-[#005c33] font-bold mb-2'>
            Site-Level Environmental Assessments
          </h3>
          <p className='text-[#58595b] mb-4'>
            Prior to the commencement of each large-scale project, we conduct Environment and Social Impact Assessment (ESIA) to identify potential impact on local biodiversity and land use. These assessments guide our decisions on design, construction methodologies and mitigation strategies. In highly ecological sensitive zones, we prepare biodiversity-specific action plans that encompass measures, such as vegetation buffers, controlled access zones and impact minimization techniques.
          </p>
        </div>

        {/* Sustainable Construction Practices */}
        <div className='mb-4'>
          <h3 className='text-2xl text-[#005c33] font-bold mb-2'>
            Sustainable Construction Practices
          </h3>
          <p className='text-[#58595b] mb-4'>
            Our on-site practices are meticulously managed to minimize interference to local flora and fauna. These measures encompass maintaining vegetation cover to prevent soil erosion, avoiding construction during critical periods of wildlife behavior and ensuring that material storage, access routes and lighting are designed to limit environmental impact. All activities are conducted in compliance with applicable environmental standards and local regulations.
          </p>
        </div>

        {/* Ongoing Stewardship and Commitment */}
        <div className='mb-4'>
          <h3 className='text-2xl text-[#005c33] font-bold mb-2'>
            Ongoing Stewardship and Commitment
          </h3>
          <p className='text-[#58595b] mb-4'>
            As part of our stewardship philosophy, we continue to refine our internal frameworks for land utilization and biodiversity preservation. We are in the process of developing standard operating procedures that incorporate biodiversity considerations spanning the life cycle of the project, from site identification through to commissioning and handover. We regard this approach as essential to constructing and delivering infrastructure that advances both energy security and ecological integrity.
          </p>
        </div>

        {/* Our biodiversity governance framework */}
        <div className='mb-'>
          <h3 className='text-2xl text-[#005c33] font-bold mb-2'>
            Our biodiversity governance framework
          </h3>
          <p className='text-[#58595b] mb-8'>
            As part of the environmental assessment process, a biodiversity assessment is conducted to evaluate the ecological sensitivity of project sites. This includes assessing potential impacts and ensuring compliance with environmental regulations. The findings help guide project planning to avoid or minimize disruption to local ecosystems and support sustainable development  goals.
          </p>

          {/* Four-Step Framework - 4 Column Layout */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {/* Step 1 - Avoid */}
            <div>
              <div className='flex items-center gap-2 mb-3'>
                <div className='w-4 h-4 rounded-full bg-[#7ab800]'></div>
                <div className='flex-1 border-t-2 border-dotted border-gray-300'></div>
              </div>
              <h4 className='text-xl font-bold text-[#000] mb-2'>
                Avoid
              </h4>
              <p className='text-[#58595b] text-sm'>
                In cases, where impact is unavoidable, we adopt layout optimization, reduced clearing and time bound construction to minimize disturbance.
              </p>
            </div>

            {/* Step 2 - Minimize */}
            <div>
              <div className='flex items-center gap-2 mb-3'>
                <div className='w-4 h-4 rounded-full bg-[#005c33]'></div>
                <div className='flex-1 border-t-2 border-dotted border-gray-300'></div>
              </div>
              <h4 className='text-xl font-bold text-[#000] mb-2'>
                Minimize
              </h4>
              <p className='text-[#58595b] text-sm'>
                We prioritize the selection of sites with minimal interference to natural habits, avoiding ecologically sensitive zones wherever possible.
              </p>
            </div>

            {/* Step 3 - Restore */}
            <div>
              <div className='flex items-center gap-2 mb-3'>
                <div className='w-4 h-4 rounded-full bg-[#f6a537]'></div>
                <div className='flex-1 border-t-2 border-dotted border-gray-300'></div>
              </div>
              <h4 className='text-xl font-bold text-[#000] mb-2'>
                Restore
              </h4>
              <p className='text-[#58595b] text-sm'>
                Post construction, we stabilize land, replant native vegetation where appropriate. Support soil conservation efforts to restore ecological balance.
              </p>
            </div>

            {/* Step 4 - Offset */}
            <div>
              <div className='flex items-center gap-2 mb-3'>
                <div className='w-4 h-4 rounded-full bg-[#65acac]'></div>
                <div className='flex-1 border-t-2 border-dotted border-gray-300'></div>
              </div>
              <h4 className='text-xl font-bold text-[#000] mb-2'>
                Offset
              </h4>
              <p className='text-[#58595b] text-sm'>
                In select cases, we explore offset measures, such as compensatory afforestation or support local conservation efforts to balance residual impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BiodiversityLandUse
