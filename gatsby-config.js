
module.exports = {
  // pathPrefix: "/uxpages",
  siteMetadata: {
    title: 'biscay plain',
    description: 'biscay plain',
    siteUrl: 'https://biscaypla.in/',
  },
  plugins: [
    // Shortcut for adding plugins without options.
    `gatsby-plugin-postcss`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-optimize-svgs',
    'gatsby-plugin-page-transitions',
  ],
}
