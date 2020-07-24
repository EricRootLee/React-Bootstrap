import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Media } from 'react-bootstrap';

class MediaClass extends Component {

    render() {
        return (
            <Media>
                <img
                    width={64}
                    height={64}
                    src="https://lh3.googleusercontent.com/proxy/HSppeTVlQb4J0DhLWPc0afmdV001MVDzjpNekpQq8aruesAngAT0WfIN7xiSiKxHwAEq2TAdWTEDjSGMXK-xW_ode04AicArZVXN68c"
                    alt="IMage HERE"
                />

                <Media.Body>
                    <h5>Media Heading</h5>
                    <p>Non culpa ipsum sint irure nisi adipisicing incididunt commodo deserunt tempor ad non ex nostrud.</p>
                </Media.Body>
            </Media>
        );
    }
}

export default MediaClass