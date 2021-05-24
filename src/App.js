import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Admin from './admin'
import Store from './store'
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    // <div className="app-container">
      <BrowserRouter>
        <Route path="/store"><Store /></Route>
        <Route path="/admin"><Admin /></Route>
      </BrowserRouter>
    // </div>
  );
}

export default App;
