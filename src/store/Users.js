import React, { Component } from 'react';
import '../styles/store/Users.css'
import axios from 'axios';


class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            name:''
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal(){
    }
    render(){
        return ( 
            <div className="container container-login">
            <div className="row">

            </div>
            </div>
        );
    }
}
export default Users;