import React from "react";
import Link from "gatsby-link";
import * as PropTypes from "prop-types";

class PaperformEmbed extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired
  };

  componentDidMount() {
    if (
      !document.querySelectorAll("script[src='https://paperform.co/__embed']")
        .length
    ) {
      const paperformEmbed = document.createElement("script");
      paperformEmbed.src = "https://paperform.co/__embed";
      paperformEmbed.async = true;

      document.body.appendChild(paperformEmbed);
    }
  }

  render() {
    const id = this.props.id;

    return (
      <div className="loader">
        <div data-paperform-id={id} />
      </div>
    );
  }
}

export default PaperformEmbed;
