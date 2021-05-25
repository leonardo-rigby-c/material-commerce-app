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
                <div className="col-md-12 fondo-input">
                    <input type="text" class="form-control" placeholder="Buscar ..." />
                </div>

                </div>
                </div>
         );
    }
}
 
export default Home;