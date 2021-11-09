import React from "react"
import "./sortButton.css"

const GroupHeader = () => {
    return (
        <div className={"header"}>
            <div className={"group-name"}>
                <h3>Group Test</h3>
            </div>
            <div className={"buttons"}>
                <button className={"sort-button"}>Sort by Stat</button>
            </div>
        </div>
    )
}

export default GroupHeader