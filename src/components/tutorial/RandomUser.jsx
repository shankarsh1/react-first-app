import axios from "axios";
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import PostDataRequest from "./PostDataRequest";
import Snapshot from "./Snapshot";

class RandomUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      product: null,
      products: [],
      loading: true,
      error: false,
      error_message: "",
      user_id: 1,
    };
  }

  async componentDidMount() {
    this.getProductUserData();
    this.setState({ loading: false });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (
      (this.state.loading === false) &
      (this.state.user_id != prevState.user_id)
    ) {
      this.getProductUserData();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState.user_id);
    return nextState.user_id >= 6 ? false : true;
    //return false;
    //return true;
  }

  getNextUserPerson() {
    this.setState({ user_id: this.state.user_id + 1 });
  }

  async getProductUserData() {
    const userUrl = `https://randomuser.me/api/1.3/?results=1}`;
    //console.log(this.state.user_id);
    /* const response = await fetch(url);
    const data = await response.json(); */
    const userResponse = await axios(userUrl);
    const userData = await userResponse.data.results;
    console.log(userData);
    //Get Product data
    const productUrl = `https://fakestoreapi.com/products/${this.state.user_id}`;
    const productResponse = await axios(productUrl);
    const productData = await productResponse.data;
    console.log(productData);
    this.setState({
      users: userData,
      product: productData,
    });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading data...</div>;
    }
    return (
      <React.Fragment>
        <div>
          <Button variant="info" onClick={() => this.getNextUserPerson()}>
            Next Data
          </Button>
          <PostDataRequest />
          <div>
            {this.state.product ? (
              <Snapshot
                product={this.state.product}
                image={this.state.product.image}
              />
            ) : (
              <div></div>
            )}
          </div>
          {this.state.users.map((user, index) => {
            return (
              <div key={index}>
                <img src={user.picture.medium}></img>
                {user.name.title}, {user.name.first}, {user.name.last}
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default RandomUser;
