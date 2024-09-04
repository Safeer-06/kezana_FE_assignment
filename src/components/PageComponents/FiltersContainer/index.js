import React from "react";
import Styles from "./filterscontainer.module.css";
import SaveIcon from "../../../assets/images/save-icon.svg";
import FilterIcon from "../../../assets/images/filter-icon.svg";
import LinkIcon from "../../../assets/images/link-icon.svg";
import ArrowDownIcon from "../../../assets/images/arrow-down-icon.svg";
import Toggle from "../../Toggle";

const FiltersContainer = () => {
  return (
    <div className={Styles["filters_container"]}>
      <div className={Styles["toggle_container"]}>
        <div>
          <Toggle label="Synthesize" />
        </div>
        <div>
          <Toggle label="Copilot" />
        </div>
      </div>
      <div className={Styles["buttons_container"]}>
        <div>
          <button className={Styles["save_button"]}>
            <img src={SaveIcon} alt="cancel" width={20} height={20} />
          </button>
        </div>
        <div>
          <button className={Styles["filter_button"]}>
            <img src={FilterIcon} alt="cancel" width={20} height={20} />
            Filter
          </button>
        </div>
        <div>
          <button className={Styles["share_button"]}>
            <img src={LinkIcon} alt="link" width={20} height={20} />
            Share
            <img src={ArrowDownIcon} alt="cancel" width={12} height={12} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FiltersContainer;
