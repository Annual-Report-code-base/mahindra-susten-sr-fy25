import React from 'react'

const ImpactAssessment = () => {
  return (
    <div>
      <div className='marginal text-[#58595b] text-md'>
        <h1 className='text-4xl font-bold mb-2 pb-3'>
          <span className='bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>Environmental and Social Impact Assessment</span>
        </h1>

        <p className='text-xl font-bold mb-8'>
          At Mahindra Susten, Environmental and Social Impact Assessments (ESIAs) form a foundational  part of our project development and delivery ethos. These assessments help us identify and mitigate potential environmental and community-related risks well in advance of project execution. By aligning with the Equator Principles and IFC Performance Standards, we ensure our development model is regulation compliant, prudent and socially equitable.
        </p>

        {/* Project Risk Classification */}
        <div className='mb-5'>
          <h3 className='text-2xl text-[#005c33] font-bold mb-4'>
            Project Risk Classification
          </h3>
          <p className='text-[#58595b] mb-8'>
            All new projects undertaken by Mahindra Susten are evaluated and categorized based on the Equator Principles and IFC Performance Standards. This framework helps assess the scale and complexity of environmental and social impacts. Projects fall into three categories: Category A for high-impact projects requiring intensive oversight, Category B for moderate, site-specific risks that are manageable with defined mitigation measures, and Category C for projects with minimal or negligible risks. All current projects are classified under Category B, reflecting moderate but controllable risks that are addressed through structured management plans.
          </p>
        </div>

        {/* Project Details Table */}
        <div className='mb-12'>
          <h3 className='text-2xl text-[#7ab800] font-bold mb-6'>
            Project details
          </h3>

          <div className='overflow-x-auto'>
            <table className='w-full border-collapse'>
              <thead>
                <tr>
                  <th className='bg-[#f8a923] text-black p-4 text-left font-bold w-1/4'>Project Name and Capacity</th>
                  <th className='bg-[#add8e6] text-[#58595b] p-4 text-left font-bold w-1/2'>Details</th>
                  <th className='bg-[#f5deb3] text-[#58595b] p-4 text-left font-bold w-1/4'>IFC Category</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-gray-300'>
                  <td className='p-4 font-semibold'>GUVNL (200 MW AC Solar Power Project)</td>
                  <td className='p-4 text-[#58595b]'>
                    Developed by Martial Solren Pvt Ltd over ~800 acres in Modasa, Gujarat. The project complies with Mahindra Susten's Environment and Social Management System (ESMS), with an Environmental and Social Impact Assessment (ESIA) conducted by AECOM, and a Climate Change Risk Assessment (CCRA) by Bureau Veritas. Upon full commissioning, the project will generate around 450 million green energy units each year, contributing over 6 billion units in 25 years a major step toward India's net-zero and decarbonization commitments.
                  </td>
                  <td className='p-4 text-center'>
                    <span className='text-3xl font-bold text-[#7ab800]'>B</span>
                  </td>
                </tr>
                <tr className='border-b border-gray-300'>
                  <td className='p-4 font-semibold'>RUVNL(200 MW AC Solar Power Project)</td>
                  <td className='p-4 text-[#58595b]'>
                    Developed by Martial Solren Pvt Ltd over ~967 acres in Chattargarh, Bikaner, Rajasthan. The project follows Mahindra Susten's ESMS framework, with an ESIA by AECOM and CCRA by Bureau Veritas. It features bifacial PV modules and evacuates power through a 14.53 km transmission line to the 220/132/33 kV RRVPNL Chattargarh Grid Substation.
                  </td>
                  <td className='p-4 text-center'>
                    <span className='text-3xl font-bold text-[#7ab800]'>B</span>
                  </td>
                </tr>
                <tr className='border-b border-gray-300'>
                  <td className='p-4 font-semibold'>JATH (150 MW AC Hybrid Power Project) 100 MW - Wind 50 MW- Solar</td>
                  <td className='p-4 text-[#58595b]'>
                    Developed by Martial Solren Pvt. Ltd. in the state of Maharashtra, the project follows Mahindra Susten's ESMS framework, with an ESIA conducted by AECOM and a CCRA carried out by ERM. It features bifacial PV modules and Suzlon WTGs, Model S120.
                  </td>
                  <td className='p-4 text-center'>
                    <span className='text-3xl font-bold text-[#7ab800]'>B</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Three-Tiered Approach */}
        <div className='mb-12'>
          <h3 className='text-2xl text-[#7ab800] font-bold mb-6'>
            We follow structured, three-tiered approach:
          </h3>

          {/* Three Boxes with Arrows */}
          <div className='flex flex-col md:flex-row items-center justify-center gap-4 mb-8'>
            {/* ESIA Box */}
            <div className='relative p-[3px] rounded-2xl bg-gradient-to-r from-[#f6a537] to-[#65acac] min-w-[200px]'>
              <div className='bg-white rounded-2xl px-8 py-6 flex items-center justify-center'>
                <h4 className='text-4xl font-bold text-[#58595b]'>ESIA</h4>
              </div>
            </div>

            {/* Arrow */}
            <div className='text-gray-400 text-4xl rotate-90 md:rotate-0'>
              ➔
            </div>

            {/* ESAP Box */}
            <div className='relative p-[3px] rounded-2xl bg-gradient-to-r from-[#f6a537] to-[#65acac] min-w-[200px]'>
              <div className='bg-white rounded-2xl px-8 py-6 flex items-center justify-center'>
                <h4 className='text-4xl font-bold text-[#58595b]'>ESAP</h4>
              </div>
            </div>

            {/* Arrow */}
            <div className='text-gray-400 text-4xl rotate-90 md:rotate-0'>
              ➔
            </div>

            {/* M&R Box */}
            <div className='relative p-[3px] rounded-2xl bg-gradient-to-r from-[#f6a537] to-[#65acac] min-w-[200px]'>
              <div className='bg-white rounded-2xl px-8 py-6 flex items-center justify-center'>
                <h4 className='text-4xl font-bold text-[#58595b]'>M&R</h4>
              </div>
            </div>
          </div>


          {/* Two Column Layout */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* Left Column - ESAP */}
            <div>
              <h4 className='text-lg font-bold text-[#000] mb-4'>
                Following the ESIA, we develop Environmental and Social Action Plans (ESAPs), which include:
              </h4>

              <div className='space-y-3'>
                <div className='flex items-start gap-3'>
                  <div className='w-3 h-3 rounded-full bg-[#f8a923] mt-1.5 flex-shrink-0'></div>
                  <p className='text-[#58595b]'>
                    Corrective Actions: Specific measures to address identified risks
                  </p>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='w-3 h-3 rounded-full bg-[#f8a923] mt-1.5 flex-shrink-0'></div>
                  <p className='text-[#58595b]'>
                    Purpose Statements: Clear alignment with project objectives
                  </p>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='w-3 h-3 rounded-full bg-[#f8a923] mt-1.5 flex-shrink-0'></div>
                  <p className='text-[#58595b]'>
                    Defined Roles: Assigned responsibilities for implementation
                  </p>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='w-3 h-3 rounded-full bg-[#f8a923] mt-1.5 flex-shrink-0'></div>
                  <p className='text-[#58595b]'>
                    Progress Tracking: Regular updates on implementation status
                  </p>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='w-3 h-3 rounded-full bg-[#f8a923] mt-1.5 flex-shrink-0'></div>
                  <p className='text-[#58595b]'>
                    Timelines: Structured deadlines to ensure accountability and closure
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - M&R */}
            <div>
              <h4 className='text-lg font-bold text-[#000] mb-4'>
                Our projects also undergo regular Monitoring and Reporting (M&R), comprising:
              </h4>

              <div className='space-y-3'>
                <div className='flex items-start gap-3'>
                  <div className='w-3 h-3 rounded-full bg-[#f8a923] mt-1.5 flex-shrink-0'></div>
                  <p className='text-[#58595b]'>
                    Site inspections to track compliance
                  </p>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='w-3 h-3 rounded-full bg-[#f8a923] mt-1.5 flex-shrink-0'></div>
                  <p className='text-[#58595b]'>
                    Monthly reporting of progress and deviations
                  </p>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='w-3 h-3 rounded-full bg-[#f8a923] mt-1.5 flex-shrink-0'></div>
                  <p className='text-[#58595b]'>
                    Third-party audits for objective evaluation
                  </p>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='w-3 h-3 rounded-full bg-[#f8a923] mt-1.5 flex-shrink-0'></div>
                  <p className='text-[#58595b]'>
                    Lender monitoring as required by our financial partners
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Large Landscape Image */}
        <div className=''>
          <img
            src="/ImpactAssessment/image.png"
            alt="Solar farm landscape"
            className='w-full rounded-lg '
          />
        </div>

      </div>
    </div>
  )
}

export default ImpactAssessment
