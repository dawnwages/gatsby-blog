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
        title="GlitterTech Software Co-op"
        keywords={[
          `devlog`,
          `blog`,
          `gatsby`,
          `javascript`,
          `react`,
          `calendar`,
          `consulting`,
          `software`,
          `django`,
          `python`,
          `webdev`,
          `NGO`,
          `Non-Profit`,
        ]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="">An Agency Committed To Equity</h2>
          <div className="row">
            <div className="col-12">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                  background: "#1d1d1f",
                }}
              >
                <h6 id="">
                  <a href={"mailto:dawn.wages@gmail.com"}>Hire Us!</a>
                </h6>
              </div>
            </div>
          </div>
          <h2 id="our-mission">Our Mission</h2>
          <p>
            We started as a group of engineers looking for power and equity in
            our consulting. This has been a big year thus far for us; in 2022 we
            decided to move to a co-op models where GlitterTech is owned and
            controlled by the staff the runs the GlitterTech.
            <br />
            <br />
            <strong>OUR GOALS:</strong>
            <ul>
              <li>Co-ownership path begins with voting and share.</li>
              <li>Flat organization structure.</li>
              <li>Distribute dividends.</li>
            </ul>
          </p>

          {/*<figure className="kg-card kg-image-card">*/}
          {/*  <Img*/}
          {/*    fluid={data.smallPic.childImageSharp.fluid}*/}
          {/*    className="kg-image small-image"*/}
          {/*  />*/}
          {/*  <figcaption>*/}
          {/*    taken by{" "}*/}
          {/*    <a href={"https://bartpawlik.format.com/"} target={"_blank"}>*/}
          {/*      Bartosz Pawlik*/}
          {/*    </a>*/}
          {/*  </figcaption>*/}
          {/*</figure>*/}
          <h3 id="dynamic-styles">What We Do</h3>

          <dl>
            <dt>
              <span role={"image"} aira-label={"skateboard"}>
                🛹
              </span>{" "}
              We design and build rad web applications.
            </dt>
            <br></br>
            <dt>
              <span role={"image"} aira-label={"yarn"}>
                🧶
              </span>{" "}
              Specialize with non-profits and NGOs
            </dt>
            <br></br>
            <dt>
              <span role={"image"} aira-label={"unicorn"}>
                🦄
              </span>{" "}
              We love the Wagtail and Django Community and we give back!
            </dt>
            <br></br>
            <dt>
              <span role={"image"} aira-label={"hamburger"}>
                🍔
              </span>{" "}
              Progressive Web Applications
            </dt>
          </dl>

          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.dawnSpeaking.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>
              Djangocon Europe 2019 organizer - Dawn Wages, founder, announcing
              a good friend and excellent speaker to the stage.
            </figcaption>
          </figure>
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
    smallPic: file(relativePath: { eq: "IMG_0676.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dawnSpeaking: file(relativePath: { eq: "DjangoCon_hireme.jpg" }) {
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
