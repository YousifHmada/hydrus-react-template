import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Widgets from "./scss/Widgets";
import SignIn from "./containers/SignIn";
import Footer from "./components/Footer";
import { useDetectKeyboardUser } from "./hooks/keyboardUser";
import PasswordReset from "./containers/PasswordReset";
import CreateAccount from "./containers/CreateAccount";

function App() {
  useDetectKeyboardUser();
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
                <SignIn />
              </Route>
              <Route path="/password-reset">
                <PasswordReset />
              </Route>
              <Route path="/join">
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
