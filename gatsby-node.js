const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  var generateBlogPages = (resolve, reject) => {
    graphql(
      `
        {
          allContentfulBlog(limit: 1000) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        reject(result.errors);
      }

      const blogTemplate = path.resolve(`./src/templates/blog.js`);
      _.each(result.data.allContentfulBlog.edges, edge => {
        createPage({
          path: `/blog/${edge.node.slug}/`,
          component: slash(blogTemplate),
          context: {
            id: edge.node.id
          }
        });
      });

      resolve();
    });
  };

  var generateContentPages = (resolve, reject) => {
    graphql(
      `
        {
          allContentfulContentPage {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        reject(result.errors);
      }

      const contentPageTemplate = path.resolve(
        `./src/templates/contentPage.js`
      );
      _.each(result.data.allContentfulContentPage.edges, edge => {
        createPage({
          path: `/${edge.node.slug}`,
          component: slash(contentPageTemplate),
          context: {
            id: edge.node.id
          }
        });
      });

      resolve();
    });
  };

  var generateFormPages = (resolve, reject) => {
    graphql(
      `
        {
          allContentfulFormPage {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        reject(result.errors);
      }

      const formPageTemplate = path.resolve(`./src/templates/formPage.js`);
      _.each(result.data.allContentfulFormPage.edges, edge => {
        createPage({
          path: `/${edge.node.slug}`,
          component: slash(formPageTemplate),
          context: {
            id: edge.node.id
          }
        });
      });

      resolve();
    });
  };

  return Promise.all([
    new Promise(generateBlogPages),
    new Promise(generateContentPages),
    new Promise(generateFormPages)
  ]);
};
