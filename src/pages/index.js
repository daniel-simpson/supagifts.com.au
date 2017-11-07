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
    let blocks = [
      {
        id: "receive-start",
        title: "I received a supa gift box and would like more information",
        backgroundColour: "#709F86",
        link: "/"
      },
      {
        id: "send-start",
        title: "I would like to send a supa gift box",
        backgroundColour: "#4F4084",
        link: "/"
      }
    ];

    return (
      <div>
        <BlockView items={blocks} />
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
