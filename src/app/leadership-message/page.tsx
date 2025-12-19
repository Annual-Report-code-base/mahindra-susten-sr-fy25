import React from 'react'
import Image from 'next/image'

const LeadershipMessagePage = () => {
  return (
    <div>
      <div className='marginal text-[#58595b] text-md'>
        <h1 className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold mb-6 pb-3'>
          Leadership Message
        </h1>

        {/* Main Content: Image and Quote */}
        <div className='mb-16'>
          <div className='max-w-7xl mx-auto py-1 px-6 lg:px-8'>
            <div className='flex flex-col md:flex-row md:items-center gap-10 md:gap-16'>

              {/* 1. Image Column: Controlled width, centered, aspect ratio maintained */}
              <div className='w-full md:basis-5/12 flex justify-center'>
                <div className='relative w-[280px] h-[350px] md:w-[400px] md:h-[500px] shadow-2xl rounded-lg overflow-hidden'>
                  <Image
                    src="/LeadershipMessage/image1.png"
                    alt="Mr. Avinash Rao, Managing Director and CEO"
                    layout="fill"
                    objectFit="cover" // Changed to 'cover' for better use of space
                    className='pt-2'
                  />
                </div>
              </div>

              {/* 2. Text/Quote Column: Clean background, proper padding, vertical centering */}
              <div className='w-full md:basis-7/12 flex flex-col justify-center p-0 md:p-6'>
                {/* Inner Quote Box: Use a subtle border or padding to visually frame the quote */}
                <div className='p-6 border-l-4 border-[#40ad48] bg-white rounded-r-lg'>

                  {/* Decorative Icon */}
                  <img src="/LeadershipMessage/leaf.png" alt="Leaf icon" className='w-8 h-8 mb-4' />

                  {/* Quote Text */}
                  <p className='text-xl md:text-2xl text-gray-700 leading-relaxed mb-4'>
                    “Every project we undertake creates ripple effects of positive change, fostering local economic development, creating green jobs, and supporting India’s transition to a low-carbon economy.”
                  </p>


                </div>
              </div>
            </div>
          </div>
          {/* Quote */}
          <div className='mt-5'>
            <p className='text-2xl font-extrabold mb-4'>
              Dear Stakeholders,
            </p>
            <p className='text-2xl font-extrabold text-[#005c33]'>
              The global energy transition has reached an inflection point, and the narrative must shift from “when renewables will dominate” to “how rapidly we can scale and minimize the use of fossil fuels”. As India makes way to becoming the 3<sup>rd</sup> largest producer of solar energy and 4<sup>th</sup> in total capacity, India’s renewable energy leadership is a pathway to a thriving planet, resilient communities and a prosperous economy.
            </p>
          </div>
        </div>

        {/* Full-width Main Text Content */}
        <div className='space-y-4 text-justify'>
          <p>
            At Mahindra Susten, for over 15 years, we are proudly transforming India's de-carbonization landscape. We continue to set ambitious targets that help us push boundaries to build high quality and efficient solar,
            wind and hybrid assets, and focus on round -the-clock products such as Battery Energy Storage Systems (BESS) while embedding sustainability in our company's core strategy, operations and decision making process.
          </p>

          <h3 className='text-[#005c33] font-extrabold text-2xl'>
            Purpose Beyond Profit: Our ESG Commitment

          </h3>
          <p>
            As utilities and corporates work towards translating net-zero commitments into actionable steps, Mahindra Susten is shaping a low carbon future. With our undisputed legacy of creating impact, we embody
            the Mahindra Group’s “Rise” philosophy driving
            positive change and enabling communities to rise.
            Our commitment extends far beyond generating clean energy; we are investing in a sustainable future – creating jobs, fostering innovation and inclusive growth.
          </p>
          <p>
            This year, we became the 4<sup>th</sup> company in India’s renewable energy sector to receive Science-Based Targets initiative (SBTi) approval, committing to reduce absolute scope 1 and 2 GHG emissions by 51.8% by FY30 and scope 3 emissions by 51.6% per MWp within the same timeframe. Our 2024 MSPL assets were 100% Water Positive certified and 100% Advance Zero Waste to Landfill (ZWL) certified.
          </p>
          <p>
            At Mahindra Susten, our success goes hand-in-hand with the well-being of our communities and our planet. Through our Nanhi Kali program, we have supported over 12,000 girls with education, while our broader CSR initiatives have reached over 58,000 individuals since 2016. In FY25, we have developed 12 schools and 2 STEM labs and installed 38 solar streetlights in remote villages in Rajasthan and Gujarat. Our 1,520 employee volunteers contributed
            a total of 5,462 hours renewing our commitment to using our resources, expertise and influence to create a positive impact.
          </p>

          <h3 className='text-[#005c33] font-extrabold text-2xl'>
            The Future is Now: Charting the Next Horizon
          </h3>
          <p>
            As we embrace the challenge of creating a future powered by clean energy, we are in the process of developing and commissioning our next batch of 560 MWp assets. The first hybrid project marks our foray into our pioneering renewable energy generation journey.
          </p>
          <p>
            Through our comprehensive sustainability framework, we have aligned our business plan to  Mahindra Group's commitment to 100% renewable electricity procurement by FY26, thereby serving as a key enabler to all our stakeholders’ transition to carbon neutrality.
          </p>
          <p>
            We are also a co-sponsor of India’s largest renewable energy InvIT (Sustainable Energy Infra Trust), which enables us to have visibility on capital recycling while ensuring sustainable growth and value creation for our stakeholders.
          </p>

          <h3 className='text-[#005c33] font-extrabold text-2xl'>
            The Year in Review: Delivering on Our Promise
          </h3>
          <p className='font-bold text-lg text-black'>
            Operational Excellence at Scale
          </p>
          <p>
            Our comprehensive portfolio now spans over 5 GWp of capacity, with around 1.54 GWp of IPP projects developed and divested to the SEIT InvIT along with 3.6 GWp in our development pipeline.
          </p>
          <p>
            Our hybrid solar-wind projects address the industry’s critical challenge: grid flexibility. While we continue to focus on assessing and designing round the clock energy storage solutions for the long term, our 170 MWp hybrid wind-solar project in Maharashtra is a testimony to our continuing commitment to creating scalable models. With 100 MWp
            of wind energy and 70 MWp of solar energy capacity, our Maharashtra project is one of the largest in the commercial and industrial segment and is expected to generate ~460 million kWh of clean energy and offset ~420,000 tonnes of CO<sub>2</sub> emissions annually*.
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
            At Mahindra Susten, the well-being of our people is not
            just our highest priority, it is the foundation upon which our success is built. We achieved a milestone of 55.08 million safe person-hours till date, maintaining our commitment
            to zero Lost Time Injuries (LTI) throughout FY25. We
            have ensured that 100% of our employees completed Environment and Social Management Systems training, demonstrating our commitment to sustainable development. We continue to raise the benchmark on gender representation in our industry, with 17% of our workforce being women, and growing day by day. We remain steadfast in our commitment to fostering diversity and inclusion and deployed a range of women support policies and benefits with the intent to make Mahindra Susten a preferred workplace for women across the country.
          </p>
          <p>
            Last year, we also reinforced our commitment to capability development through a range of programs. We accelerated the adoption of digital learning across our sites and offices (98%+ adoption), codified core technical skills required across the Renewables value chain and deployed capability development programs with the specific focus of building the next generation of our leadership talent from within.
          </p>

          <h3 className='text-[#005c33] font-extrabold text-2xl'>
            Gratitude
          </h3>
          <p>
            Energy transition is no longer tomorrow’s promise—it is today’s reality. At Mahindra Susten, we have the privilege and a responsibility of turning our vision into action, challenges into opportunities, and sustainable energy into lasting social and economic prosperity for all. I would like to thank all our stakeholders for their continued support as we build Mahindra Susten into a valuable and sustainable business powered by clean energy and driven by a shared purpose.
          </p>

          {/* Signature and Name */}
          <div className='mt-5 pt-4'>
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
              MD and CEO
            </p>
          </div>
        </div>

        {/* Footer/Disclaimer */}
        <div className='mt-12 '>
          <p className='text-[10px] text-gray-500'>
            *<b>Disclaimer:</b> This message contains forward-looking statements based on current expectations. Actual results may differ materially due to a variety of factors, including macroeconomic conditions, regulatory changes, and internal business challenges. These statements should not be relied upon as a guarantee of future performance.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LeadershipMessagePage