/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: `Yue Wu`,
    },
    plugins: [
        `gatsby-plugin-emotion`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-typography`,
            options: { pathToConfigModule: `src/utils/typography` },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: { name: `data`, path: `${__dirname}/src/data/` },
        },
    ],
}
