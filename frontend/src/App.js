// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Modal from "./components/createGroupModal";
import { AllPlayers, Home } from "./components/AllPlayers";
// import PlayerCard from "./components/PlayerCard";
import HeadtoHead from "./components/HeadtoHead";
import GroupPlayers from "./components/groupTable";
const groupData = require("./data/groupDataFake.json");

const App = () => {
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

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}>
            {/* <NavBar />
            <header className="App-header">
              <p></p>
            </header> */}
          </Route>
          <Route path="/Group">
            <NavBar />
            <header className="Group">
              <h1> Group Page </h1>
              <div>{renderGroups()}</div>
              {/* <GroupPlayers
                data={Object.entries(groupData[0])[2][1]}
              ></GroupPlayers> */}
            </header>
          </Route>

          <Route path="/Head_to_Head">
            <NavBar />
            <HeadtoHead></HeadtoHead>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
