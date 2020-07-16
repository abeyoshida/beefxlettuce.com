import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCarouselItem, MDBView, MDBIcon } from 'mdbreact';

const Project = ({id, sector, name, img, tools, desc}) => {
    return (
        <MDBCarouselItem itemId={id}>
            <MDBCard narrow style={{marginBottom: '20px'}}>
                <MDBView cascade>
                    <MDBCardImage
                    hover
                    overlay='white-slight'
                    className='card-img-top'
                    src={`img/${img}`}
                    alt={name}
                    />
                </MDBView>

                <MDBCardBody>
                    <h5 className='pink-text'>
                    <MDBIcon icon='utensils' /> {sector}
                    </h5>

                    <MDBCardTitle className='font-weight-bold'>
                    {name}
                    </MDBCardTitle>
                    

                    <MDBCardText>
                    {desc}
                    </MDBCardText>

                    {/*<MDBBtn color='unique'>Button</MDBBtn>*/}
                </MDBCardBody>
            </MDBCard>
        </MDBCarouselItem>
    );
};

export default Project;