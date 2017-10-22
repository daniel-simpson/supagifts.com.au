import React from "react";
import Link from "gatsby-link";
import * as PropTypes from "prop-types";

import HeroBanner from "../components/HeroBanner";
import PaperformEmbed from "../components/PaperformEmbed";

class FormPageTemplate extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  render() {
    const {
      title,
      content,
      paperformEmbedId
    } = this.props.data.contentfulFormPage;

    return (
      <div>
        <HeroBanner imageUrl="">
          <div>
            <h1>{title}</h1>
          </div>
        </HeroBanner>

        <div
          dangerouslySetInnerHTML={{
            __html: content.childMarkdownRemark.html
          }}
        />

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
      content {
        id
        childMarkdownRemark {
          id
          timeToRead
          html
        }
      }
      paperformEmbedId
    }
  }
`;
