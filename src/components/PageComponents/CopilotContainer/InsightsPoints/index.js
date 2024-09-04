import React from "react";

import styles from "./insightspoints.module.css";

const InsightsPoints = ({ title, text, hasReference }) => {
  return (
    <li>
      <p className={styles["font_bold"]}>{title}</p>
      <ul>
        <li>
          {text}{" "}
          {hasReference && <span className={styles["references"]}>1</span>}
        </li>
      </ul>
    </li>
  );
};

export default InsightsPoints;
