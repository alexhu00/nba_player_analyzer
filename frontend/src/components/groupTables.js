// import logo from "./logo.svg";
import { useEffect, useState } from "react";
import axios from 'axios';
import GroupPlayers from "./groupTable";

  function GroupTables(token){
  const userId = token.token;
  console.log("USER ID", userId);
  const [groupData, setGroupData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/app/showgroup/${userId}`)
      .then((res) => {
        console.log("!", res.data.groups);
        setGroupData(res.data.groups);
      })
      .catch((err) => {
        console.log("errors!", err);
    })
  }, [])

  console.log("groupData", groupData);

  function getGroups(){
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
  }

  const renderGroups = () => {
    return <div>{getGroups()}</div>;
  };

  return (<div>{renderGroups()}</div>);
};

export default GroupTables;
