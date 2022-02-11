import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import "./Footer.css";

class Footer extends Component {
    render() {
        return (<>
            <Row className="mx-0">
                <Button as={Col} variant="primary">Button #1</Button>
                <Button as={Col} variant="secondary" className="mx-2">Button #2</Button>
                <Button as={Col} variant="success">Button #3</Button>
            </Row>
            <footer className="footer mt-auto py-3 bg-light">
                <div className="container">
                    <span className="text-muted">Place sticky footer content here.</span>
                </div>
            </footer>
        </>
        );
    }
}

export default Footer;