import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl'
import Layout from '../components/layout'
import Board from '../components/board'
import styles from '../utils/styles'
import resumeEn from '../data/i18n/resume-en.json'
import resumeZh from '../data/i18n/resume-zh.json'
import SEO from '../components/seo'

const titleStyle = css`
    font-weight: bold;
    font-size: 1.2rem;
`

const Skillbar = ({ level }) => (
    <div
        css={css`
            display: inline-block;
            width: ${level + 'rem'};
            height: 0.9rem;
            font-size: 0.8rem;
            line-height: 0.9rem;
            border-radius: 5px;
            padding-left: 0.5rem;
            color: cornsilk;
            background-color: dodgerblue;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        `}
    >
        {level} / 5
    </div>
)

const Skillset = ({ title, skills }) => (
    <Board>
        <p css={titleStyle}>{title}</p>
        <div
            css={css`
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
            `}
        >
            {skills.map(({ name, level }, index) => (
                <div
                    css={css`
                        margin: 0.5rem;
                        width: 15rem;
                    `}
                    key={index}
                >
                    <div
                        css={css`
                            display: inline-block;
                            width: 10rem;
                        `}
                    >
                        {name}
                    </div>
                    <Skillbar level={level} />
                </div>
            ))}
        </div>
    </Board>
)

export const squareImage = graphql`
    fragment squareImage on File {
        childImageSharp {
            fluid(maxHeight: 200) {
                ...GatsbyImageSharpFluid
            }
        }
    }
`

export const query = graphql`
    query {
        QI: file(relativePath: { eq: "QI.png" }) {
            ...squareImage
        }

        Alibaba: file(relativePath: { eq: "Alibaba.png" }) {
            ...squareImage
        }

        LMT: file(relativePath: { eq: "LMT.jpg" }) {
            ...squareImage
        }

        UCSDHealth: file(relativePath: { eq: "UCSDHealth.jpg" }) {
            ...squareImage
        }

        okta: file(relativePath: { eq: "okta.png" }) {
            ...squareImage
        }
    }
`

const Picture = ({ src }) => (
    <div
        css={css`
            width: 12rem;
            height: 12rem;
            background-color: white;
            border-radius: 10%;
            position: relative;
            margin: 0.5rem;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        `}
    >
        <Img
            fluid={src}
            alt="Company logo"
            css={css`
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            `}
        />
    </div>
)

const Title = ({ bold, italics, right }) => {
    const responsive = css`
        @media (max-width: ${styles.mobileBreakpoint}) {
            display: block;
            float: none;
        }
    `

    return (
        <div
            css={css`
                margin-bottom: 1rem;
            `}
        >
            <span
                css={css`
                    ${titleStyle};
                    ${responsive};
                    margin-right: 1rem;
                `}
            >
                {bold}
            </span>
            <span
                css={css`
                    ${responsive};
                    font-style: italic;
                `}
            >
                {italics}
            </span>
            <span
                css={css`
                    ${responsive};
                    float: right;
                `}
            >
                {right}
            </span>
        </div>
    )
}

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

const Work = ({ position, company, location, date, bullets, imgSrc }) => (
    <Board>
        <div
            css={css`
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;
                @media (max-width: ${styles.mobileBreakpoint}) {
                    justify-content: center;
                }
            `}
        >
            <Picture src={imgSrc} />
            <div
                css={css`
                    @media (min-width: ${styles.mobileBreakpoint}) {
                        width: calc(100% - 15rem);
                    }
                `}
            >
                <Title bold={position} italics={company + ', ' + location} right={date} />
                <BulletList bullets={bullets} />
            </div>
        </div>
    </Board>
)

const Project = ({ name, position, date, link, bullets }) => (
    <Board>
        <Title bold={name} italics={position} right={date} />
        <div
            css={css`
                display: block;
                margin-bottom: 1rem;
            `}
        >
            <a href={link}>
                <FormattedMessage id="repository" />
            </a>
        </div>
        <BulletList bullets={bullets} />
    </Board>
)

const Education = ({ degree, date, gpa, msg }) => (
    <li>
        {degree} {msg && <FormattedMessage id={msg} />} (GPA: {gpa})
        <span
            css={css`
                float: right;
            `}
        >
            {date}
        </span>
    </li>
)

export default function Resume({ data }) {
    const intl = useIntl()
    const resume = intl.locale === 'en' ? resumeEn : resumeZh

    return (
        <Layout current="/resume">
            <SEO title={intl.formatMessage({ id: 'resume' })} />
            <section>
                <h2>
                    <FormattedMessage id="about" />
                </h2>
                <Board>
                    <p>
                        <FormattedMessage id="resume1" />
                    </p>
                    <p dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: 'resume2' }) }} />
                    {resume.comments.include && <p>{resume.comments.position}</p>}
                </Board>
            </section>
            <section>
                <h2>
                    <FormattedMessage id="education" />
                </h2>
                <Board>
                    <Title bold={resume.education.name} italics="" right="" />
                    <ul>
                        <Education
                            degree={resume.education.bs}
                            gpa={resume.education.bsgpa}
                            date={resume.education.bsdate}
                            msg="bsmsg"
                        />
                        <Education
                            degree={resume.education.ms}
                            gpa={resume.education.msgpa}
                            date={resume.education.msdate}
                            msg=""
                        />
                        <li>
                            <FormattedMessage id="courses" /> {resume.education.courses.join(', ')}
                        </li>
                    </ul>
                </Board>
            </section>
            <section>
                <h2>
                    <FormattedMessage id="skills" />
                </h2>
                <Skillset title="Language" skills={resume.skills.language} />
                <Skillset title="Frameworks" skills={resume.skills.framework} />
                <Skillset title="Software" skills={resume.skills.software} />
            </section>
            <section>
                <h2>
                    <FormattedMessage id="work" />
                </h2>
                {resume.work.map((work, index) => {
                    console.log(data)
                    console.log(work.image)
                    return (
                    <Work key={index} {...work} imgSrc={data[work.image].childImageSharp.fluid} />
                )})}
            </section>
            <section>
                <h2>
                    <FormattedMessage id="projects" />
                </h2>
                {resume.projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </section>
        </Layout>
    )
}
