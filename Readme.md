# Supagifts.com.au website

## Development set up

1.  In the root of the repository, run `npm i`
2.  (First time only) Install gatsby CLI: `npm i -g gatsby-cli`
3.  Add a .contetful.env.js file to the root of the repo with the following structure (or add an environment variable):

```javascript
module.exports = {
  SUPA_GIFTS_CD_TOKEN: `CONTENTFUL CD TOKEN here`
};
```

Gatsby commands:

- `gatsby develop` - Run in developer mode, including HMR.
- `gatsby build` - Run a static site build.
- `gatsby serve` - Serve a production version of the site.
