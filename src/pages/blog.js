import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

class BlogListingPage extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  render() {
    const blogs = this.props.data.allContentfulBlog.edges.map(b => b.node);

    blogs.sort(b => b.createdAt);
    blogs.reverse();

    return (
      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "0px 1.0875rem 5rem"
        }}
      >
        <ul>
          {blogs.map(b => (
            <li key={b.id}>
              <Link to={`/blog/${b.slug}`}>{b.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BlogListingPage;

export const pageQuery = graphql`
  query blogListQuery {
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
