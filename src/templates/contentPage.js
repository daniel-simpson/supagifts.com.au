import React from "react";
import Link from "gatsby-link";
import * as PropTypes from "prop-types";

import HeroBanner from "../components/HeroBanner";
import PaperformEmbed from "../components/PaperformEmbed";
import Wysiwyg from "../components/Wysiwyg";

class ContentPageTemplate extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };
  render() {
    const {
      id,
      title,
      heroImage,
      content,
      paperformEmbedId
    } = this.props.data.contentfulContentPage;

    const imageSrc =
      heroImage && heroImage.file && heroImage.file.url
        ? heroImage.file.url
        : "";

    const titleWords = title.split(" ");
    const titleElement =
      titleWords.length == 2 ? (
        <h1 className="hero-heading">
          {titleWords[0]}&nbsp;
          <span className="title-light">{titleWords[1]}</span>
        </h1>
      ) : (
        <h1 className="hero-heading">{title}</h1>
      );

    return (
      <div>
        <HeroBanner imageUrl={imageSrc}>{titleElement}</HeroBanner>
        <div className="container">
          <Wysiwyg content={content} />
          {paperformEmbedId ? <PaperformEmbed id={paperformEmbedId} /> : null}
        </div>
      </div>
    );
  }
}

export default ContentPageTemplate;

export const pageQuery = graphql`
  query contentPageQuery($id: String!) {
    contentfulContentPage(id: { eq: $id }) {
      id
      title
      heroImage {
        file {
          url
        }
      }
      content {
        id
        childMarkdownRemark {
          id
          html
        }
      }
      paperformEmbedId
    }
  }
`;
