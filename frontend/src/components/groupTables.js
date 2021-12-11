// import logo from "./logo.svg";
import { useState } from "react";
import GroupPlayers from "./groupTable";
const groupedData = require("../data/groupDataFake.json");

const GroupTables = (token) => {
  console.log("token", token);
  const [groupData, setgroupData] = useState(groupedData);

  const showGroups = () => {
    let groupList = [];
    for (let i = 0; i < groupData.length; i++) {
      groupList.push(
        <GroupPlayers
          data={Object.entries(groupData[i])[2][1]} // 2 being players category
          name={Object.entries(groupData[i])[1][1]} // 1 being name category
        ></GroupPlayers>
      );
    }
    return groupList;
  };

  const renderGroups = () => {
    return <div>{showGroups()}</div>;
  };

  return <div>{renderGroups()}</div>;
};

export default GroupTables;
