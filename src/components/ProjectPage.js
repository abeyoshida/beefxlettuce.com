import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCarouselItem, MDBView } from 'mdbreact';
import ShowMoreText from 'react-show-more-text';
import IconSelect from './IconSelect';

const Project = ({id, sector, name, url, img, tools, desc}) => {
    const executeOnClick = (isExpanded) => {
        console.log(isExpanded);
    }
    
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
                    <h5 className={(sector === 'Financial') ? 'blue-text' : 'red-text'}>
                        <IconSelect sector={sector}/> {sector}
                    </h5>

                    <MDBCardTitle className='font-weight-bold' style={{marginBottom: '0'}}>
                        {name}
                    </MDBCardTitle>

                    <MDBCardText>
                        <em>Site Responsibilities:</em> {tools}
                        {url && <p>Website: <a href={url} target="_blank" rel="noopener noreferrer">{url}</a></p>
                        }
                    </MDBCardText>
                    
                    <MDBCardText>
                        <ShowMoreText
                            lines={3}
                            more='Show more'
                            less='Show less'
                            anchorClass=''
                            onClick={executeOnClick}
                            expanded={false}
                            width={0}
                        >
                        {desc}        
                        </ShowMoreText>
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </MDBCarouselItem>
    );
};

export default Project;