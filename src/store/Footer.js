import React, { Component } from 'react';
import '../styles/store/Footer.css'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="footer-container container-fluid">
                <div className="row">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 b-flex-center">
                                <img src="/assets/ilustrations/city-life.svg" />
                            </div>
                            <div className="col-md-4">
                                
                            </div>
                            <div className="col-md-4">
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>
         );
    }
}
 
export default Footer;