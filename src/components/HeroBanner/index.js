import React from "react";

import styles from "./hero-banner.module.scss";

class HeroBanner extends React.PureComponent {
  render() {
    const { heading, description, imageUrl } = this.props;

    const hasImage = imageUrl && imageUrl.length;

    return (
      <div
        className={styles.hero}
        style={{
          backgroundImage: hasImage
            ? `url(${imageUrl}?w=960&fm=jpg&fl=progressive)`
            : null,
          marginTop: !hasImage ? "1rem" : null
        }}
      >
        <h1 className="heroHeading">{heading}</h1>
        {description && description.length ? <h3>{description}</h3> : null}
      </div>
    );
  }
}

export default HeroBanner;
