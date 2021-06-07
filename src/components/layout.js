import React from "react"
import { Link } from "gatsby"
import { createGlobalStyle } from "styled-components"
import { Grommet } from "grommet"
import customTheme from "../utils/customTheme"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    scroll-behavior: smooth;
        overflow-y: scroll;
  }
`

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <Grommet
      theme={customTheme}
      background={customTheme.global.colors.background}
      full
    >
      <GlobalStyle />
      <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
        <header className="site-head">
          <div className="site-head-container">
            <a
              className="nav-burger"
              href={`#`}
              onClick={() => setToggleNav(!toggleNav)}
            >
              <div
                className="hamburger hamburger--collapse"
                aria-label="Menu"
                role="button"
                aria-controls="navigation"
              >
                <div className="hamburger-box">
                  <div className="hamburger-inner">-</div>
                </div>
              </div>
            </a>
            <nav id="swup-nav" class="site-head-left">
              <ul className="nav" role="menu">
                {/* <li className="nav-home nav-current" role="menuitem">
                  <Link to={`/`}>Home</Link>
                </li> */}
                <li className="nav-coffee" role="menuitem">
                  <a
                    href="https://www.buymeacoffee.com/dawnwages"
                    target="_blank"
                    className="buy-me-coffee"
                  >
                    <img
                      src="https://cdn.buymeacoffee.com/buttons/v2/arial-green.png"
                      alt="Buy Me A Coffee"
                    ></img>
                  </a>
                </li>
                <li className="nav-about" role="menuitem">
                  <Link to={`/about`}>Hire Me</Link>
                </li>
                <li className="nav-tags" role="menuitem">
                  <Link to={`/tags`}>Tags</Link>
                </li>
              </ul>
            </nav>
            <div className="site-head-center">
              <Link className="site-head-logo" to={`/`}>
                {title}
              </Link>
            </div>
            <div className="site-head-right">
              <div className="social-links">
                <a
                  href="https://twitter.com/DawnWagesSays"
                  title="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>

                <a
                  href="https://github.com/dawnwages"
                  title="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

                <a
                  href="http://dawnwages.info"
                  title="Personal Page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  dawnwages.info
                </a>
              </div>
            </div>
          </div>
        </header>
        <main id="site-main" className="site-main">
          <div id="swup-main" className="transition-fade">
            {children}
          </div>
        </main>
        <footer className="site-foot">
          &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link>{" "}
          &mdash; Built with{" "}
          <a
            href="https://gatsbyjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>
        </footer>
      </div>
    </Grommet>
  )
}

export default Layout
