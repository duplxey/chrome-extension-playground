import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar'
import {Route, Switch} from "react-router-dom";
import Clicks from "./pages/Clicks";
import Keywords from "./pages/Keywords";
import Settings from "./pages/Settings";
import Profiles from "./pages/Profiles";

function App() {
  return (
    <div className="App">
        <Sidebar />
    </div>

  );
}

export default App;
