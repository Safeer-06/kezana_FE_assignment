import SectionHeading from "../SectionHeading";
import Styles from "./copilot.module.css";
import React from "react";
import CopilotIcon from "../../../assets/images/copilot-icon.svg";
import Information from "./Information";
import InsightsPoints from "./InsightsPoints";

const CopilotContainer = () => {
  return (
    <div className={Styles["copilot_container"]}>
      <SectionHeading title="Copilot" iconSrc={CopilotIcon} />
      <Information
        heading="Introduction"
        text="Coronaviruses (CoVs) are a significant public health concern due to their ability to cause severe respiratory illnesses, as seen in the SARS-CoV-2 pandemic. Understanding the main synthons, or key components, involved in the replication and transcription of CoV RNA is crucial for developing effective antiviral strategies."
      />
      <div>
        <h3>Key Insights</h3>
        <ul>
          <InsightsPoints
            title="Double-Membrane Vesicles (DMVs) as Central Hubs for RNA Synthesis:"
            text="DMVs are consistently identified as the primary sites for
                  viral RNA synthesis across various CoVs, including MERS-CoV,
                  SARS-CoV, and the gamma-CoV infectious bronchitis virus"
          />
          <InsightsPoints
            title="Main Protease (Mpro) and 3C Protease as Drug Targets:"
            text="The main protease (Mpro) of coronaviruses and the 3C protease
                  of enteroviruses are critical for viral polyprotein
                  processing, making them suitable targets for antiviral drug
                  development. Peptidomimetic α-ketoamides have been designed as
                  broad-spectrum inhibitors targeting these proteases"
          />
          <InsightsPoints
            title="nsp12 and nsp14 in RNA Synthesis and Proofreading:"
            text="The main RNA polymerase, nsp12, is responsible for RNA
                  synthesis but lacks high fidelity. The nsp14 enzyme, which has
                  both methyltransferase and exoribonuclease activities,
                  corrects errors by excising mismatched nucleotides, ensuring
                  the accuracy of the viral RNA"
          />
        </ul>
      </div>
      <Information
        heading="Conclusion"
        text="The main synthons of coronaviruses include the double-membrane vesicles (DMVs) as the primary sites for RNA synthesis, the main protease (Mpro) and 3C protease as essential for polyprotein processing, and the nsp12 and nsp14 enzymes for RNA synthesis and proofreading. These components are critical for the replication and transcription of CoV RNA and represent potential targets for antiviral drug development."
      />
    </div>
  );
};

export default CopilotContainer;
