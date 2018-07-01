import React from "react";
import Link from "gatsby-link";
import * as PropTypes from "prop-types";
import Helmet from "react-helmet";

import ContentBlocks from "../../components/ContentBlocks";
import CTA from "../../components/CTA";
import Gallery from "../../components/Gallery";
import HeroBanner from "../../components/HeroBanner";
import Wysiwyg from "../../components/Wysiwyg";

import style from "./boxes.module.scss";

class BoxPageTemplate extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  render() {
    const {
      id,
      name,
      images,
      content,
      giftBoxItems
    } = this.props.data.contentfulGiftBox;

    const { buyLink } = this.props.data.site.siteMetadata;

    const heroImage =
      images && images.length
        ? `${images[0].file.url}?w=800&fm=jpg&fl=progressive`
        : "";

    return (
      <div>
        <Helmet title={`${name} Gift Box | supa gifts australia`} />
        <div className="container">
          <div className={style.boxpage_wrapper}>
            <img src={heroImage} className={style.box_image} />
            <div className={`${style.content} content-container`}>
              <h1
                className={`${style.box_name} hero-heading hero-heading-dark`}
              >
                {`${name} `}
                <span className="title-light">Gift Box</span>
              </h1>

              <Wysiwyg content={content} />

              <CTA
                text={buyLink.title}
                isExternal={buyLink.isExternal}
                url={buyLink.url}
              />
            </div>
          </div>
        </div>
        <ContentBlocks
          title="Included in this box:"
          columns="2"
          items={giftBoxItems.map(i => ({
            key: i.id,
            title: i.title,
            description: i.description,
            img: i.image && i.image.file ? i.image.file.url : null,
            slug: i.moreInfo
          }))}
        />

        <div className="container">
          <CTA
            text={buyLink.title}
            isExternal={buyLink.isExternal}
            url={buyLink.url}
          />
        </div>
      </div>
    );
  }
}

export default BoxPageTemplate;

export const pageQuery = graphql`
  query boxQuery($id: String!) {
    site {
      siteMetadata {
        buyLink {
          isExternal
          title
          url
        }
      }
    }
    contentfulGiftBox(id: { eq: $id }) {
      id
      name
      slug
      images {
        id
        file {
          url
        }
      }
      content {
        childMarkdownRemark {
          html
        }
      }
      giftBoxItems {
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
`;
