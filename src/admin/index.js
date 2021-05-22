import React, { Component } from 'react';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'


class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            sidebarOpen: true
         }
    }
    render() { 
        return ( 
            <div className="admin-container">
                <Navbar />
                <Sidebar sidebarOpen={this.state.sidebarOpen} logoutUser={this.props.onLogout}/>
            </div>
         );
    }
}
 
export default Admin;