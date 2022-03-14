import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ElementsPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="Anime and Music" keywords={[`anime`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h1 id="heading-level-1">Anime</h1>
          <hr />
          <p>
            Keeping track of the anime with <u>My Anime List</u>{" "}
            <a href="https://myanimelist.net/profile/ChibiNadia">here</a>. It's
            not really up to date, but since I'm getting back into it lately
            (2020) I'd like to do a better job ot tracking what I watch.
          </p>
          <h3 id="heading-level-2">
            Favorite{" "}
            <span role={"img"} aira-label={"fire"}>
              🔥
            </span>
            <span role={"img"} aira-label={"heart"}>
              💓
            </span>
          </h3>
          <p>
            I love strong female leads with deep back stories and intellectual
            plots with deamons. Oh the sweet theme of shinigamis coming out to
            mess with a whole town or snatch a life. I also like cutsie stuff.
          </p>

          <ul>
            <li>
              <a href="https://myanimelist.net/anime/1818/Claymore?q=Claymore">
                Claymore
              </a>
            </li>
            <li>
              <a href="https://myanimelist.net/anime/226/Elfen_Lied?q=Elfin%20Lied">
                Elfin Lied
              </a>
            </li>
            <li>
              <a href="https://myanimelist.net/anime/121/Fullmetal_Alchemist?q=Full%20Metal%20Alchemist">
                Full Metal Alchemist
              </a>
            </li>
            <li>
              <a href="https://myanimelist.net/anime/36884/Hisone_to_Maso-tan?q=Dragon%20Pilot">
                Dragon Pilot (Hisone to Maso-tan)
              </a>
            </li>
            <li>
              <a href="https://myanimelist.net/anime/40256/Cannon_Busters">
                Cannon Busters
              </a>
            </li>
          </ul>

          <h3 id="heading-level-3">Plan To Watch List ⌚</h3>
          <ul>
            <li>Demon Slayer</li>
            <li>Bleach</li>
            <li>Fire force</li>
            <li>Bungo Stray Dogs</li>
            <li>Blood Blockade Battlefront</li>
            <li>Tokyo Ghoul</li>
          </ul>

          <h3 id="heading-level-3">
            Currently Watching{" "}
            <span role={"img"} aria-label={"time"}>
              ⏳
            </span>
          </h3>
          <p>
            Right now I'm catching up on what the internet has been on fire
            about.
          </p>

          <ul>
            <li>Hunter x Hunter</li>
            <li>Sword Art Online s2</li>
            <li>My Hero Academia </li>
          </ul>
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
