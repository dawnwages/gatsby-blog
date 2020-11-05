/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

function ProjectList() {
  return (
    <StaticQuery
      query={projectQuery}
      render={data => {
        const { author, social, projects } = data.site.siteMetadata
        console.log(projects)
        let projectList = []
        function createProject(projects) {
          for (const [key, value] of Object.entries(projects)) {
            let img_name = `data.${key}_img.childImageSharp.fixed`
            console.log(img_name)
            projectList.push(
              <div className="col-4">
                <Image
                  fixed={`data.${key}_img.childImageSharp.fixed`}
                  //fixed={data.StonedCodeKiller_img.childImageSharp.fixed}
                  alt={value.title}
                  key={key}
                  caption={value.desc}
                  author={author}
                  imgStyle={{
                    borderRadius: `50%`,
                  }}
                />
                <div>
                  <a href={value.link} target="_blank">
                    <caption>{value.title}</caption>
                  </a>
                </div>
              </div>
            )
          }
          console.log(projectList)
          return projectList
        }
        // createProject(projects);

        return (
          <section>
            <div className="kg-gallery-row">{createProject(projects)}</div>
            {/*{projects.map( projects => {*/}
            {/*    return (*/}
            {/*      <span>{projects}</span>*/}
            {/*    )*/}
            {/*})}*/}
          </section>
        )
      }}
    />
  )
}

const projectQuery = graphql`
  query ProjectQuery {
    AtTheRoot_img: file(absolutePath: { regex: "/LogoAtTheRoot.png/" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    VE4TM_img: file(absolutePath: { regex: "/VE4TM.jpg/" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    StonedCodeKiller_img: file(absolutePath: { regex: "/SCK.jpg/" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
        projects {
          AtTheRoot {
            title
            link
            desc
          }
          StonedCodeKiller {
            title
            link
            desc
          }
          VE4TM {
            title
            link
            desc
          }
        }
      }
    }
  }
`

export default ProjectList
