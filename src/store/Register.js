import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import axios from 'axios';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          name: '',
          lastname: '',
          email: '',
          password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)

      }
  
      handleSubmit(event) {
        const rthis = this;
        event.preventDefault();
        let credentials = {
            username: this.state.username,
            name: this.state.name,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password
        };
  
        console.log(credentials);
        
        const api = 'http://webdevelopersgdl.com/comercializadora/comercializadora-api/userRegister.php';
  
        axios.post(api, JSON.stringify(credentials))
          .then(function (response) {
              console.log(response);
              if(response.status === 201 ){
                // rthis.callCreatedAlert();
                alert("User created Succesfully!");
              }
          }
        ).catch(function (error) {
            console.log(error)
        });
      }

    render() {
        return (
            <div className="container container-login">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-4">
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 central-container">
                <h3 className="text-center">Signup</h3>
              <form onSubmit={this.handleSubmit}>
              <label className="text-success">
                  UserName: {this.state.username}
                  </label>

                  <input className="form-control" type="text" required value={this.state.username} onChange={(event) => this.setState({ username: event.target.value})} />
                <label className="text-success">
                  Email: {this.state.email}
                  </label>

                  <input className="form-control" type="email" required value={this.state.email} onChange={(event) => this.setState({ email: event.target.value})} />
                <label className="text-success">
                  Password: {this.state.password.length}
                  </label>
                  <input className="form-control" type="password" required value={this.state.password} onChange={(event) => this.setState({ password: event.target.value})} />
                  <br />
                  <div className="center-item">
                    <button className="submit-btn center-item" type="submit" value="Submit" >Submit</button>
                  </div>
              </form>

              </div>
              <div className="col-xs-12 col-sm-6 col-md-4  col-ilustration">

              </div>
            </div>
            {/* <Alert onClose={this.closeCreatedAlert} msg={this.state.alert.msg} type={this.state.alert.type} active={this.state.alert.active}/> */}
          </div>
        );
    }
}

export default Register;