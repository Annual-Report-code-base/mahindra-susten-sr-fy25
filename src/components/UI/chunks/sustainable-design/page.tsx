import React from 'react'

const SustainableDesign = () => {
  return (
    <div>
      <div className='marginal text-[#58595b] text-md'>
        <h1 className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold mb-2 pb-3'>
          Sustainable Design
        </h1>
        <h2 className='text-xl font-bold mb-5'>
          Our approach to project design is rooted in sustainability, precision
          engineering, and deep domain expertise. We believe that the foundation for
          building a high-performing renewable energy project is laid at the design
          stage, where every structural, electrical, and civil decision is made with a long term perspective.
        </h2>
        <p className='mb-5'>
          Our expertise in renewable energy (solar, wind, and BESS), coupled with diligent and sustainable project engineering,
          technological future-readiness, and digitalization strategies, forms the cornerstone of our design philosophy. Stringent reliability
          testing, proof-of-concepts (PoC), mock-ups, and wind tunnel studies on structures validate our designs. Through digitalization
          and automation, we optimize designs to deliver timely and cost-effective solutions. From detailed engineering on the drawing
          board to execution on the ground, our team of subject matter experts (SMEs) ensure reliable and long-term solutions.
        </p>
      {/* Design & Engineering Section */}
        <div className='mb-8'>
          <h3 className='text-2xl text-[#005c33] font-bold mb-4'>
            Design & Engineering (D&E) Capabilities
          </h3>
          <p className='text-[#58595b] mb-4'>
            Our resilient Design, Engineering, and Proposal (DE&P) team supports project success, from winnability to design, on-ground engineering, and commissioning. Sustainable project design is enabled through rigorous product reliability testing, bill of materials (BOM) selections, and supplier evaluations of OEMs and BOS components.
          </p>
          <p className='text-[#58595b] mb-4'>
            As part of our technology roadmap, we have established forward-looking initiatives such as the <strong>BESS Testing Facility</strong> and the <strong>Solar PV Module Test-Bench</strong> to gain insights into emerging technologies. Our team also ensures quality and timely engineering deliverables by leveraging digitalization initiatives to create unique solutions that maximize stakeholder value.
          </p>
          <p className='text-[#58595b] mb-4'>
            Our in-house tool, <strong>Oorja Sattva (Energy Modeling Tool)</strong>, delivers techno-commercially optimized solutions for diverse renewable energy tenders in India, including hybrid, peak power, round-the-clock (RTC), and firm and dispatchable renewable energy tenders (FDRE). Additionally, the <strong>RE-DOMS on-cloud platform</strong>, developed in-house, provides real-time module traceability and data across manufacturing, transit, construction, operation, and maintenance phases of renewable projects.
          </p>
        </div>
        
        {/* Leadership and Awards Section */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
          {/* Left - Award Images */}
          <div className='space-y-6'>
            <div>
              <img 
                src="/SustainableDesign/image.png" 
                alt="CII India Design Awards" 
                className='w-full rounded-2xl mb-4'
              />
              <p className='text-[#58595b] font-semibold'>
                MSPL received the Gold Award in the Service Design Category at the 24th CII India Design Awards.
              </p>
            </div>
            
            <div>
              <img 
                src="/SustainableDesign/image2.png" 
                alt="Patent Certificate" 
                className='w-full rounded-2xl'
              />
            </div>
          </div>
          
          {/* Right - Leadership Card and Recognition */}
          <div className='space-y-6'>
            {/* Leadership Card */}
            <div className='relative border-2 border-[#7ab800] rounded-2xl p-6 bg-white'>
              <img
                src="/LeadershipMessage/leaf.png"
                alt="leaf"
                className='absolute -top-8 left-6 w-16 h-16'
              />
              <div className='mt-4'>
                <img
                  src="/SustainableDesign/Pravin.png"
                  alt="Mr. Pravin Narkhede"
                  className='w-full h-64 object-contain rounded-lg mb-4 bg-[#d8e6e2]'
                />
                <p className='text-[#58595b] mb-4'>
                  Our design philosophy continues to prioritize innovation, efficiency and environmental stewardship. We are engineering solutions that are not only technically robust but also aligned with our commitment to sustainable infrastructure.
                </p>
                <h4 className='text-xl text-[#6cb42c] font-bold mb-1'>
                  Mr. Pravin Narkhede
                </h4>
                <p className='text-[#005c33] font-semibold'>
                  Head, Design & Engineering Sources
                </p>
              </div>
            </div>
            
            {/* Recognition Section */}
            <div>
              <p className='text-[#58595b] mb-4'>
                Our design excellence has been recognized with CII Design Excellence Awards for innovations such as:
              </p>
              <div className='space-y-2'>
                <div className='flex items-start gap-2'>
                  <div className='w-2 h-2 bg-[#005c33] rounded-full mt-2 flex-shrink-0'></div>
                  <p className='text-[#58595b]'>
                    Sustainable ground-mounted bifacial PV solar plant design with water-positive initiatives and advanced automatic dry robotic cleaning in Rajasthan.
                  </p>
                </div>
                <div className='flex items-start gap-2'>
                  <div className='w-2 h-2 bg-[#005c33] rounded-full mt-2 flex-shrink-0'></div>
                  <p className='text-[#58595b]'>
                    Solarization of Modhera Sun Temple and Town.
                  </p>
                </div>
                <div className='flex items-start gap-2'>
                  <div className='w-2 h-2 bg-[#005c33] rounded-full mt-2 flex-shrink-0'></div>
                  <p className='text-[#58595b]'>
                    Patent granted for "System and Method for Prediction of Battery Health."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SustainableDesign