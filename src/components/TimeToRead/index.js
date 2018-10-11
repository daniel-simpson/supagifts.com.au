import React from "react";
import * as PropTypes from "prop-types";

class TimeToRead extends React.PureComponent {
  static propTypes = {
    content: PropTypes.object
  };

  render() {
    const timeToRead = _.get(
      this.props.content,
      "childMarkdownRemark.timeToRead"
    );

    if (!timeToRead) {
      return null;
    }

    return (
      <span>
        {" "}
        - ({timeToRead} {timeToRead !== 1 ? "minutes" : "minute"} read)
      </span>
    );
  }
}

export default TimeToRead;
