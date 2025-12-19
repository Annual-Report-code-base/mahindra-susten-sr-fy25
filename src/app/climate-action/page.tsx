import React from 'react'

const ClimateAction = () => {
  return (
    <div>
      <div className='marginal text-[#58595b] text-md'>
        <h1 className='text-4xl font-bold mb-2 pb-3'>
          <span className='bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>Accelerating Climate Action Through Science-Based Targets</span>
        </h1>

        <p className='text-xl font-bold mb-5'>
          We believe that the path to a sustainable future begins with bold, science-aligned climate action. As part of our enduring commitment to environmental responsibility, we are systematically working to reduce our greenhouse gas (GHG) emissions across our operations and value chain. Our efforts are aligned with globally endorsed climate standards to ensure that our actions are both credible and consequential in addressing the climate risks.
        </p>

        <p className='text-[#58595b] mb-5'>
          In FY25, we achieved a significant milestone with the Science Based Targets initiative (SBTi) formally validating our near-term GHG reduction targets. These targets have been classified as being aligned to the 1.5°C pathway, the most ambitious designation under the SBTi framework.
        </p>

        {/* Two Column Layout */}
        <div className=''>
          {/* Left Column - Targets and Logo */}
          <div>
            {/* SBTi Logo */}
            <div className='flex items-center gap-4 mb-5'>
              <img 
                src="/ClimateAction/image.png" 
                alt="Science Based Targets" 
                className='w-44 h-24'
              />
              <div>
                <h3 className='text-2xl text-[#005c33] font-bold'>
                  Our Approved SBTi Targets
                </h3>
                <p className='text-[#58595b] text-sm'>
                  Mahindra Susten has committed to the following near-term targets, using FY21 as the base year:
                </p>
              </div>
            </div>

            {/* Targets List */}
            <div className='space-y-6'>
              <div>
                <p className='text-[#58595b] font-semibold mb-2 bg-[#f4f9fa] p-3 rounded-2xl'>
                  Reduce absolute Scope 1 and 2 GHG emissions by 51.8% by FY30.
                </p>
              </div>

              <div>
                <p className='text-[#58595b] font-semibold mb-2 bg-[#f4f9fa] p-3 rounded-2xl'>
                  Reduce Scope 3 GHG emissions intensity (per MWp) by 51.6% by FY30.
                </p>
              </div>

              <div>
                <p className='text-[#58595b] font-semibold mb-2 bg-[#f4f9fa] p-3 rounded-2xl'>
                  Fourth Indian Independent Power Producer (IPP) to have its targets approved by SBTi.
                </p>
              </div>

              <div>
                <p className='text-[#58595b] text-sm'>
                  These targets cover 100% of our Scope 1 and 2 emissions and the Scope 3 target addresses categories representing over 99% of our total Scope 3 emissions, including purchased goods and services, fuel- and energy-related activities, transportation and employee commuting.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Three Boxes */}
          <div className='space-y-6 mt-5'>
            {/* Emissions Inventory Box */}
            <div>
              <h4 className='text-xl text-[#7ab800] font-bold mb-3'>
                Emissions Inventory and Progress
              </h4>
              <p className='text-[#58595b] text-sm'>
                We are implementing a comprehensive emissions monitoring and reporting architecture aligned with the GHG Protocol. Between FY21 and FY25, we reduced our total GHG emissions from 524.73 tCO₂e to 148.33 tCO₂e. This reduction reflects strong progress in our low-carbon journey. With 96.94% of emissions coming from purchased goods and services under Scope 3, engaging our supply chain remains key to driving large-scale impact.
              </p>
            </div>

            {/* Governance Box */}
            <div>
              <h4 className='text-xl text-[#7ab800] font-bold mb-3'>
                Governance, Transparency and Accountability
              </h4>
              <p className='text-[#58595b] text-sm'>
                Our targets were developed in accordance with the SBTi's stringent validation criteria. We have committed to disclosing our GHG inventory annually and report progress against these benchmarks, with governance led by senior management and the Board. This ensures that our climate ambitions remain transparent, measurable and accountable.
              </p>
            </div>

            {/* Certificate Image */}
            <div className='w-[90%] mx-auto'>
              <img 
                src="/ClimateAction/Certificate.png" 
                alt="SBTi Approved Certificate" 
                className='w-full rounded-lg'
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ClimateAction
