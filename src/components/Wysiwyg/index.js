import React from "react";
import * as PropTypes from "prop-types";
import _ from "lodash";

import styles from "./wysiwyg.module.scss";

class Wysiwyg extends React.PureComponent {
  static propTypes = {
    content: PropTypes.object
  };

  render() {
    const content = _.get(this.props.content, "childMarkdownRemark.html");

    if (!content) return <div className={styles.noContent} />;

    return (
      <div
        className={styles.wysiwyg}
        dangerouslySetInnerHTML={{
          __html: content
        }}
      />
    );
  }
}

export default Wysiwyg;
