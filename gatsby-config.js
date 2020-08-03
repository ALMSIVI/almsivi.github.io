/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: `Yue Wu`,
        description: `Yue Wu's Ppersonal website`,
        author: `Yue Wu (ALMSIVI)`
    },
    plugins: [
        `gatsby-plugin-emotion`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-typography`,
            options: { pathToConfigModule: `src/utils/typography` },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: { name: `data`, path: `${__dirname}/src/data/` },
        },
        {
            resolve: `gatsby-plugin-intl`,
            options: {
                path: `${__dirname}/src/data/i18n`,
                languages: [`en`, `zh`],
                defaultLanguage: `en`,
                redirect: true
            }
        }
    ],
}
