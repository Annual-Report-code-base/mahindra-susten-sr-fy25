import React from 'react'

const EnergyEmission = () => {
  return (
    <div>
      <div className='marginal text-[#58595b] text-md'>
        <h1 className='text-4xl font-bold mb-2 pb-3'>
          <span className='bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>Energy and Emission Management</span>
        </h1>

        <p className='text-xl font-bold mb-5'>
          Our energy and emission strategy is anchored in operational efficiency, digital integration and tangible progress. As a renewable energy platform, we continue to reduce our environmental footprint across project sites, offices and supply chains by employing smart monitoring tools, embracing responsible energy utilization and a comprehensive decarbonization roadmap.
        </p>

        {/* Renewable Energy Asset Portfolio */}
        <div className='mb-5'>
          <h3 className='text-2xl text-[#005c33] font-bold mb-4'>
            Renewable Energy Asset Portfolio
          </h3>
          <p className='text-[#58595b] mb-4'>
            Our efforts to manage energy and emissions are firmly cemented in an expanding portfolio of renewable energy assets spread across the nation. Over the years, we have commissioned utility-scale solar power projects and are now actively developing integrated renewable solutions, including solar-wind hybrids. These assets form the backbone of our operations and play an instrumental role in advancing the nation's progress towards a low-carbon future.
          </p>
          <p className='text-[#58595b] mb-4'>
            We have developed and commissioned 1.54 GWp of solar energy capacity across five states, supported by long-term Power Purchase Agreements (PPAs). Looking ahead, our ambition is to scale our renewable energy capacity by an estimated additional 5.4 GWp over the next five years.
          </p>
        </div>

        {/* Leveraging Digital Tools for Real-Time Efficiency */}
        <div className='mb-5'>
          <h3 className='text-2xl text-[#005c33] font-bold mb-4'>
            Leveraging Digital Tools for Real-Time Efficiency
          </h3>
          <p className='text-[#58595b] mb-4'>
            We have instituted an IT-enabled cloud platform incorporated with SCADA systems to enable real-time data acquisition and site-level oversight. This digital backbone reinforces our ESG reporting framework (SoFi) and allows expedited implementation of corrective measures to minimize energy losses, optimize generation and maintain transparency through monthly dashboard validations and third-party assurance.
          </p>
        </div>

        {/* Decarbonization Targets and Emissions Inventory */}
        <div className='mb-5'>
          <h3 className='text-2xl text-[#005c33] font-bold mb-4'>
            Decarbonization Targets and Emissions Inventory
          </h3>
          <p className='text-[#58595b] mb-8'>
            Our emissions management strategy is steered by the Science Based Targets initiative (SBTi). We have committed to a 51.8% absolute reduction in Scope 1 and 2 emissions and a 51.6% intensity-based reduction in Scope 3 emissions (per MWp) by FY30, compared to the FY21 baseline.
          </p>

          {/* Graph Images Placeholder */}
          <img src="/EnergyEmission/image.png" alt="" className='mb-8' />
          <img src="/EnergyEmission/timeline.png" alt="" className='mb-4' />
          <p className='mb-8 text-sm text-[#58595b]'>
            These commitments may vary based on climate or other risks in the future.
          </p>
          <img src="/EnergyEmission/image2.png" alt="" className='md:w-[80%] mx-auto mb-8' />
            <p className='text-green-700 text-lg font-bold'>Track our progress against SBTi targets</p>
          <div className="w-full max-w-5x mx-auto space-y-6">
            <div className="flex md:flex-row flex-col items-center justify-between gap-4">
              <img src="/EnergyEmission/g1.png" className="w-full md:w-[30%] aspect-squar object-cover rounded-lg" />
              <img src="/EnergyEmission/g2.png" className="w-full md:w-[30%] aspect-squae object-cover rounded-lg" />
              <img src="/EnergyEmission/g3.png" className="w-full md:w-[30%] aspect-squre object-cover rounded-lg" />
            </div>

            {/* Row 2 - 3 Images */}
            <div className="flex md:flex-row flex-col items-center justify-between gap-4">
              <img src="/EnergyEmission/g4.png" className="w-full  md:w-[30%] aspect-squar object-cover rounded-lg" />
              <img src="/EnergyEmission/g5.png" className="w-full  md:w-[30%] aspect-squar object-cover rounded-lg" />
              <img src="/EnergyEmission/g6.png" className="w-full  md:w-[30%] aspect-squae object-cover rounded-lg" />
            </div>

            {/* Row 3 - 2 Images centered (but same width as the above) */}
            <div className="flex justify-center pt-6 gap-4">
              <img
                src="/EnergyEmission/g7.png"
                className="md:w-[30%] aspect-squar object-cover rounded-lg"
              />
              <img
                src="/EnergyEmission/g8.png"
                className="md:w-[30%] aspect-squar object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* GHG Reductions Section */}
        <div className='mb-5'>
          <h3 className='text-2xl text-[#7ab800] font-bold mb-6'>
            Our GHG reductions are primarily driven by
          </h3>

          <div className='space-y-4'>
            <div className='flex items-start gap-3'>
              <div className='w-3 h-3 rounded-full bg-[#005c33] mt-1.5 flex-shrink-0'></div>
              <p className='text-[#58595b]'>
                Reduced dependency on diesel generators by establishing grid connections at project sites wherever feasible, leading to lower diesel consumption.
              </p>
            </div>

            <div className='flex items-start gap-3'>
              <div className='w-3 h-3 rounded-full bg-[#005c33] mt-1.5 flex-shrink-0'></div>
              <p className='text-[#58595b]'>
                Transition to green power supply at offices
              </p>
            </div>

            <div className='flex items-start gap-3'>
              <div className='w-3 h-3 rounded-full bg-[#005c33] mt-1.5 flex-shrink-0'></div>
              <p className='text-[#58595b]'>
                Quarterly desktop assessments  of site-level emissions across assets, such as RUVNL and GUVNL projects, with transparent reporting.
              </p>
            </div>
          </div>
        </div>
        {/* Statistics Section - 4 Column Horizontal Layout */}
        <div className='mb-'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            {/* 60% Stat */}
            <div>
              <h2 className='text-4xl font-bold mb-3 w-fit bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>
                60%
              </h2>
              <p className='text-[#58595b] text-sm border-t-2 border-gray-300 pt-3'>
                Scope 1and 2 emission reduction FY24 VS FY25
              </p>
            </div>

            {/* 68% Stat */}
            <div>
              <h2 className='text-4xl font-bold mb-3 w-fit bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>
                68%
              </h2>
              <p className='text-[#58595b] text-sm border-t-2 border-gray-300 pt-3'>
                Renewable energy share in FY25, with a goal of achieving 100% by FY27
              </p>
            </div>

            {/* 100% Stat */}
            <div>
              <h2 className='text-4xl font-bold mb-3 w-fit bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>
                100%
              </h2>
              <p className='text-[#58595b] text-sm border-t-2 border-gray-300 pt-3'>
                Renewable energy deployment in the headquarters
              </p>
            </div>

            {/* 98% Stat */}
            <div>
              <h2 className='text-4xl font-bold mb-3 w-fit bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>
                98%
              </h2>
              <p className='text-[#58595b] text-sm border-t-2 border-gray-300 pt-3'>
                Scope 3 emissions are from the category purchased goods and services
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnergyEmission
