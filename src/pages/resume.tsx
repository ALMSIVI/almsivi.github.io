import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import Board from '../components/board'
import * as resume from '../data/resume.json'

const Title = ({ bold, italics, right }) => (
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
                font-style: italic;
            `}
        >
            {italics}
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

const BulletList = ({ bullets }) => (
    <ul
        css={css`
            margin-bottom: 0;
            li:last-child {
                margin-bottom: 0;
            }
        `}
    >
        {bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
        ))}
    </ul>
)
// TODO: link, picture, timeline
const Work = ({ position, company, location, date, bullets }) => (
    <Board>
        <Title bold={position} italics={company + ', ' + location} right={date} />
        <BulletList bullets={bullets} />
    </Board>
)

// TODO: link
const Project = ({ name, position, date, link, bullets }) => (
    <Board>
        <Title bold={name} italics={position} right={date} />
        <div
            css={css`
                display: block;
                margin-bottom: 1rem;
            `}
        >
            <a href={link}>Link to repository</a>
        </div>
        <BulletList bullets={bullets} />
    </Board>
)

export default function Resume() {
    return (
        <Layout current="/resume">
            <section>
                <h2>About</h2>
                <Board>
                    <p>
                        This resume is about my experiences as a computer science student. For my projects as an ICAM
                        artist, see <Link to="/portfolio">Portfolio</Link>.
                    </p>
                    <p>
                        For a pdf version, see{' '}
                        <a href="https://github.com/ALMSIVI/Resume/blob/master/resume.pdf">here</a>.
                    </p>
                </Board>
            </section>
            <section>
                <h2>Education</h2>
                <Board>
                    <Title
                        bold={resume.education.name}
                        italics={resume.education.degree}
                        right={resume.education.time}
                    />
                    <p>Courses taken: {resume.education.courses.join(', ')}</p>
                </Board>
            </section>
            <section>
                <h2>Skills</h2>
                <Board>
                    <p>Language: {resume.skills.language.join(', ')}</p>
                    <p>Framework: {resume.skills.framework.join(', ')}</p>
                    <p>Software: {resume.skills.software.join(', ')}</p>
                </Board>
            </section>
            <section>
                <h2>Work Experiences</h2>
                {resume.work.map((work, index) => (
                    <Work key={index} {...work} />
                ))}
            </section>
            <section>
                <h2>Other Projects</h2>
                {resume.projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </section>
        </Layout>
    )
}
