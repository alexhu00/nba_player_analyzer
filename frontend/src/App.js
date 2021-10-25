import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <NavBar />
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
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
