import React, { Component } from 'react';
import '../styles/store/Home.css'
import axios from 'axios';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            name:''
        }
    }
    render() { 
        return ( 
            <div className="container container-home">
                <div className="row">
                <div className="col-md-4 offset-4 input-text">
                    <h1 >Nombre Empresa</h1>
                    <h4 className="slogan">¡Slogan de la Empresa!</h4>
                
            </div>
            </div>
            <div className="row">
                <div className="col-md-8 offset-2 input">
                   <input className="form-control" placeholder="¿ Qué deseas buscar ?" />
                   <i className="fas fa-search "></i>
                
            </div>
            </div>

            </div>

            
         );
    }
}
 
export default Home;