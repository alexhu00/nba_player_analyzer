import React from "react"
import "./sortButton.css"
import "./GroupHeader.css"

const GroupHeader = () => {
    return (
        <div className="group-header">
            <div className="group-name">
                <h3>Group Test</h3>
            </div>
            <div className="buttons">
                {/* <div className="arrow-up"></div> */}
                {/* <div className="arrow-down"></div> */}
                <button className="sort-button group">
                    <span className="text">Sort By Stat</span>
                    <span className="arrow-up"></span>
                    <span className="arrow-down"></span>
                </button>
            </div>
        </div>
    )
}

export default GroupHeader