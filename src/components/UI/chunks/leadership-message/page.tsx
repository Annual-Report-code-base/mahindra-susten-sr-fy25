import React from 'react'
import Image from 'next/image'

const LeadershipMessagePage = () => {
  return (
    <div>
      <div className='marginal text-[#58595b] text-md'>
        <h1 className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold mb-12 pb-3'>
          Leadership Message
        </h1>

        {/* Main Content: Image and Quote */}
        <div className='mb-10'>
          <div className='flex md:flex-row flex-col items-end'>
            <div className='w-full flex justify-center md:justify-end'>
              <div className='relative w-[200px] h-[300px] md:w-[450px] md:h-[450px]'>
                <Image
                  src="/LeadershipMessage/image1.png"
                  alt="Mr. Avinash Rao, Managing Director and CEO"
                  layout="fill"
                  objectFit="contain"
                  className='rounded-md'
                />
              </div>
            </div>
            <div className='text-[#40ad48] h-fit mb-5'>
              <div className=''>
                <img src="/LeadershipMessage/leaf.png" alt="" className='w-10 mb-3' />
                <p className='text-2xl font-bold'>
                  Every project we undertake creates ripple effects of positive change, fostering local economic development, creating green jobs, and supporting India’s transition to a low-carbon economy.
                </p>
              </div>
            </div>
          </div>
          {/* Quote */}
          <div className='mt-5'>
            <p className='text-2xl font-extrabold mb-4'>
              Dear Stakeholders,
            </p>
            <p className='text-2xl font-extrabold text-[#005c33]'>
              The global energy transition has reached an inflection point, and the narrative must shift from “when renewables will dominate” to “how rapidly we can scale and minimize the use of fossil fuels”. As India makes way to becoming the 3rd largest producer of solar energy and 4th in total capacity, India’s renewable energy leadership is a pathway to a thriving planet, resilient communities and a prosperous economy.
            </p>
          </div>
        </div>

        {/* Full-width Main Text Content */}
        <div className='space-y-4 text-justify'>
          <p>
            At Mahindra Susten, for over 15 years, we are proudly transforming India’s decarbonization landscape. We continue to set ambitious targets that help us push boundaries to build high quality and efficient solar, wind and hybrid solutions for a future world. We unlock products, end-to-end Battery Energy Storage Systems (BESS) while embedding sustainability in our Company’s core strategy, operations and decision making process.
          </p>

          <h3 className='text-[#005c33] font-extrabold text-2xl'>
            Purpose Beyond Profit: Our ESG Commitment
            
          </h3>
          <p>
            As utilities and corporates work towards translating net zero commitments into actionable steps, Mahindra Susten is charting a path to a greener future. We are inculcating leading Sustainability practices into the body of the Mahindra Group’s “Rise” philosophy, driving positive change and enabling communities to rise. Our commitment extends far beyond generating clean energy; we are investing in a sustainable future – creating jobs, fostering innovation and inclusive growth.
          </p>
          <p>
            This year, we became the 4th company in India's renewable energy sector to receive Science Based Targets initiative (SBTi) commitment, aiming to reduce absolute scope 1 and 2 GHG emissions by 51.8% by FY30 and scope 3 emissions by 51.8% per MWh within the same timeframe. Our 2024 MSCI ASPI score was 100% Water neutral certified, and 100% Advance Zero Waste to Landfill (ZWL) certified.
          </p>
          <p>
            At Mahindra Susten, our success goes hand-in-hand with the well-being of our communities and our planet. Through our Nanhai program, we have supported over 12,000 girls with education, while our broader CSR initiatives have impacted 3.02 Lakh lives since 2016. In FY25, we adopted and educated 12 schools and 2,094 students and installed 35 Solar streetlights in remote villages in Rajasthan and Gujarat. Our 1,500 employees volunteered, contributing a total of 5,462 hours, renewing our commitment to using our resources, expertise and influence to create a positive impact.
          </p>

          <h3 className='text-[#005c33] font-extrabold text-2xl'>
            The Future is Now: Charting the Next Horizon
          </h3>
          <p>
            As we embrace the challenges of creating a future powered by clean energy, we are in the process of developing and commissioning our next batch of 500 MWS assets. The first hybrid project marks our foray into pioneering renewable energy generation journey.
          </p>
          <p>
            Through our comprehensive sustainability framework, we have aligned our business plan to Mahindra’s commitment to 100% renewable electricity procurement by FY26, thereby serving as a key enabler to all our stakeholders’ transition to carbon neutrality.
          </p>
          <p>
            We are also a cornerstone of India’s largest renewable energy InvIT (Sustainable Energy Infra Trust), which enables us to have visibility on capital recycling, while ensuring sustainable growth and value creation for all our stakeholders.
          </p>

          <h3 className='text-[#005c33] font-extrabold text-2xl'>
            The Year in Review: Delivering on Our Promise
          </h3>
          <p className='font-bold text-lg text-black'>
            Operational Excellence at Scale
          </p>
          <p>
            Our comprehensive portfolio now spans over 5 GWp of capacity, with around 3.6 GWp of IPP projects developed and diverted for future. The next step will be to step up in our development pipeline.
          </p>
          <p>
            Our hybrid and BESS projects address the industry’s critical challenge of grid flexibility. While we continue to focus on assessing and mitigating the climate risks, our core strategy solutions for the long term, our 172 MWS wind-solar hybrid project in Maharashtra is a testimony to our continuing commitment to creating scalable solutions. With 100 MWS of wind energy and 72 MWS of solar energy, our continuing commitment to creating scalable solutions. This hybrid project will generate approximately 450 million KWH of clean energy offset 4,00,000 tons of CO2 emissions annually.
          </p>
          <p className='font-bold text-lg text-black'>
            Our People: The Heart of Susten
          </p>

          {/* Financial Foundation Side Message - Repositioned to be a full-width block */}
          <div className='text-[#40ad48] mb-5'>
                <img src="/LeadershipMessage/leaf.png" alt="" className='w-10 mb-3' />
            <h3 className='text-2xl'>
              Our financial foundation remains rock-solid, underpinned by strategic partnerships and disciplined capital allocation.
            </h3>
          </div>

          <p>
            At Mahindra Susten, the well-being of our people is not just our highest priority; it is the foundation upon which our success is built. We achieved a milestone of 55.08 million safe person-hours in operations, demonstrating our commitment to zero harm throughout the year. We are around the 100% of our sites have completed Environment and Social Management Systems training, demonstrating our commitment to sustainable development.
          </p>
          <p>
            We continue to raise the benchmark on gender representation in our industry, with 17% female workforce being an industry-leading figure. Our governance team has a robust system to maintain transparency and inclusion and deployed a range of women support policies and benefits with the intent to make Mahindra Susten a preferred workplace for women across the country.
          </p>
          <p>
            Last year, we also reinforced our commitment to capability development through a range of programs. We accelerated the adoption of digital learning across all roles and offices (85% digital learning penetration) and introduced the NextWave leadership chain and deployed capability development programs with the specific focus of building the next generation of our leadership talent from within.
          </p>

          <h3 className='text-[#005c33] font-extrabold text-2xl'>
            Gratitude
          </h3>
          <p>
            Energy transition is no longer tomorrow’s promise—it is today’s reality. At Mahindra Susten, we have the privilege and a responsibility of turning our vision into action, challenges into opportunities, and sustainable energy into lasting social and economic prosperity for all. I would like to thank all our stakeholders for their continued support as we build Mahindra Susten into a valuable and sustainable business powered by clean energy and driven by a shared purpose.
          </p>

          {/* Signature and Name */}
          <div className='mt-5 pt-4 border-t border-gray-300'>
            <div className='mb-2'>
              <Image
                src="/LeadershipMessage/signature.png"
                alt="Signature"
                width={150}
                height={50}
              />
            </div>
            <p className='font-bold text-lg text-black'>
              Mr. Avinash Rao
            </p>
            <p className='text-sm text-gray-600'>
              Managing Director and CEO
            </p>
          </div>
        </div>

        {/* Footer/Disclaimer */}
        <div className='mt-12 pt-4 border-t border-gray-300'>
          <p className='text-[10px] text-gray-500'>
            *Disclaimer: This message contains forward-looking statements based on current expectations. Actual results may differ materially due to a variety of factors, including macroeconomic conditions, regulatory changes, and internal business challenges. These statements should not be relied upon as a guarantee of future performance.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LeadershipMessagePage