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
        title="Hire Me"
        keywords={[
          `consultant`,
          `blog`,
          `gatsby`,
          `javascript`,
          `react`,
          `dawn`,
          `django`,
        ]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="">Python and React Consultant</h2>

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
                  <a href={"mailto:contact@glittertech.dev"}>Hire Me</a>
                </h6>
              </div>
            </div>
          </div>

          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.smallPic.childImageSharp.fluid}
              className="kg-image small-image"
            />
            <figcaption>
              taken by{" "}
              <a
                href={"https://bartpawlik.format.com/"}
                target={"_blank"}
                rel="noreferrer"
              >
                Bartosz Pawlik
              </a>
            </figcaption>
          </figure>
          <h5 id="">
            Dawn is a ex-project manager turned Open Source and User Experience
            Engineer, Wagtail Core Team Member, DjangoCon Europe, Africa and US
            organizer.
          </h5>
          <div className="row">
            <div className="col-6">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                  background: "#1d1d1f",
                }}
              >
                <a href={"https://www.github.com/dawnwages"}>GitHub</a>
              </div>
            </div>
            <div className="col-6">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                  background: "#1d1d1f",
                }}
              >
                <a
                  href={"http://www.dawnwages.info/apps"}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Portfolio
                </a>
              </div>
            </div>
          </div>

          <h3 id="dynamic-styles">Experience</h3>

          <dl>
            <dt>
              <span role={"image"} aira-label={"skateboard"}>
                🛹
              </span>{" "}
              Front End
            </dt>
            <dd>
              Python, Django, Wagtail, DRF, ECMAScript Languages: TypeScript,
              ES5 and ES6, Object Oriented JavaScript methods, Babel, webpack,
              jQuery, AJAX, HTML5, CSS3, creating design systems, custom themes,
              Bootstrap, React 15 & 16, redux.
            </dd>
            <br></br>
            <dt>
              <span role={"image"} aria-label={"yarn"}>
                🧶
              </span>{" "}
              Middleware and Back End
            </dt>
            <dd>
              Firebase, AWS, Digital Ocean, EC2, Oracle, MySQL, PostgreSQL,
              MongoDB, Linux/bash, git, Node, Express, HandlebarsJS, Jenkins,
              Redis, Ansible, APIs, REST, npm & Yarn, docker, gulp.
            </dd>
            <br></br>
            <dt>
              <span role={"image"} aria-label={"unicorn"}>
                🦄
              </span>{" "}
              User Experience
            </dt>
            <dd>
              A/B Testing, Dashboards, UX Research Interviews, Quality
              Assurance, microconversion interaction design and eCommerce
              merchandising, web products for eComm sales funnel and shop pages,
              campaign reviews.
            </dd>
            <br></br>
            <dt>
              <span role={"image"} aria-label={"hamburger"}>
                🍔
              </span>{" "}
              Libraries and Static Site Generators
            </dt>
            <dd>
              React 15 & 16, Wagtail, Django, Gatsby, Netlify CMS, Hugo, Jekyll.
            </dd>
            <br></br>
            <dt>
              <span role={"image"} aria-label={"squid"}>
                🦑
              </span>{" "}
              Apps
            </dt>
            <dd>
              eCommerce, proof of concept, web chat app, data visualization,
              CMS, social app, non profits.
            </dd>
          </dl>

          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.dawnSpeaking.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>
              Djangocon Europe 2019 organizer - Dawn announcing a good friend
              and excellent speaker to the stage.
            </figcaption>
          </figure>
          <hr />
          <h3 id="dynamic-styles"></h3>
          <p>
            She lives in Philadelphia with her{" "}
            <a
              href={"http://www.dawnwages.info/theo"}
              target={"_blank"}
              rel="noreferrer"
            >
              dog, Thelonious "Theo" Ace Hood Monk
            </a>{" "}
            learning the ukulele,{" "}
            <a href="/animenmusic">listening to music and watching anime</a>,
            and enjoying black queer femme events around the city.
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
