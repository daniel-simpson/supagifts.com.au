import React from "react";
import Link from "gatsby-link";
import * as PropTypes from "prop-types";

import "./hero-banner.scss";

class HeroBanner extends React.PureComponent {
  static propTypes = {
    imageUrl: PropTypes.string
  };

  render() {
    const { imageUrl, children } = this.props;

    return (
      <div
        className="hero-image"
        style={{
          backgroundImage: imageUrl ? `url(${imageUrl})` : ""
        }}
      >
        {children}
      </div>
    );
  }
}

export default HeroBanner;
