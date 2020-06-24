import React, { Component } from 'react';
import Navbar from "../Navbar/Navbar";
import '../Navigation/Navigation.css'

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      navbarOpen: false
     }
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() { 
    return (
      <React.Fragment>
        <Navbar navbarState={this.state.navbarOpen} handleNavbar={this.handleNavbar}/>
      </React.Fragment>
      );
  }
}
 
export default Navigation;
