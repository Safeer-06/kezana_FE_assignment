import Styles from "./sectionheading.module.css";

import React from "react";

const SectionHeading = ({ title, iconSrc }) => {
  return (
    <div>
      <div className={Styles["header_container"]}>
        {iconSrc ? (
          <img src={iconSrc} alt="icon" width={20} height={20} />
        ) : null}
        <div className={Styles["title"]}>{title}</div>
        <div className={Styles["beta_label"]}>Beta</div>
      </div>
      <div className={Styles["paper_count"]}>4 papers analyzed</div>
    </div>
  );
};

export default SectionHeading;
