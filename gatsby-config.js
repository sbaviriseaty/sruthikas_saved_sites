/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
// In your gatsby-config.js
module.exports = {
  plugins: [
    //This plugin exists only once but can consume an array of endpoints
    {
      resolve: 'gatsby-source-rest-api',
      options: {
        endpoints: [
          "https://v2-api.sheety.co/22a5e6fbc0e664513d2387476a221277/bookmarks/directory"
        ],
      },
    },
  ],
}