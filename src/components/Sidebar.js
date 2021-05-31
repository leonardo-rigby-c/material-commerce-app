import React from 'react';
import '../styles/components/Sidebar.css'
import { Link, NavLink } from "react-router-dom";

export class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.logOut = this.logOut.bind(this)
    }

    logOut() {
      localStorage.clear();
      this.props.logoutUser();
    }

    render() {

      // let isActive = this.context.router.isActive(this.props.to, true);
      //   let className = isActive ? "active" : "";

        return (
            <div  className={"sidebar " + (this.props.sidebarOpen ? 'open' : '' )}>
                <div className="b-col section-bar">
                  <div className="b-link">
                  <div className="b-icon">
                    <i className="fas fa-bars icon-menu"></i>
                    </div>
                  </div>
                </div>
              <NavLink exact className="link" activeClassName="active" to="/store/home">
                <div className="b-col section-profile">
                  <div className="b-link">
                  <div className="b-icon">
                    <i className="fas fa-home icon-menu"></i>
                    </div>
                    <span>Home</span>
                  </div>
                  <hr />
                </div>
              </NavLink>
              <div className="section-access">
              <NavLink className="link" activeClassName="active" to="/store/users">
                <div className="b-col">
                  <div className="b-link">
                  <div className="b-icon">
                    <i className="fas fa-users icon-menu"></i>
                    </div>
                    <span>Users</span>
                  </div>
                </div>
              </NavLink>
              <NavLink className="link" activeClassName="active" to="/store/schedule">
                <div className="b-col">
                  <div className="b-link">
                    <div className="b-icon">
                    <i className="fas fa-tasks icon-menu"></i>
                    </div>
                    <span>Tasks</span>
                  </div>
                </div>
              </NavLink>
              <NavLink className="link" activeClassName="active" to="/store/profile">
                <div className="b-col">
                  <div className="b-link ">
                  <div className="b-icon">
                    <i className="fas fa-user-cog icon-menu"></i>  
                    </div>                  
                    <span>Profile Settings</span>
                  </div>
                </div>
              </NavLink>
              <NavLink className="link" activeClassName="active" to="/store/settings">
                <div className="b-col">
                  <div className="b-link">
                    <div className="b-icon">
                    <i className="fas fa-sliders-h icon-menu"></i>
                    </div>
                    <span>Options</span>
                  </div>
                  <hr />
                </div>
              </NavLink>
              <NavLink className="link" activeClassName="active" to="/store/products">
                <div className="b-col">
                  <div className="b-link">
                    <div className="b-icon">
                    <i className="fas fa-boxes icon-menu"></i>
                    </div>
                    <span>Materiales</span>
                  </div>
                  <hr />
                </div>
              </NavLink>
              </div>
              <NavLink className="link" activeClassName="active" to="/store/register">
                <div className="b-col">
                  <div className="b-link">
                    <div className="b-icon">
                    <i className="fas fa-sign-out-alt icon-menu"></i>
                    </div>
                    <span>Sign Up</span>
                  </div>
                </div>
              </NavLink>
              <NavLink className="link" activeClassName="active" to="/store/login">
                <div className="b-col">
                  <div className="b-link">
                    <div className="b-icon">
                    <i className="fas fa-sign-in-alt icon-menu"></i>
                    </div>
                    <span>Log In</span>
                  </div>
                </div>
              </NavLink>
              <NavLink exact className="link" onClick={this.logOut} to="/">
                <div className="b-col">
                  <div className="b-link">
                    <div className="b-icon">
                    <i className="fas fa-power-off icon-menu"></i>
                    </div>
                    <span>Log Out</span>
                  </div>
                </div>
              </NavLink>
                           
            </div>
        )
    }
}


export default Sidebar;