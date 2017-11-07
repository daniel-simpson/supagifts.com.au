import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import classNames from "classnames";

import TimeToRead from "../components/TimeToRead";

class BlogListingPage extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    let blogs = props.data.allContentfulBlog.edges.map(b => b.node);
    blogs.sort(b => b.createdAt);
    blogs.reverse();

    this.state = {
      blogs: blogs,
      page: 1,
      pageSize: 10
    };

    this.setPage = page => {
      this.setState({ page: page });
    };
  }

  render() {
    const pageStart = (this.state.page - 1) * this.state.pageSize;
    const pageEnd = pageStart + this.state.pageSize;
    const paginatedBlogs = this.state.blogs.slice(pageStart, pageEnd);

    let pagination = null;
    if (this.state.blogs.length > this.state.pageSize) {
      let pageArray = [];
      for (var i = 1; i <= this.state.blogs.length / this.state.pageSize; i++) {
        pageArray.push(i);
      }

      pagination = (
        <ol className="pagination">
          {pageArray.map(p => (
            <div
              key={p}
              onClick={this.setPage.bind(this, p)}
              className={classNames({
                pagination_page: true,
                pagination_selected: p === this.state.page
              })}
            >
              {p}
            </div>
          ))}
        </ol>
      );
    }

    return (
      <div className="container">
        <h1>Blog</h1>
        <p>
          Ham hock prosciutto salami venison pastrami flank. Sausage leberkäse
          flank t-bone meatball kielbasa, strip steak ham pork loin turkey swine
          cow tenderloin jowl. Venison pig kielbasa meatball, rump pork loin
          chicken hamburger salami bresaola sausage meatloaf ham chuck short
          loin. (From http://baconipsum.com/)
        </p>
        <ul>
          {paginatedBlogs.map(b => (
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
        {pagination}
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
