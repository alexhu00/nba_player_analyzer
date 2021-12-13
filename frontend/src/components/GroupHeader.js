import React from "react"
import "../css/sortButton.css"
import "../css/GroupHeader.css"

const GroupHeader = (props) => {
  return (
    <div className="group-header">
      <div className="group-name">
        <h3>{props.name}</h3>
      </div>

      {/* <div className="buttons">
        <button className="sort-button group">
          <span className="text">Sort By Stat</span>
          <span className="arrow-up" />
          <span className="arrow-down" />
        </button>
      </div> */}
    </div>

  );
};

export default GroupHeader;
