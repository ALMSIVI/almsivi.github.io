import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'

export default function SEO({ description = '', meta = [], title }) {
    const intl = useIntl()

    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `
    )
    const metaDescription = description || site.siteMetadata.description
    return (
        <Helmet
            htmlAttributes={{
                lang: intl.locale,
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: 'description',
                    content: metaDescription,
                },
                {
                    property: 'og:title',
                    content: title,
                },
                {
                    property: 'og:description',
                    content: metaDescription,
                },
                {
                    property: 'og:type',
                    content: 'website',
                },
                {
                    name: 'twitter:card',
                    content: 'summary',
                },
                {
                    name: 'twitter:creator',
                    content: site.siteMetadata.author,
                },
                {
                    name: 'twitter:title',
                    content: title,
                },
                {
                    name: 'twitter:description',
                    content: metaDescription,
                },
            ].concat(meta)}
        />
    )
}
