import React, { useState } from 'react';
import { MDBCarousel, MDBCarouselInner, MDBContainer, MDBRow } from 'mdbreact';
import Project from './ProjectPage';
import initProjects from '../fixtures/projects';

const ProjectsPage = () => {
  const [projects, setProjects] = useState(initProjects);
  
  return (
    <>
    <MDBRow style={{marginTop: '100px'}}></MDBRow>
    <MDBContainer className="w-50 p-3">
      <MDBCarousel
        activeItem={1}
        length={projects.length}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          {projects.map((project) => {
            return <Project key={project} {...project}/>
          })}
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
    </>
  )
}

export default ProjectsPage;