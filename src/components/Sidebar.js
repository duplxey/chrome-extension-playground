import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import './Sidebar.css';
import logo from '../logo.png';

import Clicks from "../pages/Clicks";
import Keywords from "../pages/Keywords";
import Settings from "../pages/Settings";
import Profiles from "../pages/Profiles";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <img src={logo} className="img-fluid p-3" alt="Project Gladius Logo" style={{background: "#C8194C"}}/>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/"><i className="fas fa-users" /> Profiles</Link>
            </li>
            <li>
              <Link to="/keywords"><i className="fas fa-key" /> Keywords</Link>
            </li>
            <li>
              <Link to="/clicks"><i className="fas fa-mouse" /> Clicks</Link>
            </li>
            <li>
              <Link to="/settings"><i className="fas fa-cog"/> Settings</Link>
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
    </div>
  )
};

export default Sidebar;
