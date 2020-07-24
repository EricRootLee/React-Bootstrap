import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'

class AlertsClass extends Component {
    render() {
        return (

            <div>
                <Alert variant="success">
                    <Alert.Heading>Hey NIce heading</Alert.Heading>
                    <p>Ea ut et sint sunt elit consequat non commodo dolore.</p>
                    <hr />

                    <p classNameb="mb-0">hello</p>

                </Alert>


                {/* [
                'primary',
                'danger',
                'light',
                'dark'
                ].map((variant, id) => (
                <Alert key={id} variant={variant}>
                    This is a {variant} alert of id {id} with {' '}
                    <Alert.Link href="#"> an example  lINK</Alert.Link>
                </Alert>
            )) */}





            </div>
        )
    }
}
export default AlertsClass