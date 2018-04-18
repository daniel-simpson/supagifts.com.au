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
    const giftBoxes = this.props.data.allContentfulGiftBox.edges.map(gb => ({
      key: gb.node.id,
      description: gb.node.name,
      img:
        gb.node.images && gb.node.images.length > 0
          ? gb.node.images[0].file.url
          : null
    }));
    const featuredItems = this.props.data.allContentfulGiftBoxItem.edges.map(
      i => ({
        key: i.node.id,
        description: i.node.title,
        img: i.node.image && i.node.image.file ? i.node.image.file.url : null
      })
    );

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

        <Gallery
          title="Gift Boxes"
          items={giftBoxes}
          columns="3"
          itemHeight="400px"
        />
        <Gallery title="Featured Items" items={featuredItems} columns="4" />
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
