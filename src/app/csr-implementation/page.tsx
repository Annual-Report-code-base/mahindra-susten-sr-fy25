import React from 'react'

const GroundLevelCsrImplementation = () => {
  return (
    <div>
      <div className='marginal text-[#58595b] text-md'>
        <h1 className='text-4xl font-bold mb-2 pb-3'>
          <span className='bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>Ground-Level CSR Implementation</span>
        </h1>

        <p className='text-[#58595b] mb-5'>
          Mahindra Susten adopts a hybrid model for implementing its CSR initiatives on the ground—one that combines the expertise of implementing partner organizations with the passion and commitment of its employees voluntary work. This two-pronged strategy allows the Company to deliver scalable, high-quality and community-sensitive outcomes.
        </p>

        {/* Two Column Layout - NGO Partners and Employee Social Options */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-5'>
          {/* Left Column - Implementation through NGO Partners */}
          <div className='bg-[#f7f9ef] p-6 rounded-lg'>
            <h3 className='text-2xl text-[#6cb42c] font-bold mb-4'>
              Implementation through NGO Partners
            </h3>
            <p className='text-[#58595b] mb-4'>
              Mahindra Susten, aligned with the Mahindra Group's governance and compliance standards, ensures all CSR activities with NGOs at project locations adhere to statutory requirements and internal policies. We uphold transparency, accountability, and ethical practices throughout implementation, reinforcing stakeholder confidence and delivering meaningful social and environmental impact. We collaborate with experienced and credible implementing partners, including:
            </p>

            <div className='space-y-3'>
              <div className='flex items-start gap-3'>
                <div className='w-3 h-3 rounded-full bg-[#005c33] mt-1.5 flex-shrink-0'></div>
                <p className='text-[#58595b]'>Registered trusts or societies</p>
              </div>
              <div className='flex items-start gap-3'>
                <div className='w-3 h-3 rounded-full bg-[#005c33] mt-1.5 flex-shrink-0'></div>
                <p className='text-[#58595b]'>Section 8 companies with a track record of at least three years</p>
              </div>
              <div className='flex items-start gap-3'>
                <div className='w-3 h-3 rounded-full bg-[#005c33] mt-1.5 flex-shrink-0'></div>
                <p className='text-[#58595b]'>Mahindra Group foundations such as KC Mahindra Education Trust, Mahindra Foundation and Tech Mahindra Foundation</p>
              </div>
            </div>
          </div>

          {/* Right Column - Employee Social Options */}
          <div className='bg-[#f2f8f8] p-6 rounded-lg'>
            <h3 className='text-2xl text-[#6cb42c] font-bold mb-4'>
              Employee Social Options (ESOPs)
            </h3>
            <p className='text-[#58595b] mb-6'>
              To deepen grassroots impact and foster a culture of social responsibility, Mahindra Susten empowers its employees especially those stationed at project locations to participate directly in CSR initiatives through ESOPs. Volunteers are celebrated by the MD and CEO of Mahindra Susten at quarterly townhalls, with awards recognizing their spirit of service and impact on the ground.
            </p>

            {/* Three Statistics */}
            <div className='space-y-4 flex gap-8'>
              <div>
                <h2 className='text-4xl font-bold mb-1 w-fit bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>
                  2,97,480
                </h2>
                <p className='text-[#58595b] text-sm border-t-2 border-[#f6a537] pt-1'>
                  Beneficiaries till date
                </p>
              </div>

              <div>
                <h2 className='text-4xl font-bold mb-1 w-fit bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>
                  46,406
                </h2>
                <p className='text-[#58595b] text-sm border-t-2 border-[#f6a537] pt-1'>
                  ESOPs Hours till date
                </p>
              </div>

              <div>
                <h2 className='text-4xl font-bold mb-1 w-fit bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>
                  12,010
                </h2>
                <p className='text-[#58595b] text-sm border-t-2 border-[#f6a537] pt-1'>
                  Number of Volunteers till date
                </p>
              </div>
            </div>

            {/* Employees contribute by */}
            <div className='mt-6'>
              <h4 className='font-bold text-[#58595b] mb-3'>Employees contribute by</h4>
              <div className='space-y-2'>
                <div className='flex items-start gap-2'>
                  <div className='w-2 h-2 rounded-full bg-[#005c33] mt-2 flex-shrink-0'></div>
                  <p className='text-[#58595b] text-sm'>Volunteering time and effort for social causes</p>
                </div>
                <div className='flex items-start gap-2'>
                  <div className='w-2 h-2 rounded-full bg-[#005c33] mt-2 flex-shrink-0'></div>
                  <p className='text-[#58595b] text-sm'>Leading or supporting local community development projects</p>
                </div>
                <div className='flex items-start gap-2'>
                  <div className='w-2 h-2 rounded-full bg-[#005c33] mt-2 flex-shrink-0'></div>
                  <p className='text-[#58595b] text-sm'>Acting as project champions and on-ground coordinators</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Structured Approach to CSR Project Execution */}
        <div className='mb-5'>
          <h3 className='text-2xl text-[#005c33] font-bold'>
            Structured Approach to CSR Project Execution
          </h3>

          {/* Process Flow - can use image */}
          <img
            src="/CsrImplementation/image.png"
            alt="CSR Project Execution Process Flow"
            className='w-full mb-5'
          />
        </div>

        {/* Two Column Layout - CSR Data Management and Key Highlights */}
        <div className=''>
          {/* Left Column - CSR Data Management System */}
          <div className='mb-5'>
            <h3 className='text-2xl text-[#005c33] font-bold mb-4'>
              CSR data management System
            </h3>
            <p className='text-[#58595b]'>
              Mahindra Susten manages its CSR data through MGRANT, the Mahindra Group's centralized CSR portal. This unified digital platform enables efficient tracking, monitoring and reporting of all CSR activities, ensuring transparency, accountability and alignment with regulatory requirements.
            </p>
          </div>

          {/* Right Column - Key Highlights */}
          <div className='border-2 border-[#6cb42c] rounded-4xl p-6'>
            <h3 className='text-2xl text-[#6cb42c] font-bold mb-4'>
              Key Highlights
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <div className='flex items-start gap-2'>
                  <div className='w-2 h-2 rounded-full bg-[#005c33] mt-2 flex-shrink-0'></div>
                  <p className='text-[#58595b] text-sm'>End-to-end CSR lifecycle management</p>
                </div>
                <div className='flex items-start gap-2'>
                  <div className='w-2 h-2 rounded-full bg-[#005c33] mt-2 flex-shrink-0'></div>
                  <p className='text-[#58595b] text-sm'>Financial and project monitoring</p>
                </div>
                <div className='flex items-start gap-2'>
                  <div className='w-2 h-2 rounded-full bg-[#005c33] mt-2 flex-shrink-0'></div>
                  <p className='text-[#58595b] text-sm'>Impact tracking and reporting</p>
                </div>
                <div className='flex items-start gap-2'>
                  <div className='w-2 h-2 rounded-full bg-[#005c33] mt-2 flex-shrink-0'></div>
                  <p className='text-[#58595b] text-sm'>CSR annual budgeting and action planning</p>
                </div>
                <div className='flex items-start gap-2'>
                  <div className='w-2 h-2 rounded-full bg-[#005c33] mt-2 flex-shrink-0'></div>
                  <p className='text-[#58595b] text-sm'>NGO onboarding and due diligence</p>
                </div>
                <div className='flex items-start gap-2'>
                  <div className='w-2 h-2 rounded-full bg-[#005c33] mt-2 flex-shrink-0'></div>
                  <p className='text-[#58595b] text-sm'>RFP/proposal submission and evaluation</p>
                </div>
              </div>
              <div className='space-y-2'>
                <div className='flex items-start gap-2'>
                  <div className='w-2 h-2 rounded-full bg-[#005c33] mt-2 flex-shrink-0'></div>
                  <p className='text-[#58595b] text-sm'>Aggregated reporting and dashboards</p>
                </div>
                <div className='flex items-start gap-2'>
                  <div className='w-2 h-2 rounded-full bg-[#005c33] mt-2 flex-shrink-0'></div>
                  <p className='text-[#58595b] text-sm'>Role-based user access and controls</p>
                </div>
                <div className='flex items-start gap-2'>
                  <div className='w-2 h-2 rounded-full bg-[#005c33] mt-2 flex-shrink-0'></div>
                  <p className='text-[#58595b] text-sm'>Communication and collaboration hub</p>
                </div>
                <div className='flex items-start gap-2'>
                  <div className='w-2 h-2 rounded-full bg-[#005c33] mt-2 flex-shrink-0'></div>
                  <p className='text-[#58595b] text-sm'>Automated alerts and notifications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Social Impact Snapshot */}
        <div className='mb-5 mt-5'>
          <h3 className='text-3xl text-[#005c33] font-bold mb-5'>
            Social Impact Snapshot
          </h3>

          {/* 3x2 Grid of Impact Stats */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-5'>
            {/* Stat 1 - CSR Beneficiaries */}
            <div className=''>
              <img
                src="/CsrImplementation/i1.png"
                alt="CSR Impact I"
                className='h-20  mb-4'
              />
              <h2 className='text-4xl font-bold mb-2 w-fit  bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>
                3.02 Lakhs
              </h2>
              <p className='text-[#58595b] border-t-2 border-gray-300 pt-2'>
                Individuals benefitted through CSR efforts since 2016
              </p>
            </div>

            {/* Stat 2 - Project Nanhi Kali */}
            <div className=''>
              <img
                src="/CsrImplementation/i2.png"
                alt="Girls Education I"
                className='h-20  mb-4'
              />
              <h2 className='text-4xl font-bold mb-2 w-fit  bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>
                12,646+
              </h2>
              <p className='text-[#58595b] border-t-2 border-gray-300 pt-2'>
                Girls Supported through Project Nanhi Kali since 2016
              </p>
            </div>

            {/* Stat 3 - Gyandeep Program */}
            <div className=''>
              <img
                src="/CsrImplementation/i3.png"
                alt="Students I"
                className='h-20  mb-4'
              />
              <h2 className='text-4xl font-bold mb-2 w-fit  bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>
                58,478
              </h2>
              <p className='text-[#58595b] border-t-2 border-gray-300 pt-2'>
                Students Supported under the Gyandeep Program since 2016
              </p>
            </div>

            {/* Stat 4 - Gram Vikas */}
            <div className=''>
              <img
                src="/CsrImplementation/i4.png"
                alt="Agriculture I"
                className='h-20  mb-4'
              />
              <h2 className='text-4xl font-bold mb-2 w-fit  bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>
                38,000+
              </h2>
              <p className='text-[#58595b] border-t-2 border-gray-300 pt-2'>
                People Reached through Gram Vikas since 2016
              </p>
            </div>

            {/* Stat 5 - ESOP Engagement */}
            <div className=''>
              <img
                src="/CsrImplementation/i5.png"
                alt="ESOP I"
                className='h-20  mb-4'
              />
              <h2 className='text-4xl font-bold mb-2 w-fit  bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>
                2,20,658+
              </h2>
              <p className='text-[#58595b] border-t-2 border-gray-300 pt-2'>
                Individuals Engaged via ESOP initiatives since 2020
              </p>
            </div>

            {/* Stat 6 - Volunteer Hours */}
            <div className=''>
              <img
                src="/CsrImplementation/i6.png"
                alt="Volunteer I"
                className='h-20 mb-4'
              />
              <h2 className='text-4xl font-bold mb-2 w-fit  bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>
                51,000+
              </h2>
              <p className='text-[#58595b] border-t-2 border-gray-300 pt-2'>
                Volunteer hours by employees contributing to community development since 2016
              </p>
            </div>
          </div>

          {/* Event Photo */}
          <div>
            <img
              src="/CsrImplementation/image3.png"
              alt="India Design Summit 2024 - Mahindra Susten participation"
              className='w-full rounded-lg'
            />
            <p className='font-bold mt-5 mb-5'>
              Mahindra Susten received the Silver Award in the Social Impact Category
              at the 24th CII India Design Awards.
            </p>
            <img src="/CsrImplementation/image4.png" alt="" className='mx-auto'/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default GroundLevelCsrImplementation
