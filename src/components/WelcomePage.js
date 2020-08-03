import React, { useState } from 'react';
import { MDBView, MDBMask, MDBContainer, MDBRow, MDBCol, MDBAnimation, MDBIcon } from 'mdbreact';
import CovidChartModalPage from './CovidChartModalPage';

const WelcomePage = (props) => {
  const [modal14, setModal14] = useState(false);
  const toggle = () => {
    setModal14(() => !modal14);
    console.log('toggle modal14: ', modal14);
  };
  
  return (
      <MDBView>
        
        <MDBMask className='white-text gradient' />
        <MDBContainer
          style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
          className='d-flex justify-content-center white-text align-items-center'
        >
          <MDBRow>
            <MDBCol md='6' className='text-center text-md-left mt-xl-5 mb-5' style={{ width: '500px'}}>
              <MDBAnimation type='fadeInLeft' delay='.3s'>
                <h1 className='h1-responsive  mt-sm-5'>
                  escape To New York
                </h1>
                <hr className='hr-light' />
                <h6 className='mb-4'>
                    The safest city in the world. <button onClick={toggle} ><MDBIcon  icon="chart-line" /></button>
                </h6>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md='6' xl='5' className='mt-xl-5'>
              <MDBAnimation type='fadeInRight' delay='.3s'>
                <div style={{width: '440px'}}></div>
                
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <CovidChartModalPage modal={modal14} toggle={toggle}/>
      </MDBView>
      
    );
};

export default WelcomePage;