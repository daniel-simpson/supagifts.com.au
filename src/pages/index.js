import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import ContentBlocks from "../components/ContentBlocks";
import Gallery from "../components/Gallery";
import HeroBanner from "../components/HeroBanner";

class IndexPage extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  render() {
    const homepageData = this.props.data.allContentfulHomePage.edges[0].node;
    const featuredItems = homepageData.items.map(i => ({
      key: i.id,
      title: i.title,
      description: i.description,
      img: i.image && i.image.file ? i.image.file.url : null,
      slug: i.moreInfo
    }));

    const giftBoxes = this.props.data.allContentfulGiftBox.edges.map(gb => ({
      key: gb.node.id,
      description: gb.node.name,
      slug: `/boxes/${gb.node.slug}`,
      img:
        gb.node.images && gb.node.images.length > 0
          ? gb.node.images[0].file.url
          : null
    }));

    const heroImage = homepageData.heroImage.file.url;

    return (
      <div>
        <Helmet
          title="Home | supa gifts australia"
          description="Supa gifts australia is a gift box company with a conscience.  Each box has been thoughtfully created to minimise plastic waste while giving a luxurious and reusable gift that really means something."
        />

        <HeroBanner imageUrl={heroImage}>
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
    allContentfulHomePage {
      edges {
        node {
          title
          heroImage {
            file {
              url
            }
          }
          items {
            id
            title
            description {
              childMarkdownRemark {
                html
              }
            }
            moreInfo
            image {
              file {
                url
              }
            }
          }
        }
      }
    }
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
