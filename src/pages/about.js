import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="About"
        keywords={[`blog`, `gatsby`, `javascript`, `react`, `dawn`, `django`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Python and React freelance web developer.
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>
              Djangocon Europe 2019 organizer - Dawn making an awkward face
              while announcing a good friend and excellent speaker to the stage.
            </figcaption>
          </figure>
          <h3 id="dynamic-styles">Community Focused Engineer</h3>
          <p>
            I enjoy contributing back to my community. The friendships I've made
            over the years are innumerable and invaluable. I'm thankful for the
            opportunity to hang out with such great humans, learn and teach
            about software engineering.
          </p>
          <p>
            Don't forget to check out the{" "}
            <a href="https://github.com/dawnwages">github repo</a> for more of
            my work.
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
