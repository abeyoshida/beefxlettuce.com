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
                        <MDBCardTitle className='card-title'>
                        <strong>Abram Yoshida</strong>
                        </MDBCardTitle>

                        <p className='font-weight-bold blue-text'>Senior Front End Web Developer</p>

                        <MDBCardText>
                        abeyoshida@gmail.com{' '}
                        </MDBCardText>

                        <MDBCol md='12' className='d-flex justify-content-center'>
                        <a href='!#' className='px-2 fa-lg li-ic'>
                            <MDBIcon fab icon='linkedin-in'></MDBIcon>
                        </a>

                        <a href='!#' className='px-2 fa-lg tw-ic'>
                            <MDBIcon fab icon='github'></MDBIcon>
                        </a>

                        <a href='!#' className='px-2 fa-lg fb-ic'>
                            <MDBIcon fab icon='facebook-f'></MDBIcon>
                        </a>
                        </MDBCol>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBModal>
    );
};

export default ContactModal;