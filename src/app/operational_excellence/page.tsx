import List from "@/components/UI/List/page";
import AssetManagement from "../asset-management/page";
import BusinessExcellence from "../business-excellence/page";
import BusinessProcess from "../business-process/page";
import Quality from "../quality/page";
import SeamlessExecution from "../seamless-execution/page";
import SupplyChain from "../supply-chain/page";
import SustainableDesign from "../sustainable-design/page";

const originalListItems = [
  'Business Process',
  'Supply Chain Management',
  'Sustainable Designg',
  'Quality at Every Stage',
  'Empowering Progress Through Business Excellence',
  'Driving Seamless Execution',
  'Asset Management Strategy and Operations',
];

const originalIcons = [
  '/Operational/8.png',
  '/Leadership/12.png',
];

const originalLinks = [
  '/business-process',
  '/supply-chain',
  '/sustainable-design',
  '/quality',
  '/business-excellence',
  '/seamless-execution',
  '/asset-management'
];

export default function Page() {
    return(
        <div>
            <List
        title="Operational Excellence"
        bgImageSrc="/Leadership/image.png" // Adjust the path as necessary
        listItems={originalListItems}
        iconImageSrcs={originalIcons}
        link={originalLinks}
      />
            <BusinessProcess/>
            <SupplyChain/>
            <SustainableDesign/>
            <Quality/>
            <BusinessExcellence/>
            <SeamlessExecution/>
            <AssetManagement/>
        </div>
    )
}
