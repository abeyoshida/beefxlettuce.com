import React from 'react';
import { MDBModal, MDBCol, MDBCard, MDBView, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBIcon } from "mdbreact";

const ContactModal = (props) => {
    return (
        <MDBModal isOpen={props.modal} toggle={props.toggle(3)} size="md" centered>
            <MDBCol md='12'>
                <MDBCard wide cascade>
                    <MDBView cascade>
                        <MDBCardImage
                            hover
                            overlay='white-slight'
                            className='card-img-top'
                            src='img/IMG_0219.JPEG'
                            alt='Card cap'
                        />
                    </MDBView>

                    <MDBCardBody cascade className='text-center'>
                        <MDBCardTitle className='card-title' style={{marginBottom: '6px'}}>
                            <strong>Abram Yoshida</strong>
                        </MDBCardTitle>

                        <p className='font-weight-bold blue-text' style={{marginBottom: '0'}}>Senior Front End Web Developer</p>

                        <MDBCardText>
                        abeyoshida@gmail.com{' '}
                        </MDBCardText>
                        <MDBCardText style={{textAlign: 'left'}}>
                            Senior Front-End Engineer with a rare combination of artistic and technical expertise with an
                            expert grasp of client side browser technologies.
                        </MDBCardText>

                        <MDBCol md='12' className='d-flex justify-content-center'>
                        <a href='https://www.linkedin.com/in/abeyoshida/' target="_blank" rel="noopener noreferrer" className='px-2 fa-lg li-ic'>
                            <MDBIcon fab icon='linkedin-in' alt="linkedIn"></MDBIcon>
                        </a>

                        <a href='https://github.com/abeyoshida/beefxlettuce.com' target="_blank" rel="noopener noreferrer" className='px-2 fa-lg tw-ic'>
                            <MDBIcon fab icon='github' alt="GitHub"></MDBIcon>
                        </a>

                        </MDBCol>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBModal>
    );
};

export default ContactModal;