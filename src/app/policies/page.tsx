import React from 'react'

const Policies = () => {
  const policies = [
    {
      title: "Code of\nConduct",
      whyItMatters: "A culture of ethics and integrity is non-negotiable for long-term business success.",
      approach: "Our Code of Conduct sets clear expectations for employee behavior, encompassing respect, transparency, anti-discrimination, compliance and customer-first thinking. It applies to all of us at Susten and supports fair and principled decision-making."
    },
    {
      title: "Whistle-\nBlower Policy",
      whyItMatters: "A secure and transparent channel for reporting wrongdoing is essential to building trust and accountability.",
      approach: "Through this policy, we encourage employees and stakeholders to raise concerns about unethical practices without fear. We provide confidential reporting avenues and ensure protection from retaliation."
    },
    {
      title: "POSH\n(Prevention\nof Sexual\nHarassment)\nPolicy",
      whyItMatters: "A safe, respectful workplace is fundamental.",
      approach: "We enforce a zero-tolerance stance on harassment, supported by an Internal Complaints Committee (ICC), strict confidentiality and regular awareness sessions."
    },
    {
      title: "Anti-Bribery\nand Anti-\nCorruption\n(ABAC) Policy",
      whyItMatters: "Corruption erodes values and credibility—both internally and externally.",
      approach: "We follow a zero-tolerance stance on bribery and corruption. Our ABAC Policy covers due diligence on third parties, conflict of interest declarations and restrictions on gifts and contributions, aligning us with global ethical standards."
    },
    // Content added from the new image: image_166625.jpg
    {
      title: "Nomination and\nRemuneration\nPolicy",
      whyItMatters: "Fair and transparent compensation drives performance and leadership accountability.",
      approach: "Our Nomination and Remuneration Policy provides a comprehensive framework for appointing Directors and senior leadership and links compensation to performance, company values and market benchmarks."
    },
    {
      title: "HSSE (Health,\nSafety,\nSecurity &\nEnvironment)\nPolicy",
      whyItMatters: "We are committed to ensuring safe operations while complying with the highest safety standards.",
      approach: "We integrate HSSE norms into every phase of our projects from design to commissioning, to prevent incidents and minimize environmental impact. Regular training and audits help ensure accountability and continuous improvement."
    },
    {
      title: "CSR (Corporate\nSocial\nResponsibility)\nPolicy",
      whyItMatters: "We believe in giving back to the communities where we operate.",
      approach: "Aligned with India’s Companies Act, our CSR Policy steers our investments in areas such as education, livelihood, community health and environmental sustainability. Through our efforts, we strive to create a lasting impact on the society around us."
    },
    {
      title: "Supplier\nESG Code of\nConduct",
      whyItMatters: "Our supply chain represents an extension of our values.",
      approach: "We expect our suppliers to follow responsible business practices. This encompasses compliance with environmental laws, ethical labor practices, fair wages and proper waste management. The Supplier ESG Code sets clear standards and encourages collaboration for mutual growth."
    },
    {
      title: "EHS&S Policy\n(Environment,\nHealth, Safety\nand Social)",
      whyItMatters: "The well-being of our people, communities and the environment is central to our success.",
      approach: "This policy ensures that we uphold high standards in workplace safety, environmental compliance and community welfare. Guided by an Integrated Management System (IMS), we systematically address EHS risks and encourage continuous improvement."
    },
    {
      title: "Sustainability\nPolicy",
      whyItMatters: "Sustainability is at the core of everything we do – from how we design projects to how we manage operations.",
      approach: "We are committed to integrating sustainability across our business strategy and daily decisions. Our Sustainability Policy outlines our focus on reducing carbon emissions, conserving natural resources and driving circularity. This aids us to contribute meaningfully to climate action and resource efficiency."
    },
    {
      title: "Integrated\nManagement\nSystem (IMS) Policy",
      whyItMatters: "Coherent management across systems augments efficiency and ensures compliance.",
      approach: "The IMS Policy integrates quality, safety, health and environmental standards, enabling a unified, high-performing system that supports our strategic and operational goals."
    },
    {
      title: "ZWL (Zero\nWaste to\nLandfill) Policy",
      whyItMatters: "Responsible waste management is key to reducing our environmental footprint.",
      approach: "We follow the 5Rs (Refuse, Reduce, Reuse, Recover, Recycle) and abide by strict waste segregation and monitoring. Our ZWL Policy enables us to ensure minimal landfill disposal by maximizing resource circularity"
    }
  ]

  return (
    <div>
      <div className='marginal text-[#58595b] text-md'>
        <h1 className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold mb-2 pb-3'>
          Our Policies
        </h1>
        <h2 className='text-xl font-bold mb-5'>
          At Mahindra Susten, governance extends beyond compliance obligations.
          It is the foundational pillar upon which our operations stand. As a part of
          the Mahindra Group, we draw strength from our deep-rooted legacy of
          ethical leadership and responsible business practices. Our governance
          approach ensures that integrity, accountability and transparency are
          embedded across our systems. The approach affords us the ability to
          garner the trust of our stakeholders and create long-term value for them.
        </h2>
        <p className='mb-5 text-center'>
          Our governance framework is anchored in robust policies, articulated responsibilities and rigorous
          oversight. To uphold our standards, we have established structured practices that guide ethical
          decisions and responsible conduct throughout the organization.
        </p>
        {/* Policies Section */}
        <div className='mt-5 '>
          <div className='flex items-center justify-between gap-4 mb-8 border-b-2 border-teal-500 pb-4'>
            {/* Header: Why it matters (Green box) */}
            <div className='bg-[#40ad48] text-white px-6 py-3 font-bold text-xl'>
              Why it matters
            </div>
            {/* Header: Our approach (Green Text) */}
            <div className='text-[#4bbb81] font-bold text-3xl'>
              Our approach
            </div>
          </div>

          {/* Policies List */}
          <div className='space-y-0'>
            {policies.map((policy, index) => (
              <div key={index}>
                <div className='grid grid-cols-12 gap-4 py-'>
                  {/* Policy Title */}
                  <div className='col-span-2 font-bold text-lg whitespace-pre-line'>
                    {policy.title}
                  </div>

                  {/* Icon */}
                  <div className='col-span-1 flex justify-center items-start pt-2'>
                    <svg width="60" height="60" viewBox="0 0 60 60">
                      <circle cx="30" cy="30" r="25" fill="none" stroke="#4bbb81" strokeWidth="2" opacity="0.3"/>
                      <circle cx="30" cy="30" r="20" fill="none" stroke="#4bbb81" strokeWidth="2" opacity="0.5"/>
                      <circle cx="30" cy="30" r="15" fill="none" stroke="#4bbb81" strokeWidth="2" opacity="0.7"/>
                      <circle cx="30" cy="30" r="10" fill="none" stroke="#4bbb81" strokeWidth="2"/>
                    </svg>
                  </div>

                  {/* Why it Matters */}
                  <div className='col-span-4 font-bold text-[#006747]'>
                    {policy.whyItMatters}
                  </div>

                  {/* Divider */}
                  <div className='col-span-1 flex justify-center'>
                    <div className='w-px h-full bg-gray-300'></div>
                  </div>

                  {/* Our Approach */}
                  <div className='col-span-4 text-[#58595b]'>
                    {policy.approach}
                  </div>
                </div>
                {index < policies.length - 1 && (
                  <div className='border-b border-gray-300'></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Policies