import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import './Sidebar.css';
import logo from '../logo.png';

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <img src={logo} alt="ProjectGladius Logo" style={{width: "200px"}} />
      <ul>
        <li><a href="/">Profiles</a></li>
        <li><a href="/keywords">Keywords</a></li>
        <li><a href="/clicks">Clicks</a></li>
        <li><a href="/settings">Settings</a></li>
      </ul>
    </div>
  )
};

export default Sidebar;
