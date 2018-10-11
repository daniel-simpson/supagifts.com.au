import React from "react";
import Helmet from "react-helmet";

import Header from "../components/Header";

import "../styles/main.scss";

class FunnelTemplateWrapper extends React.PureComponent {
  render() {
    const { children } = this.props;

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
          {children}
        </main>
      </div>
    );
  }
}

export default FunnelTemplateWrapper;
