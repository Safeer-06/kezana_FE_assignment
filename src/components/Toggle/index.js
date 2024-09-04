import React from "react";
import Styles from "./toggle.module.css";

const Toggle = ({ checked, onChange, label }) => {
  return (
    <div className={Styles["toggle_container"]}>
      <label className={Styles["switch"]}>
        <input
          type="checkbox"
          checked={checked ? true : undefined}
          onChange={onChange}
          className={Styles["toggle_input"]}
        />
        <span className={Styles["slider"]}></span>
        <div className={Styles["toggle"]} />
      </label>
      {label ? <div className={Styles['label']}>{label}</div> : null}
    </div>
  );
};

export default Toggle;
