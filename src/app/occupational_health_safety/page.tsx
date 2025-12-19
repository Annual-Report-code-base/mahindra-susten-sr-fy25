import List from "@/components/UI/List/page";
import EmergencyPreparednessAndFireSafety from "../emergency-preparedness/page";
import SafeguardingEmployeeHealthAndWellBeing from "../employee-wellbeing/page";
import GovernanceAccountabilityAndOversight from "../governance-oversight/page";
import HealthSafetyAndEnvironmentHseVision from "../hse-vision/page";
import OccupationalHealthAndHygiene from "../occupational-health/page";
import PpeManagementAndChemicalSafetyControls from "../ppe-management/page";
import RiskManagementAndPreventiveSystems from "../preventive-systems/page";
import EnsuringRegulatoryCompliance from "../regulatory-compliance/page";
import RecognizingAndSustainingSafeActions from "../safe-actions/page";
import StructuredApproachToSafetyManagement from "../safety-management/page";
import MonitoringSafetyPerformance from "../safety-performance/page";
import TrainingForOperationalSafetyExcellence from "../safety-training/page";

const originalListItems = [
    'Safeguarding Employee Health and Well-Being',
    'Health, Safety and Environment (HSE) Vision',
    'Governance, Accountability and Oversight',
    'Ensuring Regulatory Compliance',
    'Structured Approach to Safety Management',
    'Risk Management and Preventive Systems',
    'Training for Operational Safety Excellence',
    'Monitoring Safety Performance',
    'Occupational Health and Hygiene',
    'Emergency-Preparedness and Fire Safety',
    'PPE Management and Chemical Safety Controls',
    'Recognizing and Sustaining Safe Actions',

];

const originalIcons = [
    '/Operational/8.png',
    '/Leadership/12.png',
];

const originalLinks = [
    '/employee-wellbeing',
    '/hse-vision',
    '/governance-oversight',
    '/regulatory-compliance',
    '/safety-management',
    '/preventive-systems',
    '/safety-training',
    '/safety-performance',
    '/occupational-health',
    '/emergency-preparedness',
    '/ppe-management',
    '/safe-actions',
];

export default function Page() {
    return (
        <div>
            <List
                title="Occupational Health and Safety"
                bgImageSrc="/Leadership/image.png"
                listItems={originalListItems}
                iconImageSrcs={originalIcons}
                link={originalLinks}
            />
            <SafeguardingEmployeeHealthAndWellBeing />
            <HealthSafetyAndEnvironmentHseVision />
            <GovernanceAccountabilityAndOversight />
            <EnsuringRegulatoryCompliance />
            <StructuredApproachToSafetyManagement />
            <RiskManagementAndPreventiveSystems />
            <TrainingForOperationalSafetyExcellence />
            <MonitoringSafetyPerformance />
            <OccupationalHealthAndHygiene />
            <EmergencyPreparednessAndFireSafety />
            <PpeManagementAndChemicalSafetyControls />
            <RecognizingAndSustainingSafeActions />
        </div>
    )
}
