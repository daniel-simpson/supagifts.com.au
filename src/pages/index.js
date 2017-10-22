import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

import HeroBanner from "../components/HeroBanner";

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
      <div>
        <HeroBanner imageUrl="/assets/images/logo.png">
          <h1>supa gifts australia</h1>
        </HeroBanner>

        <div>Home page, baby!</div>
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
