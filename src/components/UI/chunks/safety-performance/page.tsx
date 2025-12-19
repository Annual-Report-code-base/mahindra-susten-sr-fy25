import React from 'react'

const MonitoringSafetyPerformance = () => {
  return (
    <div>
      <div className='marginal text-[#58595b] text-md'>
        <h1 className='bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold mb-2 pb-3'>
          Monitoring Safety Performance
        </h1>
        <h2 className='text-xl font-bold mb-5'>
          To maintain a proactive safety culture, we employ a robust safety
          performance monitoring system that includes both lagging and leading
          indicators. Lagging indicators, such as Total Recordable Incident Rate
          (TRIR), Lost Time Injury Frequency Rate (LTIFR) and injury severity
          rates, help us assess actual outcomes. In parallel, leading indicators,
          including unsafe act observations, behavior-based reports, safety
          meeting participation and preventive maintenance frequency, help us
          address risks before they materialize.
        </h2>
        <img src="/SafetyPerformance/image.png" alt="" className='md:w-[80%] mx-auto mb-12' />

        {/* Three Statistics Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
          {/* Card 1 - Safe Manhours */}
          <div className='text-center'>
            <img 
              src="/SafetyPerformance/i1.png" 
              alt="Safety icon" 
              className='w-16 h-16 mx-auto mb-4'
            />
            <h2 className='text-4xl font-bold mb-2'>
              <span className='text-4xl font-bold mb-2 bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit bg-clip-text text-transparent mx-auto'>1.5 Mn</span>
            </h2>
            <p className='text-[#58595b] border-t-2 border-gray-300 pt-2 mb-4'>
              Safe manhours (FY25)
            </p>
            <p className='text-[#58595b] text-sm'>
              All incidents and near misses are thoroughly investigated within defined timeframes to identify root causes and prevent recurrence. Learnings from these investigations are widely disseminated across all sites through posters, briefing sessions and digital alerts. Corrective actions are implemented via a structured closure workflow tracked through our GIST reporting system.
            </p>
          </div>

          {/* Card 2 - Training Hours */}
          <div className='text-center'>
            <img 
              src="/SafetyPerformance/i2.png" 
              alt="Training icon" 
              className='w-16 h-16 mx-auto mb-4'
            />
            <h2 className='text-4xl font-bold mb-2 bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit bg-clip-text text-transparent mx-auto'>
              11,578
            </h2>
            <p className='text-[#58595b] border-t-2 border-gray-300 pt-2 mb-4'>
              Hours of HSE training(FY25)
            </p>
            <p className='text-[#58595b] text-sm'>
              To ensure consistent monitoring, we conduct periodic HSE audits and theme-based safety inspections, aligned with ISO and legal requirements. These include project-specific welfare audits and site-level safety assessments. Our audit outcomes feed into the Project Safety Maturity Index (PSMI), which is directly linked to the performance evaluation of site leaders and project managers.
            </p>
          </div>

          {/* Card 3 - Coverage */}
          <div className='text-center'>
            <img 
              src="/SafetyPerformance/i3.png" 
              alt="Coverage icon" 
              className='w-16 h-16 mx-auto mb-4'
            />
            <h2 className='text-4xl font-bold mb-2 bg-gradient-to-r from-[#f6a537] to-[#65acac] w-fit bg-clip-text text-transparent mx-auto'>
              100%
            </h2>
            <p className='text-[#58595b] border-t-2 border-gray-300 pt-2 mb-4'>
              Induction and toolbox talk coverage
            </p>
            <p className='text-[#58595b] text-sm'>
              All HSE indicators, including incident rates and audit scores to compliance metrics, are digitally captured and monitored through a centralized dashboard. These reports are reviewed monthly by senior management to drive continuous improvement, identify gaps and align action plans with organizational safety objectives.
            </p>
          </div>
        </div>

        {/* Safety Performance Table */}
        <div className='overflow-x-auto mb-8'>
          <table className='w-full border-collapse'>
            <thead>
              <tr>
                <th className='bg-[#005c33] text-white p-4 text-left font-bold'>Safety indicator</th>
                <th className='bg-[#b4d679] text-[#005c33] p-4 text-center font-bold'>Categories</th>
                <th className='bg-gray-300 text-[#58595b] p-4 text-center font-bold'>Mahindra Susten (FY25)</th>
              </tr>
            </thead>
            <tbody>
              {/* LTIFR Row */}
              <tr className='border-b'>
                <td className='p-4 text-[#58595b]'>LTIFR (per one million person hours worked)</td>
                <td className='p-4 text-center'>
                  <div className='flex justify-center gap-2'>
                    <div className='w-3 h-3 rounded-full bg-[#003d7a]'></div>
                    <div className='w-3 h-3 rounded-full bg-[#f6a537]'></div>
                  </div>
                </td>
                <td className='p-4 text-center'>
                  <span className='text-4xl font-bold text-[#003d7a] mr-4'>0</span>
                  <span className='text-4xl font-bold text-[#f6a537]'>0</span>
                </td>
              </tr>

              {/* Total Recordable Injuries Row */}
              <tr className='border-b bg-gray-50'>
                <td className='p-4 text-[#58595b]'>Total Recordable work-related injuries</td>
                <td className='p-4 text-center'>
                  <div className='flex justify-center'>
                    <div className='w-3 h-3 rounded-full bg-[#003d7a]'></div>
                  </div>
                </td>
                <td className='p-4'>
                  <div className='text-left'>
                    <p className='text-4xl font-bold text-[#003d7a] mb-2'>1</p>
                    <p className='text-sm text-[#58595b]'>minor leg scratches injury due to street dog biting</p>
                    <p className='text-4xl font-bold text-[#f6a537] mt-4'>5</p>
                    <p className='text-sm text-[#58595b]'>(minor first aid injuries)</p>
                  </div>
                </td>
              </tr>

              {/* Fatalities Row */}
              <tr className='border-b'>
                <td className='p-4 text-[#58595b]'>No. of Fatalities</td>
                <td className='p-4 text-center'>
                  <div className='flex justify-center gap-2'>
                    <div className='w-3 h-3 rounded-full bg-[#003d7a]'></div>
                    <div className='w-3 h-3 rounded-full bg-[#f6a537]'></div>
                  </div>
                </td>
                <td className='p-4 text-center'>
                  <span className='text-4xl font-bold text-[#003d7a] mr-4'>0</span>
                  <span className='text-4xl font-bold text-[#f6a537]'>0</span>
                </td>
              </tr>

              {/* High-consequence Illness Row */}
              <tr className='border-b bg-gray-50'>
                <td className='p-4 text-[#58595b]'>High-consequence work-related illness (excluding fatalities)</td>
                <td className='p-4 text-center'>
                  <div className='flex justify-center gap-2'>
                    <div className='w-3 h-3 rounded-full bg-[#003d7a]'></div>
                    <div className='w-3 h-3 rounded-full bg-[#f6a537]'></div>
                  </div>
                </td>
                <td className='p-4 text-center'>
                  <span className='text-4xl font-bold text-[#003d7a] mr-4'>0</span>
                  <span className='text-4xl font-bold text-[#f6a537]'>0</span>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Legend */}
          <div className='flex gap-6 mt-4'>
            <div className='flex items-center gap-2'>
              <div className='w-3 h-3 rounded-full bg-[#003d7a]'></div>
              <span className='text-sm text-[#58595b]'>Employees</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-3 h-3 rounded-full bg-[#f6a537]'></div>
              <span className='text-sm text-[#58595b]'>Workers</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MonitoringSafetyPerformance
