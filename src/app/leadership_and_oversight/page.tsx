import Leadership from "../leadership/page";
// import BoardStructure from "../BoardStructure/page";
import SustainabilityGovernance from "../sustainability-governance/page";
import SuccessionPlanning from "../succession-planning/page";
import EthicsTransparency from "../ethics-transparency/page";
import Policies from "../policies/page";
import RiskManagement from "../risk-management/page";
import ESG from "../esg-roadmap/page";
import MaterialityAssesment from "../materiality-assessment/page";
import ESGRisk from "../esg-risk/page";
import BoardStructure from "../BoardStructure/page";
import List from "@/components/UI/List/page";
import Cybersecurity from "../cybersecurity/page";

const originalListItems = [
    'Board Structure and Responsibilities',
    'Sustainability and EHS Governance',
    'Succession Planning',
    'Ethics and Transparency',
    'Our Policies',
    'Cybersecurity Management',
    'Risk Management',
    'Mahindra Susten’s ESG Roadmap',
    'Materiality assessment and Stakeholder Engagement',
    'ESG Risk Management',
];

const originalLinks = [
    // '/leadership',
    '/BoardStructure',
    '/sustainability-governance',
    '/succession-planning',
    '/ethics-transparency',
    '/policies',
    '/cybersecurity',
    '/risk-management',
    '/esg-roadmap',
    '/materiality-assessment',
    '/esg-risk',
];

const originalIcons = [
    '/Leadership/5.png',
    '/Leadership/12.png',
    '/Leadership/13.png',
    '/Leadership/16.png',
];


export default function Page() {
    return (
        <div>
            <div className="bg-[#ade3e6]">
                <List
                    title="Leadership and Oversight"
                    bgImageSrc="/Leadership/image.png" // Adjust the path as necessary
                    listItems={originalListItems}
                    link={originalLinks}
                    iconImageSrcs={originalIcons}
                />
            </div>
            <Leadership />
            <BoardStructure />
            <SustainabilityGovernance />
            <SuccessionPlanning />
            <EthicsTransparency />
            <Policies />
            <Cybersecurity/>
            <RiskManagement />
            <ESG />
            <MaterialityAssesment />
            <ESGRisk />
        </div>
    )
}
