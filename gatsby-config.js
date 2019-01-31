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
        accessToken:
          process.env.SUPA_GIFTS_CD_TOKEN ||
          require("./.contentful.env").SUPA_GIFTS_CD_TOKEN
      }
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `supa_gifts_australia`
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
