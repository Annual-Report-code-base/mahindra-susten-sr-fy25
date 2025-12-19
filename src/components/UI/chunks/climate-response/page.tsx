import React from 'react'

const ClimateResponce = () => {
  return (
    <div>
      <div className='marginal text-[#58595b] text-md'>
        <h1 className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold mb-2 pb-3'>
          Strengthening Our Response to
          Emerging Climate Risks
        </h1>
        <h2 className='text-xl font-bold mb-5'>
          Building climate resilience is a strategic imperative. It is instrumental
          to the longevity of our renewable energy assets. As climate variability
          intensifies, we comprehend the urgency to anticipate, assess and act
          upon environmental risks across our project lifecycle.
        </h2>
        <p className='mb-3'>
          Our Climate Change Risk and Vulnerability Assessment (CCRVA) framework developed in line with IPCC
          and CMIP6 standards guides our efforts to proactively address both physical and transitional climate risks.
        </p>
        <p className='mb-5'>
          By utilizing sophisticated modeling tools and national climate datasets, we map exposure to key climate
          hazards, such as drought, extreme temperatures, precipitation, flooding, wind speeds and cyclonic
          events. The findings from these assessments directly steer actionable adaptation strategies that
          strengthens both operational stability and environmental stewardship.
        </p>
        <p className='mb-3 text-sm'>
          We collaborate with
          government agencies,
          technical partners and local
          communities to augment
          the scope and impact of our
          climate risk assessments.
          Our alignment with India's
          National Action Plan on
          Climate Change and global
          frameworks like Task Force
          on Climate-related Financial
          Disclosures (TCFD) further
          ensures that our climate
          response is science-based,
          stakeholder-informed and
          action-oriented.
        </p>
        <p className='mb-5 text-sm'>
          At Mahindra Susten, our
          climate resilience strategy
          is not static. It is continually
          adapted to reflect the
          shifting climatic conditions.
          By embedding CCRA into
          project planning and design,
          we safeguard our assets,
          uphold energy reliability and
          contribute meaningfully to a
          low-carbon, climate-resilient
          future.
        </p>

        {/* Mitigation Measures for Under-Construction Sites */}
        <div className='mb-12'>
          <h3 className='text-2xl text-[#7ab800] font-bold mb-6'>
            Mitigation Measures for Under-Construction Sites
          </h3>

          <div className='overflow-x-auto mb-8'>
            <table className='w-full border-collapse'>
              <thead>
                <tr>
                  <th className='bg-[#005c33] text-white p-4 text-left font-bold'>Climate Risk</th>
                  <th className='bg-gray-200 text-[#58595b] p-4 text-left font-bold'>Mitigation Strategy</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-gray-300'>
                  <td className='p-4 font-semibold'>Water Availability and Drought</td>
                  <td className='p-4 text-[#58595b]'>Adopt water-efficient technologies, such as rainwater harvesting, greywater recycling and dry robotic cleaning.</td>
                </tr>
                <tr className='border-b border-gray-300'>
                  <td className='p-4 font-semibold'>Precipitation</td>
                  <td className='p-4 text-[#58595b]'>Improve drainage through retention basins, permeable surfaces and protective debris barriers.</td>
                </tr>
                <tr className='border-b border-gray-300'>
                  <td className='p-4 font-semibold'>Flooding</td>
                  <td className='p-4 text-[#58595b]'>Conduct flood risk assessments; elevate critical infrastructure and integrate flood-resilient site designs.</td>
                </tr>
                <tr className='border-b border-gray-300'>
                  <td className='p-4 font-semibold'>High Wind Speeds</td>
                  <td className='p-4 text-[#58595b]'>Implement wind-resistant construction methods, ensure frequent equipment maintenance and install windbreaks wherever feasible.</td>
                </tr>
                <tr className='border-b border-gray-300'>
                  <td className='p-4 font-semibold'>Extreme Heat</td>
                  <td className='p-4 text-[#58595b]'>Apply heat-resistant materials, passive cooling designs and protect workers through shade, hydration and break schedules.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Mitigation Measures for Installed Sites */}
        <div className='mb-12'>
          <h3 className='text-2xl text-[#7ab800] font-bold mb-6'>
            Mitigation Measures for Installed Sites
          </h3>

          <div className='overflow-x-auto'>
            <table className='w-full border-collapse'>
              <thead>
                <tr>
                  <th className='bg-[#005c33] text-white p-4 text-left font-bold'>Concern</th>
                  <th className='bg-gray-200 text-[#58595b] p-4 text-left font-bold'>Action Plan</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-gray-300'>
                  <td className='p-4 font-semibold'>Thermal Stress</td>
                  <td className='p-4 text-[#58595b]'>Insulate roofs/walls; use active/passive cooling methods for equipment and shelter.</td>
                </tr>
                <tr className='border-b border-gray-300'>
                  <td className='p-4 font-semibold'>Water Conservation</td>
                  <td className='p-4 text-[#58595b]'>Emphasize recycling and reuse practices to reduce dependency on freshwater sources.</td>
                </tr>
                <tr className='border-b border-gray-300'>
                  <td className='p-4 font-semibold'>Air and Dust Pollution</td>
                  <td className='p-4 text-[#58595b]'>Operate only certified machinery and vehicles; conduct regular maintenance and control dust emissions.</td>
                </tr>
                <tr className='border-b border-gray-300'>
                  <td className='p-4 font-semibold'>Emergency Preparedness</td>
                  <td className='p-4 text-[#58595b]'>Update EPRPs to include wind and sandstorm risks; align structures with national/international wind resistance codes.</td>
                </tr>
                <tr className='border-b border-gray-300'>
                  <td className='p-4 font-semibold'>Operational Safety (High Winds)</td>
                  <td className='p-4 text-[#58595b]'>Implement advisories to pause outdoor work when wind speeds exceed safe thresholds (e.g., 17.8 m/s).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ClimateResponce
