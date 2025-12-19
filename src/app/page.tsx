import Featured from "@/components/Hero/page";
import AboutSection from "@/components/Home/About/page";
import BODs from "@/components/Home/BODs/page";
import ChairmanQuote from "@/components/Home/ChairmanQuote/page";
import Glance from "@/components/Home/Glance/page";
import Impact from "@/components/Home/Impact/page";
import SBTI from "@/components/Home/SBTI/page";
import Timeline from "@/components/Home/Timeline/page";
// import Reimagining from "@/components/Home/Reimagining/page";

export default function Page() {
    return(
        <div>
         <Featured/>
         {/* <Reimagining/> */}
         <AboutSection/>
         <Glance/>
         <Impact/>
         <ChairmanQuote/>
         <Timeline/>
         {/* <BODs/> */}
         <SBTI/>
        </div>
        // bg-[#05acc4]
        // #f8a923
    )
}
