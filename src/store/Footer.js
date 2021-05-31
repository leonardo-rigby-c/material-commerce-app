import React, { Component } from 'react';
import '../styles/store/Footer.css'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="footer-container">
                <div className="row ">
                    <footer >
                        <div className="row bod">
                            <div className="col-md-2 ">
                                <img src="/assets/ilustrations/under-construction.svg" alt="logo-ilustration"/>

                            </div>
                            <hr className="separacion"/>

                            <div className="col-md-2">
                                <h6>Redes Sociales</h6>

                            </div>
                            <hr className="separacion"/>

                            <div className="col-md-4">
                                <p> la construcción es el arte o técnica de fabricar edificios e infraestructuras. En un sentido más amplio, se denomina construcción a todo aquello que exige, antes de hacerse, disponer de un proyecto y una planificación predeterminada.</p>
                            </div>
                            <hr className="separacion"/>

                            <div className="col-md-2">
                                <h6>Contacto:</h6>
                                <p>(123)31233</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 offset-4">
                                
                            </div>
                        </div>
                    </footer>
                </div>

            </div>
         );
    }
}
 
export default Footer;