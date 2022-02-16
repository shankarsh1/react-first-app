import axios from "axios";
import React, { PureComponent, Component } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

class PostDataRequest extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "morpheus",
      job: "leader",
      count_increment: 0,
    };
  }

  async postDataFetchApi(url = "", data = "", method = "POST") {
    const response = await fetch(url, {
      method: method,
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    //return { response: response, data: response.json() };
    return response.json();
  }

  async postDataAxios(url = "", data = "", method = "POST") {
    const response = await axios({
      method: method,
      url: url,
      data: data,
    });
    return response;
    /* axios({
      method: "post",
      url: url,
      data: data,
    })
      .then(function (response) {
        console.log("axios", response, response.data);
      })
      .catch(function (error) {
        console.log("axios", error);
      }); */
  }

  postHandler() {
    const url = "https://reqres.in/api/users";
    const data = {
      firstName: "Uma",
      lastName: "Shankar",
    };
    this.postDataAxios(url, data)
      .then(function (response) {
        console.log("axios", response, response.data);
      })
      .catch(function (error) {
        console.log("axios", error);
      });

    this.postDataFetchApi(url, data)
      .then((response) => {
        console.log("Fetch", response); // JSON data parsed by `data.json()` call
      })
      .catch(function (error) {
        console.log("Fetch", error);
      });
  }

  incrementHandler = () => {
    console.log("incrementHandler");
    this.setState({ count_increment: 1 });
  };

  render() {
    console.log("render");
    return (
      <div>
        <Button variant="primary" onClick={() => this.postHandler()}>
          {this.props.title}
        </Button>
        <br />
        count:{this.state.count_increment}
        <br></br>
        <ImpureComponent count={this.state.count_increment} />
        <Button variant="info" onClick={() => this.incrementHandler()}>
          increase
        </Button>
      </div>
    );
  }
}

PostDataRequest.propTypes = {
  title: PropTypes.string,
};

PostDataRequest.defaultProps = {
  title: "post user data",
};

class ImpureComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "morpheus",
      job: "leader",
      count_increment: 0,
    };
  }

  render() {
    console.log("render ImpureComponent");
    return <div>Impure: {this.props.count}</div>;
  }
}

export default PostDataRequest;
