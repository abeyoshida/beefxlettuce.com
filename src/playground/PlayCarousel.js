import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer,
    MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBIcon } from "mdbreact";

const PlayCarousel = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
          <MDBCard narrow style={{marginBottom: '20px'}}>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src='img/site_bearstearns_630w.jpg'
              alt='Bearstearns'
            />
          </MDBView>

          <MDBCardBody>
            <h5 className='pink-text'>
              <MDBIcon icon='utensils' /> Financial
            </h5>

            <MDBCardTitle className='font-weight-bold'>
              Bearstearns
            </MDBCardTitle>
            

            <MDBCardText>
            Bearstearns.com was the corporate website of the former Bear Stearns, Inc., a global investment bank and securities trading and brokerage firm, until its collapse and sale to JPMorgan Chase in 2008. My responsibilities included creation of CSS templates, Javascript templates for the site navigation, administration of Broadvision app server. The link below points to a pared down version bearstearns.com website which now exists as a division of J.P. Morgan.
            </MDBCardText>

            {/*<MDBBtn color='unique'>Button</MDBBtn>*/}
          </MDBCardBody>
        </MDBCard>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default PlayCarousel;