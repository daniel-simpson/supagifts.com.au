import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import Header from "../components/Header";

import "../styles/main.scss";

class FunnelTemplateWrapper extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
    menu: PropTypes.func,
    children: PropTypes.func
  };

  render() {
    const { children, data } = this.props;

    return (
      <div>
        <Helmet title="supa gifts australia" />
        <Header />

        <main
          style={{
            margin: "0 auto",
            paddingTop: 0
          }}
        >
          {children()}
        </main>
      </div>
    );
  }
}

export default FunnelTemplateWrapper;
