import React from "react";
import Link from "gatsby-link";
import * as PropTypes from "prop-types";

import HeroBanner from "../components/HeroBanner";
import Wysiwyg from "../components/Wysiwyg";

class BlogTemplate extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  render() {
    const blog = this.props.data.contentfulBlog;
    const { id, title, slug, heroImage, content } = blog;
    return (
      <div className="container">
        <div
          style={{
            display: `flex`,
            alignItems: `center`,
            marginBottom: "1rem"
          }}
        >
          <Link to="/blog">&lt; Back to blogs</Link>
        </div>

        <HeroBanner imageUrl={heroImage.file.url}>
          <div>
            <h1>{title}</h1>
            <div>Static description</div>
          </div>
        </HeroBanner>

        <div>
          <Wysiwyg content={content} />
        </div>
      </div>
    );
  }
}

export default BlogTemplate;

export const pageQuery = graphql`
  query blogQuery($id: String!) {
    contentfulBlog(id: { eq: $id }) {
      id
      slug
      title
      heroImage {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
