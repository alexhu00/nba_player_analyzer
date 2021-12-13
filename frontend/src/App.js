import "./css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import { AllPlayers, Home } from "./components/AllPlayers";
import HeadtoHead from "./components/HeadtoHead";
import HomePage from "./HomePage";
import GroupTables from "./components/groupTables";
import SignupOrLogin from "./components/SignupOrLogin";
import Signout from "./components/Signout";
import { useState } from "react";
import hoops from "./assets/hoops.png";

const App = () => {
  //TOKENS that we pass around to keep track of user data
  //Currently, the token is the logged in user's object ID
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
            <Signout setToken={setToken}></Signout>
            <img src={hoops} alt="hoops logo"></img>
            <NavBar />
            <AllPlayers token = {token}></AllPlayers>
          </Route>
          <Route path="/Group">
            <Signout setToken={setToken}></Signout>
            <img src={hoops} alt="hoops logo"></img>
            <NavBar />
            <header className="Group">
              <GroupTables token = {token}></GroupTables>
            </header>
          </Route>
          <Route path="/Head_to_Head">
            <Signout setToken={setToken}></Signout>
            <img src={hoops} alt="hoops logo"></img>
            <NavBar />
            <HeadtoHead></HeadtoHead>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
