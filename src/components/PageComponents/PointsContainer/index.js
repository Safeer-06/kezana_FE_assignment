import styles from "./pointscontainer.module.css";
import React from "react";
import CopilotIcon from "../../../assets/images/copilot-icon.svg";
import Cited from "../../../assets/images/cited-icon.svg";
import BlueMedalIcon from "../../../assets/images/blue-medal.svg";
import SparklerIcon from "../../../assets/images/sparkler.svg";
import ArrowDownIcon from "../../../assets/images/arrow-down-icon.svg";
import SaveIcon from "../../../assets/images/save-icon.svg";
import CiteIcon from "../../../assets/images/cite-icon.svg";
import ShareIcon from "../../../assets/images/share-icon.svg";

const Pointscontainer = ({
  number,
  text,
  info,
  institution,
  author,
  year,
  citationNumber,
}) => {
  return (
    <div className={styles["copilot_container"]}>
      <div className={styles["header"]}>
        <div className={styles["references"]}>{number}</div>
        <p>{text}</p>
      </div>
      <div className={styles["info"]}>
        <p>{info}</p>
      </div>
      <div className={styles["reference_information"]}>
        {institution} | {author} |{" "}
        <span className={styles["font_bold"]}>{citationNumber}</span> Citations
        | {year}
      </div>
      <div className={styles["credibility_container"]}>
        <div className={styles["credibility_information"]}>
          <img src={Cited} alt="arrow" width={20} height={20} />
          <p>Highly Cited</p>
        </div>
        <div className={styles["credibility_information"]}>
          <img src={CopilotIcon} alt="arrow" width={20} height={20} />
          <p>Copilot</p>
        </div>
        <div className={styles["credibility_information"]}>
          <img src={BlueMedalIcon} alt="arrow" width={20} height={20} />
          <p>Rigorous Journal</p>
        </div>
      </div>
      <div className={styles["divider"]} />
      <div className={styles["footer"]}>
        <button className={styles["snapshot_container"]}>
          <div>
            <img src={SparklerIcon} alt="sparkler" width={20} height={20} />{" "}
          </div>
          <div>Study Snapshot</div>
          <div>
            <img src={ArrowDownIcon} alt="sparkler" width={10} height={10} />
          </div>
        </button>
        <div className={styles["points_action_container"]}>
          <button className={styles["points_action_button"]}>
            <div>
              <img src={SaveIcon} alt="sparkler" width={20} height={20} />{" "}
            </div>
            <div>Save</div>
          </button>
          <button className={styles["points_action_button"]}>
            <div>
              <img src={CiteIcon} alt="sparkler" width={20} height={20} />{" "}
            </div>
            <div>Cite</div>
          </button>
          <button className={styles["points_action_button"]}>
            <div>
              <img src={ShareIcon} alt="sparkler" width={20} height={20} />{" "}
            </div>
            <div>Share</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pointscontainer;
