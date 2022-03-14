import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const emailTitle = "Quote Request"
  const bodyContent =
    "Hi Glitter Tech Team%2C" +
    "%0D%0A" +
    "%0D%0A" +
    "I'm interested in a quote!" +
    "%0D%0A" +
    "%0D%0A %0D%0A" +
    "======================================================================" +
    "%0D%0A" +
    "TELL US ABOUT YOUR PROJECT: " +
    "%0D%0A" +
    "%0D%0A" +
    "Ready to get started on your next project %2C or need some pricing to present in your next meeting?" +
    "%0D%0A" +
    " Tell us more details about your project and we'll follow up with a call or email." +
    "%0D%0A" +
    "%0D%0A" +
    "- Contact Name:" +
    "%0D%0A" +
    "%0D%0A" +
    "- Company / Organization Name:" +
    "%0D%0A" +
    "%0D%0A" +
    "- Secondary Email:" +
    "%0D%0A" +
    "%0D%0A" +
    "- Phone:" +
    "%0D%0A" +
    "%0D%0A" +
    "- Website:" +
    "%0D%0A" +
    "%0D%0A" +
    "- Launch Date:" +
    "%0D%0A" +
    "%0D%0A" +
    "- Budget:" +
    "%0D%0A" +
    "%0D%0A" +
    "❑ $1%2C000 - $5%2C000 " +
    "%0D%0A" +
    "%0D%0A" +
    "❑ $5%2C001 - $10%2C000" +
    "%0D%0A" +
    "%0D%0A" +
    "❑ $10%2C001 +" +
    "%0D%0A" +
    "%0D%0A" +
    "- Additional Information?" +
    "%0D%0A" +
    "%0D%0A" +
    "%0D%0A" +
    "We look forward to hearing from you!" +
    "%0D%0A"

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
          <h2 id="">
            Wear are committed to sustainable and equitable solutions...
          </h2>
          <div className="row">
            <div className="col-12">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                  background: "#1d1d1f",
                }}
              >
                <a
                  lassName="button primary fit"
                  href={`mailto:contact@glittertech.dev?subject=${emailTitle}&body=${bodyContent}`}
                >
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
          <h2 id="our-mission">Our Mission</h2>
          <p>
            We started as a group of engineers looking for power and equity in
            our consulting. We help projects and companies make consistent and
            responsible technology. This has been a big year thus far for us; in
            2022 we decided to move to a co-op models where GlitterTech is owned
            and controlled by the staff the runs the GlitterTech. We see our
            clients as our partners and collaborators.
            <br />
            <br />
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
              <span role="img" aria-label="skateboard">
                🛹
              </span>{" "}
              Design and build rad web applications in React, Vue, Django, Flask
              and PHP.
            </dt>
            <br></br>
            <dt>
              <span role="img" aria-label="yarn">
                🧶
              </span>{" "}
              Provide services for non-profits and NGOs.
            </dt>
            <br></br>
            <dt>
              <span role="img" aria-label="unicorn">
                🦄
              </span>{" "}
              We love the Wagtail and Django Community and we give back!
            </dt>
            <br></br>
            <dt>
              <span role="img" aria-label="hamburger">
                🍔
              </span>{" "}
              Progressive Web Applications.
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
    dawnSpeaking: file(
      relativePath: { eq: "Djangogirls_cph19_small_BartPawlik-18.jpg" }
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
