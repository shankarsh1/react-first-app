import axios from "axios";
import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Dummy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      product: [],
      loading: true,
      error: false,
      error_message: "",
      user_id: 1,
    };
  }

  async componentDidMount() {
    const userUrl = `https://Dummy.me/api/1.3/?results=${this.state.user_id}`;
    //console.log(this.state.user_id);
    /* const response = await fetch(url);
    const data = await response.json(); */
    const userResponse = await axios(userUrl);
    const userData = await userResponse.data;

    //Get Product data
    const productUrl = `https://fakestoreapi.com/products/${this.state.user_id}`;
    const productResponse = await axios(productUrl);
    const productData = await productResponse.data;
    console.log(productData);
    //this.setState({ product: productData.results, loading: false });
  }

  componentDidUpdate(prevProps, prevState) {
    if (import axios from "axios";
    import React, { Component } from "react";
    import { Button } from "react-bootstrap";
    
    class Dummy extends Component {
      constructor(props) {
        super(props);
        this.state = {
          users: [],
          product: [],
          products: [],
          loading: true,
          error: false,
          error_message: "",
          user_id: 1,
        };
      }
    
      async componentDidMount() {
        const userUrl = `https://Dummy.me/api/1.3/?results=${this.state.user_id}`;
        //console.log(this.state.user_id);
        /* const response = await fetch(url);
        const data = await response.json(); */
        const userResponse = await axios(userUrl);
        const userData = await userResponse.data;
    
        //Get Product data
        const productUrl = `https://fakestoreapi.com/products/${this.state.user_id}`;
        const productResponse = await axios(productUrl);
        const productData = await productResponse.data;
        console.log(productData);
        //this.getProduct();
        this.setState({ users: userData, product: productData, loading: false });
      }
    
      componentDidUpdate(prevProps, prevState) {
        if (
          (this.state.loading === false) &
          (this.state.user_id != prevState.user_id)
        ) {
          this.getProduct();
        }
      }
    
      getNextUserPerson() {
        this.setState({ user_id: this.state.user_id + 1 });
      }
    
      getProduct(isSingle = true) {
        var productUrl = `https://fakestoreapi.com/products`;
        if (isSingle) {
          productUrl = `https://fakestoreapi.com/products/${this.state.user_id}`;
        }
        axios
          .get(productUrl)
          .then(function (response) {
            if (isSingle) {
              this.setState({ product: response.data });
            } else {
              this.setState({ products: response.data });
            }
            console.log(`isSingle,${isSingle},${response.data}`);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
        /* const productResponse = await axios(productUrl);
        const productData = await productResponse.data; 
        console.log(productData);
        return productData;*/
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
              {this.state.users.map((user, index) => {
                return (
                  <div key={index}>
                    {user.name.title}, {user.name.first}, {user.name.last}
                    <img src={user.picture.medium}></img>
                  </div>
                );
              })}
            </div>
          </React.Fragment>
        );
      }
    }
    
    export default Dummy;
    
      (this.state.loading === false) &
      (this.state.user_id != prevState.user_id)
    ) {
      const data = this.getProduct();
      this.setState({ users: data.results, loading: false });
    }
  }

  getNextUserPerson() {
    this.setState({ user_id: this.state.user_id + 1 });
  }

  getProduct(isSingle = true) {
    if (isSingle) {
      const productUrl = `https://fakestoreapi.com/products/${this.state.user_id}`;
    } else {
      const productUrl = `https://fakestoreapi.com/products`;
    }
    const productResponse = await axios(productUrl);
    const productData = await productResponse.data;
    console.log(productData);
    return productData;
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
          {this.state.users.map((user, index) => {
            return (
              <div key={index}>
                {user.name.title}, {user.name.first}, {user.name.last}
                <img src={user.picture.medium}></img>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Dummy;
