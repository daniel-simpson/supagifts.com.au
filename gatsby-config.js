module.exports = {
  siteMetadata: {
    siteUrl: `https://supagifts.com.au`,
    title: `Supagifts`,
    buyLink: {
      isExternal: false,
      title: "Buy now",
      url: "/buy"
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `n7wztldh26q4`,
        accessToken: `7e88de2164274d3f5720e2e623a367c71c663c43b3d030cc6ec113e62e6b2017`
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
        omitGoogleFont: true
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Arapey\:400,800`, `Oxygen\:300,700`]
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://supagifts.com.au`
      }
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-W5DJ5H6`
      }
    },
    `gatsby-plugin-netlify`
  ]
};
