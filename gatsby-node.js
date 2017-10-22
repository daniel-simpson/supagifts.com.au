const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  // var generateBlogPages = (resolve, reject) => {
  //   graphql(
  //     `
  //       {
  //         allContentfulBlog(limit: 1000) {
  //           edges {
  //             node {
  //               id
  //               slug
  //             }
  //           }
  //         }
  //       }
  //     `
  //   ).then(result => {
  //     if (result.errors) {
  //       reject(result.errors)
  //     }

  //     const blogTemplate = path.resolve(`./src/templates/blog.js`)
  //     _.each(result.data.allContentfulBlog.edges, edge => {

  //       createPage({
  //         path: `/blog/${edge.node.slug}/`,
  //         component: slash(blogTemplate),
  //         context: {
  //           id: edge.node.id,
  //         },
  //       })
  //     })

  //     resolve()
  //   })
  // }

  // var generateMemberPages = (resolve, reject) => {
  //   graphql(
  //     `
  //       {
  //         allContentfulMember {
  //           edges {
  //             node {
  //               id
  //               slug
  //             }
  //           }
  //         }
  //       }
  //     `
  //   ).then(result => {
  //     if(result.errors) {
  //       reject(result.errors);
  //     }

  //     const memberTemplate = path.resolve(`./src/templates/member.js`)
  //     _.each(result.data.allContentfulMember.edges, edge => {
  //       createPage({
  //         path: `/member/${edge.node.slug}`,
  //         component: slash(memberTemplate),
  //         context: {
  //           id: edge.node.id
  //         }
  //       })
  //     })

  //     resolve();
  //   })
  // }

  // var generateJobCategoryPages = (resolve, reject) => {
  //   graphql(
  //     `
  //       {
  //         allContentfulJobCategory {
  //           edges {
  //             node {
  //               id
  //               slug
  //             }
  //           }
  //         }
  //       }
  //     `
  //   ).then(result => {
  //     if(result.errors) {
  //       reject(result.errors);
  //     }

  //     const jobCategoryTemplate = path.resolve(`./src/templates/jobCategory.js`)
  //     _.each(result.data.allContentfulJobCategory.edges, edge => {
  //       createPage({
  //         path: `/${edge.node.slug}`,
  //         component: slash(jobCategoryTemplate),
  //         context: {
  //           id: edge.node.id
  //         }
  //       })
  //     })

  //     resolve();
  //   })
  // }

  //   var generateContentPages = (resolve, reject) => {
  //     graphql(
  //       `
  //         {
  //           allContentfulContentPage {
  //             edges {
  //               node {
  //                 id
  //                 slug
  //               }
  //             }
  //           }
  //         }
  //       `
  //     ).then(result => {
  //       if(result.errors) {
  //         reject(result.errors);
  //       }

  //       const contentPageTemplate = path.resolve(`./src/templates/contentPage.js`)
  //       _.each(result.data.allContentfulContentPage.edges, edge => {
  //         createPage({
  //           path: `/${edge.node.slug}`,
  //           component: slash(contentPageTemplate),
  //           context: {
  //             id: edge.node.id
  //           }
  //         })
  //       })

  //       resolve();
  //     })
  //   }

  // return Promise.all([
  //   new Promise(generateBlogPages),
  //   new Promise(generateMemberPages),
  //   new Promise(generateJobCategoryPages),
  //   new Promise(generateContentPages)
  // ])
};
