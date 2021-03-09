import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./layout/Index";
import "./App.scss";
import Home from "./containers/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/__layout">
            <Layout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Layout />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
