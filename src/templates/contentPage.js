import React from "react";
import { graphql } from "gatsby";
import _ from "lodash";

import Layout from "../layouts";
import Container from "../layouts/container";
import HeroBanner from "../components/HeroBanner";
import PaperformEmbed from "../components/PaperformEmbed";
import Wysiwyg from "../components/Wysiwyg";

class ContentPageTemplate extends React.Component {
  render() {
    const {
      title,
      heroImage,
      content,
      paperformEmbedId
    } = this.props.data.contentfulContentPage;

    const imageSrc = _.get(heroImage, "file.url");

    return (
      <Layout>
        <HeroBanner heading={title} imageUrl={imageSrc} />

        <Container>
          <Wysiwyg content={content} />

          {paperformEmbedId ? <PaperformEmbed id={paperformEmbedId} /> : null}
        </Container>
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
