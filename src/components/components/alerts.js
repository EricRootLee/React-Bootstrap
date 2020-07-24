import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'

class AlertsClass extends Component {
    render() {
        return (
            [
                'primary',
                'danger',
                'light',
                'dark'
            ].map((variant, id) => (
                <Alert key={id} variant={variant}>
                    This is a {variant} alert of id {id} with { ' '}
                    <Alert.Link href="#"> an example  lINK</Alert.Link>
                </Alert>
            ))
        )
    }
}
export default AlertsClass