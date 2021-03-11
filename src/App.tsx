import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Widgets from "./scss/Widgets";
import Home from "./containers/Home";
import Footer from "./components/Footer";
import CreateAccount from "./containers/CreateAccount";
import ForgotPassword from "./containers/ForgotPassword";

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
                <ForgotPassword />
              </Route>
              <Route path="/create-account">
                <CreateAccount />
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
