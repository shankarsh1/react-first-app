import { Alert, Button, Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import axios from "axios";
import React, { Component } from 'react';
export class Layout extends Component {
    static propTypes = {};
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            users: []
        };
    }

    componentDidMount() {
        const url = "https://randomuser.me/api/1.3/?results=50";
        // GET request using axios with async/await
        /* const response =axios.get(url);
        this.setState({ users: response }) */
        axios.get(url)
            .then(response => {
                if (response.status == 200) {
                    console.log(response.data.results)
                    this.setState({ users: response.data.results, isLoaded: true })
                } else {
                    this.setState({ error: response.statusText });
                }

            })
            .catch(error => {
                this.setState({ error: error.message });
                console.error('There was an error!', error);
            });
    }

    render() {
        return <React.Fragment>
            {this.state.isLoaded ?
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Age</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            this.state.users.map((user, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{user.name.first}</td>
                                    <td>{user.cell}</td>
                                    <td>{user.dob.age}</td>
                                    <td>{user.location.city}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </Table> : <div>Looding...</div>}
            <div>
                {/*  <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="info">Info</Button>
                <Button variant="light">Light</Button>
                <Button variant="dark">Dark</Button>
                <Button variant="link">Link</Button>
                <Button as="input" type="reset" value="Reset" />
                <button className="btn btn-success" onClick={() => alert('Clicked')}>Click ME</button>
                <div className="mb-2">
                    <Button variant="primary" size="lg">
                        Large button
                    </Button>
                    <Button variant="secondary" size="lg">
                        Large button
                    </Button>
                </div>
                {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark',].map((variant, idx) => (
                    <Alert key={idx} variant={variant}>
                        This is a {variant} alert—check it out!
                    </Alert>
                ))} */}
            </div>
            
        </React.Fragment>;
    }
}

export default Layout;
