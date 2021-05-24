import React, { Component } from 'react';
import '../styles/store/Container.css'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Register from './Register';
import Login from './Login';

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
            </div>
         );
    }
}
 
export default Container;