import React from 'react'

const ListeningLearningEvolvingTogether = () => {
  return (
    <div>
      <div className='marginal text-[#58595b] text-md'>
        <h1 className='text-4xl font-bold mb-2 pb-3'>
          <span className='bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>Listening, Learning, Evolving Together</span>
        </h1>

        <p className='text-xl font-bold mb-5'>
          Mahindra CARES, an acronym for Career, Alignment, Recognition, Empowerment and Strive, serves as the foundation of our engagement philosophy. This framework enables us to understand and respond to key drivers of employee motivation.
        </p>

        <p className='text-[#58595b] mb-5'>
          Our annual <strong>M Cares Survey</strong> provides quantifiable insights, which are further explored through structured focus group discussions with employees across roles and regions. These discussions inform actionable plans, designed in partnership with team leaders and business HR teams and are instrumental in continuously enhancing the overall employee experience.
        </p>

        {/* Engagement Initiatives */}
        <div className='mb-5'>
          <h3 className='text-lg font-bold text-[#58595b] mb-6'>
            Some engagement initiatives conducted during the year
          </h3>

          {/* 2x2 Grid of Event Photos */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Event 1 - Annual Conclave */}
            <div>
              <img
                src="/LearningTogether/image.png"
                alt="Annual Conclave and Family Day"
                className='w-full h-80 object-cover object-bottom rounded-4xl mb-3'
              />
              <div className='flex items-center gap-2'>
                <div className='w-8 h-1 bg-[#65acac]'></div>
                <p className='text-[#58595b] font-semibold'>Annual Conclave and Family Day</p>
              </div>
            </div>

            {/* Event 2 - Independence Day */}
            <div>
              <img
                src="/LearningTogether/image1.png"
                alt="Independence Day and Festival Celebrations"
                className='w-full h-80 object-cover rounded-4xl mb-3'
              />
              <div className='flex items-center gap-2'>
                <div className='w-8 h-1 bg-[#65acac]'></div>
                <p className='text-[#58595b] font-semibold'>Independence Day and Festival Celebrations</p>
              </div>
            </div>

            {/* Event 3 - Women's and Men's Day */}
            <div>
              <img
                src="/LearningTogether/image2.png"
                alt="Women's Day and Men's Day Celebrations"
                className='w-full h-80 object-cover rounded-4xl mb-3'
              />
              <div className='flex items-center gap-2'>
                <div className='w-8 h-1 bg-[#65acac]'></div>
                <p className='text-[#58595b] font-semibold'>Women's Day and Men's Day Celebrations</p>
              </div>
            </div>

            {/* Event 4 - Family Day */}
            <div>
              <img
                src="/LearningTogether/image3.png"
                alt="Family Day celebration at Susten"
                className='w-full h-80 object-cover rounded-4xl mb-3'
              />
              <div className='flex items-center gap-2'>
                <div className='w-8 h-1 bg-[#65acac]'></div>
                <p className='text-[#58595b] font-semibold'>Family Day celebration at Susten</p>
              </div>
            </div>
          </div>
        </div>
        <div className='mb-5'>
          {/* 2x2 Grid of Event Photos */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
            {/* Event 1 - Mental Health Sessions */}
            <div>
              <img
                src="/LearningTogether/image4.png"
                alt="Sessions on mental wellness"
                className='w-full h-80 object-cover rounded-4xl mb-3'
              />
              <div className='flex items-center gap-2'>
                <div className='w-8 h-1 bg-[#65acac]'></div>
                <p className='text-[#58595b] font-semibold'>Sessions on mental wellness</p>
              </div>
            </div>

            {/* Event 2 - Yoga Sessions */}
            <div>
              <img
                src="/LearningTogether/image5.png"
                alt="Yoga sessions"
                className='w-full h-80 object-cover rounded-4xl mb-3'
              />
              <div className='flex items-center gap-2'>
                <div className='w-8 h-1 bg-[#65acac]'></div>
                <p className='text-[#58595b] font-semibold'>Yoga sessions</p>
              </div>
            </div>

            {/* Event 3 - Annual Sports Days */}
            <div>
              <img
                src="/LearningTogether/image6.png"
                alt="Annual Sports Days (Indoor and Outdoor)"
                className='w-full h-80 object-cover rounded-4xl mb-3'
              />
              <div className='flex items-center gap-2'>
                <div className='w-8 h-1 bg-[#65acac]'></div>
                <p className='text-[#58595b] font-semibold'>Annual Sports Days (Indoor and Outdoor)</p>
              </div>
            </div>

            {/* Event 4 - HO Level Sports Tournaments */}
            <div>
              <img
                src="/LearningTogether/image7.png"
                alt="HO- Level Sports Tournaments"
                className='w-full h-80 object-cover rounded-4xl mb-3'
              />
              <div className='flex items-center gap-2'>
                <div className='w-8 h-1 bg-[#65acac]'></div>
                <p className='text-[#58595b] font-semibold'>HO- Level Sports Tournaments</p>
              </div>
            </div>
          </div>
        </div>

        {/* HR Clinic Section */}
        <div className='relative p-[3px] rounded-2xl bg-gradient-to-r from-[#f6a537] to-[#65acac] mb-5'>
          <div className='bg-gradient-to-bl from-[#e8f5e9] to-[#ffffff] rounded-2xl p-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
              {/* Left Column - Title */}
              <div>
                <h3 className='text-3xl text-[#6cb42c] font-bold leading-tight'>
                  HR Clinic: Strengthening Employee Connect
                </h3>
              </div>

              {/* Right Column - Description */}
              <div>
                <p className='text-[#58595b]'>
                  To foster transparent communication and enhance employee support, Mahindra Susten introduced the HR Clinic—a monthly initiative that offers employees direct access to the HR team. This platform serves as a safe space for individuals to raise concerns, seek clarity on policies or resolve HR-related queries in person. By encouraging open dialogue and prompt resolution of issues, the HR Clinic has played a key role in building trust, enhancing employee satisfaction and nurturing a more responsive and people-centric work culture.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ListeningLearningEvolvingTogether
