const urljoin = require("url-join")
const siteConfig = require("./siteConfig")
require("dotenv").config()

const buildCredentials = ({
  PROJECT_ID,
  PRIVATE_KEY,
  PRIVATE_KEY_ID,
  CLIENT_ID,
  CLIENT_EMAIL,
  CERT_URL,
}) => ({
  type: "service_account",
  project_id: PROJECT_ID,
  private_key_id: PRIVATE_KEY_ID,
  private_key: PRIVATE_KEY.replace(/(\\r)|(\\n)/g, "\n"),
  client_email: CLIENT_EMAIL,
  client_id: CLIENT_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: CERT_URL,
})

const SPREADSHEET_ID = "1r2oi-hqSUnFZ2CtRfhv-tRvGoKuWVSPVeTQLYIuUFgc"

module.exports = {
  siteMetadata: {
    title: siteConfig.name,
    monthLimit: siteConfig.limitMonthInTheFuture,
    author: siteConfig.author,
    description: siteConfig.description,
    siteUrl: urljoin(siteConfig.url, siteConfig.prefix),
    social: {
      twitter: siteConfig.twitter,
    },
    projects: {
      AtTheRoot: {
        title: "At The Root",
        desc: "",
        link: "https://AtTheRoot.dev",
        img: "content/assets/sparkles_2728.png",
      },
      StonedCodeKiller: {
        title: "Stoned Code Killer",
        desc: "",
        link: "https://stonedcodekiller.com",
        img: "content/assets/sparkles_2728.png",
      },
      VE4TM: {
        title: "Volunteer Engineers 4 The Movement",
        desc: "",
        link: "https://VE4TM.dev",
        img: "content/assets/sparkles_2728.png",
      },
      store: {
        title: "Glitter Tech Merchandise",
        desc: "",
        link: "",
        img: "content/assets/sparkles_2728.png",
      },
    },
  },
  plugins: [
    `gatsby-plugin-typescript`,
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-google-sheets",
      options: {
        spreadsheetId: "1r2oi-hqSUnFZ2CtRfhv-tRvGoKuWVSPVeTQLYIuUFgc",
        worksheetTitle: "Form Responses 1",
        credentials: buildCredentials(process.env),
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-29082978-1",
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "https://glittertech.dev",
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/static/cms/cms.js`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1360,
              withWebp: true,
              showCaptions: true,
              quality: 75,
              wrapperStyle: `margin: 7vw 0;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("postcss-easy-import")(),
          require("postcss-custom-properties")({ preserve: false }),
          require("postcss-color-function")(),
          require("autoprefixer")({ browsers: ["last 2 versions"] }),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        ignore: ["/ignored.css", "prismjs/", "docsearch.js/"], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteConfig.name,
        short_name: siteConfig.shortName,
        start_url: siteConfig.prefix,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/sparkles_2728.png`,
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
