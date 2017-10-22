import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

class IndexPage extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  render() {
    console.log("home", this.props.data);

    let blogs = this.props.data.allContentfulBlog.edges.map(b => b.node);
    blogs.sort(b => b.createdAt);
    blogs.reverse();
    blogs = blogs.slice(0, 5);

    return <div>{blogs.map(b => <li key={b.id}>{b.title}</li>)}</div>;
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
