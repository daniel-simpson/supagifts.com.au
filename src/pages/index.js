import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

import Gallery from "../components/Gallery";
import HeroBanner from "../components/HeroBanner";

class IndexPage extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  render() {
    const featuredItems = [
      {
        key: "test-1",
        description: "test-1",
        img: "https://via.placeholder.com/150x150"
      },
      {
        key: "test-2",
        description: "test-2",
        img: "https://via.placeholder.com/150x150"
      },
      {
        key: "test-3",
        description: "test-3",
        img: "https://via.placeholder.com/150x150"
      },
      {
        key: "test-4",
        description: "test-4",
        img: "https://via.placeholder.com/150x150"
      },
      {
        key: "test-5",
        description: "test-5",
        img: "https://via.placeholder.com/150x150"
      }
    ];
    const giftBoxes = [
      {
        key: "test-1",
        description: "test-1",
        img: "http://via.placeholder.com/300x300"
      },
      {
        key: "test-2",
        description: "test-2",
        img: "http://via.placeholder.com/300x300"
      },
      {
        key: "test-3",
        description: "test-3",
        img: "http://via.placeholder.com/300x300"
      }
    ];

    return (
      <div>
        <HeroBanner imageUrl="/assets/img/SG_103-Pattern.png">
          <h1>
            Welcome to supa gifts!
            <p>
              Quality gift boxes that help promote great environmental habits
            </p>
          </h1>
        </HeroBanner>

        <Gallery title="Featured Items" items={featuredItems} columns="4" />
        <Gallery title="Gift Boxes" items={giftBoxes} columns="3" />
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
