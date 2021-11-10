import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Modal from "./components/createGroupModal";
import { AllPlayers, Home } from "./components/AllPlayers";
import PlayerCard from "./components/PlayerCard";
import HeadtoHead from "./components/HeadtoHead";
import GroupPlayers from "./components/groupTable";

function App() {
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
              <h1> Hello </h1>
              <GroupPlayers></GroupPlayers>
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
}

export default App;
