import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import { Link, FormattedMessage, useIntl } from 'gatsby-plugin-intl'
import Layout from '../components/layout'
import Board from '../components/board'
import portfolioEn from '../data/i18n/portfolio-en.json'
import portfolioZh from '../data/i18n/portfolio-zh.json'
import SEO from '../components/seo'

export const query = graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`

const Title = ({ bold, right, link }) => {
    const boldCss = css`
        font-weight: bold;
        margin-right: 2rem;
        font-size: 1.2rem;
    `

    return (
        <div
            css={css`
                margin-bottom: 1rem;
            `}
        >
            {link === undefined ? (
                <span css={boldCss}>{bold}</span>
            ) : (
                <Link to={link} css={boldCss}>
                    {bold}
                </Link>
            )}

            <span
                css={css`
                    float: right;
                `}
            >
                {right}
            </span>
        </div>
    )
}

const Project = ({ name, date, description, link }) => (
    <Board>
        <Title bold={name} right={date} link={link} />
        {description.map((desc, index) => (
            <p key={index}>{desc}</p>
        ))}
    </Board>
)

export default function Portfolio({ data }) {
    const intl = useIntl()
    const portfolio = intl.locale === 'en' ? portfolioEn : portfolioZh

    const articles = {}
    data.allMarkdownRemark.edges.forEach(({ node }) => {
        articles[node.frontmatter.title] = node.fields.slug
    })

    return (
        <Layout current="/portfolio">
            <SEO title={intl.formatMessage({ id: 'portfolio' })} />
            <section>
                <h2>
                    <FormattedMessage id="about" />
                </h2>
                <Board>
                    <p>
                        <FormattedMessage id="portfolio1" />
                    </p>
                    <p>
                        <FormattedMessage id="portfolio2" />
                    </p>
                </Board>
            </section>
            <section>
                <h2>
                    <FormattedMessage id="projects" />
                </h2>
                {portfolio.projects.map((project, index) => (
                    <Project key={index} {...project} link={articles[project.name]} />
                ))}
            </section>
        </Layout>
    )
}
