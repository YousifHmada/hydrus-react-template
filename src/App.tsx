import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Widgets from "./scss/Widgets";
import "./App.scss";
import Home from "./containers/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/_widgets">
            <Widgets />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
