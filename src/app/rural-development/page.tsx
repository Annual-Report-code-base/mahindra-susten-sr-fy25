import React from 'react'

const RuralDevelopment = () => {
  return (
    <>
      <div className='pt-6 bg-[#f2f6e6]'>
        <div className='marginal text-[#58595b] text-md'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8'>
            {/* Left Column - Content */}
            <div>
              <div className='flex items-center gap-4 mb-6'>
                <img
                  src="/RuralDevelopment/icon.png"
                  alt="Education Icon"
                  className='w-16 h-16'
                />
                <h1 className='text-4xl font-bold text-[#005c33]'>
                  Rural
                  Development
                </h1>
              </div>

              <p className='text-[#58595b] leading-relaxed'>
                Limited infrastructure in rural areas
                often impedes access to essential
                services. Investments in developing
                roads, water supply, electricity, and
                community spaces enhance everyday
                life and boost local economies.
                Improved connectivity and basic
                amenities create opportunities
                for education, employment, and
                healthcare. In addition, infrastructure
                development reduces migration
                pressures and builds inclusive growth
                from the ground up, ensuring that rural
                communities are equipped to take part
                in the national progress.
              </p>
            </div>

            {/* Right Column - Background Image */}
            <div
              className='h-96 lg:h-full bg-cover bg-center bg-no-repeat rounded-lg'
              style={{
                backgroundImage: "url('/ms/Sketch/rural.webp')"
              }}
            >
            </div>
          </div>

          {/* Full Width Photo */}
          <div className='mb-8'>
            <img
              src="/RuralDevelopment/image1.png"
              alt="Students benefiting from education programs"
              className='w-full rounded-4xl'
            />
          </div>

        </div>
      </div>
      <div className='bg-white marginal py-8'>
        {/* Gram Vikas Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
          {/* Left Column - Content */}
          <div>
            <h3 className='text-3xl text-[#005c33] font-bold mb-6'>
              Gram Vikas
            </h3>

            <p className='text-[#58595b] mb-6'>
              Gram Vikas reflects our commitment to driving inclusive and sustainable development in rural communities. Focused on strengthening essential infrastructure, improving livelihoods and ensuring access to basic services, the program empowers villages to thrive independently and with dignity.
            </p>

            {/* Statistics */}
            <div className='space-y-6 mb-6'>
              <div>
                <h2 className='text-4xl font-bold mb-2 w-fit bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>
                  47,000+
                </h2>
                <p className='text-[#58595b] border-t-2 border-[#40ad48] w-fit pt-2'>
                  Beneficiaries since 2016
                </p>
              </div>

              <div>
                <h2 className='text-4xl font-bold mb-2 w-fit bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>
                  4,345
                </h2>
                <p className='text-[#58595b] border-t-2 border-[#40ad48] w-fit pt-2'>
                  ESOP hours since 2016
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Photo */}
          <div>
            <img
              src="/RuralDevelopment/image2.png"
              alt="Gram Vikas community meeting"
              className='w-full h-full object-cover rounded-lg'
            />
          </div>
        </div>

        {/* Installation of Solar Streetlights Section */}
        <div className='relative p-[2px] rounded-2xl bg-[#40ad48] mb-8'>
          <div className='bg-white rounded-2xl p-8'>
            {/* Leaf icon */}
            <img
              src="/LeadershipMessage/leaf.png"
              alt="leaf"
              className='absolute -top-8 right-8 w-16 h-16'
            />

            <h3 className='text-2xl text-[#005c33] font-bold mb-6'>
              Installation of solar streetlights
            </h3>

            {/* Two Column Layout */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6'>
              {/* Left - Description */}
              <div>
                <p className='text-[#58595b] mb-4'>
                  Under Gram Vikas program, the installation of solar streetlights across project-impacted villages, including Muloj, Doctor Kampa, Dholvani, Naheru Kampa, Sherapur Kampa, Rampur and Shivrajpura Kampa. This intervention facilitates reliable
                </p>
                <p className='text-[#58595b]'>
                  lighting, reduces dependence on the national power grid, curbs carbon emissions and augments overall community safety. The initiative is part of our broader push towards building resilient and low-emission rural regions.
                </p>
              </div>

              {/* Right - Statistics */}
              <div>
                <div className='mb-6'>
                  <h2 className='text-6xl font-bold mb-2 w-fit bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>
                    38
                  </h2>
                  <p className='text-[#58595b] border-t-2 border-[#40ad48] w-fit pt-2'>
                    Number of streetlights installed
                  </p>
                </div>

                <div>
                  <h2 className='text-6xl font-bold mb-2 w-fit bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>
                    8,480
                  </h2>
                  <p className='text-[#58595b] border-t-2 border-[#40ad48] w-fit pt-2'>
                    Villagers benefited
                  </p>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className='overflow-x-auto'>
              <table className='w-full border-collapse'>
                <thead>
                  <tr>
                    <th className='bg-[#005c33] text-white p-3 text-left font-bold'>Village</th>
                    <th className='bg-[#b4d679] text-[#005c33] p-3 text-left font-bold'>Panchayat</th>
                    <th className='bg-[#65acac] text-white p-3 text-center font-bold'>Solar Units</th>
                    <th className='bg-[#6cb42c] text-white p-3 text-center font-bold'>Beneficiaries</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b'>
                    <td className='p-3 text-[#58595b]'>Muloj</td>
                    <td className='p-3 text-[#58595b]'>Muloj</td>
                    <td className='p-3 text-center text-[#58595b]'>09</td>
                    <td className='p-3 text-center text-[#58595b]'>2100</td>
                  </tr>
                  <tr className='border-b bg-gray-50'>
                    <td className='p-3 text-[#58595b]'>Docto Kampa</td>
                    <td className='p-3 text-[#58595b]'>Muloj</td>
                    <td className='p-3 text-center text-[#58595b]'>05</td>
                    <td className='p-3 text-center text-[#58595b]'>1900</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-3 text-[#58595b]'>Dholvani</td>
                    <td className='p-3 text-[#58595b]'>Muloj</td>
                    <td className='p-3 text-center text-[#58595b]'>04</td>
                    <td className='p-3 text-center text-[#58595b]'>190</td>
                  </tr>
                  <tr className='border-b bg-gray-50'>
                    <td className='p-3 text-[#58595b]'>Naheru Kampa</td>
                    <td className='p-3 text-[#58595b]'>Modarsumba</td>
                    <td className='p-3 text-center text-[#58595b]'>06</td>
                    <td className='p-3 text-center text-[#58595b]'>1200</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-3 text-[#58595b]'>Sherapur Kampa</td>
                    <td className='p-3 text-[#58595b]'>Shinawada</td>
                    <td className='p-3 text-center text-[#58595b]'>05</td>
                    <td className='p-3 text-center text-[#58595b]'>770</td>
                  </tr>
                  <tr className='border-b bg-gray-50'>
                    <td className='p-3 text-[#58595b]'>Rampur</td>
                    <td className='p-3 text-[#58595b]'>Shinawada</td>
                    <td className='p-3 text-center text-[#58595b]'>03</td>
                    <td className='p-3 text-center text-[#58595b]'>720</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-3 text-[#58595b]'>Sherapur Kampa</td>
                    <td className='p-3 text-[#58595b]'>Vaniyawada</td>
                    <td className='p-3 text-center text-[#58595b]'>04</td>
                    <td className='p-3 text-center text-[#58595b]'>1600</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default RuralDevelopment