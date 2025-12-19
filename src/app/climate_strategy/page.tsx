import List from "@/components/UI/List/page";
import ClimateAction from "../climate-action/page";
import ClimateResponce from "../climate-response/page";
import ClimateRisk from "../climate-risk/page";
import ESMS from "../esms-framework/page";
import ImpactAssessment from "../impact-assessment/page";

const originalListItems = [
    'Environmental and Social Management System (ESMS) Framework',
    'Climate Change Risk Assessments Approach',
    'Strengthening Our Response to Emerging Climate Risks',
    'Environmental and Social Impact Assessment',
    'Accelerating Climate Action Through Science-Based Targets',
];

const originalIcons = [
    '/Operational/8.png',
    '/Leadership/12.png',
];

const originalLinks = [
    '/esms-framework',
    '/climate-risk',
    '/climate-response',
    '/impact-assessment',
    '/climate-action',
];


export default function Page() {
    return (
        <div>
            <List
                title="Climate Strategy and Sustainability"
                bgImageSrc="/Leadership/image.png" // Adjust the path as necessary
                listItems={originalListItems}
                iconImageSrcs={originalIcons}
                link={originalLinks}
            />
            <ESMS />
            <ClimateRisk />
            <ClimateResponce />
            <ImpactAssessment />
            <ClimateAction />
        </div>
    )
}
