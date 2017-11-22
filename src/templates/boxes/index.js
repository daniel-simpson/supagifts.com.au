import React from "react";
import Link from "gatsby-link";
import * as PropTypes from "prop-types";

import HeroBanner from "../../components/HeroBanner";
import Wysiwyg from "../../components/Wysiwyg";

import style from "./boxes.module.scss";

class BoxPageTemplate extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  render() {
    const { id, name, images, content } = this.props.data.contentfulGiftBox;

    const price = this.props.data.contentfulGiftBox.price
      ? `$${this.props.data.contentfulGiftBox.price}`
      : "";

    const heroImage =
      images && images.length
        ? `${images[0].file.url}?w=800&fm=jpg&fl=progressive`
        : "";

    return (
      <div className={style.boxpage_wrapper}>
        <img className={style.box_image} src={heroImage} />
        <div className={`${style.content} content-container`}>
          <h1>
            {name} {price}
          </h1>
          <Wysiwyg content={content} />
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
      images {
        id
        file {
          url
          fileName
          contentType
        }
      }
      price
      content {
        id
        childMarkdownRemark {
          id
          html
          timeToRead
        }
      }
    }
  }
`;
