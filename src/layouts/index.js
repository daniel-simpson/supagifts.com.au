import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import Header from "../components/Header";
import HamburgerMenu from "../components/HamburgerMenu";
import Footer from "../components/Footer";

import "../styles/_reset.scss";
import "../styles/main.scss";

class TemplateWrapper extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
    menu: PropTypes.func,
    children: PropTypes.func
  };

  render() {
    const { children, data } = this.props;

    const headerMenuItems = [
      {
        id: "about",
        title: "About Supagifts",
        slug: "/about-us"
      },
      {
        id: "boxes",
        title: "Our Gift Boxes",
        children: data.allContentfulGiftBox.edges.map(j => {
          return {
            id: j.node.id,
            title: j.node.name,
            slug: j.node.slug
          };
        })
      },
      {
        id: "blog",
        title: "Blog",
        slug: "/blog"
      },
      {
        id: "buy",
        title: "Buy now",
        slug: "/buy"
      }
    ];

    const footerMenuItems = [
      {
        id: "privacy",
        title: "Privacy Policy",
        slug: "/"
      },
      {
        id: "terms",
        title: "Terms and Conditions",
        slug: "/"
      },
      {
        id: "instagram",
        title: "Instagram",
        url: "https://www.instagram.com/supa_gifts_australia/"
      },
      {
        id: "contact",
        title: "Contact",
        slug: "/"
      }
    ];

    return (
      <div id="outer-container">
        <Helmet
          title="Postpeople.tv"
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]}
          link={[
            {
              rel: "stylesheet",
              href: "https://fonts.googleapis.com/css?family=Nunito|Raleway"
            }
          ]}
        />

        <HamburgerMenu
          outerContainerId="outer-container"
          pageWrapId="page-wrap"
          menuItems={headerMenuItems}
        />

        <Header menuItems={headerMenuItems} />

        <main
          id="page-wrap"
          style={{
            margin: "0 auto",
            maxWidth: 960,
            padding: "0px 1.0875rem 1.45rem",
            paddingTop: 0
          }}
        >
          {children()}
          <Footer menuItems={footerMenuItems} />
        </main>
      </div>
    );
  }
}

export default TemplateWrapper;

export const pageQuery = graphql`
  query headerQuery {
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
