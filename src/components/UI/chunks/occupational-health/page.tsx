import React from 'react'

const OccupationalHealthAndHygiene = () => {
  return (
    <div>
      <div className='marginal text-[#58595b] text-md'>
        <h1 className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold pb-3'>
          Occupational Health and Hygiene
        </h1>

        <p className='text-[#58595b] text-lg mb-5'>
          We maintain on-site medical teams, conduct weekly doctor visits and have established emergency tie-ups with local hospitals. Pre-employment medicals, BMI card issuance and vertigo assessments are mandatory for all workers assigned to height work or physically labour-intensive activities.
        </p>

        {/* Sanitation and Hygiene Measures Section */}
        <div className='mb-8'>
          <h3 className='text-2xl text-[#005c33] font-bold mb-6'>
            Sanitation and hygiene measures
          </h3>

          <div className='space-y-4 mb-6'>
            <div className='flex items-start gap-3'>
              <div className='w-3 h-3 rounded-full bg-[#005c33] mt-2 flex-shrink-0'></div>
              <p className='text-[#58595b]'>
                Rest shelters are designed to prevent fatigue and heat stress
              </p>
            </div>

            <div className='flex items-start gap-3'>
              <div className='w-3 h-3 rounded-full bg-[#005c33] mt-2 flex-shrink-0'></div>
              <p className='text-[#58595b]'>
                Safe drinking water availability across all working zones
              </p>
            </div>

            <div className='flex items-start gap-3'>
              <div className='w-3 h-3 rounded-full bg-[#005c33] mt-2 flex-shrink-0'></div>
              <p className='text-[#58595b]'>
                Handwashing stations and urinals at all project sites
              </p>
            </div>

            <div className='flex items-start gap-3'>
              <div className='w-3 h-3 rounded-full bg-[#005c33] mt-2 flex-shrink-0'></div>
              <p className='text-[#58595b]'>
                Monthly inspections of labour camps and common areas by cross-functional teams
              </p>
            </div>
          </div>

          <p className='text-[#58595b] mb-8'>
            We also implement disinfection routines for offices, guest houses and worker accommodation. These practices proved especially critical during periods of heightened health risk and have since been integrated into our preventive hygiene protocols.
          </p>
        </div>

        {/* Vertigo Checkpoint Box */}
        <div className='border-2 border-[#f6a537] rounded-2xl p-6 bg-gradient-to-br from-[#e8f5e9] to-[#e1f5fe] mb-8'>
          <h3 className='text-2xl text-[#6cb42c] font-bold mb-4'>
            Vertigo Checkpoint
          </h3>

          <p className='text-[#58595b]'>
            To ensure the safety and readiness of workers engaged in height-related activities, we conduct on-site vertigo tests as part of our mandatory fitness screening process. These assessments help identify individuals with potential balance or dizziness, which could compromise safety during elevated tasks. By screening for such conditions before job allocation, we significantly reduce the risk of accidents and ensure only medically fit personnel are assigned to high-risk work.
          </p>
        </div>

        {/* On-Site Medical Unit Box */}
        <div className='border-2 border-[#f6a537] rounded-2xl p-6 bg-gradient-to-br from-[#e8f5e9] to-[#e1f5fe] mb-8'>
          <h3 className='text-2xl text-[#6cb42c] font-bold mb-6'>
            On-Site Medical Unit and BMI Monitoring
          </h3>

          <p className='text-[#58595b] mb-6'>
            A fully equipped medical unit has been established at the Safety Park to carry out pre-employment health checks and BMI assessments for all workers and staff. This initiative ensures that every individual meets the necessary health standards before starting work, reinforcing our commitment to safety and well-being. The unit conducts comprehensive screenings, enabling a proactive approach to managing employee health on-site. A BMI card is issued to every individual, and the HSE team maintains a centralized record of BMI data for all employees, ensuring consistent monitoring and timely follow-up where necessary.
          </p>

          {/* Photo */}
          <img 
            src="/OccupationalHealth/image.png" 
            alt="Workers at medical unit with certificates" 
            className='w-full'
          />
        </div>

      </div>
    </div>
  )
}

export default OccupationalHealthAndHygiene
