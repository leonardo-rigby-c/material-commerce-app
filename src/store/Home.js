import React, { Component } from 'react';
import '../styles/store/Home.css'
import axios from 'axios';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            buscar:'',
            productos:[],
            config :{
                headers: {
                  'Authorization': `Basic ${localStorage.getItem("jwt")}`
                }
              },
        }
        this.inputSearch = this.inputSearch.bind(this);
    }
    inputSearch(){
        const vm = this;
        
        let data = {
          "searchWord": this.state.buscar,
          
        };
    
        console.log(data);
        
        const api = 'http://webdevelopersgdl.com/comercializadora-material/api/search/';
       
        axios.post(api, JSON.stringify(data),vm.state.config)
          .then(function (response) {
            console.log(response);
            vm.setState({
                productos: response.data.data
              });
              
          }
        );
    }
    render() { 
        return ( 
            <div className="container container-home">
                <div className="row ocultar-al-buscar">
                <div className="col-md-4 offset-4 input-text">
                    <h1 >Nombre Empresa</h1>
                    <h4 className="slogan">¡Slogan de la Empresa!</h4>
                
            </div>
            </div>
            <div className="row ocultar-al-buscar">
                <div className="col-md-8 offset-2 input">
                   <input className="form-control" placeholder="¿ Qué deseas buscar ?" value={this.state.buscar} onChange={(event) => this.setState({ buscar: event.target.value})} />
                   <i className="fas fa-search " onClick={this.inputSearch.bind(this)}></i>
                
            </div>
            </div>

            </div>

            
         );
    }
}
 
export default Home;