import React from "react";
import Link from "gatsby-link";
import * as PropTypes from "prop-types";

import Carousel from "../../components/Carousel";
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
        <div className="container">
          <div className={style.boxpage_wrapper}>
            <Carousel items={[{ key: 1, img: heroImage }]} />
            <div className={`${style.content} content-container`}>
              <h1 className={style.box_name}>{name}</h1>

              <Wysiwyg content={content} />
            </div>
          </div>

          <Gallery title="Whats in the box?" columns="2" items={giftBoxItems} />
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
      }
    }
  }
`;
