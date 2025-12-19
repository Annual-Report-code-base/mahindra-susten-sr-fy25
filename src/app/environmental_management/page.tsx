import List from "@/components/UI/List/page";
import BiodiversityLandUse from "../biodiversity/page";
import EnergyEmission from "../energy-emission/page";
import WasteManagement from "../waste-management/page";
import WaterWastewaterManagement from "../water-management/page";

const originalListItems = [
  'Energy and Emission Management',
  'Biodiversity and Land Use',
  'Water and Wastewater Management',
  'Waste Management',
];

const originalIcons = [
  '/Operational/8.png',
  '/Leadership/12.png',
];

const originalLinks = [
    '/energy-emission',
    '/biodiversity',
    '/water-management',
    '/waste-management'
];


export default function Page() {
    return(
        <div>
             <List
        title="Environmental Management"
        bgImageSrc="/Leadership/image.png" // Adjust the path as necessary
        listItems={originalListItems}
        iconImageSrcs={originalIcons}
        link={originalLinks}
      />
            <EnergyEmission/>
            <BiodiversityLandUse/>
            <WaterWastewaterManagement/>
            <WasteManagement/>
        </div>
    )
}
