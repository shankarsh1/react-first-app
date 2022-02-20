import React, { Component } from "react";
const CounterLogic = (WrappedComponent) => {
  class CounterLogic extends Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }

    incrementCountHandler = () => {
      this.setState({ count: this.state.count + 1 });
    };

    render() {
      return (
        <>
          <WrappedComponent
            count={this.state.count}
            incrementCountHandler={this.incrementCountHandler}
            name={this.props.name}
          />
        </>
      );
    }
  }
  return CounterLogic;
};
export default CounterLogic;
