import React from "react";
import * as PropTypes from "prop-types";

import styles from "./wysiwyg.module.scss";

class Wysiwyg extends React.PureComponent {
  static propTypes = {
    content: PropTypes.object.isRequired
  };

  render() {
    const content = this.props.content;

    if (
      !content ||
      !content.childMarkdownRemark ||
      !content.childMarkdownRemark.html
    )
      return <div className={styles.noContent} />;

    return (
      <div
        className={styles.wysiwyg}
        dangerouslySetInnerHTML={{
          __html: content.childMarkdownRemark.html
        }}
      />
    );
  }
}

export default Wysiwyg;
