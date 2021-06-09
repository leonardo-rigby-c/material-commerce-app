import React, { Component } from 'react';
import '../styles/store/Carrito.css'
import axios from 'axios';


class Carrito extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productosAgregados: [],
            config: {
                headers: {
                    'Authorization': `Basic ${localStorage.getItem("jwt")}`
                }
            },
        }
       
    }
    render(){
        return (
            <div className="container container-login">
            <div className="row">
           <h1>Carrito de Compras</h1>
            </div>
            </div>

        );
    }

}

export default Carrito;
