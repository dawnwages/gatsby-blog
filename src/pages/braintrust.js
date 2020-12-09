import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ElementsPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="My Braintrust"
        keywords={[
          `Philly`,
          `DeShana Wooden`,
          `Erika Miguel`,
          `Samira Mira Gibson`,
        ]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h3 id="heading-level-2">My Braintrust</h3>
          <p>
            I'm honored to have these brilliant people inform my career. From
            Diversity and Inclusion, design, accessibility, consulting and code
            hygiene -- my #team holds me accountable, inspires me and educates
            me.
          </p>
          <div className="row">
            <div className="col">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                  background: "#1d1d1f",
                }}
              >
                Designer Extraordinaire
              </div>
            </div>
            <div className="col">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                  background: "#1d1d1f",
                }}
              >
                Voice of Reason
              </div>
            </div>
            <div className="col">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                  background: "#1d1d1f",
                }}
              >
                Coach Miguel
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                }}
              >
                <Img
                  fluid={data.smallPic.childImageSharp.fluid}
                  className="kg-image"
                />
              </div>
            </div>
            <div className="col">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                }}
              >
                <Img
                  fluid={data.smallPic.childImageSharp.fluid}
                  className="kg-image"
                />
              </div>
            </div>
            <div className="col">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                }}
              >
                <Img
                  fluid={data.smallPic.childImageSharp.fluid}
                  className="kg-image"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div
                style={{
                  height: "6rem",
                }}
              ></div>
            </div>
          </div>
          <h3 id="heading-level-2">Designer Extraordinaire</h3>
          <hr />
          <dl>
            <dt>Samira Gibson (she/her)</dt>
            <dd>
              <div className="row">
                <div className="col-3">
                  <div
                    style={{
                      padding: "1rem 0",
                      textAlign: "center",
                    }}
                  >
                    <Img
                      fluid={data.smallPic.childImageSharp.fluid}
                      className="kg-image"
                    />
                  </div>
                </div>
                <div className="col-9">
                  <div
                    style={{
                      padding: "1rem 0",
                      textAlign: "center",
                      background: "#1d1d1f",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <span>
                      <b>Digital Designer</b> <br />
                      Human centric design, where form meets function
                    </span>
                  </div>
                </div>
              </div>
              <p>
                Mira is skateboarder local to philly. When she's not handing out
                used boards to local black and brown kids, or teaching them how
                to ride, she creates commissions as a digital artist and designs
                digital applications for all sorts of industry verticals
                including but not limited to: ecommerce, federal government,
                luxury, resort and boutique shopping.
              </p>
              <p>
                Mira loves Scooby Do and vouches by every scooby franchise up
                until 2013 where Mystery Inc. is depicted as puppets.
              </p>
              <ul>
                <li>Digital Artist.</li>
                <li>Computer Technology and Visual Design Degree.</li>
                <li>Loves creative writin and manga.</li>
                <li>My partner and friend.</li>
              </ul>
            </dd>
            <dd>
              <div className="row">
                <div className="col-8">
                  <div
                    style={{
                      height: "1rem",
                    }}
                  ></div>
                </div>
                <div className="col-4">
                  <div
                    style={{
                      height: "1rem",
                    }}
                  >
                    <a href="https://samiragibson.com" className="button fit">
                      SamiraGibson.com
                    </a>
                  </div>
                </div>
              </div>
            </dd>
            <dd>
              <div className="row">
                <div className="col-12">
                  <div
                    style={{
                      height: "6rem",
                    }}
                  ></div>
                </div>
              </div>
            </dd>
          </dl>
          <h3 id="heading-level-2">Voice of Reason</h3>
          <hr />
          <dl>
            <dt>DeShana Wooden (she/her)</dt>
            <dd>
              <div className="row">
                <div className="col-3">
                  <div
                    style={{
                      padding: "1rem 0",
                      textAlign: "center",
                    }}
                  >
                    <Img
                      fluid={data.smallPic.childImageSharp.fluid}
                      className="kg-image"
                    />
                  </div>
                </div>
                <div className="col-9">
                  <div
                    style={{
                      padding: "1rem 0",
                      textAlign: "center",
                      background: "#1d1d1f",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <span>
                      <b>
                        Accessibility Resource Professional, <br />
                        Diversity and Inclusion, Music
                      </b>
                      <br />
                      Universal Design approaches to inform curriculums and
                      students success.
                    </span>
                  </div>
                </div>
              </div>
              <p>
                DeShana Wooden has always been firmly entrenched in approaching
                accessible education with practical and interpersonal approaches
                applied in key areas to facilitate student growth. She uses
                Universal Design to coach Higher Education professionals,
                teachers and staff, to meet students needs. Her career in music
                works hand-in-hand as she speaks to like-minded creatives at the
                University of the Arts as the Disability Resource Counselor.
              </p>
              <ul>
                <li>
                  Diversity and Inclusion Consultant - appointments return 2021.
                </li>
                <li>Trained orchestral singer.</li>
                <li>Writer and award-winning poet.</li>
                <li>Excellent baker.</li>
              </ul>
            </dd>
            <dd>
              <div className="row">
                <div className="col-8">
                  <div
                    style={{
                      height: "1rem",
                    }}
                  ></div>
                </div>
                <div className="col-4">
                  <div
                    style={{
                      height: "1rem",
                    }}
                  >
                    <a href="https://DeShanaWooden.com" className="button fit">
                      DeShanaWooden.com
                    </a>
                  </div>
                </div>
              </div>
            </dd>
            <dd>
              <div className="row">
                <div className="col-12">
                  <div
                    style={{
                      height: "6rem",
                    }}
                  ></div>
                </div>
              </div>
            </dd>
          </dl>
          <h3 id="heading-level-2">Coach Miguel</h3>
          <hr />
          <dl>
            <dt>Erika Miguel (they/them)</dt>
            <dd>
              <div className="row">
                <div className="col-3">
                  <div
                    style={{
                      padding: "1rem 0",
                      textAlign: "center",
                    }}
                  >
                    <Img
                      fluid={data.smallPic.childImageSharp.fluid}
                      className="kg-image"
                    />
                  </div>
                </div>
                <div className="col-9">
                  <div
                    style={{
                      padding: "1rem 0",
                      textAlign: "center",
                      background: "#1d1d1f",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <span>
                      <b>Senior Software Engineer</b> <br />
                      Full Stack engineer, Web Platform Consultant, Team Lead
                      and Accessibility Engineer
                    </span>
                  </div>
                </div>
              </div>
              <p>
                Erika is an engineer that prides themselves on beautiful,
                production-ready code. Currently a web platform consultant,
                Erika has spearheaded projects that aim to revolutionize the way
                web users interact with assistive technology and the way
                assistive technology informs how we build the web. Their
                strengths lies in their T-shaped skill set, going deep on
                functional programming and DevOps, while maintaining the
                necessary acumen to be a jack of all trades in systems
                architecture and diving into new, bleeding-edge tools.
              </p>
              <ul>
                <li>Systems Architecture.</li>
                <li>Full Stack Engineer graduated from Smith College</li>
                <li>Motivated by cool problems and social impact.</li>
                <li>Cook, rock climber and musician.</li>
              </ul>
            </dd>
            <dd>
              <div className="row">
                <div className="col-8">
                  <div
                    style={{
                      height: "1rem",
                    }}
                  ></div>
                </div>
                <div className="col-4">
                  <div
                    style={{
                      height: "1rem",
                    }}
                  >
                    <a href="https://erikamiguel.com/" className="button fit">
                      ErikaMiguel.com
                    </a>
                  </div>
                </div>
              </div>
            </dd>
            <dd>
              <div className="row">
                <div className="col-12">
                  <div
                    style={{
                      height: "6rem",
                    }}
                  ></div>
                </div>
              </div>
            </dd>
          </dl>
          <hr />
          <blockquote>
            “Find a group of people who challenge and inspire you; spend a lot
            of time with them, and it will change your life.” — Amy Poehler
          </blockquote>
          <figure className="kg-card kg-image-card kg-width-wide">
            <Img
              fluid={data.medPic.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>
              A picture of us together, probably on wheels doing something in
              Philadelphia.
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
    smallPic: file(
      relativePath: { eq: "fabio-comparelli-696506-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    medPic: file(relativePath: { eq: "sophia-valkova-30139-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    largePic: file(
      relativePath: { eq: "vladimir-malyutin-98174-unsplash.jpg" }
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
      <ElementsPage location={props.location} data={data} {...props} />
    )}
  />
)
