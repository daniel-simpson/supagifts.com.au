import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

import style from "./blockview.module.scss";

class BlockView extends React.PureComponent {
  static propTypes = {
    children: PropTypes.object.isRequired,
    backgroundColour: PropTypes.string
  };

  render() {
    const { children, backgroundColour } = this.props;

    return (
      <div
        className={style.blockview}
        style={{
          backgroundColor: backgroundColour
        }}
      >
        {children}
      </div>
    );
  }
}

export default BlockView;
