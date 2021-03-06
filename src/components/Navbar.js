import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { MDBCollapse, MDBContainer, MDBIcon, MDBLink,
         MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, 
         MDBTypography, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import ContactModal from './ContactModal';
import ResumeModal from './ResumeModal';
import PortfolioModal from './PortfolioModal';
import { isMobile } from 'react-device-detect';

class Navbar extends Component {
    state = {
        isOpen: false,
        modal1: false,
        modal2: false,
        modal3: false,
        navbarOn: '/'
    };
    
    toggleCollapse = () => {
        this.setState({ 
            isOpen: !this.state.isOpen
        });
    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
          [modalNumber]: !this.state[modalNumber],
          isOpen: !this.state.isOpen
        });
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
                                        <MDBLink 
                                            to="/" 
                                            onClick={() => {
                                                this.setNavbarOnState('home');
                                                this.toggleCollapse();
                                            }}>Home</MDBLink>
                                    </MDBNavItem>
                                    {/*<MDBNavItem active={(this.state.navbarOn === 'projects') ? true : false}>
                                        <MDBLink to="/projects" onClick={() => this.setNavbarOnState('projects')}>Projects</MDBLink>
                                    </MDBNavItem>*/}
                                    <MDBNavItem active={(this.state.navbarOn === 'projects') ? true : false}>
                                        <MDBDropdown>
                                            <MDBDropdownToggle nav caret>
                                                <span className="mr-2">Projects</span>
                                            </MDBDropdownToggle>
                                            <MDBDropdownMenu>
                                                
                                                <MDBDropdownItem>
                                                    <Link 
                                                        to="/newprojects" 
                                                        onClick={() => {
                                                            this.setNavbarOnState('projects');
                                                            this.toggleCollapse();
                                                        }}>Current</Link>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem>
                                                    <Link 
                                                        to= "/projects" 
                                                        onClick={() => {
                                                            this.setNavbarOnState('projects');
                                                            this.toggleCollapse();
                                                        }}>Archive</Link>
                                                </MDBDropdownItem>
                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </MDBNavItem>
                                    <MDBNavItem active={(this.state.navbarOn === 'resume') ? true : false}>
                                        {/*<MDBLink to="#" onClick={this.toggle(2)}>Resume</MDBLink>*/}
                                        {
                                            (isMobile) 
                                            ?
                                            <a  className="nav-link" 
                                                href="pdf/Abram_Yoshida_Resume.pdf" 
                                                target="_blank" 
                                                onClick={() => {
                                                    this.setNavbarOnState('resume');
                                                    this.toggleCollapse();
                                                }}>Resume</a>
                                            :
                                            <MDBLink 
                                                to="/resume" 
                                                onClick={() => {
                                                    this.setNavbarOnState('resume');
                                                    this.toggleCollapse();
                                                }}>Resume</MDBLink>
                                        }
                                    </MDBNavItem>
                                    {/*<MDBNavItem active={(this.state.navbarOn === 'contact') ? true : false}>
                                        <MDBLink 
                                            to="#" 
                                            onClick={this.toggle(3)}>Contact</MDBLink>
                                    </MDBNavItem>*/}
                                    
                                </MDBNavbarNav>
                                <MDBNavbarNav right>
                                    <MDBNavItem>
                                        <MDBLink to={{ pathname: "https://github.com/abeyoshida/beefxlettuce.com" }} target="_blank" rel="noopener noreferrer" className="waves-effect waves-light">
                                            <MDBIcon fab size="lg" icon="github" title="GitHub"/>
                                        </MDBLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBLink to={{ pathname: "https://www.linkedin.com/in/abeyoshida/" }} target="_blank" rel="noopener noreferrer" className="waves-effect waves-light">
                                            <MDBIcon fab size="lg" icon="linkedin" title="linkedIn"/>
                                        </MDBLink>
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