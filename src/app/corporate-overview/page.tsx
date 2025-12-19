import AboutMahindraGroupPage from "../about-mahindra/page";
import AboutTheReport from "../about-report/page";
import AtAGlancePage from "../at-a-glance/page";
import Glimpse from "../glimpse-impact/page";
import JourneyPage from "../journey/page";
import LeadershipMessagePage from "../leadership-message/page";
import Presence from "../presence/page";
import ProjectPortfolio from "../project-portfolio/page";


export default function Page() {
    return(
        <div>
            <AboutTheReport/>
            <Glimpse/>
            <LeadershipMessagePage/>
            <AboutMahindraGroupPage/>
            <JourneyPage/>
            <AtAGlancePage/>
            <Presence/>
            <ProjectPortfolio/>
        </div>
    )
}
