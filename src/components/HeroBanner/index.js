import React from "react";
import Link from "gatsby-link";
import * as PropTypes from "prop-types";

import styles from "./hero-banner.module.scss";

class HeroBanner extends React.PureComponent {
  static propTypes = {
    imageUrl: PropTypes.string
  };

  render() {
    const { imageUrl, children } = this.props;

    if (!imageUrl) {
      return <div style={{ paddingTop: "1rem" }}>{children}</div>;
    }

    return (
      <div
        className={styles.hero}
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
