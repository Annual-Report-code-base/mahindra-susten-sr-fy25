import React from 'react'

const EnvironmentStewardship = () => {
  return (
    <>
      <div className='pt-6 bg-[#cdd7ee]'>
        <div className='marginal text-[#58595b] text-md'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8'>
            {/* Left Column - Content */}
            <div>
              <div className='flex items-center gap-4 mb-6'>
                <img
                  src="/EnvironmentStewardship/icon.png"
                  alt="Education Icon"
                  className='w-16 h-16'
                />
                <h1 className='text-4xl font-bold text-black'>
                  Environment
                  Stewardship
                </h1>
              </div>
              <p className='text-[#58595b] leading-relaxed'>
                Ecosystems across India host a broad
                spectrum of plant and animal species.
                Many of these species now face
                escalated threats of extinction due to
                habitat loss and environmental stress.
                Therefore, efforts focused on animal
                welfare and biodiversity conservation
                have become the need of the hour.
                Activities such as protecting green
                spaces, caring for domestic and wild
                animals and preserving native species
                contribute to cleaner surroundings and
                support long-term ecological stability.
              </p>
            </div>

            {/* Right Column - Background Image */}
            <div
              className='h-96 lg:h-full bg-cover bg-center bg-no-repeat rounded-lg'
              style={{
                backgroundImage: "url('/ms/Sketch/env.webp')"
              }}
            >
            </div>
          </div>

          {/* Full Width Photo */}
          <div className='mb-8'>
            <img
              src="/EnvironmentStewardship/image1.png"
              alt="Students benefiting from education programs"
              className='w-full rounded-4xl'
            />
          </div>

        </div>
      </div>
      <div className='bg-white marginal py-8'>
        {/* Green Guardians Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
          {/* Left Column - Content */}
          <div>
            <h3 className='text-3xl text-[#005c33] font-bold mb-6'>
              Green Guardians
            </h3>

            <p className='text-[#58595b] mb-6'>
              Our efforts comprised a range of initiatives aimed at supporting biodiversity and raising ecological awareness. These involved installing bird feeders at project sites, conducting activities focused on animal welfare and implementing measures to conserve local flora and fauna. Awareness of sustainable living practices was promoted through the Make Sustainability Personal (MSP) program. Together, these steps encourage eco-conscious behavior across the organization and its ecosystem.
            </p>

            {/* Statistics */}
            <div className='grid grid-cols-2 gap-6'>
              <div>
                <h2 className='text-4xl font-bold mb-2 w-fit bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>
                  1,713
                </h2>
                <p className='text-[#58595b] border-t-2 border-[#f6a537] w-fit pt-2'>
                  Beneficiaries since 2016
                </p>
              </div>

              <div>
                <h2 className='text-4xl font-bold mb-2 w-fit bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>
                  1,362
                </h2>
                <p className='text-[#58595b] border-t-2 border-[#f6a537] w-fit pt-2'>
                  ESOP hours since 2016
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Photo */}
          <div>
            <img
              src="/EnvironmentStewardship/image2.png"
              alt="Community tree planting activity"
              className='w-full h-full object-cover rounded-lg'
            />
          </div>
        </div>

        {/* ESOPS Section - Single Column Layout */}
        <div className=''>
          <h3 className='text-3xl text-[#005c33] font-bold mb-6'>
            Employee Social Options (ESOPS) and Recognition Mechanisms
          </h3>

          <p className='text-[#58595b] mb-4'>
            At Mahindra Susten, ESOPS form a vital part of our culture of responsibility, where employees are encouraged to contribute meaningfully to community development beyond their core job roles. The program is designed to foster purpose-driven engagement, strengthen social consciousness and align employees with the values that define our organization.
          </p>

          <p className='text-[#58595b] mb-4'>
            In FY25, Mahindra Susten executed a high-impact ESOPS initiative under the flagship Gyandeep program, focused on revamping school infrastructure and promoting hygiene across three government schools in rural Gujarat. The initiative saw active participation from 102 ESOPS volunteers, contributing over 1,000 person-hours to activities including need assessments, school beautification, health and hygiene awareness sessions and direct engagement with students and teachers.
          </p>

          <p className='text-[#58595b] mb-6'>
            Their involvement helped bring meaningful change to over 220 students, improving attendance rates, reducing dropouts especially among girls and creating vibrant, inclusive learning environments.
          </p>

          {/* Recognizing ESOPS Champions */}
          <h4 className='text-xl text-[#6cb42c] font-bold mb-4'>
            Recognizing ESOPS Champions
          </h4>

          <p className='text-[#58595b] mb-6'>
            To encourage and reward dedicated efforts, Mahindra Susten has established a structured recognition mechanism for outstanding contributors.
          </p>

          <div className='space-y-4 mb-6'>
            <div className='flex items-start gap-2'>
              <div className='w-2 h-2 rounded-full bg-[#005c33] mt-2 flex-shrink-0'></div>
              <p className='text-[#58595b]'>
                <strong>ESOPS Champions:</strong> Identified based on their sustained engagement, leadership in community interventions and on-ground execution
              </p>
            </div>

            <div className='flex items-start gap-2'>
              <div className='w-2 h-2 rounded-full bg-[#005c33] mt-2 flex-shrink-0'></div>
              <p className='text-[#58595b]'>
                <strong>Quarterly Townhall Acknowledgments:</strong> ESOPS volunteers and champions are felicitated during leadership townhalls by the CEO & MD, highlighting their contributions across internal platforms and inspiring wider participation.
              </p>
            </div>

            <div className='flex items-start gap-2'>
              <div className='w-2 h-2 rounded-full bg-[#005c33] mt-2 flex-shrink-0'></div>
              <p className='text-[#58595b]'>
                <strong>Visibility Across Channels:</strong> Stories of impact and volunteer involvement are shared across social media, internal newsletters and WhatsApp channels, offering real-time appreciation and cross-location learning.
              </p>
            </div>

            <div className='flex items-start gap-2'>
              <div className='w-2 h-2 rounded-full bg-[#005c33] mt-2 flex-shrink-0'></div>
              <p className='text-[#58595b]'>
                <strong>Peer Learning and Collaboration:</strong> Site champions were grouped via dedicated communication platforms, encouraging coordination, idea sharing and a sense of collective ownership over the initiative.
              </p>
            </div>
          </div>

          {/* MySeva Platform Box */}
          <div className='relative p-[2px] rounded-2xl bg-[#0066b3]'>
            <div className='bg-white rounded-2xl p-6'>
              {/* Leaf icon */}
              <img
                src="/LeadershipMessage/leaf.png"
                alt="leaf"
                className='absolute -top-8 right-8 w-12 h-12'
              />

              <p className='text-[#58595b] leading-relaxed'>
                <strong>MySeva platform</strong> serves as a central hub for employee volunteering, offering a structured yet flexible way for individuals to engage in meaningful community work. The platform provides access to a wide range of activities from education and health to sustainability and rural development, allowing employees to choose causes that resonate with them. Whether it is participating in events, contributing professional skills or supporting virtual initiatives, the platform ensures inclusivity and convenience.
              </p>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default EnvironmentStewardship