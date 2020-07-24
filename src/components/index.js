import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import MediaClass from './media'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

class Index extends Component {

  render() {
    return (
      <Container fluid="md" >
        <MediaClass />
      </Container>
    );
  }
}

export default Index