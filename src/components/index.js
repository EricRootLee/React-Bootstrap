import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Column from './components/colums'
import MediaClass from './media'
import AlertsClass from './components/alerts'


class Index extends Component {

  render() {
    return (
      <Container fluid="md" >
        <Column />
        <MediaClass />
        <AlertsClass />
      </Container>
    );
  }
}

export default Index