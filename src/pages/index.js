import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

import HeroBanner from "../components/HeroBanner";
import BlockView from "../components/BlockView";

class IndexPage extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  render() {
    let blogs = this.props.data.allContentfulBlog.edges.map(b => b.node);
    blogs.sort(b => b.createdAt);
    blogs.reverse();
    blogs = blogs.slice(0, 5);

    return (
      <div style={{ display: "flex" }}>
        <BlockView backgroundColour="#709F86">
          <Link to="/">I have received a supa gift box</Link>
        </BlockView>
        <BlockView backgroundColour="#4F4084">
          <Link to="/">I would like to send a supa gift box</Link>
        </BlockView>
      </div>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query homePageQuery {
    allContentfulBlog {
      edges {
        node {
          id
          slug
          title
          createdAt
          content {
            childMarkdownRemark {
              timeToRead
            }
          }
        }
      }
    }
  }
`;
