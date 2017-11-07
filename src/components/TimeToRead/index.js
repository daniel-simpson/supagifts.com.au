import React from "react";
import * as PropTypes from "prop-types";

class TimeToRead extends React.PureComponent {
  static propTypes = {
    content: PropTypes.object
  };

  render() {
    const { content } = this.props;

    if (
      !content ||
      !content.childMarkdownRemark ||
      !content.childMarkdownRemark.timeToRead
    ) {
      return null;
    }

    const timeToRead = content.childMarkdownRemark.timeToRead;

    return (
      <span>
        {" "}
        - ({timeToRead} {timeToRead !== 1 ? "minutes" : "minute"} read)
      </span>
    );
  }
}

export default TimeToRead;
