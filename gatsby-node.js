const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const categorizedPost = path.resolve('./src/templates/categorizedPost.js')

    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                  tags
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug
            },
          })
        })

        const serializeTag = async (posts) => {
          return posts.map(({ node }) => node.tags)
        }

        serializeTag(posts)
          .then(tags => {
            return tags.filter((value, index) => tags.indexOf(value) === index)
          })
          .then(filteredTags => {
            const concTags = [].concat(...filteredTags)
            return concTags.filter((value, index) => concTags.indexOf(value) == index)
          })
          .then(concTags => {
            concTags.forEach((tag, index) => {
              createPage({
                path: `/categorized-post/${tag}`,
                component: categorizedPost,
                context: {
                  tag: tag
                }
              })
            })
          })

      })
    )
  })
}
