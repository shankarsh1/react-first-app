import React, { Component } from "react";

import { Row, Col, Button, Modal, closeButton } from "react-bootstrap";
import ModalHeader from 'react-bootstrap/ModalHeader';
import PropTypes from "prop-types";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { show: false };
    }

    componentWillMount() { }

    componentDidMount() { }

    componentWillReceiveProps(nextProps) { }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) { }

    componentDidUpdate(prevProps, prevState) { }

    componentWillUnmount() { }

    handleShow(param) {
        alert("show");
        //this.setState({ show: true });
    }
    handleClose(param) {
        this.setState({ show: false });
    }
    handleToggle(param) {
        this.setState({ show: !this.state.show });
    }
    render() {
        return (
            <>
                <Button variant="primary" onClick={() => this.handleShow()}>
                    Launch demo modal
                </Button>
                <Button onClick={() => this.handleToggle()}>Handle Toggle Model</Button>
                <Modal show={this.state.show} onHide={() => this.handleClose()}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woo hoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.handleClose()}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => this.handleClose()}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Row className="mx-0">
                    <Button as={Col} variant="primary">
                        Button #1
                    </Button>
                    <Button as={Col} variant="secondary" className="mx-2">
                        Button #2
                    </Button>
                    <Button as={Col} variant="success">
                        Button #3
                    </Button>
                </Row>
                <footer className="footer mt-auto py-3 bg-light">
                    <div className="container">
                        <span className="text-muted">
                            Place sticky footer content here.
                        </span>
                    </div>
                </footer>
            </>
        );
    }
}

Footer.propTypes = {};

export default Footer;
