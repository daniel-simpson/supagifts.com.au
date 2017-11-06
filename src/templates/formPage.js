import React from "react";
import Link from "gatsby-link";
import * as PropTypes from "prop-types";

import HeroBanner from "../components/HeroBanner";
import PaperformEmbed from "../components/PaperformEmbed";
import Wysiwyg from "../components/Wysiwyg";

class FormPageTemplate extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  render() {
    const {
      title,
      heroImage,
      content,
      paperformEmbedId
    } = this.props.data.contentfulFormPage;

    return (
      <div>
        <HeroBanner imageUrl={heroImage.file.url}>
          <div>
            <h1>{title}</h1>
          </div>
        </HeroBanner>

        <Wysiwyg content={content} />
        <PaperformEmbed id={paperformEmbedId} />
      </div>
    );
  }
}

export default FormPageTemplate;

export const pageQuery = graphql`
  query formPageQuery($id: String!) {
    contentfulFormPage(id: { eq: $id }) {
      title
      heroImage {
        file {
          url
        }
      }
      content {
        childMarkdownRemark {
          html
        }
      }
      paperformEmbedId
    }
  }
`;
