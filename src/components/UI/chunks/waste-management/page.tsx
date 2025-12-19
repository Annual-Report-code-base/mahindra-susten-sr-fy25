import React from 'react'

const WasteManagement = () => {
  return (
    <div>
      <div className='marginal text-[#58595b] text-md'>
        <h1 className='text-4xl font-bold mb-2 pb-3'>
          <span className='bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>Waste Management </span>
        </h1>

        <p className='text-xl font-bold mb-5'>
          We approach waste management with a resolute focus on operational
          responsibility and material efficiency across the entire project lifecycle
          from pre-construction procurement through site execution to postcommissioning activities.
        </p>

        <p className='text-[#58595b] mb-5'>
          While large-scale circular economy
          initiatives are still evolving, we have
          taken steps to reduce constructionrelated waste, particularly from civil
          infrastructure and electrical packaging.
          Materials such as pallets, cable
          drums, and modular steel components
          are sold to authorized recyclers or
          vendors, who further recycle, refurbish,
          or resell them ensuring that these
          materials are diverted from landfills
          and continue to have a useful life
          beyond our sites.
        </p>
        <p className='mb-5'>
          Guided by the principles of Reduce,
          Reuse and Responsible Disposal, we
          implement on-site waste segregation
          and ensure that any hazardous or
          regulated waste is disposed of through
          vendors certified by the State Pollution
          Control Board (SPCB).
        </p>
        <p className='mb-5'>
          At our project sites, we adopt a
          structured and compliant waste
          management approach, ensuring all
          waste is properly segregated, safely
          stored and responsibly disposed of
          in line with applicable environmental
          regulations.
        </p>
        <img src="/WasteManagement/image.png" alt="" className='mb-3' />
        <img src="/WasteManagement/image2.png" alt="" className='md:w-[80%] mx-auto' />
        <div className='mb-5'>
          <h3 className='text-2xl text-[#005c33] font-bold mb-4'>
            Working on Our Waste Management Standard
          </h3>
          <div className='flex flex-col md:flex-row gap-6 items-start'>
            <div className='flex-1'>
              <p className='text-[#58595b] mb-4'>
                We have adopted a structured waste management protocol that defines
                clear disposal pathways for various waste streams, including PV modules,
                used oil, sludge and construction debris. Waste is segregated at source
                into hazardous, non-hazardous, food waste and bio-medical waste
                categories to ensure proper handling and compliance. Each category
                is disposed of through authorized vendors. For bio-medical waste, we
                have established tie-ups with hospitals to ensure safe and compliant disposal.
              </p>
              <p className='mb-5'>
                We have developed Standard Operating Procedures (SOPs) for
                critical waste categories and are periodically reviewed to address
                evolving requirements. Our aim is to ensure consistency in waste handling
                practices across all projects.
              </p>
              {/* Office Premises Content (First part of the single column) */}
              <h4 className='text-xl text-[#005c33] font-semibold mb-2'>
                Office Premises
              </h4>
              <p className='text-[#58595b] mb-4'>
                In our office premises, waste segregation is practiced by
                separating wet and dry waste. While no hazardous waste is generated
                at the workplace, paper waste forms the bulk of our dry waste. The
                segregated waste is handed over to the property management team
                (PMT), which oversees disposal. Wet waste is processed through an organic
                waste composter and the resulting compost is used for gardening within
                the premises. Dry waste is collected by authorized third-party agencies
                for recycling, with an incinerator involved. Hard copies of recycling
                reports are maintained at our office for transparency and reference.
              </p>
            </div>

            {/* IMAGE CONTAINER: Takes up full width on mobile, and about 1/3 of the width on desktop */}
            <div className='w-full md:w-1/3 flex-shrink-0'>
              {/* Ensure the image scales responsively within its container */}
              <img src="/WasteManagement/image3.png" alt="Diagram showing the waste management process" className='w-full h-auto rounded-lg' />
            </div>
          </div>
        </div>
        <div className='mb-5'>
          <div className='flex flex-col md:flex-row gap-8 items-center'>
            {/* IMAGE CONTAINER: Positioned next to the text block */}
            <div className='w-full md:w-1/3 lg:w-2/5'>
              <img
                src="/WasteManagement/image4.png"
                alt="Workers segregating waste"
                className='w-full h-auto rounded-lg'
              />
            </div>
            {/* The TEXT block for the new content */}
            <div className='flex-1'>
              <h4 className='text-xl text-[#005c33] font-semibold mb-2 mt-6'>
                On-Site Practices
              </h4>
              <p className='text-[#58595b] mb-4'>
                At our project sites, we follow a structured and compliant approach
                to waste management, ensuring that all waste is segregated, stored and
                disposed of responsibly in accordance with applicable environmental
                regulations. Waste is categorized into hazardous, non-hazardous (wet
                and dry), bio-medical and e-waste
                with each stream following a defined
                disposal protocol.
              </p>
              
              {/* CONTENT FROM THE UPLOADED IMAGES STARTS HERE */}
              
              <ul className='list-disc pl-5 space-y-3'>
                <li className='text-[#58595b]'>
                  <span className='font-semibold'>Hazardous Waste:</span> Is disposed
                  of through authorized vendors holding valid licenses. We ensure
                  a disposal certificate is collected for every transaction as proof of
                  compliant handling.
                </li>
                <li className='text-[#58595b]'>
                  <span className='font-semibold'>Non-Hazardous Waste (Dry):</span> Includes general dry waste
                  such as packaging material and recyclables. It is handed
                  over to authorized vendors and we maintain copies of disposal
                  bills for accountability and audit purposes.
                </li>
                <li className='text-[#58595b]'>
                  <span className='font-semibold'>Non-Hazardous Waste (Wet -Organic):</span> Organic waste
                  generated on-site is also managed by authorized vendors. As with
                  dry waste, we maintain disposal records and vendor bills to track
                  proper handling.
                </li>
                <li className='text-[#58595b]'>
                  <span className='font-semibold'>E-waste:</span> All electronic waste
                  is sent only to CPCB/SPCB-
                  registered dismantlers or
                  recyclers, in full compliance with
                  the E-Waste Management Rules.
                  This ensures safe dismantling and
                  recovery of valuable materials.
                </li>
                <li className='text-[#58595b]'>
                  <span className='font-semibold'>Bio-Medical Waste:</span> Medical waste
                  from first-aid activities at site is
                  disposed of through formal tie-ups
                  with local hospitals or certified
                  vendors, following Bio-Medical
                  Waste Management Rules. A
                  disposal certificate is collected to
                  ensure due process is followed.
                </li>
              </ul>
            </div>
          </div>
        </div>
          <div>
            {/* TEXT BLOCK from the uploaded images */}
              <p className='text-[#58595b] mb-4'>
                In parallel, we are steadily progressing towards our long-term ambition
                of zero-waste-to-landfill by 2040.
              </p>
              <p className='text-[#58595b] mb-4'>
                Our progress has been supported by enhanced tracking of waste
                generation, material reutilization and responsible disposal.
              </p>
              
              {/* WAREE COMMITMENT BLOCK (from the right side of the second image) */}
              <div className='border border-[#005c33] rounded-3xl p-4 my-6 bg-gray-50'>
                  <p className='text-[#58595b] font-bold mb-3'>
                    As a step towards our commitment to circularity, we have
                    established a tie-up with Waaree for the buy-back of solar
                    modules at the end of their project life.
                  </p>
                  <p className='text-[#58595b] font-bold'>
                    This initiative supports our commitment to circularity by ensuring
                    responsible recovery and reuse of materials.
                  </p>
              </div>
          </div>
        {/* The continuation image */}
        <div className='mb-5'>
          <img 
            src="/WasteManagement/image5.png" 
            alt="Waste management team standing with garbage bags" 
            className='w-full h-auto' 
          />
        </div>
      </div>
    </div>
  )
}

export default WasteManagement