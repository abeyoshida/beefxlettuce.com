import React from 'react';
import {MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";

const ResumeModal = (props) => {
    return (
        <MDBModal isOpen={props.modal} toggle={props.toggle(2)} size="md" centered>
            <MDBModalHeader toggle={props.toggle(2)}>Resume</MDBModalHeader>
            <MDBModalBody>
                Abram Yoshida
            </MDBModalBody>
            <MDBModalFooter>
                <MDBBtn color="elegant" onClick={props.toggle(2)}>Close</MDBBtn>
                
            </MDBModalFooter>
        </MDBModal>
    );
};

export default ResumeModal;