import React, { Component } from "react";
import { MDBCollapse, MDBContainer, MDBIcon, MDBLink,
         MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, 
         MDBTypography } from "mdbreact";
import ContactModal from './ContactModal';
import ResumeModal from './ResumeModal';
import PortfolioModal from './PortfolioModal';

class Navbar extends Component {
    state = {
        isOpen: false,
        modal1: false,
        modal2: false,
        modal3: false,
        navbarOn: this.props.navbarOn
    };
    
    toggleCollapse = () => {
        this.setState({ 
            isOpen: !this.state.isOpen
        });
    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        console.log('1 this.state: ', this.state);
        this.setState({
          [modalNumber]: !this.state[modalNumber]
        });
        console.log('2 this.state: ', this.state);
      }
    showPortfolio = () => {
        this.toggle(2);
    };
    setNavbarOnState = (navbarOn) => {
        this.setState({
            navbarOn
        });
    };
    render() {
        return (
            <div style={{marginBottom: '50px'}}>
                <MDBNavbar className="shadow-box-example z-depth-3" color="elegant-color-dark" fixed="top" dark expand="md" scrolling transparent>
                    <MDBContainer>
                        <MDBNavbarBrand>
                            <MDBTypography style={{marginTop: '4px'}} className="grey-text" tag="h4">beefxlettuce</MDBTypography>
                        </MDBNavbarBrand>
                        <MDBNavbarToggler onClick={this.toggleCollapse} />
                        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem active={(this.state.navbarOn === 'home') ? true : false}>
                                <MDBLink to="/" onClick={() => this.setNavbarOnState('home')}>Home</MDBLink>
                            </MDBNavItem>
                            <MDBNavItem active={(this.state.navbarOn === 'projects') ? true : false}>
                                <MDBLink to="/projects" onClick={() => this.setNavbarOnState('projects')}>Projects</MDBLink>
                            </MDBNavItem>
                            <MDBNavItem active={(this.state.navbarOn === 'resume') ? true : false}>
                                {/*<MDBLink to="#" onClick={this.toggle(2)}>Resume</MDBLink>*/}
                                <MDBLink to="/resume" onClick={() => this.setNavbarOnState('resume')}>Resume</MDBLink>
                            </MDBNavItem>
                            <MDBNavItem active={(this.state.navbarOn === 'contact') ? true : false}>
                                <MDBLink to="#" onClick={this.toggle(3)}>Contact</MDBLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                            <MDBNavLink className="waves-effect waves-light" to="#!">
                                <MDBIcon fab size="lg" icon="github" />
                            </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                            <MDBNavLink className="waves-effect waves-light" to="#!">
                                <MDBIcon fab size="lg" icon="linkedin" />
                            </MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                        </MDBCollapse>
                        
                        <PortfolioModal modal={this.state.modal1} toggle={this.toggle}/>
                        <ResumeModal modal={this.state.modal2} toggle={this.toggle}/>
                        <ContactModal modal={this.state.modal3} toggle={this.toggle}/>
                    </MDBContainer>
                </MDBNavbar>
            </div>
        );
    }
}

export default Navbar;