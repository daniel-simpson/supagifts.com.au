import React from "react";
import Link from "gatsby-link";
import * as PropTypes from "prop-types";

import HeroBanner from "../components/HeroBanner";
import Wysiwyg from "../components/Wysiwyg";

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
      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "0px 1.0875rem 5rem"
        }}
      >
        <HeroBanner imageUrl="">
          <h1>{title}</h1>
        </HeroBanner>

        <Wysiwyg content={content} />
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
