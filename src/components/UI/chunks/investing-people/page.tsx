import React from 'react'

const InvestingPeopleDrivingOurFuture = () => {
  return (
    <div>
      <div className='marginal text-[#58595b] text-md'>
        <h1 className='text-4xl font-bold mb-2 pb-3'>
          <span className='bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>Investing in Our People, Driving Our Future</span>
        </h1>

        <p className='text-xl font-bold mb-5'>
          Our structured engagement models, progressive inclusion policies and learning-focused culture are anchored in transparency and agility. Across all office and site locations, we continue to invest in capabilities, support open dialogue and uphold the dignity and aspirations of our people. We ensure that every employee is equipped with the tools and environment to contribute meaningfully to our shared goals.
        </p>

        <p className='text-[#58595b] mb-5'>
          We foster a culture where every voice is heard, every contribution is valued and growth opportunities are accessible to all. Through regular feedback channels, inclusive leadership programs and continuous learning initiatives, we are shaping a workplace where collaboration thrives and the highest potential is unlocked.
        </p>

        {/* Two Column Layout - Leadership Card and Workforce Image */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-5'>
          {/* Left Column - Leadership Card */}
          <div className='relative border-2 border-[#7ab800] rounded-2xl p-6 bg-white'>
            <img
              src="/LeadershipMessage/leaf.png"
              alt="leaf"
              className='absolute -top-8 left-6 w-16 h-16'
            />
            <div className='mt-4'>
              <img
                src="/InvestingPeople/image.png"
                alt="Mr. Pratik Mehta"
                className='w-full h-64 object-contain rounded-lg bg-[#d8e6e2] mb-6'
              />
              <p className='text-[#58595b] mb-4'>
                Our people strategy is deeply aligned with our sustainability vision-fostering a safe, inclusive and growth-oriented workplace. We remain committed to investing in the development future-ready capabilities and cultivating a culture that drives meaningful change from within.
              </p>
              <h4 className='text-xl text-[#6cb42c] font-bold mb-1'>
                Mr. Pratik Mehta
              </h4>
              <p className='text-[#005c33] font-semibold'>
                Chief Human Resource Officer
              </p>
            </div>
          </div>

          {/* Right Column - Workforce Details Image */}
          <div>
            <img 
              src="/InvestingPeople/image2.png" 
              alt="Workforce details table" 
              className='w-full h-full object-contain'
            />
          </div>
        </div>
        <img src="/InvestingPeople/image3.png" alt="" />
      </div>
    </div>
  )
}

export default InvestingPeopleDrivingOurFuture
