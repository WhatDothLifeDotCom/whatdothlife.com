import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom'
import { Row, Col, Container, Nav, NavItem, NavLink, Navbar, NavbarToggler, Collapse} from 'reactstrap';
import $ from 'jquery';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import logo from  '../../logo.svg';

library.add(faBars)

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this)

    this.state = {
      collapsed: true,
      dropdownOpen: false,
      isMobileMenuOpen: false,
      width: 0
    };
  }

  

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  toggle() {
    this.state.dropdownOpen ? $("#navbar-id").css("border-bottom", "1px solid white") : $("#navbar-id").css("border-bottom", "1px solid black");

    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  toggleMobileMenu() {
    this.setState({
      isMobileMenuOpen: !this.state.isMobileMenuOpen
    });
  }


  updateDimensions() {
    this.setState({ width: $(window).width() });
  } 

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }


  renderLogo() {
    return(
      <Container>
        <Row className='logo'>
          <Col xs='12' sm='12' md='12' lg='12'>
            <embed src={logo} alt='logo' style={{ width: "10%", height: "auto", paddingTop: "24px" }} />
          </Col>
        </Row>
      </Container>
    )
  }


  renderBigNav() {
    return (
      <div className='text-dark'>
        <Container>
            <Navbar className='navbig'>
              <Nav>
                <NavItem>
                  <NavLink activeClassName='active' tag={RRNavLink} exact to='/'>
                    <h3>Home</h3>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink activeClassName='active' tag={RRNavLink} exact to='/about'>
                    <h3>About</h3>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink activeClassName='active' tag={RRNavLink} exact to='/releases'>
                    <h3>Releases</h3>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink activeClassName='active' tag={RRNavLink} exact to='/video'>
                    <h3>Video</h3>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink activeClassName='active' tag={RRNavLink} exact to='/radio'>
                    <h3>Radio</h3>
                  </NavLink>
                </NavItem>
              </Nav>
            </Navbar>
          </Container>
      </div>
    );
  } 

  renderMobileNav() {
    return(
      <Navbar>
      <NavbarToggler onClick={this.toggleNavbar} className="mx-auto">
        <FontAwesomeIcon style={{ width: "10%", height: "auto" }} icon="bars" />
      </NavbarToggler>
      <Collapse isOpen={!this.state.collapsed} navbar>
        <Nav>
          <Row style={{textAlign: 'left'}}>
            <Col style={{paddingTop: '12px'}}>
              <NavItem style={{paddingTop: '12px'}}>
                <NavLink activeClassName='active' tag={RRNavLink} onClick={this.toggleNavbar} exact to='/'>
                  <h5>Home</h5>
                </NavLink> 
              </NavItem>
              <NavItem style={{paddingTop: '12px'}}>
                <NavLink activeClassName='active' tag={RRNavLink} onClick={this.toggleNavbar} exact to='/releases'>
                  <h5>Releases</h5>
                </NavLink> 
              </NavItem>
              <NavItem style={{paddingTop: '12px'}}>
                <NavLink activeClassName='active' tag={RRNavLink} onClick={this.toggleNavbar} exact to='/video'>
                  <h5>Video</h5>
                </NavLink> 
              </NavItem>
              <NavItem style={{paddingTop: '12px'}}>
                <NavLink activeClassName='active' tag={RRNavLink} onClick={this.toggleNavbar} exact to='/radio'>
                  <h5>Radio</h5>
                </NavLink> 
              </NavItem>
              <NavItem style={{paddingTop: '12px'}}>
                <NavLink activeClassName='active' tag={RRNavLink} onClick={this.toggleNavbar} exact to='/contact'>
                  <h5>Contact</h5>
                </NavLink> 
              </NavItem>
            </Col>
          </Row>
        </Nav>
      </Collapse>
    </Navbar>
    )
  }

  renderMenu() {
    if (this.state.width <= 767) {
      return (this.renderMobileNav());
    } else {
      return (this.renderBigNav());
    }
  }


  render() {
    return(
      <div>
        {this.renderLogo()}
        {this.renderMenu()}
      </div>

    )
  }
}
export default Header