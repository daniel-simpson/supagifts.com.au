import React from "react";
import Link from "gatsby-link";
import * as PropTypes from "prop-types";
import Helmet from "react-helmet";

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

    const heroImage =
      images && images.length
        ? `${images[0].file.url}?w=800&fm=jpg&fl=progressive`
        : "";

    return (
      <div>
        <Helmet title={`${name} Gift Box | supa gifts australia`} />
        <div className="container">
          <div className={style.boxpage_wrapper}>
            <Gallery columns="1" items={[{ key: 1, img: heroImage }]} />
            <div className={`${style.content} content-container`}>
              <h1
                className={`${style.box_name} hero-heading hero-heading-dark`}
              >
                {`${name} `}
                <span className="title-light">Gift Box</span>
              </h1>

              <Wysiwyg content={content} />
            </div>
          </div>

          <Gallery
            title="Whats in the box?"
            columns="2"
            items={giftBoxItems.map(i => ({
              key: i.id,
              description: i.description,
              img: i.image && i.image.file ? i.image.file.url : null
            }))}
          />

          <CTA text="Buy now" url="/buy" />
        </div>
      </div>
    );
  }
}

export default BoxPageTemplate;

export const pageQuery = graphql`
  query boxQuery($id: String!) {
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
        image {
          file {
            url
          }
        }
      }
    }
  }
`;
