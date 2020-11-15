import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavbarText, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

import { withRouter } from 'react-router-dom';

import AuthenticationService from '../services/AuthenticationService';

class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this.toggle = this.toggle.bind(this);

    this.state = {
      showUser: false,
      showPM: false,
      showAdmin: false,
      username: undefined,
      login: false
    };
  }

  componentDidMount() {
    const user = AuthenticationService.getCurrentUser();

    if (user) {
      const roles = [];

      user.authorities.forEach(authority => {
        roles.push(authority.authority)
      });
  
      this.setState({
        showUser: true,
        showPM: roles.includes("ROLE_PM") || roles.includes("ROLE_ADMIN"),
        showAdmin: roles.includes("ROLE_ADMIN"),
        login: true,
        username: user.username
      });
    }
  }

  signOut = () => {
    AuthenticationService.signOut();
    this.props.history.push('/home');
    window.location.reload();
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return <Navbar color="dark" dark expand="md">
      <NavbarBrand tag={Link} to="/home">Loizenai.com</NavbarBrand>
      <Nav className="mr-auto">
        <NavLink href="/home">Home</NavLink>
        {this.state.showUser && <NavLink href="/user">User</NavLink>}
        {this.state.showPM && <NavLink href="/pm">PM</NavLink>}
        {this.state.showAdmin && <NavLink href="/admin">Admin</NavLink>}
      </Nav>
      <NavbarToggler onClick={this.toggle}/>
      <Collapse isOpen={this.state.isOpen} navbar>
        {
          this.state.login ? (
            <Nav className="ml-auto" navbar>
              <NavItem>
                  <NavbarText>
                    Signed in as: <a href="/profile">{this.state.username}</a>
                  </NavbarText>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={this.signOut}>SignOut</NavLink>
              </NavItem>
            </Nav>                 
          ) : (
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/signin">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signup">SignUp</NavLink>
              </NavItem>
            </Nav>
          )
        }
      </Collapse>
    </Navbar>;
  }
}

export default withRouter(AppNavbar);