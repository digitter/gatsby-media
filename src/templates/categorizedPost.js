import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

export default class categorizedPost extends Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const currentTag = this.props.pageContext.tag

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
          <h2 className="section-headline">Articles related to <strong>{currentTag}</strong></h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query BlogPostByTag($tag: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(filter: {tags: {eq: $tag}}) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
