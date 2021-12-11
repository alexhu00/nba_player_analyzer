import "./css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import { AllPlayers, Home } from "./components/AllPlayers";
import HeadtoHead from "./components/HeadtoHead";
import HomePage from "./HomePage";
import GroupTables from "./components/groupTables";
import SignupOrLogin from "./components/SignupOrLogin";
import { useState } from "react";
const groupedData = require("./data/groupDataFake.json");

const App = () => {
  const jwtToken = localStorage.getItem("token");
  const [token, setToken] = useState(jwtToken);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}>
            <SignupOrLogin setToken={setToken} ></SignupOrLogin>
          </Route>
          <Route path="/Players">
            <NavBar />
            <AllPlayers></AllPlayers>
          </Route>
          <Route path="/Group">
            <NavBar />
            <header className="Group">
              <GroupTables token = {token}></GroupTables>
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
