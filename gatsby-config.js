module.exports = {
  siteMetadata: {
    title: `Made with CRL`,
    description: `A list of projects that we're made with create-react-library`,
    author: `@hurricane_int`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `made-with-crl`,
        short_name: `mwcrl`,
        start_url: `/`,
        background_color: `#1A202C`,
        theme_color: `#1A202C`,
        display: `minimal-ui`
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-mdx`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "libraries",
        path: `${__dirname}/content/libraries/`,
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
