import React from 'react'

const HealthAndSanitation = () => {
  return (
    <>
      <div className='pt-6 bg-[#fde5ce]'>
        <div className='marginal text-[#58595b] text-md'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8'>
            {/* Left Column - Content */}
            <div>
              <div className='flex items-center gap-4 mb-6'>
                <img
                  src="/HealthSanitation/icon.png"
                  alt="Education Icon"
                  className='w-16 h-16'
                />
                <h1 className='text-4xl font-bold text-[#005c33]'>
                  Health and
                  Sanitation
                </h1>
              </div>

              <p className='text-[#58595b] leading-relaxed'>
                In regions with limited medical
                infrastructure, community health
                check-ups are instrumental in
                broadening the access to preventive
                care. These interventions facilitate
                early detection of health risks, raise
                awareness and reduce the burden
                of untreated conditions. In addition,
                initiatives aligned with Swachh Bharat
                have improved public hygiene through
                toilet construction and behavioral
                change campaigns. Together, these
                efforts cultivate healthier communities,
                reduce the prevalence of diseases
                and improve the overall quality of
                life in rural and peri-urban areas
                where health outcomes are often
                compromised.
              </p>
            </div>

            {/* Right Column - Background Image */}
            <div
              className='h-96 lg:h-full bg-cover bg-center bg-no-repeat rounded-lg'
              style={{
                backgroundImage: "url('/ms/Sketch/health.webp')"
              }}
            >
            </div>
          </div>

          {/* Full Width Photo */}
          <div className='mb-8'>
            <img
              src="/HealthSanitation/image1.png"
              alt="Students benefiting from education programs"
              className='w-full rounded-4xl'
            />
          </div>

        </div>
      </div>
      <div className='bg-white marginal py-8'>
        {/* Sehat Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
          {/* Left Column - Content */}
          <div>
            <h3 className='text-3xl text-[#005c33] font-bold mb-6'>
              Sehat
            </h3>

            <p className='text-[#58595b] mb-6'>
              We believe access to quality healthcare is a fundamental right and not a privilege. The year, we organized a medical camp and blood donation drive at the GUVNL and RUVNL sites as part of the Sehat initiative. These efforts addressed the essential health needs of contract workers and the surrounding communities.
            </p>

            {/* Statistics */}
            <div className='space-y-6 mb-6'>
              <div>
                <h2 className='text-4xl font-bold mb-2 w-fit bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>
                  53,000+
                </h2>
                <p className='text-[#58595b] border-t-2 border-[#f6a537] w-fit pt-2'>
                  Beneficiaries since 2016
                </p>
              </div>

              <div>
                <h2 className='text-4xl font-bold mb-2 w-fit bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>
                  3,352
                </h2>
                <p className='text-[#58595b] border-t-2 border-[#f6a537] w-fit pt-2'>
                  ESOPs hours since 2016
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Photo */}
          <div>
            <img
              src="/HealthSanitation/image2.png"
              alt="Blood donation camp"
              className='w-full h-full object-cover rounded-4xl '
            />
          </div>
        </div>

        {/* Swachh Bharat Section */}
        <div className='mb-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6'>
            {/* Left Column - Content */}
            <div>
              <h3 className='text-3xl text-[#005c33] font-bold mb-6'>
                Swachh Bharat
              </h3>

              <p className='text-[#58595b] mb-4'>
                In alignment with the national Swachh Bharat Mission, we have been contributing to the Swachh Bharat Kosh, a Central Government initiative promoting improved sanitation. In the year under review, Shramdaan activities were conducted at the GUVNL
              </p>

              <p className='text-[#58595b]'>
                and RUVNL sites, commencing with a Swachhata pledge followed by a site-wide cleanup drive. Further, we implemented initiatives focused on cleaner public spaces, including a beach clean-up drive at Dadar after Ganesh Visarjan and at Karjat railway station.
              </p>
            </div>

            {/* Right Column - Statistics */}
            <div>
              <div className='space-y-6'>
                <div>
                  <h2 className='text-4xl font-bold mb-2 w-fit bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>
                    33,000+
                  </h2>
                  <p className='text-[#58595b] border-t-2 border-[#f6a537] w-fit pt-2'>
                    Beneficiaries since 2016
                  </p>
                </div>

                <div>
                  <h2 className='text-4xl font-bold mb-2 w-fit bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>
                    8,614
                  </h2>
                  <p className='text-[#58595b] border-t-2 border-[#f6a537] w-fit pt-2'>
                    ESOP hours since 2016
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Two Photos at Bottom */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <img
              src="/HealthSanitation/image3.png"
              alt="Swachh Bharat cleanup activity"
              className='w-full h-180 object-cover rounded-4xl object-center'
            />
            <img
              src="/HealthSanitation/image4.png"
              alt="Community sanitation initiative"
              className='w-full h-180 object-cover rounded-4xl object-top'
            />
          </div>
        </div>
      </div>


    </>
  )
}

export default HealthAndSanitation