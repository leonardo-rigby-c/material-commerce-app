import React, { Component } from 'react';
import '../styles/store/Container.css'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Register from './Register';
import Login from './Login';
import Home from './Home';
import Material from './Material';
import Users from './Users';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className=" main-container">
                <Route path="/store/register"><Register /></Route>
                <Route path="/store/login"><Login /></Route>
                <Route path="/store/home"><Home /></Route>
                <Route path="/store/products"><Material /></Route>
                <Route path="/store/profile"><Users /></Route>
            </div>
         );
    }
}
 
export default Container;