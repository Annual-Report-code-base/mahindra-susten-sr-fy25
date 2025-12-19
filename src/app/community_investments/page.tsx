import List from "@/components/UI/List/page";
import Abbreviations from "../abbreviations/page";
import Appendices from "../appendices/page";
import Awards from "../awards/page";
import CsrFocusArea from "../csr-focus/page";
import GroundLevelCsrImplementation from "../csr-implementation/page";
import Education from "../education/page";
import EnvironmentStewardship from "../environment-stewardship/page";
import HealthAndSanitation from "../health-sanitation/page";
import RuralDevelopment from "../rural-development/page";

const originalListItems = [
    'CSR Focus Area',
    'Ground Level CSR Implementation',
    'Education',
    'Rural Development',
    'Health and Sanitation',
    'Environment Stewardship',
];

const originalIcons = [
    '/Operational/8.png',
    '/Leadership/12.png',
];

const originalLinks = [
    '/csr-focus',
    '/csr-implementation',
    '/education',
    '/rural-development',
    '/health-sanitation',
    '/environment-stewardship',
    '/abbreviations',
];


export default function Page() {
    return (
        <div>
            <List
                title="Community Investments"
                bgImageSrc="/Leadership/image.png"
                listItems={originalListItems}
                iconImageSrcs={originalIcons}
                link={originalLinks}
            />
            <CsrFocusArea />
            <GroundLevelCsrImplementation />
            <Education />
            <RuralDevelopment />
            <HealthAndSanitation />
            <EnvironmentStewardship />
            <Abbreviations />
        </div>
    )
}
