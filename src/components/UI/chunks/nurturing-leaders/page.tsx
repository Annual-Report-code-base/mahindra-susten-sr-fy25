import React from 'react'

const NurturingTomorrowsLeaders = () => {
  return (
    <div>
      <div className='marginal text-[#58595b] text-md'>
        <h1 className='text-4xl font-bold mb-2 pb-3'>
          <span className='bg-gradient-to-r from-[#f6a537] to-[#65acac] bg-clip-text text-transparent'>Nurturing Tomorrow's Leaders</span>
          <br />
        </h1>

        <p className='text-xl font-bold mb-5'>
          We continue to invest in building future-ready talent through focused leadership and capability development programs.
        </p>

        {/* 2x2 Grid of Programs */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-5'>
          {/* Step Up */}
          <div className='border-b-4 border-[#f6a537] pb-6'>
            <img 
              src="/NurturingLeaders/logo1.png" 
              alt="Step Up" 
              className='h-16 mb-4'
            />
            <h3 className='text-2xl font-bold text-[#58595b] mb-3'>
              Step Up
            </h3>
            <p className='text-[#58595b]'>
              Step Up is our structured learning initiative designed to bridge competency gaps and prepare employees for expanded responsibilities. Through role-based training and skill-building aligned with evolving industry needs, we empower our people to grow professionally and take on greater responsibilities with confidence.
            </p>
          </div>

          {/* Udaan */}
          <div className='border-b-4 border-[#65acac] pb-6'>
            <img 
              src="/NurturingLeaders/logo2.png" 
              alt="Udaan" 
              className='h-16 mb-4'
            />
            <h3 className='text-2xl font-bold text-[#58595b] mb-3'>
              Udaan
            </h3>
            <p className='text-[#58595b]'>
              Udaan fosters a culture of collaboration, learning and growth. Through team-building activities, skill enhancement opportunities and career development initiatives, we create an engaging ecosystem that supports both individual progress and collective success.
            </p>
          </div>

          {/* Mpower */}
          <div className='border-b-4 border-[#f6a537] pb-6'>
            <img 
              src="/NurturingLeaders/logo3.png" 
              alt="Mpower" 
              className='h-16 mb-4'
            />
            <h3 className='text-2xl font-bold text-[#58595b] mb-3'>
              Mpower
            </h3>
            <p className='text-[#58595b]'>
              Mpower is our flagship initiative to identify high-potential talent and prepare them for leadership roles through targeted workshops, mentoring and exposure to strategic projects. The program equips participants with the skills and mindset required to lead innovation and contribute to the organization's continued growth.
            </p>
          </div>

          {/* MALT */}
          <div className='border-b-4 border-[#65acac] pb-6'>
            <h3 className='text-2xl font-bold text-[#58595b] mb-1'>
              MALT
            </h3>
            <p className='text-sm text-[#58595b] mb-3'>
              (Mahindra Accelerated Leadership Track)
            </p>
            <p className='text-[#58595b]'>
              MALT is a focused leadership development program aimed at grooming high-potential talent within Mahindra. It equips future leaders with strategic thinking, decisive problem-solving and transformational leadership capabilities. The program is designed to empower participants to lead with vision, drive innovation and contribute meaningfully to the organization's long-term growth.
            </p>
          </div>
        </div>

        {/* Mahindra Future Shapers - Two Column Layout */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-5'>
          {/* Left Column - Text */}
          <div>
            <h3 className='text-3xl font-bold text-[#58595b] mb-4'>
              Mahindra Future Shapers
            </h3>
            <p className='text-[#58595b]'>
              Future Shapers is a flagship initiative that identifies emerging leaders and prepares them for strategic leadership roles. With a strong emphasis on innovation, business acumen and future-ready skills, the program nurtures talent to lead transformative change and steer Mahindra towards sustainable, forward-looking growth.
            </p>
          </div>

          {/* Right Column - Photo */}
          <div>
            <img 
              src="/NurturingLeaders/image.png" 
              alt="Mahindra Future Shapers program participants" 
              className='w-full h-full object-cover rounded-lg '
            />
          </div>
        </div>

        {/* Women Leadership Program (WLP) */}
        <div className='mb-5'>
          <h3 className='text-3xl font-bold text-[#58595b] mb-4'>
            Women Leadership Program (WLP)
          </h3>
          <p className='text-[#58595b] mb-6'>
            WLP is a thoughtfully designed six-month journey aimed at empowering women employees at Managerial (M) and Operational (O) levels. The program equips them with tools, knowledge and confidence to realize their full personal and professional potential. WLP encourages participants to reflect on their personal contexts and overcome internalized limitations, helping them build self-assurance and clarity. From self-awareness and goal-setting to strengthening interpersonal skills, the program enables women to navigate workplace dynamics effectively and grow their influence within the organization.
          </p>

          {/* Two WLP Photos */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-5'>
            <img 
              src="/NurturingLeaders/image2.png" 
              alt="Women Leadership Program participants" 
              className='w-full h-80 object-cover rounded-4xl'
            />
            <img 
              src="/NurturingLeaders/image3.png" 
              alt="Women Leadership Program award ceremony" 
              className='w-full h-80 object-cover rounded-4xl'
            />
          </div>
        </div>

        {/* Annual Leadership Offsite */}
        <div className='relative p-[1px] rounded-3xl bg-gradient-to-r from-[#f6a537] to-[#65acac] mb-5'>
          <div className='bg-gradient-to-bl from-[#c8e6e3] to-[#ffffff] rounded-3xl p-8'>
            <h3 className='text-2xl text-[#6cb42c] font-bold mb-4'>
              Annual Leadership Offsite
            </h3>
            <p className='text-[#58595b] mb-4'>
              Leadership is about more than strategy and execution—it is about Purpose, People and Pride. Our Annual Leadership Offsite 2025 brought these elements together under the powerful theme 'Lead with Pride.' Over three days, leaders from across the business came together to reflect on our journey, reaffirm our long-term goals and engage in meaningful conversations about leadership, transformation and the road ahead.
            </p>
            <p className='text-[#58595b] mb-6'>
              More than a gathering it was a celebration of who we are and the impact we aspire to create. We revisited our core values, shared achievements and challenges, and above all, recognized the power of purpose-driven leadership. To <strong>Lead with Pride</strong> is to fully own our mission of reimagining clean energy, empowering lives — to lift others as we rise and to stay grounded in the positive impact we create.
            </p>

            {/* Leadership Offsite Photo */}
            <img 
              src="/NurturingLeaders/image4.png" 
              alt="Annual Leadership Offsite 2025 participants" 
              className='w-full rounded-4xl '
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default NurturingTomorrowsLeaders
