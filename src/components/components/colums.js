import React, {Component} from 'react'
import {Col,Row} from 'react-bootstrap'

class Column extends Component {
    render() {
        return (
            <div>

                <Row className="justify-content-md-c">
                    <Col xs={4} md={4} lg={1}>
                        xs=6 md=4
                    </Col>
                    <Col xs={4} md={4}>
                        xs=6 md=4
                       </Col>
                    <Col xs={4} md={4}>
                        xs=6 md=4
                     </Col>
                </Row>
                <Row>
                    <Col xs={6}>xs=6</Col>
                    <Col xs={6}>xs=6</Col>
                </Row>

            </div>
        )
    }
}

export default Column