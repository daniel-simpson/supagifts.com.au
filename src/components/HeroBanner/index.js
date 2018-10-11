import React from "react";
import * as PropTypes from "prop-types";

import styles from "./hero-banner.module.scss";

class HeroBanner extends React.PureComponent {
  static propTypes = {
    imageUrl: PropTypes.string
  };

  render() {
    const { imageUrl, children } = this.props;

    if (!imageUrl) {
      return <div style={{ marginTop: "1rem" }}>{children}</div>;
    }

    const imageSrc = `url(${imageUrl}?w=960&fm=jpg&fl=progressive)`;

    return (
      <div
        className={styles.hero}
        style={{
          backgroundImage: imageSrc
        }}
      >
        {children}
      </div>
    );
  }
}

export default HeroBanner;
