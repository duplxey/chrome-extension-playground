import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Profiles from './profiles/Profiles'
import Clicks from './clicks/Clicks'
import Settings from './settings/Settings'
import Keywords from './keywords/Keywords'

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Profiles</Link>
          </li>
          <li>
            <Link to="/keywords">Keywords</Link>
          </li>
          <li>
            <Link to="/clicks">Clicks</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/clicks">
            <Clicks />
          </Route>
          <Route path="/keywords">
            <Keywords />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/">
            <Profiles />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
