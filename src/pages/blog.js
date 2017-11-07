import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

import TimeToRead from "../components/TimeToRead";

class BlogListingPage extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  render() {
    let blogs = this.props.data.allContentfulBlog.edges.map(b => b.node);

    blogs.sort(b => b.createdAt);
    blogs.reverse();

    return (
      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "1rem 1.0875rem 5rem"
        }}
      >
        <h1>Blog</h1>
        <p>
          Ham hock prosciutto salami venison pastrami flank. Sausage leberkäse
          flank t-bone meatball kielbasa, strip steak ham pork loin turkey swine
          cow tenderloin jowl. Venison pig kielbasa meatball, rump pork loin
          chicken hamburger salami bresaola sausage meatloaf ham chuck short
          loin. (From http://baconipsum.com/)
        </p>
        <ul>
          {blogs.map(b => (
            <li key={b.id}>
              <Link
                to={`/blog/${b.slug}`}
                style={{
                  textDecoration: "none"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  <img
                    src={`${b.heroImage.file.url}?h=100&w=150&fit=fill`}
                    style={{ marginBottom: "0", maxWidth: "20vw" }}
                  />
                  <div
                    style={{
                      padding: "1rem"
                    }}
                  >
                    <p style={{ marginBottom: 0, textDecoration: "underline" }}>
                      {b.title}
                      <TimeToRead content={b.content} />
                    </p>
                    <p style={{ marginBottom: 0 }}>
                      {b.content.childMarkdownRemark.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
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
          heroImage {
            file {
              url
            }
          }
          content {
            id
            childMarkdownRemark {
              id
              timeToRead
              excerpt
            }
          }
        }
      }
    }
  }
`;
