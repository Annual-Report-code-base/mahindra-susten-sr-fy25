import React from 'react'

const Cybersecurity = () => {
  return (
    <div>
      <div className='marginal text-[#58595b] text-md'>
        <h1 className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold mb-2 pb-3'>
          Cybersecurity Management
        </h1>
        <h2 className='text-xl font-bold mb-5'>
          As we continue our digital transformation to support India’s renewable
          energy ambitions, cybersecurity has become a key pillar of our
          sustainability and operational strategy. With increased reliance on digital
          platforms across the entire project lifecycle from design and engineering
          to commissioning, we recognize the need to proactively manage cyber
          risks that could affect system performance, data integrity or business
          continuity.
        </h2>
        <h3 className='text-[#005c33] font-extrabold text-xl mb-3'>
          Governance and policy
          baseline
        </h3>
        <p className='mb-5'>
          Our Information Security Policy
          establishes objectives for
          confidentiality, integrity, and availability
          across systems, processes, and
          people. Information and critical
          services must remain accessible to
          authorized users while accuracy is
          ensured and unauthorized disclosure
          is avoided. The policy requires unique
          user credentials for authentication
          and prohibits shared accounts. The
          policy is reviewed annually and upon
          significant changes in the information
          technology environment to ensure its
          continued effectiveness.
        </p>
        <h3 className='text-[#005c33] font-extrabold text-xl mb-3'>
          Server and system
          hardening
        </h3>
        <p className='mb-5'>
          All internal servers are owned by an
          operational group, with configuration
          guides approved by InfoSec and
          governed by change management.
          Servers must be registered with
          contact, OS/hardware and function
          details kept up to date. Systems follow
          least-privilege principles, disable
          unused services, apply patches
          promptly, and require secure channels
          for privileged access. Physical
          placement is in access-controlled
          environments; servers must not
          operate from uncontrolled areas.
        </p>
        <h3 className='text-[#005c33] font-extrabold text-xl mb-3'>
          Password and
          authentication controls
        </h3>
        <p className='mb-5'>
          We apply a unified password and
          authentication standard across all
          systems. Controls enforce strong
          password hygiene and periodic
          renewal, with stricter measures for
          privileged and service accounts.
          Authentication is integrated with our
          joiner–mover–leaver process and rolebased approvals. Reset and recovery
          follow verified identity procedures, and
          centralized logging and alerts provide
          oversight for review and investigation.
        </p>
        <img src="/Cybersecurity/image.png" alt="" />

        <h3 className='text-[#005c33] font-extrabold text-xl mb-3 mt-3'>
          Identity and access
          management
        </h3>
        <p className='mb-5'>
          We manage identities through
          standardized joiner–mover–leaver
          workflows with defined business
          and IT approvals. HR events trigger
          automated provisioning in our identity
          platform; access is granted on a
          role-based, least-privilege basis
          within defined turnaround times. For
          contractors and other non-employees,
          we use time-bound, scope-restricted
          access. Generic and distribution
          accounts are issued only via formal
          requests with named owners and
          shared-mailbox controls. HR-initiated
          separation events automatically
          revoke access across systems.
          Periodic access reviews, segregationof-duties checks, and audit trails
          provide oversight and evidence for
          compliance.
        </p>
        <h3 className='text-[#005c33] font-extrabold text-xl mb-3'>
          Monitoring and
          logging
        </h3>
        <p className='mb-5'>
          We operate centralized logging across
          critical systems and networks, with
          monitoring through a SIEM platform.
          Alerts are prioritized by risk and routed
          through defined triage and escalation
          procedures to the Information Security
          team. Monitoring covers user activity,
          privileged access, configuration
          change, and indicators of compromise.
          Log retention and access are
          governed by policy and applicable
          regulation. Control effectiveness is
          reviewed periodically, with reporting
          to management and improvements
          informed by threat intelligence and
          incident learnings.
        </p>
        <h3 className='text-[#005c33] font-extrabold text-xl mb-3'>
          Data protection, backup
          and recovery
        </h3>
        <p className='mb-5'>
          We protect data through policy-driven
          backups for user endpoints and
          servers. User files are synchronized to
          manage cloud storage with retention
          set by policy while the server data
          is backed up to centralized storage
          on a scheduled cycle. Restoration is
          available for deleted or prior versions
          of files through standard requests.
          Backup status and retention are
          monitored, with exceptions addressed
          through defined procedures.
        </p>
        <img src="/Cybersecurity/image1.png" alt="" />
      </div>
    </div>
  )
}

export default Cybersecurity