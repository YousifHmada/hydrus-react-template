import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Widgets from "./scss/Widgets";
import Home from "./containers/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/_widgets">
            <Widgets />
          </Route>
          <Route path="/">
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/forgot-password">
                <Home />
              </Route>
              <Route path="/create-account">
                <Home />
              </Route>
            </Switch>
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
