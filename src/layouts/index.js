import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Helmet from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/main.scss";

class TemplateWrapper extends React.PureComponent {
  render() {
    const { children, data } = this.props;
    const buyLink = data.site.siteMetadata.buyLink;

    let buy = {
      id: "buy",
      title: buyLink.title
    };

    if (buyLink.isExternal) {
      buy.url = buyLink.url;
    } else {
      buy.slug = buyLink.url;
    }

    const headerMenuItems = [
      {
        id: "about",
        title: "About Us",
        slug: "/about-us"
      },
      ...data.allContentfulGiftBox.edges.map(j => ({
        id: j.node.id,
        title: j.node.name,
        slug: `/boxes/${j.node.slug}`
      })),
      {
        id: "faq",
        title: "FAQ",
        slug: "/faq"
      },
      {
        id: "plastic-oceans",
        title: "Plastic Oceans Australasia",
        slug: "/plastic-oceans-australasia"
      },
      buy
    ];

    const footerMenuItems = [
      {
        id: "privacy",
        title: "Privacy Policy",
        slug: "/privacy-policy"
      },
      {
        id: "terms",
        title: "Terms and Conditions",
        slug: "/terms-and-conditions"
      },
      {
        id: "instagram",
        title: "Instagram",
        url: "https://www.instagram.com/supa_gifts_australia/"
      },
      {
        id: "contact",
        title: "Contact",
        slug: "/contact"
      }
    ];

    return (
      <div>
        <Helmet
          title="supa gifts australia"
          meta={[
            {
              name: "og:site_name",
              content: "supa gifts australia"
            },
            {
              name: "og:type",
              content: "website"
            },
            {
              name: "og:image",
              content:
                "https://supagifts.com.au/assets/images/logo_and_tagline.png"
            }
          ]}
        />
        <Header menuItems={headerMenuItems} footerItems={footerMenuItems} />

        <main
          style={{
            margin: "0 auto",
            paddingTop: 0
          }}
        >
          {children}
          <Footer menuItems={footerMenuItems} />
        </main>
      </div>
    );
  }
}

const query = graphql`
  query headerQuery {
    site {
      siteMetadata {
        buyLink {
          isExternal
          title
          url
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
            id
            title
            file {
              url
              fileName
              contentType
            }
          }
        }
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={query}
    render={data => <TemplateWrapper data={data} {...props} />}
  />
);
