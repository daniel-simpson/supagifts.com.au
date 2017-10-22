import React from "react";
import Link from "gatsby-link";
import * as PropTypes from "prop-types";

import HeroBanner from "../components/HeroBanner";

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

    console.log(images);

    return (
      <div>
        <HeroBanner imageUrl={images[0].file.url}>
          <div>
            <h1>
              {name} - ${price}
            </h1>
          </div>
        </HeroBanner>

        <div
          dangerouslySetInnerHTML={{
            __html: content.childMarkdownRemark.html
          }}
        />
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
