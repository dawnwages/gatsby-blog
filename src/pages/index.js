import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ProjectList from "../components/projectList"
import PostCard from "../components/postCard"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"
//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Posts"
        keywords={[`devlog`, `blog`, `gatsby`, `javascript`, `react`]}
      />

      {data.site.siteMetadata.description && (
        <header className="page-head">
          <h2 className="page-head-title">
            {data.site.siteMetadata.description}
          </h2>
          <div
            className="row"
            style={{
              width: "100%",
              padding: "10rem 0",
            }}
          >
            <div
              className="col-12"
              style={{
                padding: "1rem 0",
                textAlign: "center",
                background: "#1d1d1f",
              }}
            >
              <form
                action="https://buttondown.email/api/emails/embed-subscribe/GlitterTech"
                method="post"
                target="popupwindow"
                onSubmit="window.open('https://buttondown.email/GlitterTech', 'popupwindow')"
                className="embeddable-buttondown-form"
              >
                <h3>✨GlitterTech✨ Newsletter</h3>
                <p
                  className="col-8"
                  style={{
                    margin: "auto",
                  }}
                >
                  Updates and events and things about A11y, Wagtail, Django,
                  Python, React, JavaScript and Ethical Open Source
                </p>
                <label htmlFor="bd-email">Enter your email</label>
                <div
                  className="col-8"
                  style={{
                    margin: "auto",
                  }}
                >
                  <input type="email" name="email" id="bd-email" />
                </div>
                <input type="hidden" value="1" name="embed" />
                <div className="col-12">
                  <input type="submit" value="Subscribe" />
                </div>
                <p>
                  <a href="https://buttondown.email" target="_blank">
                    Powered by Buttondown.
                  </a>
                </p>
              </form>
            </div>
          </div>
        </header>
      )}
      <div className="post-feed">
        {posts.map(({ node }) => {
          postCounter++
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          )
        })}
      </div>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            description
            tags
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
