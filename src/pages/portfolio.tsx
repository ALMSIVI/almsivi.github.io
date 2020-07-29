import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import Board from '../components/board'
import * as portfolio from '../data/portfolio.json'

const Title = ({ bold, right }) => (
    <div
        css={css`
            margin-bottom: 1rem;
        `}
    >
        <span
            css={css`
                font-weight: bold;
                margin-right: 2rem;
                font-size: 1.2rem;
            `}
        >
            {bold}
        </span>
        <span
            css={css`
                float: right;
            `}
        >
            {right}
        </span>
    </div>
)

// TODO: link, image/video
const Project = ({ name, date, description }) => (
    <Board>
        <Title bold={name} right={date} />
        {description.map((desc, index) => (
            <p key={index}>{desc}</p>
        ))}
    </Board>
)

export default function Portfolio() {
    return (
        <Layout current="/portfolio">
            <section>
                <h2>About</h2>
                <p>
                    This portfolio is about my experiences as a ICAM minor student. For my projects as an computer
                    science student , see <Link to="/resume">Resume</Link>.
                </p>
                <p>
                    Being a computer scientist, I love to explore the artistic side of technology. I tend to imagine
                    what our future might look like and how I can express it using my code.
                </p>
            </section>
            <section>
                <h2>Projects</h2>
                {portfolio.projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </section>
        </Layout>
    )
}
