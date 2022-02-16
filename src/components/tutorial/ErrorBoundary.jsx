import React, { Component } from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    return (
      <div>
        {this.state.hasError ? "some thing went wrong" : this.props.children}
      </div>
    );
  }
}

ErrorBoundary.propTypes = {};

export default ErrorBoundary;
