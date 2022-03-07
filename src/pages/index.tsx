import React, { useState, useMemo, useCallback } from "react"
import { Box } from "grommet"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ModalEvent from "../components/ModalEvent"
import Month from "../components/Calendar/Month"
import groupEventsByMonth from "../utils/groupEventsByMonth"
import { format } from "date-fns"

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

  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState<ModalData>()

  const limitMonthInTheFuture = 3
  console.log("month limit", limitMonthInTheFuture)

  // events["edges"][0]["node"]
  // {id: "5097a90b-ef82-56f9-b199-debebe78a3d4", eventName: "Test Event", date: "6/11/2021", eventLink: "https://www.dawnwages.info", place: "home"}

  const months = useMemo(
    () =>
      groupEventsByMonth(
        data.allGoogleRenameSheet["edges"],
        limitMonthInTheFuture
      ),
    [data.allGoogleRenameSheet["edges"], limitMonthInTheFuture]
  )

  const openModal = useCallback(data => {
    setModalData(data)
    setShowModal(true)
  }, [])

  console.log(data)

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
          <span>Software Development and Maintenance Consulting.</span>
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
                padding: ".5rem 0",
                textAlign: "center",
                background: "#1d1d1f",
              }}
            >
              <form
                action="https://buttondown.email/api/emails/embed-subscribe/GlitterTech"
                method="post"
                target="popupwindow"
                onSubmit={() =>
                  window.open(
                    "https://buttondown.email/GlitterTech",
                    "popupwindow"
                  )
                }
                className="embeddable-buttondown-form"
              >
                <div
                  style={{
                    margin: "1.5em 0 0em 0",
                    fontSize: "2.6rem",
                  }}
                >
                  ✨ Newsletter ✨
                </div>
                <p
                  className="col-8"
                  style={{
                    margin: "auto",
                  }}
                >
                  A11y, Wagtail, Django, Python, React, JavaScript and Ethical
                  Open Source
                </p>
                <div
                  className="col-8"
                  style={{
                    margin: "auto",
                  }}
                >
                  <label htmlFor="bd-email">Enter your email</label>
                  <input
                    type="email"
                    name="email"
                    id="bd-email"
                    placeholder="email@email.com"
                  />
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
              }}
            >
              <Box id="calendars" animation="fadeIn">
                {months.map(month => (
                  <Month
                    key={format(month.startDate, "MM")}
                    openModal={openModal}
                    {...month}
                  />
                ))}
              </Box>
              {showModal && (
                <ModalEvent
                  onClose={() => setShowModal(false)}
                  {...modalData!}
                />
              )}
            </div>
          </div>
          {/*show modal here */}
        </header>
      )}
      <h2
        className="page-head-title"
        style={{
          padding: "1rem 0rem 10rem 1rem",
          textAlign: "center",
        }}
      >
        Blog
      </h2>
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
        monthLimit
      }
    }
    allGoogleRenameSheet {
      edges {
        node {
          id
          eventName: whatIsTheName
          date: when
          eventLink: link
          place: where
          time: timestamp
        }
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
