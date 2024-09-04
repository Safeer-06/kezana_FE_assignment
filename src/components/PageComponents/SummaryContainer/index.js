import React from "react";
import Styles from "./summarycontainer.module.css";
import TickIcon from "../../../assets/images/tick-icon.svg";
import DashIcon from "../../../assets/images/dash-icon.png";
import CrossIcon from "../../../assets/images/red-cross.svg";
import SearchIcon from "../../../assets/images/search.svg";
import SectionHeading from "../SectionHeading";

const SummaryContainer = () => {
  return (
    <div className={Styles["Summary_container"]}>
      <div
        className={`${Styles["Section_container"]} ${Styles["border_right"]}`}
      >
        <SectionHeading title="Summary" />
        <p className={Styles["description"]}>
          These studies suggest DMVs, the main protease, and nsp14 are key
          components in coronavirus replication and infection.
        </p>
      </div>
      <div className={Styles["Section_container"]}>
        <div className={Styles["questions_container"]}>
          <div className={`${Styles["tick_container"]} ${Styles["question"]}`}>
            <img src={TickIcon} alt="cancel" width={20} height={20} />
          </div>
          <div className={`${Styles["dash_container"]} ${Styles["question"]}`}>
            <img src={DashIcon} alt="cancel" width={16} height={2} />
          </div>
          <div
            className={`${Styles["cancel_container"]} ${Styles["question"]}`}
          >
            <img src={CrossIcon} alt="cancel" width={16} height={16} />
          </div>
        </div>
        <p className={Styles["question_label"]}>Not a yes or no question</p>
        <p className={Styles["question_description"]}>
          To use the Consensus Meter, try asking a simple yes or no question
        </p>
        <div className={Styles["question_example"]}>
          <div className={Styles["example_text"]}>
            <span className={Styles["font_bold"]}>Try:</span>{" "}
            <span className={Styles["other_text"]}>
              Are there molecular mechanisms involved in coronavirus
              replication?
            </span>
          </div>
          <div>
            <img src={SearchIcon} alt="search" width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryContainer;
