import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Clicks from "./pages/Clicks";
import Keywords from "./pages/Keywords";
import Settings from "./pages/Settings";
import Profiles from "./pages/Profiles";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Profiles} />
        <Route path="/clicks" exact component={Clicks} />
        <Route path="/keywords" exact component={Keywords} />
        <Route path="/settings" exact component={Settings} />
      </Router>
    </div>

  );
}

export default App;
