// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Modal from "./components/createGroupModal";
import { AllPlayers, Home } from "./components/AllPlayers";
// import PlayerCard from "./components/PlayerCard";
import HeadtoHead from "./components/HeadtoHead";
import GroupPlayers from "./components/groupTable";
import GroupTables from "./components/groupTables";
const groupedData = require("./data/groupDataFake.json");

const App = () => {
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
              <GroupTables></GroupTables>
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
