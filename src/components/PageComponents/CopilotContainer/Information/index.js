import styles from "./information.module.css";
import React from "react";

const Information = ({ heading, text }) => {
  return (
    <div>
      <div>
        <h3 className={styles['heading']}>{heading}</h3>
      </div>
      <div>
        <p className={styles['text']}>{text}</p>
      </div>
    </div>
  );
};

export default Information;
