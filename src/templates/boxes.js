import React from "react";
import Link from "gatsby-link";
import * as PropTypes from "prop-types";

import HeroBanner from "../components/HeroBanner";
import Wysiwyg from "../components/Wysiwyg";

class BoxPageTemplate extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  render() {
    const {
      id,
      name,
      images,
      price,
      content
    } = this.props.data.contentfulGiftBox;

    const heroImage = images && images.length ? images[0].file.url : "";

    return (
      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "0px 1.0875rem 5rem"
        }}
      >
        <HeroBanner imageUrl={heroImage}>
          <div>
            <h1>
              {name} - ${price}
            </h1>
          </div>
        </HeroBanner>

        <Wysiwyg content={content} />
      </div>
    );
  }
}

export default BoxPageTemplate;

export const pageQuery = graphql`
  query boxQuery($id: String!) {
    contentfulGiftBox(id: { eq: $id }) {
      id
      name
      images {
        id
        file {
          url
          fileName
          contentType
        }
      }
      price
      content {
        id
        childMarkdownRemark {
          id
          html
          timeToRead
        }
      }
    }
  }
`;
