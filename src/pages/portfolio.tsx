import React from 'react'
import { Link, graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import Board from '../components/board'
import * as portfolio from '../data/portfolio.json'

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
    const articles = {}
    data.allMarkdownRemark.edges.forEach(({ node }) => {
        articles[node.frontmatter.title] = node.fields.slug
    })

    return (
        <Layout current="/portfolio">
            <section>
                <h2>About</h2>
                <Board>
                    <p>
                        This portfolio is about my experiences as a ICAM minor student. For my projects as an computer
                        science student , see <Link to="/resume">Resume</Link>.
                    </p>
                    <p>
                        Being a computer scientist, I love to explore the artistic side of technology. I tend to imagine
                        what our future might look like and how I can express it using my code.
                    </p>
                </Board>
            </section>
            <section>
                <h2>Projects</h2>
                {portfolio.projects.map((project, index) => (
                    <Project key={index} {...project} link={articles[project.name]} />
                ))}
            </section>
        </Layout>
    )
}
