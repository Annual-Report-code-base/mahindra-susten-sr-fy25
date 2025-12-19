import React from 'react'

const SafeguardingEmployeeHealthAndWellBeing = () => {
  return (
    <div>
      <div className='marginal text-[#58595b] text-md'>
        <h1 className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold mb-2 pb-3'>
          Safeguarding Employee
          Health and Well-Being
        </h1>
        <h2 className='text-xl font-bold mb-5'>
          For us, well-being extends far beyond medical benefits — it is recognized
          as a strategic enabler of workforce productivity and resilience. Our
          partnership with EkinCare enables us to offer annual health check-ups at
          no cost for employees and their spouses, along with 24x7 teleconsultation
          services for up to five dependents.
        </h2>
        <p className='mb-5'>
          In addition, a multilingual mental health helpline, available in over 20 Indian languages,
          ensures that emotional support is accessible to employees and their families.
        </p>
        {/* Design & Engineering Section */}
        <div className='flex md:flex-row flex-col gap-8 mb-8'>
          <div className='md:w-[80%'>
            <h3 className='text-2xl text-[#005c33] font-bold mb-4'>
              Proactive wellness
              campaigns
            </h3>
            <p className='text-[#58595b] mb-4'>
              We run preventive health campaigns
              such as Step-a-thons, smoking
              cessation drives and diabetes
              awareness challenges to promote
              healthier lifestyle choices. We mark
              Mental Health Month with themed
              workshops, speaker sessions and
              organizational well-being audits. For
              our site-based teams, we organize
              regular indoor and outdoor sports
              tournaments, fitness contests and team
              challenges that build camaraderie
              while promoting physical activity and
              mental resilience.
            </p>
            <p className='text-[#58595b] mb-4'>
              Our well-being offerings are regularly
              reviewed for accessibility and
              relevance across diverse locations and
              workforce segments. This commitment
              helps us maintain a holistic, inclusive
              care ecosystem that supports the
              diverse needs of our people.
            </p>
            <div className='flex md:flex-row flex-col gap-6'>
              <div className='md:w-[30%]'>
                <img src="/EmployeeWellbeing/image.png" className='rounded-3xl h-full w-full object-cover' alt="" />
              </div>
              <div className='md:w-[70%]'>
                <img src="/ms/3.webp" className='rounded-3xl h-full w-full object-cover' alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SafeguardingEmployeeHealthAndWellBeing