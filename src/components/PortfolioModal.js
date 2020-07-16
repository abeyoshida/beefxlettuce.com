import React from 'react';
import {MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";

const PortfolioModal = (props) => {
    return (
        <MDBModal isOpen={props.modal} toggle={props.toggle(1)} side position="bottom-right">
            <MDBModalHeader toggle={props.toggle(1)}>Portfolio</MDBModalHeader>
            <MDBModalBody>
                <ul>
                    <li>Financial Industry
                        <ul>
                            <li>Bearstearns</li>
                            <li>Cash Management Group</li>
                            <li>BestMarkets</li>
                        </ul>
                    </li>
                    <li>Entertainment Industry
                        <ul>
                            <li>Caymichael Patten Studio</li>
                            <li>HB Studio</li>
                            <li>Ty-Ranne Grimstad</li>
                        </ul>
                    </li>
                    <li>Other
                        <ul>
                            <li>American Buddhist Study Center</li>
                            <li>Eat The Boat</li>
                        </ul>
                    </li>
                </ul>
            </MDBModalBody>
            <MDBModalFooter>
                <MDBBtn color="elegant" onClick={props.toggle(1)}>Close</MDBBtn>
            </MDBModalFooter>
        </MDBModal>
    );
};

export default PortfolioModal;