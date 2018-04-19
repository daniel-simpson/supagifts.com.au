import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

import ContentBlocks from "../components/ContentBlocks";
import Gallery from "../components/Gallery";
import HeroBanner from "../components/HeroBanner";

class IndexPage extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  render() {
    const giftBoxes = this.props.data.allContentfulGiftBox.edges.map(gb => ({
      key: gb.node.id,
      description: gb.node.name,
      slug: `/boxes/${gb.node.slug}`,
      img:
        gb.node.images && gb.node.images.length > 0
          ? gb.node.images[0].file.url
          : null
    }));
    const featuredItems = this.props.data.allContentfulGiftBoxItem.edges.map(
      i => ({
        key: i.node.id,
        title: i.node.title,
        description: i.node.description,
        img: i.node.image && i.node.image.file ? i.node.image.file.url : null
      })
    );

    return (
      <div>
        <HeroBanner imageUrl="https://images.unsplash.com/photo-1482173074468-5b323335debe">
          <h1 className="hero-heading">
            Welcome to supa&nbsp;<span className="title-light">gifts</span>!
          </h1>
          <h3>Quality gift boxes that promote great environmental habits</h3>
        </HeroBanner>

        <Gallery
          title="Gift Boxes"
          items={giftBoxes}
          columns="3"
          itemHeight="400px"
        />
        <ContentBlocks
          title="Featured Items"
          items={featuredItems}
          columns="4"
        />
      </div>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query homePageQuery {
    allContentfulGiftBox {
      edges {
        node {
          id
          name
          slug
          images {
            file {
              url
            }
          }
        }
      }
    }
    allContentfulGiftBoxItem {
      edges {
        node {
          id
          title
          description {
            childMarkdownRemark {
              html
            }
          }
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`;
