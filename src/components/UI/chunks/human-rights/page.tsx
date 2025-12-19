import React from 'react'

const UpholdingHumanRightsAndEthicalConduct = () => {
  return (
    <div>
      <div className='marginal text-[#58595b] text-md'>
        <h1 className='text-4xl font-bold mb-2 pb-3'>
          <span className='bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>Upholding Human Rights and Ethical Conduct</span>
        </h1>

        <p className='text-xl font-bold mb-5'>
          We uphold human rights as a fundamental part of responsible business conduct. All employees undergo annual mandatory training on core ethical principles, including the Prevention of Sexual Harassment (POSH), the Mahindra Code of Conduct (COC) and Anti-Bribery and Anti-Corruption (ABAC) practices.
        </p>

        <p className='text-[#58595b] mb-8'>
          These training modules are supported through declaration-based completion protocols and digital certification, ensuring accountability and a thorough understanding across all levels of the organization. These initiatives strengthen our compliance framework while embedding ethical awareness throughout the workforce. In parallel, we maintain a strong focus on worker well-being and safety. All workers are provided access to essential amenities such as restrooms, sanitation facilities, safe drinking water and electricity. Regular health and medical check-up camps are conducted to monitor and safeguard their well-being. We have also established on-site or nearby clinics to extend medical support not only to workers but also to their families. Monitoring of occupational illnesses and proactive health checks are integrated into our workforce management practices, reinforcing our commitment to a safe and healthy work environment.
        </p>

        {/* Two Column Layout - Photo and 100% stat */}
        <div className='flex md:flex-row flex-col gap-8 mb-8'>
          {/* Left Column - Photo */}
          <div>
            <img 
              src="/HumanRights/image.png" 
              alt="Ethics and compliance training session" 
              className='w-full h-96'
            />
          </div>

          {/* Right Column - 100% Stat */}
          <div className='flex flex-col justify-end'>
            <h2 className='text-4xl font-bold mb-2 w-fit bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>
              100%
            </h2>
            <p className='text-xl text-[#58595b] border-t-4 border-[#f6a537] w-fit pt-3'>
              Compliance training completed
            </p>
          </div>
        </div>

        {/* Child labour and freedom of association - Two Column Layout */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
          {/* Left Column - Text */}
          <div>
            <h3 className='text-3xl font-bold text-[#005c33] mb-4'>
              Child labour and freedom of association
            </h3>
            <p className='text-[#58595b] mb-4'>
              We maintain a zero-tolerance approach to child labour and strongly support freedom of association, in line with national laws and global conventions. Employment terms are verified through documented processes, ensuring that all workers are of legal age and appropriately onboarded.
            </p>
            <p className='text-[#58595b]'>
              Employees are encouraged to express their views, raise concerns and engage with representation mechanisms without fear of retaliation. Our internal grievance redressal systems, supported by awareness campaigns and safe reporting platforms, ensure that labour rights are respected, protected and actively promoted throughout our value chain.
            </p>
          </div>

          {/* Right Column - Photo */}
          <div>
            <img 
              src="/HumanRights/image2.png" 
              alt="Child labour prohibition signage at site" 
              className='w-full h-full object-cover rounded-lg shadow-lg'
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default UpholdingHumanRightsAndEthicalConduct
