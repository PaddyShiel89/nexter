module.exports = {
  siteMetadata: {
    title: `nexter — your home, your freedom`,
    description: `CSS Grid project. Original design by Jonas Schmedtmann. Additions and conversions by Patrick Shiel.`,
    author: `@paddyshiel`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `nexter`,
        short_name: `nexter`,
        start_url: `/`,
        background_color: `#b28451`,
        theme_color: `#b28451`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Josefin Sans`,
            variants: [`300`, `400`, `400i`]
          },
          {
            family: `Nunito`,
            variants: [`300`, `300i`]
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-svg-sprite`,
    `gatsby-transformer-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`
  ],
}
