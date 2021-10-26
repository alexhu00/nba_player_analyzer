import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import { Home } from "./components/AllPlayers";

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
            </header>
          </Route>

          <Route path="/Head_to_Head">
            <NavBar />
            <header className="HeadtoHead">
              <h1> Lillard is the best </h1>
            </header>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
