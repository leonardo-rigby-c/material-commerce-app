import React, { Component } from 'react';
import '../styles/store/Store.css';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Container from './Container'
import Footer from './Footer';

class Store extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            sidebarOpen: true
         }
    }
    render() { 
        return (
            <div className="store-container">
                <Navbar />
                <Sidebar sidebarOpen={this.state.sidebarOpen} logoutUser={this.props.onLogout}/>
                    <Container />
                <Footer />
            </div>
         );
    }
}
 
export default Store;