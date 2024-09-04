import Styles from "./mainpage.module.css";
import { useState } from "react";
import SearchContainer from "../components/PageComponents/SearchContainer";
import FiltersContainer from "../components/PageComponents/FiltersContainer";
import SummaryContainer from "../components/PageComponents/SummaryContainer";
import CopilotContainer from "../components/PageComponents/CopilotContainer";
import ArrowDownIcon from "../assets/images/arrow-down-icon.svg";
import DownloadCloud from "../assets/images/download-cloud-icon.svg";
import Pointscontainer from "../components/PageComponents/PointsContainer";

function Mainpage() {
  const [value, setValue] = useState("");
  return (
    <div className={Styles["main_container"]}>
      <div className={Styles["search_container"]}>
        <SearchContainer value={value} setValue={setValue} />
      </div>
      <FiltersContainer />
      <SummaryContainer />
      <CopilotContainer />
      <div className={Styles["export"]}>
        <button className={Styles["export_button"]}>
          <img src={DownloadCloud} alt="link" width={20} height={20} />
          Export
          <img src={ArrowDownIcon} alt="cancel" width={12} height={12} />
        </button>
      </div>
      <div className={Styles["points_container"]}>
        <Pointscontainer
          citationNumber={346}
          info="DMVs are the central hub for viral RNA synthesis in coronavirus infections, making them a potential drug target."
          institution="PLoS Biology"
          year="2020"
          author="E. Snijder et al."
          number={1}
          text="A unifying structural and functional model of the coronavirus replication organelle: Tracking down RNA synthesis"
        />
        <Pointscontainer
          citationNumber={403}
          info="The main protease of coronaviruses and the 3C protease of enteroviruses share a similar active-site architecture and essential role in viral polyprotein processing."
          institution="Journal of Medicinal Chemistry"
          year="2020"
          author="Linlin Zhang et al."
          number={2}
          text="α-Ketoamides as Broad-Spectrum Inhibitors of Coronavirus and Enterovirus Replication: Structure-Based Design, Synthesis, and Activity Assessment"
        />
      </div>
    </div>
  );
}

export default Mainpage;
