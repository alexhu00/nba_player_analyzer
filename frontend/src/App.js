import "./css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import { AllPlayers, Home } from "./components/AllPlayers";
import HeadtoHead from "./components/HeadtoHead";
import HomePage from "./HomePage";
import GroupTables from "./components/groupTables";
import SignupOrLogin from "./components/SignupOrLogin";
import hoops from "./assets/hoops.png";
const groupedData = require("./data/groupDataFake.json");

const App = () => {
  return (
    <div className="App">
      <img src={hoops} alt="hoops logo"></img>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}>
            <SignupOrLogin></SignupOrLogin>
          </Route>
          <Route path="/Players">
            <img src={hoops} alt="hoops logo"></img>
            <NavBar />
            <AllPlayers></AllPlayers>
          </Route>
          <Route path="/Group">
            <img src={hoops} alt="hoops logo"></img>
            <NavBar />
            <header className="Group">
              <GroupTables></GroupTables>
            </header>
          </Route>

          <Route path="/Head_to_Head">
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
