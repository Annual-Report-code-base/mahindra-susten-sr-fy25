import React from 'react'

const AdvancingInclusionFairnessAndGenderEquity = () => {
  return (
    <div>
      <div className='marginal text-[#58595b] text-md'>
        <h1 className='text-4xl font-bold mb-2 pb-3'>
          <span className='bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>
            Advancing Inclusion, Fairness and Gender Equity
          </span>
        </h1>

        <p className='text-xl font-bold mb-5'>
          We believe that building a workforce that reflects different perspectives and backgrounds is essential for sustained progress and innovation. We foster diversity through structured programs, strong leadership commitment and cultural transformation across all levels of the organization.
        </p>

        {/* Single Column Content */}
        <div className='mb-5'>
          <p className='text-[#58595b] mb-4'>
            Diversity, Equity and Inclusion (DEI) goals are embedded in key people management practices and promoted through continuous learning, behavioral design and policy safeguards. Our women-focused Employee Resource Group (ERG) serves as a platform for mentorship, leadership exposure and peer learning.
          </p>
        </div>

        {/* Parental Leave, Graphs and Team Photo - 3 Column Layout */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-5'>
          {/* Column 1 - Parental Leave Graph */}
          <div>
            <img
              src="/InclusionEquity/g1.png"
              alt="Parental Leave - Return to work rate"
              className='w-full'
            />
          </div>

          {/* Column 2 - Retention Rate Graph */}
          <div>
            <img
              src="/InclusionEquity/g2.png"
              alt="Retention rate by gender"
              className='w-full'
            />
          </div>

          {/* Column 3 - Team Photo */}
          <div>
            <img
              src="/InclusionEquity/image.png"
              alt="Mahindra Susten team celebration"
              className='w-full h-full object-cover rounded-lg'
            />
          </div>
        </div>

        {/* A Workplace That Reflects Our Values */}
        <div className='mb-5'>
          <h3 className='text-2xl text-[#005c33] font-bold mb-4'>
            A Workplace That Reflects Our Values
          </h3>
          <p className='text-[#58595b] mb-4'>
            Our workspace is more than just four walls — it is a reflection of who we are and what we stand for. Inspired by nature and shaped by our values, our Head Office seamlessly integrates sustainability safety and well-being. From energy-efficient systems and low-VOC materials to modular, recyclable furniture and natural ventilation, every element has been thoughtfully chosen to minimize environmental impact while maximizing comfort.
          </p>
          <p className='text-[#58595b] mb-4'>
            This is a space designed to energize, empower and engage. With dedicated quiet zones, collaboration areas and calming acoustics, our office adapts to every need. Every aspect is crafted to spark connection, fuel innovation, and foster a deep sense of belonging.
          </p>
          <p className='text-[#58595b]'>
            Here, we do not just work — we grow, thrive and shape the future, together.
          </p>
        </div>

        {/* Where Care Meets Culture: Our HR Policy Framework */}
        <div className='mb-5'>
          <h3 className='text-2xl text-[#005c33] font-bold mb-4'>
            Where Care Meets Culture: Our HR Policy Framework
          </h3>
          <p className='text-[#58595b] mb-4'>
            We believe that a workplace thrives when its people feel supported, empowered and valued. Aligned with this vision, we have established a robust framework of progressive HR policies that not only address the evolving needs of our employees but also reflect our commitment to inclusivity, growth and well-being. From supporting lifelong learning and internal mobility to championing gender equity and flexible work arrangements, each policy is thoughtfully designed to enhance the employee experience. Our approach cultivates a culture of care, opportunity and high performance — ensuring our people are equipped and inspired to grow both personally and professionally.
          </p>
        </div>

        <div className='mb-5'>
          <img src="/InclusionEquity/image2.png" alt="" className='md:w-[80%] mx-auto mb-8' />
          <img src="/InclusionEquity/image3.png" alt="" className='md:w-[80%] mx-auto mb-8' />
        </div>

        {/* Creating inclusive workplaces for every life stage */}
        <div className='mb-5'>
          <h3 className='text-2xl text-[#005c33] font-bold mb-4'>
            Creating inclusive workplaces for every life stage
          </h3>
          <p className='text-[#58595b] mb-8'>
            We recognize that supporting employees through key life transitions helps in improving retention. Our SOAR program is designed for women professionals returning to work after a career break of six months to three years. It offers structured support through training, reintegration guidance and flexible work options — helping them confidently resume their professional journey and thrive.
          </p>

          {/* Women's Support Policy Box */}
          <div className='bg-gradient-to-bl from-[#56c6cd] to-[#e1f2e8] rounded-lg p-8 mb-8'>
            <h4 className='text-xl font-bold text-[#58595b] mb-6'>
              Our Women's Support Policy encompasses
            </h4>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {/* Sabbatical Leave */}
              <div>
                <h5 className='text-lg text-[#6cb42c] font-bold mb-4'>
                  Sabbatical Leave
                </h5>
                <div className='space-y-3'>
                  <div className='flex items-start gap-3'>
                    <div className='w-3 h-3 rounded-full bg-[#005c33] mt-1.5 flex-shrink-0'></div>
                    <p className='text-[#58595b]'>
                      Officers with 2+ years of service are eligible to avail it once in their tenure.
                    </p>
                  </div>
                  <div className='flex items-start gap-3'>
                    <div className='w-3 h-3 rounded-full bg-[#005c33] mt-1.5 flex-shrink-0'></div>
                    <p className='text-[#58595b]'>
                      Officers with 5+ years of service may receive 50% of their CTC if the sabbatical is taken for medical, caregiving responsibilities, or further education.
                    </p>
                  </div>
                </div>
              </div>

              {/* Women Support Policy */}
              <div>
                <h5 className='text-lg text-[#6cb42c] font-bold mb-4'>
                  Women Support Policy
                </h5>
                <div className='space-y-3'>
                  <div className='flex items-start gap-3'>
                    <div className='w-3 h-3 rounded-full bg-[#005c33] mt-1.5 flex-shrink-0'></div>
                    <p className='text-[#58595b]'>
                      Flexible work timings and six months of paid maternity leave.
                    </p>
                  </div>
                  <div className='flex items-start gap-3'>
                    <div className='w-3 h-3 rounded-full bg-[#005c33] mt-1.5 flex-shrink-0'></div>
                    <p className='text-[#58595b]'>
                      Option to work from home during pregnancy, based on mutual agreement.
                    </p>
                  </div>
                  <div className='flex items-start gap-3'>
                    <div className='w-3 h-3 rounded-full bg-[#005c33] mt-1.5 flex-shrink-0'></div>
                    <p className='text-[#58595b]'>
                      'Baby Care Allowance' of ₹5,000 per month for mothers with children under 2 years.
                    </p>
                  </div>
                  <div className='flex items-start gap-3'>
                    <div className='w-3 h-3 rounded-full bg-[#005c33] mt-1.5 flex-shrink-0'></div>
                    <p className='text-[#58595b]'>
                      Daily commute reimbursement of up to ₹600 or actuals in the last trimester.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className='text-[#58595b] mt-3'>
              We maintain pay equity across comparable roles and levels, ensuring that women have equal access to performance assessments, promotions and high-visibility projects. Our DEI training is mandatory for all employees, with active participation from the senior leadership team — including the CEO — to lead by example and reinforce our commitment to an inclusive workplace.
            </p>
          </div>
        </div>

        {/* Two Column Layout - Voices from workforce and Women-Led Program */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-5'>
          {/* Left - Voices from our workforce */}
          <div className='bg-gray-100 rounded-lg p-6'>
            <h4 className='text-2xl text-[#005c33] font-bold mb-4'>
              Voices from our workforce
            </h4>
            <p className='text-[#58595b] mb-4 italic'>
              "As a mother, balancing my career and responsibilities at home has always been challenging. But thanks to the organization's policies, especially the Babycare Allowance and Daycare Facility Reimbursements, I have received support that I could have never imagined. These policies have eased the financial burden and given me peace of mind, showing me that Mahindra Susten values both my professional identity and my role as a parent.
            </p>
            <p className='text-[#58595b] italic'>
              I am truly grateful for the Babycare Allowance. This support has made a significant difference to me and my family. It reflects the organization's care for its people and has deepened my sense of belonging. I feel proud to be part of such a workplace."
            </p>
          </div>

          {/* Right - Women-Led Program */}
          <div className='relative border-2 border-[#7ab800] rounded-2xl p-6 bg-white'>
            <img
              src="/LeadershipMessage/leaf.png"
              alt="leaf"
              className='absolute -top-8 right-6 w-16 h-16'
            />
            <h4 className='text-2xl text-[#005c33] font-bold mb-4 mt-4'>
              Women-Led Program – She Is on the Rise
            </h4>
            <p className='text-[#58595b]'>
              She Is on the Rise is a dedicated initiative to empower women professionals and support their journey into leadership. The program focuses on building confidence, enhancing strategic thinking and equipping women with the tools and opportunities required to succeed in leadership roles. It is about creating a strong pipeline of women leaders who can drive impact and inspire change across industries.
            </p>
          </div>
        </div>

        {/* Large Team Photo */}
        <div className='mb-5'>
          <img
            src="/InclusionEquity/image4.png"
            alt="Mahindra Susten team meeting"
            className='w-full rounded-lg'
          />
        </div>
        {/* The Surya Shakti Initiative */}
        <div className='relative p-[3px] rounded-2xl border-2 border-[#40ad48]'>
          <div className='bg-white rounded-2xl p-8'>
            {/* Leaf decoration */}
            <img
              src="/LeadershipMessage/leaf.png"
              alt="leaf"
              className='absolute -top-8 right-8 w-16 h-16'
            />

            <h4 className='text-2xl text-[#005c33] font-bold mb-6 mt-4'>
              The Surya Shakti Initiative
            </h4>

            <p className='text-[#58595b] mb-4'>
              Located at the heart of Karjat, Mahindra Susten's Centre of Excellence is dedicated to training individuals for the renewable energy sector, with a special focus on solar energy. The center's mission is to equip people from socio-economically disadvantaged backgrounds with full-trade and semi-trade skills, preparing them for meaningful careers in the solar industry. Over the years, it has trained thousands of technicians and individuals, empowering them to contribute to India's renewable energy growth. The program has also been recognized by the United Nations Global Compact for its impact on skill development and social empowerment.
            </p>

            <p className='text-[#58595b] mb-8'>
              Since 2016, the Surya Shakti initiative has complemented this mission by providing women with technical knowledge and practical skills in areas such as solar PV installation, SCADA systems, and project management. By enabling women to step into roles that were traditionally inaccessible, Surya Shakti transforms them into changemakers within their communities and active contributors to India's clean energy transition.
            </p>

            {/* Impact and Winner Box - Two Column Layout */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8'>
              {/* Left - Impact */}
              <div>
                <h5 className='text-xl text-[#6cb42c] font-bold mb-4'>
                  Impact
                </h5>
                <div className='space-y-3'>
                  <div className='flex items-start gap-3'>
                    <div className='w-3 h-3 rounded-full bg-[#005c33] mt-1.5 flex-shrink-0'></div>
                    <p className='text-[#58595b]'>
                      Over the years, the program has helped women gain not just technical skills, but also independence, confidence and recognition as leaders.
                    </p>
                  </div>
                  <div className='flex items-start gap-3'>
                    <div className='w-3 h-3 rounded-full bg-[#005c33] mt-1.5 flex-shrink-0'></div>
                    <p className='text-[#58595b]'>
                      We have trained and supported women at our dedicated training center, with the entire project being fully funded by us. Building on this foundation, we have also provided employment to  women across the Mahindra Renewable Ecosystem — including at Susten, Teqo and Solarize — enabling women to turn their training into meaningful careers in the renewable energy sector.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right - Winner Box */}
              <div className='bg-gradient-to-bl from-[#56c6cd] to-[#ffffff] rounded-lg p-6 border-2 border-[#f6a537]'>
                <h5 className='text-xl font-bold text-[#58595b] mb-4'>
                  Winner of the Solar Panel Installation Championship
                </h5>
                <p className='text-[#58595b]'>
                  At Intersolar 2025, held in Gandhinagar, Gujarat, our team comprising trainees from the Karjat Training Centre and led by dedicated coach secured first place in the Solar Panel Installation Championship, a proud testament to the high quality training delivered at our Centre of Excellence.
                </p>
              </div>
            </div>

            {/* Statistics - 3 Column Layout */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
              <div>
                <h2 className='text-4xl font-bold mb-2 w-fit bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>
                  243
                </h2>
                <p className='text-[#58595b] border-t-2 border-[#f6a537] pt-2'>
                  Women trained till date
                </p>
              </div>

              <div>
                <h2 className='text-4xl font-bold mb-2 w-fit bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>
                  21
                </h2>
                <p className='text-[#58595b] border-t-2 border-[#f6a537] pt-2'>
                  Women employed (FY25)
                </p>
              </div>

              <div>
                <h2 className='text-4xl font-bold mb-2 w-fit bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>
                  26
                </h2>
                <p className='text-[#58595b] border-t-2 border-[#f6a537] pt-2'>
                  Women trained (FY25)
                </p>
              </div>
            </div>

            {/* Training Photo */}
            <div>
              <img
                src="/InclusionEquity/image5.png"
                alt="Women trainees at solar installation training"
                className='w-full rounded-lg shadow-lg'
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AdvancingInclusionFairnessAndGenderEquity
