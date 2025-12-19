import React from 'react'

  const RiskManagement = () => {
    return (
      <div>
        <div className='marginal text-[#58595b] text-md'>
          <h1 className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold mb-2 pb-3'>
            Risk Management
          </h1>
          <h2 className='text-xl font-bold mb-5'>
            At Mahindra Susten, risk management is a critical enabler of strategic
            decision-making and long-term value creation. Our approach to managing
            risks aligns with Mahindra Group's Risk Management Policy, which
            provides an overarching framework and guiding principles for identifying,
            assessing, and addressing potential risks across operations.
          </h2>
          <h2 className='text-[#005c33] font-extrabold text-xl mb-3'>
            Governance and
            accountability
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Column 1: Board and Committee oversight, Group policy alignment */}
            <div className='space-y-8'>
              {/* Board and Committee oversight */}
              <div className='flex'>
                <div className='w-1 h-auto mr-4 bg-[#f6a537]'></div>
                <div>
                  <h3 className='text-[#005c33] font-bold text-lg mb-2'>
                    Board and Committee
                    oversight
                  </h3>
                  <p className='text-[#58595b] text-base'>
                    The Board provides oversight through the <strong className='font-bold'>Risk Management
                    Committee (RMC)</strong>, comprising <strong className='font-bold'>APEX members</strong>. The RMC reviews
                    emerging risks, mitigation status, and alignment with business plans.
                  </p>
                </div>
              </div>

              {/* Group policy alignment */}
              <div className='flex'>
                <div className='w-1 h-auto mr-4 bg-[#f6a537]'></div>
                <div>
                  <h3 className='text-[#005c33] font-bold text-lg mb-2'>
                    Group policy alignment
                  </h3>
                  <p className='text-[#58595b] text-base'>
                    Existing risk policies and matrices are reviewed against <strong className='font-bold'>Mahindra
                    Group standards</strong>. Identified gaps are addressed to strengthen
                    internal controls.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2: Business-unit ownership, TMW protocols */}
            <div className='space-y-8'>
              {/* Business-unit ownership */}
              <div className='flex'>
                <div className='w-1 h-auto mr-4 bg-[#f6a537]'></div>
                <div>
                  <h3 className='text-[#005c33] font-bold text-lg mb-2'>
                    Business-unit ownership
                  </h3>
                  <p className='text-[#58595b] text-base'>
                    Each <strong className='font-bold'>Key Business Unit (KBU)</strong> maintains a risk register and
                    framework linked to the <strong className='font-bold'>Susten's Balance Scorecard (BSC)</strong>,
                    ensuring risk indicators are integrated with performance
                    objectives.
                  </p>
                </div>
              </div>

              {/* TMW protocols */}
              <div className='flex'>
                <div className='w-1 h-auto mr-4 bg-[#f6a537]'></div>
                <div>
                  <h3 className='text-[#005c33] font-bold text-lg mb-2'>
                    TMW protocols
                  </h3>
                  <p className='text-[#58595b] text-base'>
                    Company-wide risk registers are maintained and updated in line
                    with <strong className='font-bold'>The Mahindra Way (TMW)</strong> requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 3: Operating cadence, Standardized registers */}
            <div className='space-y-8'>
              {/* Operating cadence */}
              <div className='flex'>
                <div className='w-1 h-auto mr-4 bg-[#f6a537]'></div>
                <div>
                  <h3 className='text-[#005c33] font-bold text-lg mb-2'>
                    Operating cadence
                  </h3>
                  <p className='text-[#58595b] text-base'>
                    <strong className='font-bold'>Risk monitoring, reporting, and mitigation</strong> are embedded in day-to-day operations and feed into
                    long-term planning via defined review and escalation forums.
                  </p>
                </div>
              </div>

              {/* Standardized registers */}
              <div className='flex'>
                <div className='w-1 h-auto mr-4 bg-[#f6a537]'></div>
                <div>
                  <h3 className='text-[#005c33] font-bold text-lg mb-2'>
                    Standardized registers
                  </h3>
                  <p className='text-[#58595b] text-base'>
                    Operational risk registers capture assumptions, assign
                    owners, estimate <strong className='font-bold'>value at risk (VAR)</strong>, and record inherent/
                    residual ratings with <strong className='font-bold'>time-bound actions</strong> led by functional heads.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[80%] mx-auto'>
          <img src="/RiskManagement/Infographics.png" alt="" className='mt-5'/>
          </div>
          
          {/* Risk Matrix Section */}
          <div className='mt-12'>
            <h2 className='text-[#005c33] font-extrabold text-2xl mb-6'>
              Risk Matrix
            </h2>
            
            {/* Risk Categories Table */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
              {/* Left Table */}
              <div>
                <table className='w-full border-collapse'>
                  <thead>
                    <tr className='border-b-2 border-[#4db8e8]'>
                      <th className='text-left p-3 text-[#666666] font-semibold'>Category</th>
                      <th className='text-left p-3 text-[#666666] font-semibold'>Sub-category</th>
                      <th className='text-left p-3 text-[#666666] font-semibold'>Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Macro */}
                    <tr className='border-b border-gray-200'>
                      <td className='p-3 font-bold text-[#6cb42c]' rowSpan={2}>Macro</td>
                      <td className='p-3 text-[#666666]'>Macroeconomic</td>
                      <td className='p-3'>
                        <span className='inline-block w-12 h-6 bg-[#6cb42c] rounded-full'></span>
                      </td>
                    </tr>
                    <tr className='border-b border-gray-200'>
                      <td className='p-3 text-[#666666]'>Country Investments</td>
                      <td className='p-3'>
                        <span className='inline-block w-12 h-6 bg-[#ff8c42] rounded-full'></span>
                      </td>
                    </tr>
                    
                    {/* Industry */}
                    <tr className='border-b border-gray-200'>
                      <td className='p-3 font-bold text-[#6cb42c]' rowSpan={3}>Industry</td>
                      <td className='p-3 text-[#666666]'>Sectoral</td>
                      <td className='p-3'>
                        <span className='inline-block w-12 h-6 bg-[#e63946] rounded-full'></span>
                      </td>
                    </tr>
                    <tr className='border-b border-gray-200'>
                      <td className='p-3 text-[#666666]'>Regulatory</td>
                      <td className='p-3'>
                        <span className='inline-block w-12 h-6 bg-[#e63946] rounded-full'></span>
                      </td>
                    </tr>
                    <tr>
                      <td className='p-3 text-[#666666]'>Consumer / Competition</td>
                      <td className='p-3'>
                        <span className='inline-block w-12 h-6 bg-[#6cb42c] rounded-full'></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              {/* Right Table */}
              <div>
                <table className='w-full border-collapse'>
                  <thead>
                    <tr className='border-b-2 border-[#4db8e8]'>
                      <th className='text-left p-3 text-[#666666] font-semibold'>Category</th>
                      <th className='text-left p-3 text-[#666666] font-semibold'>Sub-category</th>
                      <th className='text-left p-3 text-[#666666] font-semibold'>Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Business */}
                    <tr className='border-b border-gray-200'>
                      <td className='p-3 font-bold text-[#6cb42c]' rowSpan={5}>Business</td>
                      <td className='p-3 text-[#666666]'>Financial & Operational</td>
                      <td className='p-3'>
                        <span className='inline-block w-12 h-6 bg-[#6cb42c] rounded-full'></span>
                      </td>
                    </tr>
                    <tr className='border-b border-gray-200'>
                      <td className='p-3 text-[#666666]'>Legal / Contract</td>
                      <td className='p-3'>
                        <span className='inline-block w-12 h-6 bg-[#ff8c42] rounded-full'></span>
                      </td>
                    </tr>
                    <tr className='border-b border-gray-200'>
                      <td className='p-3 text-[#666666]'>Brand / IP</td>
                      <td className='p-3'>
                        <span className='inline-block w-12 h-6 bg-[#6cb42c] rounded-full'></span>
                      </td>
                    </tr>
                    <tr className='border-b border-gray-200'>
                      <td className='p-3 text-[#666666]'>Cybersecurity & Data Privacy</td>
                      <td className='p-3'>
                        <span className='inline-block w-12 h-6 bg-[#ff8c42] rounded-full'></span>
                      </td>
                    </tr>
                    <tr>
                      <td className='p-3 text-[#666666]'>ESG</td>
                      <td className='p-3'>
                        <span className='inline-block w-12 h-6 bg-[#6cb42c] rounded-full'></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Legend */}
            <div className='flex gap-6 mb-8 text-sm items-center'>
              <div className='flex items-center gap-2'>
                <span className='w-6 h-6 bg-[#e63946] rounded-full'></span>
                <span className='text-[#666666]'>High</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='w-6 h-6 bg-[#ff8c42] rounded-full'></span>
                <span className='text-[#666666]'>Medium</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='w-6 h-6 bg-[#6cb42c] rounded-full'></span>
                <span className='text-[#666666]'>Low</span>
              </div>
            </div>
            
            {/* Risk Details */}
            <div className='border-t-4 border-[#4a7c59]'>
              <div className='bg-[#4a7c59] text-white p-3 flex gap-4'>
                <span className='font-bold'>Risk</span>
                <span className='font-bold'>— Impact on the Company</span>
              </div>
              
              {/* Risk Items */}
              <div className='divide-y divide-gray-300'>
                {/* Dynamic regulatory environment */}
                <div className='grid grid-cols-3 p-4'>
                  <div className='font-bold pr-4'>
                    Dynamic regulatory environment
                  </div>
                  <div className='col-span-2 text-sm'>
                    Adjustments to policies, grid codes, open access frameworks, or duties may reduce expected returns compared with bid assumptions and delay financial closure. Modifications to curtailment procedures or incentive structures can create uncertainty in dispatch and receivables. These factors may require higher contingency provisions and could lead to selective deferral of projects, affecting visibility on growth.
                  </div>
                </div>
                
                {/* Hybrid / round-the-clock tender capabilities */}
                <div className='grid grid-cols-3 p-4'>
                  <div className='font-bold pr-4'>
                    Hybrid / round-the-clock tender capabilities
                  </div>
                  <div className='col-span-2 text-sm'>
                    Shortfalls in availability or design inconsistencies may result in penalties and lower the likelihood of success in future tenders. The need for redesign, re-engineering, or additional storage capacity may increase capital expenditure and extend project schedules. Integration challenges across original equipment manufacturers and energy management platforms may complicate acceptance and compliance.
                  </div>
                </div>
                
                {/* Competitive Intensity and pricing pressure */}
                <div className='grid grid-cols-3 p-4'>
                  <div className='font-bold pr-4'>
                    Competitive Intensity and pricing pressure
                  </div>
                  <div className='col-span-2 text-sm'>
                    Aggressive bidding may compress project internal rates of return and limit flexibility to absorb execution delays. Narrowing margins across awarded projects may increase volatility in portfolio cash flows. Maintaining financial discipline through selective participation could slow order inflows in some markets.
                  </div>
                </div>
                
                {/* Sale to InvIT for asset monetization */}
                <div className='grid grid-cols-3 p-4'>
                  <div className='font-bold pr-4'>
                    Sale to InvIT for asset monetization
                  </div>
                  <div className='col-span-2 text-sm'>
                    Extended approval timelines or changes in structuring may delay capital recycling and slow the pace of new investments. If asset valuations are below expectations, monetization gains may diminish and reported profitability could weaken. Underperformance of transferred assets may test covenants and attract greater investor scrutiny.
                  </div>
                </div>
                
                {/* Strategic tie-ups with wind equipment manufacturers */}
                <div className='grid grid-cols-3 p-4'>
                  <div className='font-bold pr-4'>
                    Strategic tie-ups with wind equipment manufacturers
                  </div>
                  <div className='col-span-2 text-sm'>
                    Reliance on a limited set of suppliers increases exposure to delays, warranty outcomes, and service performance risks. Schedule overruns may trigger liquidated damages and raise standby costs to maintain availability. Reduced bargaining leverage could elevate lifecycle costs and affect margins.
                  </div>
                </div>
                
                {/* Cybersecurity and data privacy */}
                <div className='grid grid-cols-3 p-4'>
                  <div className='font-bold pr-4'>
                    Cybersecurity and data privacy
                  </div>
                  <div className='col-span-2 text-sm'>
                    Breaches in supervisory control and data acquisition or remote operations systems could disrupt generation, impacting both revenue and operational safety. Associated regulatory notifications, forensic reviews, and insurance deductibles may add to non-operating expenses. Such events may also reduce confidence among lenders and offtakers, leading to stricter oversight and revised contractual terms.
                  </div>
                </div>
                
                {/* Legal and contractual exposures */}
                <div className='grid grid-cols-3 p-4'>
                  <div className='font-bold pr-4'>
                    Legal and contractual exposures
                  </div>
                  <div className='col-span-2 text-sm'>
                    Claims and penalties may arise from engineering, procurement, and construction or operations and maintenance obligations, as well as from land acquisition, title issues, or power purchase agreement conditions. Delays in obtaining permits, securing grid connectivity, or resolving right-of-way matters may add to revenue recognition and constraint headroom. Legal disputes may further increase costs and divert management attention from operations.
                  </div>
                </div>
                
                {/* Environmental, Social, and Governance (ESG) and compliance */}
                <div className='grid grid-cols-3 p-4'>
                  <div className='font-bold pr-4'>
                    Environmental, Social, and Governance (ESG) and compliance
                  </div>
                  <div className='col-span-2 text-sm'>
                    Delays in securing environmental clearances or safety-related incidents may result in stop-work directives and remediation requirements, extending timelines and increasing costs. Compliance gaps could raise insurance costs and monitoring obligations. Community-related concerns may affect reputation and hinder access to future sites.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default RiskManagement