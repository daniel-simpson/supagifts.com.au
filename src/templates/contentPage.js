import React from "react";
import Link from "gatsby-link";
import * as PropTypes from "prop-types";

class ContentPageTemplate extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };
  render() {
    const contentPage = this.props.data.contentfulContentPage;
    const { id, title, slug, content } = contentPage;
    return (
      <div>
        <div
          style={{
            display: `flex`,
            alignItems: `center`
          }}
        >
          <div>
            <h1>{title}</h1>
          </div>
        </div>

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
      slug
      title
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
