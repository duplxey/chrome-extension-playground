import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Clicks from "./pages/Clicks";
import Keywords from "./pages/Keywords";
import Settings from "./pages/Settings";
import Profiles from "./pages/Profiles";
import Auth from "./auth/Auth";

function App() {
  let loggedIn = false;

  if (!loggedIn) {
    return (
      <div className="App">
        <Auth />
      </div>
    )
  } else {
    return (
      <div className="App">
        <Router>
          <Route path="/" exact component={Profiles} />
          <Route path="/clicks" exact component={Clicks} />
          <Route path="/keywords" exact component={Keywords} />
          <Route path="/settings" exact component={Settings} />
        </Router>
      </div>
    )
  }
}

export default App;
