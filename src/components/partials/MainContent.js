import React, { Component } from "react";
import PropTypes from "prop-types";
class MainContent extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    return (
      
        <main role="main">{this.props.children}</main>
    );
  }
}

MainContent.propTypes = {};

export default MainContent;
