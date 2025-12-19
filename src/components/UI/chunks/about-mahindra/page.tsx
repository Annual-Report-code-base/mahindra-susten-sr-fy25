import React from 'react'
import Image from 'next/image'

const AboutMahindraGroupPage = () => {
  return (
    <div>
      <div className='marginal text-[#58595b] text-md'>
        <h1 className='text-2xl text-black font-bold mb-5'>
          About Mahindra Group
        </h1>
        <h1 className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold mb-2 pb-3'>
          Our Enduring Legacy
        </h1>
        <h2 className='text-xl font-bold mb-5'>
          With a legacy anchored in trust, innovation and impact, the Mahindra Group has
          been shaping industries and empowering communities for nearly eight decades.
        </h2>
        <p className='mb-5'>
          Founded in 1945, the Mahindra Group is one of India’s most respected and diversified multinational federations of companies. With
          operations spanning over 100 countries, the Group plays a significant role in shaping modern economies through its presence in
          high-impact sectors. It holds leadership positions in farm equipment, utility vehicles, financial services and information technology,
          while also maintaining a strong foothold in renewable energy, agriculture, logistics, hospitality and real estate. Guided by its purpose
          of ‘Rise,’ Mahindra is committed to driving positive change and sustainable growth across communities and industries.
        </p>
        <div className='grid md:grid-cols-3 grid-cols-1'>
          <div className='pb-3'>
            <div className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold pb-1'>
              100+
            </div>
            <p className='pt-1 text-sm'>Countries</p>
          </div>
          <div className='pb-3 '>
            <div className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold pb-1'>
              324k+
            </div>
            <p className='pt-1 text-sm'>Employees</p>
          </div>
          <div className='pb-3'>
            <div className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold pb-1'>
              20+
            </div>
            <p className='pt-1 text-sm'>Industries</p>
          </div>
        </div>

        {/* Business Verticals Section */}
        <div className='mt-5 p-4 border border-[#40ad48] rounded-xl shadow-lg'>
          {/* Header */}
          <div className='flex flex-col items-center mb-6'>
            <div className='bg-[#40ad48] text-white text-center py-2 px-6 rounded-full text-lg font-bold shadow-md translate-y-[-80%]'>
              OUR BUSINESS VERTICALS
            </div>
            <p className='text-sm text-[#58595b]'>
              Explore the companies that make the world of Mahindra.
            </p>
          </div>

          {/* Grid of Vertical Cards */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {/* 1. Automotive */}
            <div className='flex flex-col'>
              <div className='relative w-full aspect-video rounded-md overflow-hidden shadow-md mb-2'>
                <Image src="/AboutMahindra/Mahindra Auto.webp" alt="Red SUV driving on sand" layout="fill" objectFit="cover" />
              </div>
              <p className='text-base font-semibold text-black'>Automotive</p>
            </div>

            {/* 2. Farm Equipment */}
            <div className='flex flex-col'>
              <div className='relative w-full aspect-video rounded-md overflow-hidden shadow-md mb-2'>
                <Image src="/AboutMahindra/img157.webp" alt="Combine harvesters in a field" layout="fill" objectFit="cover" />
              </div>
              <p className='text-base font-semibold text-black'>Farm Equipment</p>
            </div>

            {/* 3. Technology Services */}
            <div className='flex flex-col'>
              <div className='relative w-full aspect-video rounded-md overflow-hidden shadow-md mb-2'>
                <Image src="/AboutMahindra/Mahindra Tech.webp" alt="Abstract circuit lines" layout="fill" objectFit="cover" />
              </div>
              <p className='text-base font-semibold text-black'>Technology Services</p>
            </div>

            {/* 4. Financial Services */}
            <div className='flex flex-col'>
              <div className='relative w-full aspect-video rounded-md overflow-hidden shadow-md mb-2'>
                <Image src="/AboutMahindra/Mahindra Finance.webp" alt="Father and daughter playing with toy" layout="fill" objectFit="cover" />
              </div>
              <p className='text-base font-semibold text-black'>Financial Services</p>
            </div>

            {/* 5. Renewable Energy */}
            <div className='flex flex-col'>
              <div className='relative w-full aspect-video rounded-md overflow-hidden shadow-md mb-2'>
                <Image src="/AboutMahindra/Mahinra Renewable.webp" alt="Solar farm at sunset" layout="fill" objectFit="cover" />
              </div>
              <p className='text-base font-semibold text-black'>Renewable Energy</p>
            </div>

            {/* 6. Logistics */}
            <div className='flex flex-col'>
              <div className='relative w-full aspect-video rounded-md overflow-hidden shadow-md mb-2'>
                <Image src="/AboutMahindra/Mahindra logistics.webp" alt="Electric delivery vehicle" layout="fill" objectFit="cover" />
              </div>
              <p className='text-base font-semibold text-black'>Logistics</p>
            </div>

            {/* 7. Hospitality */}
            <div className='flex flex-col'>
              <div className='relative w-full aspect-video rounded-md overflow-hidden shadow-md mb-2'>
                <Image src="/AboutMahindra/Mahindra holiday.webp" alt="Luxury resort with sheep" layout="fill" objectFit="cover" />
              </div>
              <p className='text-base font-semibold text-black'>Hospitality</p>
            </div>

            {/* 8. Real Estate */}
            <div className='flex flex-col'>
              <div className='relative w-full aspect-video rounded-md overflow-hidden shadow-md mb-2'>
                <Image src="/AboutMahindra/Mahindra real estate.webp" alt="Modern apartment complex" layout="fill" objectFit="cover" />
              </div>
              <p className='text-base font-semibold text-black'>Real Estate</p>
            </div>

            {/* 9. Emerging Businesses and Equity Investments */}
            <div className='flex flex-col'>
              <div className='relative w-full aspect-video rounded-md overflow-hidden shadow-md mb-2'>
                <Image src="/AboutMahindra/shutterstock_2066581973.webp" alt="Two men analyzing financial charts on screens" layout="fill" objectFit="cover" />
              </div>
              <p className='text-base font-semibold text-black'>Emerging Businesses and Equity Investments</p>
            </div>
          </div>

          {/* Footer Text */}
          <div className='mt-8 pt-4 border-t border-gray-200'>
            <p className='text-sm mb-2'>
              To read more about our verticals visit: <a href="https://www.mahindra.com/our-businesses" className='text-[#40ad48]'>https://www.mahindra.com/our-businesses</a>
            </p>
            <p className='text-sm'>
              Driven by a resolute sense of purpose and anchored in its core values, the Mahindra Group is committed to driving
              meaningful and positive change, nurture equitable growth and cultivate a sustainable future for all.
            </p>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-[#005c33] font-extrabold text-2xl mb-3'>
            RISE Philosophy
          </h3>
          <p className='mb-3'>
            At Mahindra, we believe that sustainability is not an afterthought but a fundamental principle that is interwoven into the fabric
            of our business. In recognition of the world’s shifting complexities and emerging challenges, we have redefined our purpose
            through three guiding pillars: Rise for a More Equal World, Rise to be Future-Ready and Rise to Create Value.
          </p>
          <p className='mb-3'>
            These pillars, along with our five core principles, have served as our guiding compass for over 75 years. They lay forth a
            clear roadmap, enabling us to make meaningful progress while staying attuned to our values and long-term vision.
          </p>
          <img src="/AboutMahindra/purpose.png" alt="" />
          <img src="/AboutMahindra/DSC_9121.webp" alt="" className='rounded-2xl mt-5' />
        </div>
        <div className='mt-5'>
          <h3 className='text-[#005c33] font-extrabold text-2xl mb-3'>
            Group Sustainability vision
          </h3>
          <p className='mb-3'>
            At Mahindra, we believe that sustainability is not an afterthought but a fundamental principle that is interwoven into the fabric
            of our business. In recognition of the world’s shifting complexities and emerging challenges, we have redefined our purpose
            through three guiding pillars: Rise for a More Equal World, Rise to be Future-Ready and Rise to Create Value.
          </p>
          <p className='mb-3'>
            These pillars, along with our five core principles, have served as our guiding compass for over 75 years. They lay forth a
            clear roadmap, enabling us to make meaningful progress while staying attuned to our values and long-term vision.
          </p>
          <div>
            <img src="/AboutMahindra/mandate.png" alt="" />
            <div className='flex md:flex-row flex-col gap-5 justify-center'>
              <div className='md:w-[40%]'>
                <img src="/AboutMahindra/business-growth-visualization-office D.webp" alt="" className='rounded-2xl mb-5' />
              </div>
              <div className='md:w-[50%]'>
                <img src="/AboutMahindra/DJI_20250206183704_0011_V.webp" alt="" className='rounded-2xl' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMahindraGroupPage