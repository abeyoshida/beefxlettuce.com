import React, { useState } from 'react';
import { MDBCarousel, MDBCarouselInner, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Project from './ProjectPage';
import initProjects from '../fixtures/projects';

const ProjectsPage = () => {
  const [projects] = useState(initProjects);
  
  return (
    <>
    <MDBRow style={{marginTop: '100px'}}></MDBRow>

    <MDBContainer>
      <MDBRow>
        <MDBCol md='2'></MDBCol>
        <MDBCol md='8'>
        <MDBCarousel
          activeItem={1}
          length={projects.length}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
          slide
        >
          <MDBCarouselInner>
            {projects.map((project) => {
              return <Project key={project.id} {...project}/>
            })}
          </MDBCarouselInner>
        </MDBCarousel>
        </MDBCol>
        <MDBCol md='2'></MDBCol>
      </MDBRow>
      
    </MDBContainer>
    </>
  )
}

export default ProjectsPage;