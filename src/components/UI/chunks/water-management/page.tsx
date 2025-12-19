import React from 'react'

const WaterWastewaterManagement = () => {
  return (
    <div>
      <div className='marginal text-[#58595b] text-md'>
        <h1 className='text-4xl font-bold mb-2 pb-3'>
          <span className='bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>Water and Wastewater Management</span>
        </h1>

        <p className='text-xl font-bold mb-5'>
          We continue to place emphasis on water efficiency throughout the lifecycle of our projects. Through the implementation of effective design options and optimization of site-level practices.
        </p>

        <p className='text-[#58595b] mb-5'>
          Initiatives, such as dry cleaning of solar modules, rain water harvesting system, well-planned drainage systems and efficient material handling have collectively contributed to a notable reduction in specific water utilization across multiple locations. These initiatives are part of our broader effort to build infrastructure that is both technically sound and attuned to the well-being of the environment.
        </p>

        {/* Graph Images - 3 in a row */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-5 justify-center items-center'>
          <div>
            <img 
              src="/WaterManagement/graph1.png" 
              alt="Total water consumption (In kl) Office + Project sites" 
              className='w-full'
            />
          </div>
          <div>
            <img 
              src="/WaterManagement/graph2.png" 
              alt="Total water consumption at project sites (In kl) construction + O&M" 
              className='w-full'
            />
          </div>
          <div>
            <img 
              src="/WaterManagement/image.png" 
              alt="Water treatment facility" 
              className='w-full'
            />
          </div>
        </div>

        {/* Note about projects */}
        <p className='text-sm text-[#58595b] mb-5'>
          In FY24, no projects were in construction phase<br />
          In FY25, no projects were in operation phase
        </p>

        {/* During Construction: Reducing Water Intensity at Source */}
        <div className='mb-5'>
          <h3 className='text-2xl text-[#005c33] font-bold mb-4'>
            During Construction: Reducing Water Intensity at Source
          </h3>
          <p className='text-[#58595b] mb-4'>
            We source water exclusively from authorized and approved sources to ensure regulatory compliance and responsible usage. A tracking mechanism is in place to monitor water consumption and utilization across our operations, enabling us to identify areas for efficiency and improvement. In addition, we regularly conduct awareness sessions for employees and on-site workers to reinforce the importance of water conservation. These initiatives help promote a culture of mindful and judicious water use.
          </p>
        </div>

        {/* During Operations: Conserving Through Technology */}
        <div className='mb-5'>
          <h3 className='text-2xl text-[#005c33] font-bold mb-4'>
            During Operations: Conserving Through Technology
          </h3>
          <p className='text-[#58595b] mb-4'>
            Water conservation continues to be a crucial area of focus for us during the operations and maintenance phase of our projects. We designed and deployed dry robotic cleaning systems, significantly reducing the need for water in routine maintenance. These systems serve the dual purpose of preserving water and enhancing efficiency in operational uptime. Continuous process optimization and monitoring ensure that each intervention delivers measurable impact over the asset lifecycle.
          </p>
        </div>

        {/* Water Management at HO */}
        <div className='mb-5'>
          <h3 className='text-2xl text-[#005c33] font-bold mb-4'>
            Water Management at HO
          </h3>
          <p className='text-[#58595b] mb-4'>
            In addition to on-site conservation efforts, we also implement sustainable wastewater management practices at our corporate premises. The wastewater generated at our head office is treated and recycled by the property management team (PMT) through a 400 KLD Membrane Bio-Reactor (MBR) type Sewage Treatment Plant (STP). After treatment, the recycled water is reused for gardening, flushing and cooling tower make-up supporting our commitment to responsible water consumption.
          </p>
        </div>

      </div>
    </div>
  )
}

export default WaterWastewaterManagement
