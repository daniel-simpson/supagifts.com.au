module.exports = {
  siteMetadata: {
    siteUrl: `https://supagifts.com.au`,
    title: `Supagifts`
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
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-W5DJ5H6`
      }
    }
  ]
};
