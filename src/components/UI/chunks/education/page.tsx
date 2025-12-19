import React from 'react'

const Education = () => {
  return (
    <>
      <div className='pt-20 bg-[#d8e8ef]'>
        <div className='marginal text-[#58595b] text-md'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8'>
            {/* Left Column - Content */}
            <div>
              <div className='flex items-center gap-4 mb-6'>
                <img
                  src="/Education/icon.png"
                  alt="Education Icon"
                  className='w-16 h-16'
                />
                <h1 className='text-4xl font-bold text-[#005c33]'>
                  Education
                </h1>
              </div>

              <p className='text-[#58595b] leading-relaxed'>
                Quality education is essential for sustained progress. However, many schools across India continue to face severe infrastructure gaps. The absence of appropriate facilities, particularly toilets, deter attendance among girl students. Improving school infrastructure, including classrooms and sanitation and fostering an environment conducive to learning, plays a crucial role in boosting student retention and reducing dropout rates. Educating girls creates a powerful ripple effect—empowered individuals lead empowered families and improved earning potential. Strengthening school systems and supporting girls' education not only promotes gender equity but also lays the foundation for resilient, thriving communities.
              </p>
            </div>

            {/* Right Column - Background Image */}
            <div
              className='h-96 lg:h-full bg-cover bg-center bg-no-repeat rounded-lg'
              style={{
                backgroundImage: "url('/Education/outline.png')"
              }}
            >
            </div>
          </div>

          {/* Full Width Photo */}
          <div className='mb-8'>
            <img
              src="/Education/image1.png"
              alt="Students benefiting from education programs"
              className='w-full rounded-4xl'
            />
          </div>

        </div>
      </div>
      <div className='bg-white marginal'>
        {/* Gyandeep Section - Single Column Layout */}
        <div className='mb-8'>
          <h3 className='text-3xl text-[#005c33] font-bold mb-6'>
            Gyandeep
          </h3>

          {/* Two Column Grid for Content and Photo */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
            {/* Left - Text Content */}
            <div>
              <p className='text-[#58595b] mb-6'>
                Through the Gyandeep CSR program, Mahindra Susten has implemented three key initiatives that support the United Nations Sustainable Development Goals (SDGs)— particularly SDG 4: Quality Education, SDG 5: Gender Equality, and SDG 10: Reduced Inequalities—while aligning with relevant GRI Standards (GRI 203, 404, and 413). These initiatives include school infrastructure revamp to create conducive learning environments, STEM laboratories to foster scientific curiosity and skill development, and Nanhi Kali support to provide educational assistance to girls from marginalized communities.
              </p>

              <p className='text-[#58595b] mb-6'>
                Together, these initiatives enhance access to quality education and strengthen the overall learning ecosystem in rural areas. Upgraded infrastructure provides safe and engaging classrooms, STEM labs nurture creativity and confidence, and the Nanhi Kali program offers consistent academic support and mentorship, empowering underprivileged girls to pursue higher education and break social barriers.
              </p>

              <p className='text-[#58595b]'>
                To date, Gyandeep has positively impacted thousands of children across project-affected regions, bridging educational gaps between urban and rural areas. By modernizing schools, establishing innovative learning spaces, and supporting girls' education, the program strengthens community trust and contributes to building a skilled, inclusive future workforce. Through these efforts, Mahindra Susten demonstrates its commitment to creating shared value and driving long-term socio-economic development alongside its renewable energy mission.
              </p>
            </div>

            {/* Right - Classroom Photo */}
            <div>
              <img
                src="/Education/image3.png"
                alt="Gyandeep STEM classroom"
                className='w-full h-full object-cover rounded-lg'
              />
            </div>
          </div>

          {/* Statistics - 2x2 Grid */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-8'>
            <div className='text-center'>
              <h2 className='text-4xl font-bold mb-2 w-fit mx-auto bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>
                58,000+
              </h2>
              <p className='text-[#58595b] text-sm border-t-2 border-gray-300 pt-2'>
                Students' outreach since 2016
              </p>
            </div>

            <div className='text-center'>
              <h2 className='text-4xl font-bold mb-2 w-fit mx-auto bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>
                11
              </h2>
              <p className='text-[#58595b] text-sm border-t-2 border-gray-300 pt-2'>
                Number of schools developed under the program since 2022
              </p>
            </div>

            <div className='text-center'>
              <h2 className='text-4xl font-bold mb-2 w-fit mx-auto bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>
                ~15%
              </h2>
              <p className='text-[#58595b] text-sm border-t-2 border-gray-300 pt-2'>
                Average increase in attendance
              </p>
            </div>

            <div className='text-center'>
              <h2 className='text-4xl font-bold mb-2 w-fit mx-auto bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>
                ~10%
              </h2>
              <p className='text-[#58595b] text-sm border-t-2 border-gray-300 pt-2'>
                Average reduction in dropout
              </p>
            </div>
          </div>

          {/* Dream Believe Achieve Photo */}
          <div>
            <img
              src="/Education/image4.png"
              alt="Dream Believe Achieve wall art at school"
              className='w-full rounded-lg'
            />
          </div>
        </div>
        {/* Gyandeep Impact Details Table */}
        <div className='mb-8'>
          <h3 className='text-2xl text-[#6cb42c] font-bold mb-6'>
            Gyandeep Impact details Till Date
          </h3>

          <div className='overflow-x-auto'>
            <table className='w-full border-collapse'>
              <thead>
                <tr>
                  <th className='bg-[#005c33] text-white p-3 text-left font-bold'>Name of School</th>
                  <th className='bg-[#b4d679] text-[#005c33] p-3 text-left font-bold'>Location</th>
                  <th className='bg-[#65acac] text-white p-3 text-center font-bold'>Year of activity</th>
                  <th className='bg-[#005c33] text-white p-3 text-center font-bold'>FY23 nos.</th>
                  <th className='bg-[#6cb42c] text-white p-3 text-center font-bold'>FY24 nos.</th>
                  <th className='bg-[#6cb42c] text-white p-3 text-center font-bold'>FY24 %inc.</th>
                  <th className='bg-[#6cb42c] text-white p-3 text-center font-bold'>FY25 nos.</th>
                  <th className='bg-[#6cb42c] text-white p-3 text-center font-bold'>FY25 %inc.</th>
                  <th className='bg-[#f6a537] text-white p-3 text-center font-bold'>Steam</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b'>
                  <td className='p-3 text-[#58595b]'>Govt. Primary School</td>
                  <td className='p-3 text-[#58595b]'>Mansar, Uparli Dhani, Rajasthan</td>
                  <td className='p-3 text-center text-[#58595b]'>FY22</td>
                  <td className='p-3 text-center text-[#58595b]'>46</td>
                  <td className='p-3 text-center text-[#58595b]'>59</td>
                  <td className='p-3 text-center text-[#58595b]'>28%</td>
                  <td className='p-3 text-center text-[#58595b]'>68</td>
                  <td className='p-3 text-center text-[#58595b]'>15%</td>
                  <td className='p-3 text-center text-[#58595b]'>-</td>
                </tr>
                <tr className='border-b bg-gray-50'>
                  <td className='p-3 text-[#58595b]'>Girls Secondary School (all girls)</td>
                  <td className='p-3 text-[#58595b]'>Khari Charan, Rajasthan</td>
                  <td className='p-3 text-center text-[#58595b]'>FY22</td>
                  <td className='p-3 text-center text-[#58595b]'>449</td>
                  <td className='p-3 text-center text-[#58595b]'>455</td>
                  <td className='p-3 text-center text-[#58595b]'>1%</td>
                  <td className='p-3 text-center text-[#58595b]'>468</td>
                  <td className='p-3 text-center text-[#58595b]'>3%</td>
                  <td className='p-3 text-center text-[#58595b]'>Yes</td>
                </tr>
                <tr className='border-b'>
                  <td className='p-3 text-[#58595b]'>Mahatma Gandhi Rajkiya Vidalaya</td>
                  <td className='p-3 text-[#58595b]'>Khari Charan, Rajasthan</td>
                  <td className='p-3 text-center text-[#58595b]'>FY23</td>
                  <td className='p-3 text-center text-[#58595b]'>174</td>
                  <td className='p-3 text-center text-[#58595b]'>280</td>
                  <td className='p-3 text-center text-[#58595b]'>61%</td>
                  <td className='p-3 text-center text-[#58595b]'>321</td>
                  <td className='p-3 text-center text-[#58595b]'>15%</td>
                  <td className='p-3 text-center text-[#58595b]'>-</td>
                </tr>
                <tr className='border-b bg-gray-50'>
                  <td className='p-3 text-[#58595b]'>Govt Upper Primary School</td>
                  <td className='p-3 text-[#58595b]'>Goyalri, Rajasthan</td>
                  <td className='p-3 text-center text-[#58595b]'>FY23</td>
                  <td className='p-3 text-center text-[#58595b]'>78</td>
                  <td className='p-3 text-center text-[#58595b]'>86</td>
                  <td className='p-3 text-center text-[#58595b]'>10%</td>
                  <td className='p-3 text-center text-[#58595b]'>112</td>
                  <td className='p-3 text-center text-[#58595b]'>30%</td>
                  <td className='p-3 text-center text-[#58595b]'>-</td>
                </tr>
                <tr className='border-b'>
                  <td className='p-3 text-[#58595b]'>Govt Upper Primary School</td>
                  <td className='p-3 text-[#58595b]'>Dadu ka Gaon, Rajasthan</td>
                  <td className='p-3 text-center text-[#58595b]'>FY23</td>
                  <td className='p-3 text-center text-[#58595b]'>48</td>
                  <td className='p-3 text-center text-[#58595b]'>56</td>
                  <td className='p-3 text-center text-[#58595b]'>17%</td>
                  <td className='p-3 text-center text-[#58595b]'>98</td>
                  <td className='p-3 text-center text-[#58595b]'>75%</td>
                  <td className='p-3 text-center text-[#58595b]'>-</td>
                </tr>
                <tr className='border-b bg-gray-50'>
                  <td className='p-3 text-[#58595b]'>Government Primary School</td>
                  <td className='p-3 text-[#58595b]'>Ajuka Nada, Sevra, Rajasthan</td>
                  <td className='p-3 text-center text-[#58595b]'>FY24</td>
                  <td className='p-3 text-center text-[#58595b]'>-</td>
                  <td className='p-3 text-center text-[#58595b]'>70</td>
                  <td className='p-3 text-center text-[#58595b]'>-</td>
                  <td className='p-3 text-center text-[#58595b]'>79</td>
                  <td className='p-3 text-center text-[#58595b]'>13%</td>
                  <td className='p-3 text-center text-[#58595b]'>-</td>
                </tr>
                <tr className='border-b'>
                  <td className='p-3 text-[#58595b]'>Charanka Primary School</td>
                  <td className='p-3 text-[#58595b]'>Charanka, Gujarat</td>
                  <td className='p-3 text-center text-[#58595b]'>FY24</td>
                  <td className='p-3 text-center text-[#58595b]'>-</td>
                  <td className='p-3 text-center text-[#58595b]'>272</td>
                  <td className='p-3 text-center text-[#58595b]'>-</td>
                  <td className='p-3 text-center text-[#58595b]'>276</td>
                  <td className='p-3 text-center text-[#58595b]'>1%</td>
                  <td className='p-3 text-center text-[#58595b]'>-</td>
                </tr>
                <tr className='border-b bg-gray-50'>
                  <td className='p-3 text-[#58595b]'>Govt. Secondary School</td>
                  <td className='p-3 text-[#58595b]'>Dhokavada, Gujarat</td>
                  <td className='p-3 text-center text-[#58595b]'>FY24</td>
                  <td className='p-3 text-center text-[#58595b]'>-</td>
                  <td className='p-3 text-center text-[#58595b]'>585</td>
                  <td className='p-3 text-center text-[#58595b]'>-</td>
                  <td className='p-3 text-center text-[#58595b]'>610</td>
                  <td className='p-3 text-center text-[#58595b]'>4%</td>
                  <td className='p-3 text-center text-[#58595b]'>Yes</td>
                </tr>
                <tr className='border-b'>
                  <td className='p-3 text-[#58595b]'>Govt EGS School</td>
                  <td className='p-3 text-[#58595b]'>Dhokavada, Gujarat</td>
                  <td className='p-3 text-center text-[#58595b]'>FY24</td>
                  <td className='p-3 text-center text-[#58595b]'>-</td>
                  <td className='p-3 text-center text-[#58595b]'>54</td>
                  <td className='p-3 text-center text-[#58595b]'>-</td>
                  <td className='p-3 text-center text-[#58595b]'>59</td>
                  <td className='p-3 text-center text-[#58595b]'>9%</td>
                  <td className='p-3 text-center text-[#58595b]'>-</td>
                </tr>
                <tr className='border-b bg-gray-50'>
                  <td className='p-3 text-[#58595b]'>Modarsumba kampa school</td>
                  <td className='p-3 text-[#58595b]'>GUVNL, Gujarat</td>
                  <td className='p-3 text-center text-[#58595b]'>FY25</td>
                  <td className='p-3 text-center text-[#58595b]'>-</td>
                  <td className='p-3 text-center text-[#58595b]'>-</td>
                  <td className='p-3 text-center text-[#58595b]'>-</td>
                  <td className='p-3 text-center text-[#58595b]'>15</td>
                  <td className='p-3 text-center text-[#58595b]'>-</td>
                  <td className='p-3 text-center text-[#58595b]'>-</td>
                </tr>
                <tr className='border-b'>
                  <td className='p-3 text-[#58595b]'>Nadhari adivasi primary school</td>
                  <td className='p-3 text-[#58595b]'>GUVNL, Gujarat</td>
                  <td className='p-3 text-center text-[#58595b]'>FY25</td>
                  <td className='p-3 text-center text-[#58595b]'>-</td>
                  <td className='p-3 text-center text-[#58595b]'>-</td>
                  <td className='p-3 text-center text-[#58595b]'>-</td>
                  <td className='p-3 text-center text-[#58595b]'>96</td>
                  <td className='p-3 text-center text-[#58595b]'>-</td>
                  <td className='p-3 text-center text-[#58595b]'>-</td>
                </tr>
                <tr className='border-b bg-gray-50'>
                  <td className='p-3 text-[#58595b]'>Vaniyawada camp primary school</td>
                  <td className='p-3 text-[#58595b]'>GUVNL, Gujarat</td>
                  <td className='p-3 text-center text-[#58595b]'>FY25</td>
                  <td className='p-3 text-center text-[#58595b]'>-</td>
                  <td className='p-3 text-center text-[#58595b]'>-</td>
                  <td className='p-3 text-center text-[#58595b]'>-</td>
                  <td className='p-3 text-center text-[#58595b]'>98</td>
                  <td className='p-3 text-center text-[#58595b]'>-</td>
                  <td className='p-3 text-center text-[#58595b]'>-</td>
                </tr>
              </tbody>
            </table>
            <img src="/Education/image2.png" alt="" />
          </div>
        </div>
        {/* Empowering Young Minds Case Study */}
        <div className='relative p-[2px] rounded-2xl bg-[#40ad48] mb-8'>
          <div className='bg-white rounded-2xl p-8'>
            {/* Leaf icon */}
            <img
              src="/LeadershipMessage/leaf.png"
              alt="leaf"
              className='absolute -top-8 right-8 w-16 h-16'
            />

            <h3 className='text-2xl text-[#005c33] font-bold mb-6'>
              Empowering Young Minds— Mahindra Susten's Gyandeep Program Lights Up
            </h3>

            {/* Single Column Text Layout */}
            <div className='mb-6'>
              <p className='text-[#58595b] mb-4'>
                Several government primary schools supported by Gujarat Urja Vikas Nigam Limited (GUVNL) in Modasa, Gujarat, faced deep-rooted challenges in foundational learning. Students struggled with basic literacy and numeracy skills while the absence of essential infrastructure, age-appropriate teaching aids, and adequate sanitation facilities significantly hindered the learning experience— particularly for girls and marginalized communities.
              </p>
              <p className='text-[#58595b]'>
                Under the Mahindra Group's flagship Gyandeep education initiative, Mahindra Susten undertook the transformation of three government schools near its 280 MWp solar power project in Modasa.
              </p>
            </div>

            {/* Ribbon Cutting Photo */}
            <div className='mb-8'>
              <img
                src="/Education/image6.png"
                alt="School inauguration ceremony"
                className='w-full'
              />
            </div>

            {/* Intervention Details Section - Single Column */}
            <div className='mb-8'>
              <h4 className='text-xl text-[#6cb42c] font-bold mb-4'>
                The intervention included
              </h4>

              <div className='space-y-3 mb-6'>
                <div className='flex items-start gap-2'>
                  <div className='w-2 h-2 rounded-full bg-[#005c33] mt-2 flex-shrink-0'></div>
                  <p className='text-[#58595b]'>
                    Implementing <strong>activity-based learning modules</strong> and distributing tailored workbooks
                  </p>
                </div>
                <div className='flex items-start gap-2'>
                  <div className='w-2 h-2 rounded-full bg-[#005c33] mt-2 flex-shrink-0'></div>
                  <p className='text-[#58595b]'>
                    <strong>Training teachers</strong> in interactive, inclusive teaching techniques
                  </p>
                </div>
                <div className='flex items-start gap-2'>
                  <div className='w-2 h-2 rounded-full bg-[#005c33] mt-2 flex-shrink-0'></div>
                  <p className='text-[#58595b]'>
                    Conducting <strong>regular student assessments</strong> to track progress
                  </p>
                </div>
                <div className='flex items-start gap-2'>
                  <div className='w-2 h-2 rounded-full bg-[#005c33] mt-2 flex-shrink-0'></div>
                  <p className='text-[#58595b]'>
                    Upgrading <strong>WASH infrastructure</strong>—including modern toilets, clean drinking water systems and hygiene awareness
                  </p>
                </div>
                <div className='flex items-start gap-2'>
                  <div className='w-2 h-2 rounded-full bg-[#005c33] mt-2 flex-shrink-0'></div>
                  <p className='text-[#58595b]'>
                    Carrying out <strong>school repairs</strong>— such as roof waterproofing, cracked wall restoration and classroom enhancements
                  </p>
                </div>
              </div>

              {/* Three Schools List */}
              <div className='space-y-3 mb-6'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-full bg-[#65acac] flex items-center justify-center text-white font-bold flex-shrink-0'>
                    1
                  </div>
                  <div>
                    <p className='text-[#58595b] font-bold'>Nadhari Adivasi Primary School</p>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-full bg-[#65acac] flex items-center justify-center text-white font-bold flex-shrink-0'>
                    2
                  </div>
                  <div>
                    <p className='text-[#58595b] font-bold'>Vaniyawada Primary School No. 1</p>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-full bg-[#65acac] flex items-center justify-center text-white font-bold flex-shrink-0'>
                    3
                  </div>
                  <div>
                    <p className='text-[#58595b] font-bold'>Modarsumba Kampa School</p>
                  </div>
                </div>
              </div>

              {/* Impact Text */}
              <p className='text-[#58595b] mb-4'>
                The Gyandeep initiative has directly impacted over <strong>220 students</strong> from classes 1 to 8, of which, <strong>46%</strong> are girls. By creating a safer, engaging and inclusive learning space, teachers have reported improved classroom participation, greater conceptual clarity among students and a more vibrant learning environment.
              </p>

              <p className='text-[#58595b] mb-6'>
                Till date, the Gyandeep program has reached over <strong>25,000 children</strong> across India and upgraded <strong>12 schools</strong> in Rajasthan, Madhya Pradesh and Gujarat—helping shape a future powered not just by renewable energy, but also by the transformative power of <strong>education and opportunity.</strong>
              </p>

              {/* 2,248 Beneficiaries Stat */}
              <div>
                <h2 className='text-4xl font-bold mb-2 w-fit bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>
                  2,248
                </h2>
                <p className='text-[#58595b] border-t-2 border-[#f6a537] w-fit pt-2'>
                  Gyandeep beneficiaries (FY25)
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* STEAM Labs Section */}
        <div className='relative p-[2px] rounded-2xl bg-[#40ad48] mb-8'>
          <div className='bg-white rounded-2xl p-8'>
            {/* Leaf icon */}
            <img
              src="/LeadershipMessage/leaf.png"
              alt="leaf"
              className='absolute -top-8 right-8 w-16 h-16'
            />

            <h3 className='text-2xl text-[#005c33] font-bold mb-6'>
              Igniting Curiosity—Transforming Rural Education Through STEAM Labs
            </h3>

            {/* Intro paragraphs */}
            <p className='text-[#58595b] mb-4'>
              In rural India, lack of access to hands-on science and technology education continues to limit opportunities for girls to pursue a career in STEM (Science, Technology, Engineering and Mathematics). Many schools lack the infrastructure and the pedagogical tools needed to make these subjects engaging, relevant and future-ready. For students at government schools in Rajasthan and Gujarat, STEM-focused learning had long remained theoretical, confined to blackboards and textbooks.
            </p>

            <p className='text-[#58595b] mb-6'>
              In 2022, Mahindra Susten, expanded its commitment to education-led development by establishing two state-of-the-art STEAM (Science, Technology, Engineering, Arts and Mathematics) laboratories one each in Rajasthan and Gujarat.
            </p>

            <p className='text-[#58595b] mb-6'>
              At the heart of this initiative was the transformation of the Khari Charanan Girls School in Rajasthan. The goal extended beyond infrastructure; it was to ignite a lifelong curiosity for learning and experimentation among students. The intervention included:
            </p>

            {/* Letter Image */}
            <div className='mb-6'>
              <img
                src="/Education/image7.png"
                alt="Government appreciation letter"
                className='w-full max-w-md mx-auto'
              />
              <p className='text-center text-sm text-[#58595b] mt-2'>
                Mahindra Susten received an appreciation letter from Government Secondary School, Dhokavada
              </p>
            </div>

            {/* Installation bullet points */}
            <div className='mb-6'>
              <div className='flex items-start gap-2 mb-3'>
                <div className='w-2 h-2 rounded-full bg-[#005c33] mt-2 flex-shrink-0'></div>
                <p className='text-[#58595b]'>
                  <strong className='text-[#005c33]'>Installation of cutting-edge equipment</strong> such as AI, Maths, 3D printers, telescopes and soldering stations.
                </p>
              </div>

              <div className='flex items-start gap-2 mb-3'>
                <div className='w-2 h-2 rounded-full bg-[#005c33] mt-2 flex-shrink-0'></div>
                <p className='text-[#58595b]'>
                  Delivery of <strong className='text-[#005c33]'>comprehensive curriculum</strong> covering various learning activities across subjects like Physics, Chemistry, AI, Basic Electronics, Digital Literacy, Communication, Mathematics and Career Guidance.
                </p>
              </div>

              <div className='flex items-start gap-2 mb-3'>
                <div className='w-2 h-2 rounded-full bg-[#005c33] mt-2 flex-shrink-0'></div>
                <p className='text-[#58595b]'>
                  Deployment of <strong className='text-[#005c33]'>stationed trainers,</strong> who conducted more than <strong className='text-[#005c33]'>1,700 hours of practical sessions</strong> across both locations
                </p>
              </div>

              <div className='flex items-start gap-2 mb-3'>
                <div className='w-2 h-2 rounded-full bg-[#005c33] mt-2 flex-shrink-0'></div>
                <p className='text-[#58595b]'>
                  Direct engagement with over <strong className='text-[#005c33]'>1,050 students,</strong> fostering an environment where failure was no longer feared but embraced as part of the learning process.
                </p>
              </div>
            </div>

            {/* Activities conducted */}
            <div className='mb-6'>
              <div className='flex items-start gap-2 mb-3'>
                <div className='w-2 h-2 rounded-full bg-[#005c33] mt-2 flex-shrink-0'></div>
                <p className='text-[#58595b]'>
                  Five key student activities were conducted. These included sessions on career choices, celebrations of festivals such as Raksha Bandhan, Savitribai Phule Jayanti, Dr. Har Govind Jayant, Mathematics Day, World Computer Day and National Girl Child Day. Students also participated in self-awareness sessions covering topics such as self-identity, communication skills, interests and abilities, goal-setting and child safety (including good touch-bad touch and helpline awareness). To enhance creative abilities, trending topics such as Artificial Intelligence, basic computer skills, user-friendly digital tools, poster creation and presentation skills were introduced to strengthen communication and research capabilities. Additionally, Scratch programming was used to promote digital literacy and introduce coding in an engaging way.
                </p>
              </div>

              <div className='flex items-start gap-2 mb-3'>
                <div className='w-2 h-2 rounded-full bg-[#005c33] mt-2 flex-shrink-0'></div>
                <p className='text-[#58595b]'>
                  Three teachers were trained in topics such as magnetism, artificial intelligence, basic electronics, soldering, ratio and number systems, supporting their ability to impart future-ready education.
                </p>
              </div>

              <div className='flex items-start gap-2 mb-3'>
                <div className='w-2 h-2 rounded-full bg-[#005c33] mt-2 flex-shrink-0'></div>
                <p className='text-[#58595b]'>
                  28 STEM related sessions were conducted, covering diverse topics such as measurement, motion, acid-base reactions, magnetism, drilling, soldering, Newton's laws, grafting, number systems, minerals and 3D prototyping, with 3-4 sessions dedicated to each topic.
                </p>
              </div>

              <div className='flex items-start gap-2 mb-6'>
                <div className='w-2 h-2 rounded-full bg-[#005c33] mt-2 flex-shrink-0'></div>
                <p className='text-[#58595b]'>
                  To encourage academic engagement, support was extended to students for four major competitions. This included Parigaze events held at Charanka, Dhokavada, Primary, and Secondary Schools, as well as dedicated guidance for the NMMS (National Means Cum Merit Scholarship) and CET (Common Entrance Test) examinations, delivered through focused science and mathematics problem-solving sessions and pre-test assessments. Students also submitted entries for the Manak Inspire Award at the secondary school level.
                </p>
              </div>
            </div>

            {/* Recognition section with photo */}
            <div className='mb-6'>
              <div className='flex items-start gap-2 mb-4'>
                <div className='w-2 h-2 rounded-full bg-[#005c33] mt-2 flex-shrink-0'></div>
                <p className='text-[#58595b]'>
                  The school received notable recognition and several prestigious awards across academic, sports and innovation domains. It was honored by the State Innovation Board of Rajasthan for its rank at the district level in key competitions such as Gyan Setu, CET and NMMS. The school was awarded the Pratibha with 82.8% in the Gunotsav quality evaluation conducted by the Gujarat School Quality Accreditation Council (GSQAC). In addition, a student from Class 9 was selected for the Manak 2024-25 Award for developing a modified, cost-effective sanitary waste incinerator, reflecting the school's growing focus on innovation and problem-solving.
                </p>
              </div>

              <div className='flex items-start gap-2 mb-6'>
                <div className='w-2 h-2 rounded-full bg-[#005c33] mt-2 flex-shrink-0'></div>
                <p className='text-[#58595b]'>
                  The labs have become hubs of innovation, where the spirit of inquiry such as AI integration, and scientific curiosity is nurtured through experience.
                </p>
              </div>

              <img
                src="/Education/image8.png"
                alt="STEAM lab at Government Secondary School, Dhokavada"
                className='w-full rounded-lg mb-4'
              />

              <div className='bg-[#f0f8ff] p-6 rounded-lg mb-6'>
                <h4 className='text-xl font-bold text-[#005c33] mb-3'>
                  Prem Ahir, Grade 9 Student at Govt. Secondary School, Dhokavada
                </h4>
                <p className='text-[#58595b] mb-3'>
                  Prem's love for science goes beyond textbooks; he thrives on innovation and hands-on creation. When he first heard about the MANAK Inspire Awards through a school announcement by his STEM trainer from Ennoble, he saw an opportunity to bring his ideas to life. Without hesitation, he submitted his idea of a modified cost-effective sanitary waste incinerator for the competition.
                </p>
                <p className='text-[#58595b]'>
                  On March 6, 2025, his hard work paid off. Prem's idea was selected for the MANAK Inspire Awards, making him the only student at the block level to achieve this honor, putting his name on the map. Further, he actively participates in events such as Science Day, Computer Day, AI poster presentations and many more.
                </p>
              </div>

              {/* Statistics */}
              <div className='grid grid-cols-2 gap-6'>
                <div>
                  <h2 className='text-4xl font-bold mb-2 w-fit bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>
                    2
                  </h2>
                  <p className='text-[#58595b] border-t-2 border-[#f6a537] w-fit pt-2'>
                    STEM labs benefitting more than 1,050 students
                  </p>
                </div>
                <div>
                  <h2 className='text-4xl font-bold mb-2 w-fit bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>
                    1,700+
                  </h2>
                  <p className='text-[#58595b] border-t-2 border-[#f6a537] w-fit pt-2'>
                    Hours of STEAM training
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nanhi Kali Section */}
        <div className='relative p-[2px] rounded-2xl bg-[#40ad48] mb-8'>
          <div className='bg-white rounded-2xl p-8'>
            {/* Leaf icon */}
            <img
              src="/LeadershipMessage/leaf.png"
              alt="leaf"
              className='absolute -top-8 right-8 w-16 h-16'
            />

            <h3 className='text-2xl text-[#005c33] font-bold mb-6'>
              Nanhi Kali
            </h3>

            <p className='text-[#58595b] mb-6'>
              Project Nanhi Kali, a Group-level initiative, has been championing girls' education for over 27 years, providing underprivileged girls with access to ten years of uninterrupted formal schooling. The program is designed to bridge educational and social divides by providing young minds access to learning resources, proper academic guidance and a safe, nurturing environment.
            </p>

            <p className='text-[#58595b] mb-6'>
              Beyond education, the initiative contributes towards raising awareness and shaping the attitudes of people around the importance of educating the girl child. This aids in embedding long-term change within communities.
            </p>

            {/* Statistics and Photo */}
            <div className='mb-6'>
              <div>
                <h2 className='text-4xl font-bold mb-2 w-fit bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>
                  646
                </h2>
                <p className='text-[#58595b] border-t-2 border-[#f6a537] w-fit pt-2 mb-6'>
                  Girls are supported with after-school education in FY25
                </p>
              </div>

              <img
                src="/Education/image9.png"
                alt="Nanhi Kali beneficiaries"
                className='w-full rounded-lg'
              />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Education
