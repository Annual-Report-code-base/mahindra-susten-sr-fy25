import React from 'react'

const JourneyPage = () => {
  return (
    <div>
      <div className='marginal text-[#58595b] text-md'>
        <h1 className='text-2xl text-black font-bold mb-5'>
          Our Journey so far
        </h1>
        <h1 className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold mb-2 pb-3'>
          Charting 15 Years of
          Leading Impact
        </h1>
        <h2 className='text-xl font-bold mb-5'>
          Founded in 2010, Mahindra Susten was established as the renewable
          energy and cleantech arm of the Mahindra Group with a clear purpose to
          deliver sustainable energy solutions for a greener future.
        </h2>
        <p className='mb-5'>
          The name ‘Susten,’ a fusion of ‘Sustainability’ and ‘Enablers,’ reflects the company’s role in enabling climate-conscious transformation.
          Its inception aligned with the launch of India’s National Solar Mission, marks a pivotal moment in the country’s renewable energy journey.
          Today, Mahindra Susten has grown into a trusted name, driving innovation in solar, hybrid and energy storage systems.
        </p>
        <p className='mb-5'>
          Our trajectory over the past decade
          and a half has been marked by
          sustained innovation, technological
          experimentation and readiness to
          embrace breakthrough solutions
          that enhance the viability of solar
          power in India.
        </p>
        <div className='bg-gradient-to-r from-[#f6a537] to-[#65acac] p-1 rounded-2xl'>
          <div className='bg-white p-5 rounded-xl'>
            <p>
              Rooted in the Mahindra Rise philosophy — <strong>‘Rise for a More Equal
                World,’ ‘Rise to Be Future-Ready,’ and ‘Rise to Create Value’ — we
                have challenged conventions, embraced innovation and touched
                lives across communities.</strong>
            </p>
          </div>
        </div>
        <img src="/OurJourney/timeline.png" alt="" className='mt-5'/>
      </div>
    </div>
  )
}

export default JourneyPage
