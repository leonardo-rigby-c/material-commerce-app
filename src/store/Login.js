import React, { Component } from 'react';
import '../styles/store/login.css'
import axios from 'axios';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            email:'',
            password:''
        }
        this.login = this.login.bind(this)

    }

    login(event) {
        const rthis = this;
        event.preventDefault();
        let credentials = {
            email: this.state.email,
            password: this.state.password
        };
  
        console.log(credentials);
        
        const api = 'http://webdevelopersgdl.com/comercializadora-material/api/login/';
  
        axios.post(api, JSON.stringify(credentials))
          .then(function (response) {
              console.log(response);
              localStorage.clear();
              localStorage.setItem("jwt",response.data.jwt);
              localStorage.setItem("username",response.data.userName);
              window.location.href="/store/home/";

              
          }
        ).catch(function (error) {
            console.log(error)
        });
      }

    render(){
        return (
            <div className="container container-login">
            <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4 ">
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 login">
                <h3 className="text-center">Login</h3>
              <form onSubmit={this.login}>
                <label >
                  Email:
                  </label>
                  <input className="form-control" type="email" required value={this.state.email} onChange={(event) => this.setState({ email: event.target.value})} />
                <label >
                  Password:
                  </label>
                  <input className="form-control" type="password" required value={this.state.password} onChange={(event) => this.setState({ password: event.target.value})} />
                  <br />
                  <div className="center-item">
                    <button className="btn boton-login" type="submit" value="Submit" >Iniciar Sesión</button>
                  </div>
              </form>

              </div>
              <div className="col-xs-12 col-sm-6 col-md-4  col-ilustration">

              </div>
            </div>
            </div>

        );
    }

}
export default Login;
