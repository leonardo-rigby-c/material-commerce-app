import React from 'react';
// import Avatar from './Avatar';
import '../styles/components/Navbar.css';
// import Sidebar from '../sidebar/Sidebar'

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      avatarSrc: '/assets/ilustrations/skateboard.svg',
      sidebarOpen: true
    };

    this.togleSidebar = this.togleSidebar.bind(this)
  }
  togleSidebar() {
    this.setState({sidebarOpen: !this.state.sidebarOpen})
  }
  render() {
    return (

      <div className="container-fluid b-header-bar fixed-top">
          <div className="row b-row">
            <div className="col-xs-6 col-sm-6 col-md-4 b-flex-left">
            {/* <img className="menu-icon" onClick={this.togleSidebar} src="/assets/ilustrations/menu.svg" alt="menu-icon"/> */}
            <img  className="logo-img" src="/assets/ilustrations/under-construction.svg" alt="logo-ilustration" />
              <span className="logo-text">My Store</span>
              {/* <Sidebar sidebarOpen={this.state.sidebarOpen} logoutUser={this.props.onLogout}/> */}
            </div>
            <div className="col-xs-6 col-sm-6 col-md-4 text-center">

            </div>

            <div className="col-xs-6 col-sm-6 col-md-4 b-menu-icon">
              <p>Angel Ivan Reyes Hernández</p>
              <img  className="logo-img" src="/assets/ilustrations/under-construction.svg" alt="logo-ilustration" />
               {/* <Avatar src={this.state.avatarSrc}/> */}
            </div>
        </div>
      </div>
    );
}
}
 
export default Navbar;