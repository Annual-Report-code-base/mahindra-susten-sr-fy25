import React from 'react'

const Abbreviations = () => {
  const abbreviations = {
    column1: [
      { abbr: 'ABAC', full: 'Anti-Bribery and Anti-Corruption' },
      { abbr: 'AGM', full: 'Annual General Meeting' },
      { abbr: 'ARC', full: 'Annual Rate Contracts' },
      { abbr: 'AZWL', full: 'Advance Zero Waste to Landfill' },
      { abbr: 'BESS', full: 'Battery Energy Storage System' },
      { abbr: 'BOCW', full: 'Building and Other Construction Workers' },
      { abbr: 'BSC', full: 'Balance Score Card' },
      { abbr: 'CCRA', full: 'Climate Change Risk Assessment' },
      { abbr: 'CCRVA', full: 'Climate Change Risk and Vulnerability Assessment' },
      { abbr: 'CDP', full: 'Carbon Disclosure Project' },
      { abbr: 'CEO', full: 'Chief Executive Officer' },
      { abbr: 'CFO', full: 'Chief Financial Officer' },
      { abbr: 'CHRO', full: 'Chief Human Resource Officer' },
      { abbr: 'CMIP6', full: 'Coupled Model Intercomparison Project Phase 6' },
      { abbr: 'COC', full: 'Code of Conduct' },
      { abbr: 'CSR', full: 'Corporate Social Responsibility' },
      { abbr: 'CTO', full: 'Chief Technology Officer' },
      { abbr: 'DQR', full: 'Daily Quality Registers' },
      { abbr: 'DC', full: 'Direct Current' },
      { abbr: 'DJSI', full: 'Dow Jones Sustainability Index' },
      { abbr: 'DMAIC', full: 'Define, Measure, Analyze, Improve and Control' },
      { abbr: 'EHS', full: 'Environment, Health and Safety' },
      { abbr: 'EHS&S', full: 'Environment, Health, Safety and Social' },
      { abbr: 'EPC', full: 'Engineering, Procurement and Construction' },
      { abbr: 'EPP', full: 'Emergency Preparedness Plan' },
      { abbr: 'ERG', full: 'Employee Resource Group' },
      { abbr: 'ESAP', full: 'Environmental and Social Action Plans' },
      { abbr: 'ESG', full: 'Environmental, Social and Governance' },
      { abbr: 'ESIA', full: 'Environmental and Social Impact Assessment' },
      { abbr: 'ESMS', full: 'Environmental and Social Management System' },
      { abbr: 'ESOP', full: 'Employee Stock Ownership Plan' },
      { abbr: 'ESPS', full: 'Employee Safety Performance Scorecard' },
    ],
    column2: [
      { abbr: 'EU', full: 'European Union' },
      { abbr: 'FY', full: 'Financial Year' },
      { abbr: 'GBCI', full: 'Green Business Certification Inc' },
      { abbr: 'GHG', full: 'Greenhouse Gas' },
      { abbr: 'GRI', full: 'Global Reporting Initiative' },
      { abbr: 'GUVNL', full: 'Gujarat Urja Vikas Nigam Limited' },
      { abbr: 'GW', full: 'Gigawatt' },
      { abbr: 'GWp', full: 'Gigawatt Peak' },
      { abbr: 'HIRA', full: 'Hazard Identification and Risk Assessment' },
      { abbr: 'HOD', full: 'Head Of Department' },
      { abbr: 'HSE', full: 'Health, Safety and Environment' },
      { abbr: 'ICC', full: 'Internal Complaints Committee' },
      { abbr: 'IFC', full: 'International Finance Corporation' },
      { abbr: 'IMS', full: 'Integrated Management System' },
      { abbr: 'InvIT', full: 'Infrastructure Investment Trust' },
      { abbr: 'IPCC', full: 'Intergovernmental Panel on Climate Change' },
      { abbr: 'IPP', full: 'Independent Power Producer' },
      { abbr: 'IS', full: 'Indian Standard' },
      { abbr: 'ISO', full: 'International Organization for Standardization' },
      { abbr: 'KBU', full: 'Key Business Unit' },
      { abbr: 'KPI', full: 'Key Performance Indicator' },
      { abbr: 'LCOE', full: 'Levelized Cost of Energy' },
      { abbr: 'LTI', full: 'Lost Time Injury' },
      { abbr: 'M&R', full: 'Monitoring and Reporting' },
      { abbr: 'MBR', full: 'Membrane Bio-Reactor' },
      { abbr: 'ML', full: 'Million Litres' },
      { abbr: 'MNRE', full: 'Ministry of New and Renewable Energy (India)' },
      { abbr: 'MSCI', full: 'Morgan Stanley Capital International' },
      { abbr: 'MSCOE', full: 'Mahindra Susten Centre of Excellence' },
      { abbr: 'MSDS', full: 'Material Safety Data Sheets' },
      { abbr: 'MU', full: 'Million Units (Electricity)' },
      { abbr: 'MW', full: 'Megawatt' },
    ],
    column3: [
      { abbr: 'MWp', full: 'Megawatt peak' },
      { abbr: 'MWh', full: 'Megawatt hour' },
      { abbr: 'NAPCC', full: 'National Action Plan on Climate Change (India)' },
      { abbr: 'NDC', full: 'Nationally Determined Contributions' },
      { abbr: 'NGO', full: 'Non-Governmental Organization' },
      { abbr: 'NHPC', full: 'National Hydroelectric Power Corporation' },
      { abbr: 'NRC', full: 'Nomination and Remuneration Committee' },
      { abbr: 'NTPC', full: 'National Thermal Power Corporation' },
      { abbr: 'NTP', full: 'National Thermal Power' },
      { abbr: 'O&M', full: 'Operations and Maintenance' },
      { abbr: 'OH&S', full: 'Occupational Health & Safety' },
      { abbr: 'QRMs', full: 'Quality Review Meetings' },
      { abbr: 'OSHA', full: 'Occupational Safety and Health Administration' },
      { abbr: 'PDCA', full: 'Plan-Do-Check-Act' },
      { abbr: 'PPA', full: 'Power Purchase Agreement' },
      { abbr: 'PPE', full: 'Personal protective equipment' },
      { abbr: 'POSH', full: 'Prevention of Sexual Harassment' },
      { abbr: 'PMT', full: 'Property Management Team' },
      { abbr: 'PQSDME', full: 'Productivity, Quality, Skill, Delivery, Safety, Morale and Environment' },
      { abbr: 'PSMI', full: 'Project Safety Maturity Index' },
      { abbr: 'PTW', full: 'Permit to Work' },
      { abbr: 'PV', full: 'Photovoltaic' },
      { abbr: 'R&D', full: 'Research and Development' },
      { abbr: 'RE', full: 'Renewable Energy' },
      { abbr: 'RMC', full: 'Risk Management Committee' },
    ],
    column4: [
      { abbr: 'RTC', full: 'Round-The-Clock (Energy Supply)' },
      { abbr: 'RUVNL', full: 'Rajasthan Urja Vikas Nigam Limited' },
      { abbr: 'SASB', full: 'Sustainability Accounting Standards Board' },
      { abbr: 'SBTI', full: 'Science-Based Targets Initiative' },
      { abbr: 'SCADA', full: 'Supervisory Control And Data Acquisition' },
      { abbr: 'SCAR', full: 'Subcontractor Assessment Report' },
      { abbr: 'SDG', full: 'Sustainable Development Goals' },
      { abbr: 'SEIT', full: 'Sustainable Energy Infrastructure Trust' },
      { abbr: 'SIEM', full: 'Security Information and Event Management' },
      { abbr: 'SJVN', full: 'Satluj Jal Vidyut Nigam' },
      { abbr: 'SKU', full: 'Stock Keeping Unit' },
      { abbr: 'SOP', full: 'Standard Operating Procedure' },
      { abbr: 'SPCB', full: 'State Pollution Control Board' },
      { abbr: 'SPV', full: 'Special Purpose Vehicle' },
      { abbr: 'SSP', full: 'Shared Socioeconomic Pathways' },
      { abbr: 'STEAM', full: 'Science, Technology, Engineering, Arts and Mathematics' },
      { abbr: 'STP', full: 'Sewage Treatment Plant' },
      { abbr: 'TCFD', full: 'Task Force on Climate-related Financial Disclosures' },
      { abbr: 'tCO₂e', full: 'Tons of Carbon Dioxide Equivalent' },
      { abbr: 'TNFD', full: 'Taskforce on Nature-related Financial Disclosures' },
      { abbr: 'UNSDGs', full: 'United Nations Sustainable Development Goals' },
      { abbr: 'UNGC', full: 'United Nations Global Compact' },
      { abbr: 'UOM', full: 'Unit of Measurement' },
      { abbr: 'WLP', full: 'Women Leadership Program' },
      { abbr: 'ZWL', full: 'Zero Waste to Landfill' },
    ]
  }

  return (
    <div>
      <div className='marginal text-[#58595b] text-md'>
        <h1 className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold pb-3'>
          Abbreviations
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Column 1 */}
          <div className='space-y-3'>
            {abbreviations.column1.map((item, index) => (
              <div key={index} className='text-sm'>
                <span className='font-bold text-[#58595b]'>{item.abbr}</span>
                <span className='text-[#58595b]'> - {item.full}</span>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className='space-y-3'>
            {abbreviations.column2.map((item, index) => (
              <div key={index} className='text-sm'>
                <span className='font-bold text-[#58595b]'>{item.abbr}</span>
                <span className='text-[#58595b]'> - {item.full}</span>
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div className='space-y-3'>
            {abbreviations.column3.map((item, index) => (
              <div key={index} className='text-sm'>
                <span className='font-bold text-[#58595b]'>{item.abbr}</span>
                <span className='text-[#58595b]'> - {item.full}</span>
              </div>
            ))}
          </div>

          {/* Column 4 */}
          <div className='space-y-3'>
            {abbreviations.column4.map((item, index) => (
              <div key={index} className='text-sm'>
                <span className='font-bold text-[#58595b]'>{item.abbr}</span>
                <span className='text-[#58595b]'> - {item.full}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Abbreviations
