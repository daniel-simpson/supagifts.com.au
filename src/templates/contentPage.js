import React from "react";
import { graphql } from "gatsby";
import * as PropTypes from "prop-types";

import Layout from "../layouts";
import HeroBanner from "../components/HeroBanner";
import PaperformEmbed from "../components/PaperformEmbed";
import Wysiwyg from "../components/Wysiwyg";

class ContentPageTemplate extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };
  render() {
    const {
      title,
      heroImage,
      content,
      paperformEmbedId
    } = this.props.data.contentfulContentPage;

    const imageSrc =
      heroImage && heroImage.file && heroImage.file.url
        ? heroImage.file.url
        : "";

    return (
      <Layout>
        <div>
          <HeroBanner heading={title} imageUrl={imageSrc} />

          <div className="container">
            <Wysiwyg content={content} />
            {paperformEmbedId ? <PaperformEmbed id={paperformEmbedId} /> : null}
          </div>
        </div>
      </Layout>
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
