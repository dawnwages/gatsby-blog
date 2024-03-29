const path = require(`path`)
const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)

//TODO: Is this a good add?
//const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const tagPage = path.resolve(`./src/templates/tag-page.js`)

  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                tags
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
      //TODO: better error handling?
      //result.errors.forEach(e => console.error(e.toString()))
      //return Promise.reject(result.errors)
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges
    const tagSet = new Set()

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      // Get tags for tags pages.
      if (post.node.frontmatter.tags) {
        post.node.frontmatter.tags.forEach(tag => {
          tagSet.add(tag)
        })
      }

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    // Create tags pages.
    tagSet.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}/`,
        component: tagPage,
        context: {
          tag,
        },
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  //fmImagesToRelative(node) // convert image paths for gatsby images

  //console.log(node.internal.type);

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    console.log(node, value)
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type googleSheetFormResponses1 implements Node @dontInfer {
      id: ID!
      parent: Node
      children: [Node!]!
      internal: Internal!
      timestamp: String
      whatIsTheName: String
      when: String
      link: String
      where: String
    }
  `
  createTypes(typeDefs)
}
