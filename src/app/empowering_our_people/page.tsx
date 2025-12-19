import List from "@/components/UI/List/page";
import BuildingFutureReadyCapabilities from "../future-capabilities/page";
import UpholdingHumanRightsAndEthicalConduct from "../human-rights/page";
import AdvancingInclusionFairnessAndGenderEquity from "../inclusion-equity/page";
import InvestingPeopleDrivingOurFuture from "../investing-people/page";
import ListeningLearningEvolvingTogether from "../learning-together/page";
import NurturingTomorrowsLeaders from "../nurturing-leaders/page";
import RetentionThroughGrowthAndRecognition from "../retention-growth/page";
import SeamlessOnboardingAndEquitableTalentAcquisition from "../talent-acquisition/page";

const originalListItems = [
    'Investing in Our People, Driving Our Future',
    'Seamless Onboarding and Equitable Talent Acquisition',
    'Advancing Inclusion, Fairness and Gender Equity',
    'Listening, Learning, Evolving Togethert',
    'Retention Through Growth and Recognition',
    'Building Future-Ready Capabilities',
    'Nurturing Tomorrows Leaders',
    'Upholding Human Rights and Ethical Conduct',
];

const originalIcons = [
    '/Operational/8.png',
    '/Leadership/12.png',
];

const originalLinks = [
    '/investing-people',
    '/talent-acquisition',
    '/inclusion-equity',
    '/learning-together',
    '/retention-growth',
    '/future-capabilities',
    '/nurturing-leaders',
    '/human-rights',
];

const ListItems = [
    '/water-management',
    '/waste-management'
];

export default function Page() {
    return (
        <div>
            <List
                title="Empowering Our People"
                bgImageSrc="/Leadership/image.png" // Adjust the path as necessary
                listItems={originalListItems}
                iconImageSrcs={originalIcons}
                link={originalLinks}
            />
            <InvestingPeopleDrivingOurFuture />
            <SeamlessOnboardingAndEquitableTalentAcquisition />
            <AdvancingInclusionFairnessAndGenderEquity />
            <ListeningLearningEvolvingTogether />
            <RetentionThroughGrowthAndRecognition />
            <BuildingFutureReadyCapabilities />
            <NurturingTomorrowsLeaders />
            <UpholdingHumanRightsAndEthicalConduct />
        </div>
    )
}
