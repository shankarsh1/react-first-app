import axios from "axios";
import React, { PureComponent, Component } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

class RefComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "morpheus",
      job: "leader",
      count_increment: 0,
    };
    this.inputTitleRef = React.createRef();
    this.inputAgeRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.inputTitleRef.current, this.inputAgeRef.current);
    this.inputTitleRef.current.style = "background-color:pink";
    this.inputTitleRef.current.focus();
    this.inputAgeRef.current.style = "background-color:orange";
    //this.inputAgeRef.current.focus();
    this.inputAgeRef.current.value = "1";
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
        <br />
        count:{this.state.count_increment}
        <br />
        <br />
        <Button variant="info" onClick={() => this.incrementHandler()}>
          increase
        </Button>
        <br />
        <br />
        RefComponent
        <br />
        <br />
        <input type="text" name="title" ref={this.inputTitleRef} />
        <input type="text" name="age" ref={this.inputAgeRef} />
      </div>
    );
  }
}

RefComponent.propTypes = {
  title: PropTypes.string,
};

RefComponent.defaultProps = {
  title: "post user data",
};

export default RefComponent;
