import React from "react";
import Styles from "./searchcontainer.module.css";
import SearchIcon from "../../../assets/images/search.svg";
import CrossIcon from "../../../assets/images/cross-icon.svg";

const SearchContainer = ({ value, setValue }) => {
  return (
    <div className={Styles["input_container"]}>
      <input
        type="text"
        placeholder="Ask the research..."
        className={Styles["input"]}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      {value ? (
        <div className={Styles["cancel_icon"]} onClick={() => setValue("")}>
          <img src={CrossIcon} alt="cancel" width={20} height={20} />
        </div>
      ) : null}
      <div className={Styles["search_icon"]}>
        <img src={SearchIcon} alt="search" width={20} height={20} />
      </div>
    </div>
  );
};

export default SearchContainer;
