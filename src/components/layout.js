import React from "react"
import { Link } from "gatsby"
import { createGlobalStyle } from "styled-components"
import { Grommet } from "grommet"
import customTheme from "../utils/customTheme"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    scroll-behavior: smooth;
        overflow-y: auto;
  }
`

const Layout = props => {
  // const len = 40
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  const skillsDict = {
    software: [
      "Python",
      "Django",
      "DRF",
      "Flask",
      "Server-Side Logic",
      "Scalable Code",
    ],
    design: [
      "Python",
      "Django",
      "DRF",
      "Flask",
      "Server-Side Logic",
      "Scalable Code",
    ],
  }
  // const skillsText = skillsDict["software"].reduce((skill, val, index) => {
  //   let skillText = `❑ ${skill} `
  //   return skillText + val
  // })
  const emailTitle = "Join The Team"
  const bodyContent =
    "Hi Glitter Tech Team%2C" +
    "%0D%0A" +
    "%0D%0A" +
    "I'm interested in a joining the team!" +
    "%0D%0A" +
    "%0D%0A %0D%0A" +
    "======================================================================" +
    "%0D%0A" +
    "TELL US ABOUT YOUR YOURSELF: " +
    "%0D%0A" +
    "%0D%0A" +
    "Interested in joining our team?" +
    "%0D%0A" +
    "Tell us more details about yourself and we'll follow up with a call or email." +
    "%0D%0A" +
    "%0D%0A" +
    "- Name:" +
    "%0D%0A" +
    "%0D%0A" +
    "- Job Title:" +
    "%0D%0A" +
    "%0D%0A" +
    "- LinkedIn / Website:" +
    "%0D%0A" +
    "%0D%0A" +
    "- GitHub / GitLab:" +
    "%0D%0A" +
    "%0D%0A" +
    "- Phone (Optional):" +
    "%0D%0A" +
    "%0D%0A" +
    // "- Additional Information?" + "%0D%0A" + "%0D%0A" + "%0D%0A" +
    "- How did you hear about us? " +
    "%0D%0A" +
    "%0D%0A" +
    "❑ Friend " +
    "%0D%0A" +
    "%0D%0A" +
    "❑ Social Media " +
    "%0D%0A" +
    "%0D%0A" +
    "❑ Referral " +
    "%0D%0A" +
    "%0D%0A" +
    "❑ Other: ________________________________________________________ " +
    "%0D%0A" +
    "%0D%0A" +
    "%0D%0A" +
    // + "- Skills? " + "%0D%0A" + "%0D%0A" +
    // "Software" + "%0D%0A" + encodeURIComponent(skillsText) +
    // // "❑ Python ".padEnd(len, '/') + "❑ Django ".padEnd(len, '_') + "❑ DRF ".padEnd(len, '_') + "❑ Flask ".padEnd(len, '_')+ "%0D%0A" +
    // // "❑ Server-Side Logic ".padEnd(len, '_') + "❑ Scalable Code ".padEnd(len, '_')+ "❑ ORM Object-Relational Mapping ".padEnd(len, '_') + "❑ Flask ".padEnd(len, '_') + "%0D%0A" +
    // // "❑ JavaScript ".padEnd(len, '__') + "❑ React ".padEnd(len, '__') + "❑ Vue ".padEnd(len, '__') + "❑ HTML ".padEnd(len, '__') + "%0D%0A" +
    // // "❑ CSS ".padEnd(len, '__') + "❑ Front-End Technologies ".padEnd(len, '__') + "❑ Vue ".padEnd(len, '__') + "❑ HTML ".padEnd(len, '__') + "%0D%0A" +
    // // "❑ Test and Debugging Programs ".padEnd(len, '__') + "❑ Security and Data Protection ".padEnd(len, '__') + "❑ Data Pipelines ".padEnd(len, '__') + "❑ HTML ".padEnd(len, '__') + "%0D%0A" +
    // // "❑ Modern DevOps".padEnd(len, '__') + "❑ AWS ".padEnd(len, '__') + "❑ Azure ".padEnd(len, '__') + "❑ CI/testing ".padEnd(len, '__') + "%0D%0A" +
    // // "❑ Digital Ocean".padEnd(len, '__') + "❑ Vercel ".padEnd(len, '__') + "❑ Heroku ".padEnd(len, '__')+ "❑ Linode".padEnd(len, '__')+ "%0D%0A" +
    // // "❑ RESTful APIs".padEnd(len, '__') + "❑ GraphQL / Graph APIs".padEnd(len, '__') + "❑ Git / Code Versioning ".padEnd(len, '__') + "%0D%0A" +
    "❑ Resume Attached? " +
    "%0D%0A" +
    "%0D%0A" +
    "We look forward to hearing from you!" +
    "%0D%0A"
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
            <nav id="swup-nav" className="site-head-left">
              <ul className="nav" role="menu">
                <li className="nav-home nav-current" role="menuitem">
                  <Link to={`/`}>Home</Link>
                </li>
                <li className="nav-home nav-current" role="menuitem">
                  <Link to={`/about-us/`}>About Us</Link>
                </li>
                <li className="nav-home nav-current" role="menuitem">
                  <a href="mailto:contact@glittertech.dev">Contact</a>
                </li>
                {/*<li className="nav-home nav-current" role="menuitem">*/}
                {/*  <Link to={`/`}>Services</Link>*/}
                {/*</li>*/}
                {/*<li className="nav-coffee" role="menuitem">*/}
                {/*  <a*/}
                {/*    href="https://www.buymeacoffee.com/dawnwages"*/}
                {/*    target="_blank"*/}
                {/*    className="buy-me-coffee"*/}
                {/*  >*/}
                {/*    <img*/}
                {/*      src="https://cdn.buymeacoffee.com/buttons/v2/arial-green.png"*/}
                {/*      alt="Buy Me A Coffee"*/}
                {/*    ></img>*/}
                {/*  </a>*/}
                {/*</li>*/}
                {/*<li className="nav-about" role="menuitem">*/}
                {/*  <Link to={`/about`}>Hire Me</Link>*/}
                {/*</li>*/}
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
                  href={`mailto:contact@glittertech.dev?subject=${emailTitle}&body=${bodyContent}`}
                  title="Join Our Team!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Our Team
                </a>
                {/*<a*/}
                {/*  href="https://github.com/dawnwages"*/}
                {/*  title="GitHub"*/}
                {/*  target="_blank"*/}
                {/*  rel="noopener noreferrer"*/}
                {/*>*/}
                {/*  GitHub*/}
                {/*</a>*/}
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
          &copy; {new Date().getFullYear()} <Link to={`/`}> {title}</Link>{" "}
        </footer>
      </div>
    </Grommet>
  )
}

export default Layout
