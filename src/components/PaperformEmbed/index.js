import React from "react";
import Link from "gatsby-link";
import * as PropTypes from "prop-types";
import Helmet from "react-helmet";

class PaperformEmbed extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired
  };

  render() {
    const id = this.props.id;

    return (
      <div>
        <Helmet>
          <script src="https://paperform.co/__embed" />
        </Helmet>
        <div data-paperform-id={id} />
      </div>
    );
  }
}

export default PaperformEmbed;
