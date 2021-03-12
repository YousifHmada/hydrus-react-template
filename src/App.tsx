import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Widgets from "./scss/Widgets";
import Home from "./containers/Home";
import Footer from "./components/Footer";

function App() {
  function handleKeyup(e: KeyboardEvent) {
    if (e.key === "Tab") {
      document.documentElement.setAttribute("keyboard-user", "true");
    }
  }
  useEffect(() => {
    document.addEventListener("keyup", handleKeyup);
    return () => {
      document.removeEventListener("keyup", handleKeyup);
    };
  }, []);
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
