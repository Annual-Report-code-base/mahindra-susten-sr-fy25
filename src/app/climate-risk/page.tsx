import React from 'react'

const ClimateRisk = () => {
  return (
    <div>
      <div className='marginal text-[#58595b] text-md'>
        <h1 className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold mb-2 pb-3'>
          Climate Change Risk
          Assessments Approach
        </h1>
        <h2 className='text-xl font-bold mb-8'>
          At Mahindra Susten, we view climate change as both an urgent environmental concern and a pressing business and operational risk. Our Climate Change Risk Assessment (CCRA) framework integrates climate resilience into the core of our renewable energy project development. We subject each of our projects to a systematic assessment to comprehend the potential impact of evolving climate patterns ranging from water scarcity to extreme heat and storms on the integrity of our infrastructure, safety and long-term performance.
        </h2>

        {/* IPCC Section */}
        <div className='flex flex-col md:flex-row gap-8 items-start mb-12'>
          {/* IPCC Logo */}
          <div className='w-full md:w-1/4 flex justify-center md:justify-start'>
            <img
              src="/ClimateRisk/image.png"
              alt="IPCC - Intergovernmental Panel on Climate Change"
              className='w-48 h-auto'
            />
          </div>

          {/* IPCC Description */}
          <div className='w-full md:w-3/4'>
            <p className='text-[#58595b]'>
              Our methodology is grounded in global climate science and employs high-emission scenario modeling (SSP 8.5) alongside thermal sensitivity analyses based on 2°C and 4°C global warming projections. This study is based on the IPCC framework, Assessment Report 6 and this approach enables us to assess both current risks and anticipate emerging vulnerabilities across a spectrum of future climatic alterations.
            </p>
          </div>
        </div>

        {/* Climate Risk Classification and Response Section */}
        <div className='flex flex-col lg:flex-row gap-8 mb-5'>
          {/* Left side - Text Content */}
          <div className='w-full lg:w-1/2'>
            <h3 className='text-2xl text-[#005c33] font-bold mb-6'>
              Climate Risk Classification and Response
            </h3>

            <h4 className='text-xl text-[#7ab800] font-bold mb-3'>
              We evaluate risks across two dimensions:
            </h4>

            {/* Acute Climate Events Box */}
            <div className='bg-gray-100 p-6 rounded-lg mb-6'>
              <h5 className='text-lg font-bold text-[#58595b] mb-3'>
                Acute Climate Events:
              </h5>
              <p className='text-[#58595b]'>
                Storms, floods, cyclones and heatwaves that pose immediate threats to asset safety and uptime
              </p>
            </div>

            {/* Chronic Risks Box */}
            <div className='bg-gray-100 p-6 rounded-lg mb-6'>
              <h5 className='text-lg font-bold text-[#58595b] mb-3'>
                Chronic Risks
              </h5>
              <p className='text-[#58595b]'>
                Long-term changes like rising temperatures and sea-level, which influence design longevity and supply chain reliability,
              </p>
            </div>

            {/* Response paragraph */}
            <p className='text-[#58595b]'>
              Based on the project's location and scope, we implement tailored resilience measures. These range from heat-resistant modules to flood-adapted drainage and robotic cleaning systems. Such measures enable us to mitigate these risks at the design stage.
            </p>
          </div>

          {/* Right side - Solar Farm Image */}
          <div className='w-full lg:w-1/2'>
            <img
              src="/ClimateRisk/image2.png"
              alt="Solar farm installation"
              className='w-full h-full object-cover rounded-lg'
            />
          </div>
        </div>

        {/* Resilience Strategies for Climate Change Scenarios */}
        <div className='mb-5'>
          <h3 className='text-2xl text-[#7ab800] font-bold mb-8'>
            Resilience Strategies for Climate Change Scenarios
          </h3>

          {/* Two Column Layout for 2°C and 4°C Scenarios */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
            {/* 2°C Scenario */}
            <div>
              <h4 className='text-3xl text-[#65acac] font-bold mb-3'>
                2°C Scenario –
              </h4>
              <h5 className='text-xl font-bold text-[#58595b] mb-4'>
                Moderate Climate Adaptation
              </h5>
              <p className='text-[#58595b] mb-6'>
                Mahindra Susten's approach is focused on augmenting system efficiency under manageable climate variability.
              </p>

              {/* 2°C Table */}
              <div className='overflow-x-auto'>
                <table className='w-full border-collapse'>
                  <thead>
                    <tr>
                      <th className='bg-[#05acc4] text-white p-3 text-left font-bold text-sm'>Strategic Measures</th>
                      <th className='bg-gray-200 text-[#58595b] p-3 text-left font-bold text-sm'>Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='border-b border-gray-300'>
                      <td className='p-3 font-semibold text-sm'>Hybrid renewable energy systems</td>
                      <td className='p-3 text-sm'>Maintain generation efficiency across changing temperature conditions</td>
                    </tr>
                    <tr className='border-b border-gray-300'>
                      <td className='p-3 font-semibold text-sm'>Advanced solar tracking technologies</td>
                      <td className='p-3 text-sm'>Optimize energy capture and system responsiveness</td>
                    </tr>
                    <tr className='border-b border-gray-300'>
                      <td className='p-3 font-semibold text-sm'>Flood-resilient drainage infrastructure</td>
                      <td className='p-3 text-sm'>Minimize downtime and protect site performance during heavy rainfall</td>
                    </tr>
                    <tr className='border-b border-gray-300'>
                      <td className='p-3 font-semibold text-sm'>Robust structural designs</td>
                      <td className='p-3 text-sm'>Ensure long-term asset stability and safety</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4°C Scenario */}
            <div>
              <h4 className='text-3xl text-[#65acac] font-bold mb-3'>
                4°C Scenario –
              </h4>
              <h5 className='text-xl font-bold text-[#58595b] mb-4'>
                Climate Resilience
              </h5>
              <p className='text-[#58595b] mb-6'>
                For more extreme climate projections, we adopt more comprehensive, site-specific interventions.
              </p>

              {/* 4°C Table */}
              <div className='overflow-x-auto'>
                <table className='w-full border-collapse'>
                  <thead>
                    <tr>
                      <th className='bg-[#05acc4] text-white p-3 text-left font-bold text-sm'>Strategic Measures</th>
                      <th className='bg-gray-200 text-[#58595b] p-3 text-left font-bold text-sm'>Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='border-b border-gray-300'>
                      <td className='p-3 font-semibold text-sm'>Elevated solar module structures</td>
                      <td className='p-3 text-sm'>Reduce exposure to flood and storm impact</td>
                    </tr>
                    <tr className='border-b border-gray-300'>
                      <td className='p-3 font-semibold text-sm'>Advanced, high-capacity drainage systems</td>
                      <td className='p-3 text-sm'>Manage stormwater and avoid site damage</td>
                    </tr>
                    <tr className='border-b border-gray-300'>
                      <td className='p-3 font-semibold text-sm'>Waterless robotic cleaning systems</td>
                      <td className='p-3 text-sm'>Maintain performance in water-scarce regions</td>
                    </tr>
                    <tr className='border-b border-gray-300'>
                      <td className='p-3 font-semibold text-sm'>Reinforced structural designs</td>
                      <td className='p-3 text-sm'>Withstand severe heatwaves and high wind scenarios</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Step-by-step approach section */}
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12'>
            {/* Left side - Text introduction */}
            <div className='lg:col-span-4'>
              <h4 className='text-2xl text-[#005c33] font-bold mb-4'>
                Step-by-step approach to mitigate risk at design stage
              </h4>
              <p className='text-[#58595b]'>
                We integrate climate resilience systematically into project design to ensure that our renewable energy infrastructure can withstand and perform under variable and extreme climatic conditions. The following interventions have been deployed to address climate-related risks across the asset lifecycle
              </p>
            </div>

            {/* Right side - 6 Steps Grid */}
            <div className='lg:col-span-8'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* Step 1 */}
                <div>
                  <div className='flex items-center gap-3 mb-3'>
                    <div className='w-12 h-12 rounded-full bg-[#7ab800] flex items-center justify-center text-white font-bold text-xl flex-shrink-0'>
                      1
                    </div>
                    <h5 className='text-lg font-bold text-[#005c33]'>
                      Site Assessment and Risk Profiling
                    </h5>
                  </div>
                  <p className='text-[#58595b] text-sm'>
                    Identify region-specific climatic challenges, such as high wind zones, extreme heat or flood-prone areas.
                  </p>
                </div>

                {/* Step 2 */}
                <div>
                  <div className='flex items-center gap-3 mb-3'>
                    <div className='w-12 h-12 rounded-full bg-[#05acc4] flex items-center justify-center text-white font-bold text-xl flex-shrink-0'>
                      2
                    </div>
                    <h5 className='text-lg font-bold text-[#005c33]'>
                      Foundation Engineering
                    </h5>
                  </div>
                  <p className='text-[#58595b] text-sm'>
                    Deploy wind-resilient foundation systems designed to withstand cyclonic winds and ensure long-term structural stability.
                  </p>
                </div>

                {/* Step 3 */}
                <div>
                  <div className='flex items-center gap-3 mb-3'>
                    <div className='w-12 h-12 rounded-full bg-[#7ab800] flex items-center justify-center text-white font-bold text-xl flex-shrink-0'>
                      3
                    </div>
                    <h5 className='text-lg font-bold text-[#005c33]'>
                      Thermal Load Management
                    </h5>
                  </div>
                  <p className='text-[#58595b] text-sm'>
                    Incorporate high-temperature–durable technologies to minimize thermal stress and sustain operational efficiency in conditions of severe heat.
                  </p>
                </div>

                {/* Step 4 */}
                <div>
                  <div className='flex items-center gap-3 mb-3'>
                    <div className='w-12 h-12 rounded-full bg-[#05acc4] flex items-center justify-center text-white font-bold text-xl flex-shrink-0'>
                      4
                    </div>
                    <h5 className='text-lg font-bold text-[#005c33]'>
                      Stormwater Design Integration
                    </h5>
                  </div>
                  <p className='text-[#58595b] text-sm'>
                    Implement custom drainage infrastructure with the capability to handle intense rainfall, reducing risks of floods and erosion around critical equipment.
                  </p>
                </div>

                {/* Step 5 */}
                <div>
                  <div className='flex items-center gap-3 mb-3'>
                    <div className='w-12 h-12 rounded-full bg-[#7ab800] flex items-center justify-center text-white font-bold text-xl flex-shrink-0'>
                      5
                    </div>
                    <h5 className='text-lg font-bold text-[#005c33]'>
                      Water Efficiency Optimization
                    </h5>
                  </div>
                  <p className='text-[#58595b] text-sm'>
                    Utilize dry-cleaning systems and water reuse technologies to address water scarcity, especially in arid regions without compromising maintenance cycles.
                  </p>
                </div>

                {/* Step 6 */}
                <div>
                  <div className='flex items-center gap-3 mb-3'>
                    <div className='w-12 h-12 rounded-full bg-[#05acc4] flex items-center justify-center text-white font-bold text-xl flex-shrink-0'>
                      6
                    </div>
                    <h5 className='text-lg font-bold text-[#005c33]'>
                      Performance Validation and Simulation
                    </h5>
                  </div>
                  <p className='text-[#58595b] text-sm'>
                    Run climate simulations and structural performance tests to validate design resilience prior to execution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Structured Framework for Risk Assessment */}
        <div className='mb-12'>
          <h3 className='text-2xl text-[#005c33] font-bold mb-3'>
            Structured Framework for Risk Assessment
          </h3>
          <p className='text-[#58595b] mb-8'>
            Our CCRA process follows four key stages
          </p>

          <img src="/ClimateRisk/image1.png" alt="" className='md:w-[80%] mx-auto' />

          {/* Team Photo */}
          <div className='mt-8'>
            <img
              src="/ClimateRisk/image3.png"
              alt="Mahindra Susten team at project site"
              className='w-full rounded-lg'
            />
          </div>
        </div>

        {/* Deploying Robotic Arm-Based Dry Cleaning Systems */}
        <div className='border-2 border-[#7ab800] rounded-2xl p-8 mb-12 relative'>
          {/* Leaf decoration */}
          <img
            src="/LeadershipMessage/leaf.png"
            alt="leaf"
            className='absolute -top-8 right-8 w-16 h-16'
          />

          <h3 className='text-2xl text-[#005c33] font-bold mb-6 mt-4'>
            Deploying Robotic Arm-Based Dry Cleaning Systems
          </h3>

          <p className='text-[#58595b] mb-6'>
            The solar energy industry has traditionally depended on water-intensive cleaning practices to maintain optimal performance of photovoltaic (PV) panels. With the need to clean a vast arrays of solar panels regularly especially in arid regions where water consumption has been a growing environmental and operational concern.
          </p>

          <p className='text-[#58595b] mb-8'>
            Mahindra Susten adopted robotic dry-cleaning technology to transform the way solar panels are maintained. These robotic arms are equipped with soft-brush mechanisms and automated motion control to clean PV panels effectively without the use of water.
          </p>

          {/* Two Column Layout */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* Left Column - Key Features */}
            <div>
              <h4 className='text-xl text-[#7ab800] font-bold mb-4'>
                Key features of the system include:
              </h4>

              <div className='space-y-4'>
                <div className='pb-4 border-b border-gray-300'>
                  <p className='text-[#58595b] font-semibold mb-2'>
                    Fully autonomous operation, reducing dependence on manual labour
                  </p>
                </div>

                <div className='pb-4 border-b border-gray-300'>
                  <p className='text-[#58595b] font-semibold mb-2'>
                    Real-time monitoring and diagnostics to ensure uninterrupted performance
                  </p>
                </div>

                <div className='pb-4 border-b border-gray-300'>
                  <p className='text-[#58595b] font-semibold mb-2'>
                    Programmable cleaning cycles to suit different geographies and dust levels
                  </p>
                </div>

                <div className='pb-4 border-b border-gray-300'>
                  <p className='text-[#58595b] font-semibold mb-2'>
                    Compatibility with existing mounting structures, enabling retrofitting across sites
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Outcome */}
            <div>
              <h4 className='text-3xl text-[#65acac] font-bold mb-4'>
                Outcome
              </h4>

              <p className='text-[#58595b] mb-6'>
                The shift to robotic cleaning has yielded measurable benefits:
              </p>

              <div className='space-y-4'>
                <div className='pb-4 border-b border-[#7ab800]'>
                  <p className='text-[#58595b] font-semibold'>
                    Significant water savings, particularly in drought-prone regions
                  </p>
                </div>

                <div className='pb-4 border-b border-[#7ab800]'>
                  <p className='text-[#58595b] font-semibold'>
                    Enhanced cleaning frequency, which helps maintain panel efficiency and energy yield
                  </p>
                </div>

                <div className='pb-4 border-b border-[#7ab800]'>
                  <p className='text-[#58595b] font-semibold'>
                    Reduced operational costs over time due to minimal labour requirements
                  </p>
                </div>

                <div className='pb-4 border-b border-[#7ab800]'>
                  <p className='text-[#58595b] font-semibold'>
                    Lower carbon footprint by eliminating the need for water transport and associated logistics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Large Solar Farm Image */}
        <div className='mb-12'>
          <img
            src="/ClimateRisk/image5.png"
            alt="Large scale solar farm installation"
            className='w-full rounded-lg shadow-lg'
          />
        </div>

        {/* Green Building Approach for Main Control Room */}
        <div className='border-2 border-[#7ab800] rounded-2xl p-8 mb-12 relative'>
          {/* Leaf decoration */}
          <img
            src="/LeadershipMessage/leaf.png"
            alt="leaf"
            className='absolute -top-8 right-8 w-16 h-16'
          />

          <h3 className='text-2xl text-[#005c33] font-bold mb-6 mt-4'>
            Green Building Approach for Main Control Room
          </h3>

          <p className='text-[#58595b] mb-8'>
            We designed the Main Control Room in its PV solar plants by adopting a comprehensive green building approach making it energy-efficient, resource-conscious, climate-resilient and aligned with international sustainability standards.
          </p>

          {/* Three Column Layout */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* Left Column - Key Features */}
            <div>
              <h4 className='text-2xl text-[#7ab800] font-bold mb-6'>
                Key features
              </h4>

              <div className='space-y-4'>
                <div className='pb-4 border-b border-gray-300'>
                  <p className='text-[#58595b]'>
                    <strong>Energy Efficiency:</strong> Installed LED lighting, energy-efficient HVAC systems and power monitoring tools to reduce energy consumption.
                  </p>
                </div>

                <div className='pb-4 border-b border-gray-300'>
                  <p className='text-[#58595b]'>
                    <strong>Renewable Energy Integration:</strong> Used solar panels and battery storage systems to ensure reliable, clean energy for operations.
                  </p>
                </div>

                <div className='pb-4 border-b border-gray-300'>
                  <p className='text-[#58595b]'>
                    <strong>Sustainable Materials:</strong> Used eco-friendly materials like AAC blocks and low-carbon concrete in construction.
                  </p>
                </div>

                <div className='pb-4 border-b border-gray-300'>
                  <p className='text-[#58595b]'>
                    <strong>Water Conservation:</strong> Integrated rainwater harvesting systems and low-flow fixtures to reduce water use.
                  </p>
                </div>

                <div className='pb-4 border-b border-gray-300'>
                  <p className='text-[#58595b]'>
                    <strong>Ergonomic and Inclusive Design:</strong> Created a layout that supports operator comfort and accessibility, including ramps and a handicap-friendly toilet.
                  </p>
                </div>

                <div className='pb-4 border-b border-gray-300'>
                  <p className='text-[#58595b]'>
                    <strong>Thermal Comfort and Ventilation:</strong> Used double-glazed windows and natural airflow systems to reduce cooling loads.
                  </p>
                </div>

                <div className='pb-4 border-b border-gray-300'>
                  <p className='text-[#58595b]'>
                    <strong>Safety and Resilience:</strong> Equipped the building with fire-resistant and disaster-resilient features like flood and earthquake protection.
                  </p>
                </div>

                <div className='pb-4 border-b border-gray-300'>
                  <p className='text-[#58595b]'>
                    <strong>Green Certification Compliance:</strong> Ensured the building meets GBCI-certified green building standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Middle Column - Outcome */}
            <div>
              <h4 className='text-3xl text-[#65acac] font-bold mb-6'>
                Outcome
              </h4>

              <div className='space-y-4'>
                <div className='pb-4 border-b border-[#7ab800]'>
                  <p className='text-[#58595b] font-semibold'>
                    Reduced Operational Costs through lower energy and water consumption.
                  </p>
                </div>

                <div className='pb-4 border-b border-[#7ab800]'>
                  <p className='text-[#58595b] font-semibold'>
                    Improved Reliability with uninterrupted power supply and safer working conditions.
                  </p>
                </div>

                <div className='pb-4 border-b border-[#7ab800]'>
                  <p className='text-[#58595b] font-semibold'>
                    Lower Environmental Footprint via sustainable materials and efficient design.
                  </p>
                </div>

                <div className='pb-4 border-b border-[#7ab800]'>
                  <p className='text-[#58595b] font-semibold'>
                    Increased Employee Comfort with better lighting, air quality and ergonomics.
                  </p>
                </div>

                <div className='pb-4 border-b border-[#7ab800]'>
                  <p className='text-[#58595b] font-semibold'>
                    Certification Readiness for recognized green building labels, reinforcing sustainability leadership.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="/ClimateRisk/image6.png"
                  alt="Green building control room with team planting trees"
                  className='w-full h-full object-cover rounded-3xl mt-5'
                />
              </div>
            </div>
          </div>
        </div>

        {/* Wind Tunnel-Based Design of Module Mounting Structures */}
        <div className=''>
          <div className='border-2 border-[#7ab800] rounded-2xl p-8 relative'>
            {/* Leaf decoration */}
            <img
              src="/LeadershipMessage/leaf.png"
              alt="leaf"
              className='absolute -top-8 right-8 w-16 h-16'
            />

            <h3 className='text-2xl text-[#005c33] font-bold mb-6 mt-4'>
              Wind Tunnel-Based Design of Module Mounting Structures
            </h3>

            <p className='text-[#58595b] mb-8'>
              Mahindra Susten redesigned the module mounting structures (MMS) for solar projects using insights from wind tunnel studies instead of relying solely on generic Indian Standard (IS) codes.
            </p>

            {/* Two Column Layout */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              {/* Left Column - Key Features */}
              <div>
                <h4 className='text-2xl text-[#7ab800] font-bold mb-6'>
                  Key features
                </h4>

                <div className='space-y-4'>
                  <div className='pb-4 border-b border-gray-300'>
                    <p className='text-[#58595b] font-semibold'>
                      Conducted wind tunnel simulations to capture real, site-specific wind load patterns across different zones (inner, outer, edge) of the solar array.
                    </p>
                  </div>

                  <div className='pb-4 border-b border-gray-300'>
                    <p className='text-[#58595b] font-semibold'>
                      Developed customized MMS tables tailored to these varying loads.
                    </p>
                  </div>

                  <div className='pb-4 border-b border-gray-300'>
                    <p className='text-[#58595b] font-semibold'>
                      Integrated the results into MMS design to ensure precise structural support where needed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Outcome */}
              <div>
                <h4 className='text-3xl text-[#65acac] font-bold mb-6'>
                  Outcome
                </h4>

                <div className='space-y-4'>
                  <div className='pb-4 border-b border-[#7ab800]'>
                    <p className='text-[#58595b] font-semibold'>
                      Reduced material use, particularly steel, leading to lower costs and a smaller carbon footprint.
                    </p>
                  </div>

                  <div className='pb-4 border-b border-[#7ab800]'>
                    <p className='text-[#58595b] font-semibold'>
                      Enhanced structural strength and longevity, reducing repairs and replacements.
                    </p>
                  </div>

                  <div className='pb-4 border-b border-[#7ab800]'>
                    <p className='text-[#58595b] font-semibold'>
                      Stable solar panel performance under diverse wind conditions, ensuring consistent energy generation.
                    </p>
                  </div>

                  <div className='pb-4 border-b border-[#7ab800]'>
                    <p className='text-[#58595b] font-semibold'>
                      Innovative, data-driven design approach that sets a new benchmark in sustainable solar infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Large Landscape Image */}
          <div className='mt-8'>
            <img
              src="/ClimateRisk/image7.png"
              alt="Solar farm landscape view"
              className='w-full rounded-lg'
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default ClimateRisk
