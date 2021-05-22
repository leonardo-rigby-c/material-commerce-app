import React, { Component } from 'react';
import '../styles/store/Container.css'

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid main-container">
                <div className="row">
                <div className="col-12 b-search">
                        <input type="text" className="" placeholder="Busqueda... "/>
                        <buttton className="btn-search">Search</buttton>
                    </div>
                    <div className="col-12 col-md-4">
                        <img src='/assets/ilustrations/building.svg' />
                    </div>
                    <div className="col-12 col-md-4">
                        <img src='/assets/ilustrations/under-construction.svg' />
                    </div>
                    <div className="col-12 col-md-4">
                        <img src='/assets/ilustrations/city-life.svg' />
                    </div>
                </div>

            </div>
         );
    }
}
 
export default Container;