import React from "react";
import Link from "gatsby-link";
import * as PropTypes from "prop-types";

import HeroBanner from "../components/HeroBanner";

class ContentPageTemplate extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };
  render() {
    const {
      id,
      title,
      heroImage,
      content
    } = this.props.data.contentfulContentPage;

    console.log(this.props.data.contentfulContentPage);
    return (
      <div>
        <HeroBanner imageUrl="">
          <h1>{title}</h1>
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

export default ContentPageTemplate;

export const pageQuery = graphql`
  query contentPageQuery($id: String!) {
    contentfulContentPage(id: { eq: $id }) {
      id
      title
      heroImage {
        file {
          url
        }
      }
      content {
        id
        childMarkdownRemark {
          id
          html
        }
      }
    }
  }
`;
