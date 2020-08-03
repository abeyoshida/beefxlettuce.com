import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class CovidChartModalPage extends Component {
// state = {
//   modal14: false
// }

// toggle = nr => () => {
//   let modalNumber = 'modal' + nr
//   this.setState({
//     [modalNumber]: !this.state[modalNumber]
//   });
// }

render() {
  return (
      <MDBContainer>
        
        <MDBModal isOpen={this.props.modal} toggle={this.props.toggle} centered>
          <MDBModalHeader toggle={this.props.toggle}>U.S. Covid Cases Minus NY & NJ</MDBModalHeader>
          <MDBModalBody>
            <img src="./img/covid-cases-us-minus-nynj-az-tx-fl-ny-nj.png" alt="US Covid Cases minus NY/NJ"/>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="primary" onClick={this.props.toggle}>Close</MDBBtn>
            
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default CovidChartModalPage;