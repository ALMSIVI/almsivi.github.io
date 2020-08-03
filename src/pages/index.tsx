import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Socials from '../components/socials'
import Navigation from '../components/navigation'
import Board from '../components/board'
import { css } from '@emotion/core'
import styles from '../utils/styles'
import Container from '../components/container'
import SEO from '../components/seo'
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl'
import qnaEn from '../data/i18n/qna-en.json'
import qnaZh from '../data/i18n/qna-zh.json'

const Section = ({ children }) => (
    <section
        css={css`
            margin: 2rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: flex-start;
            @media (max-width: ${styles.mobileBreakpoint}) {
                margin: 0.5rem;
                justify-content: center;
            }
        `}
    >
        {children}
    </section>
)

export const query = graphql`
    query {
        file(relativePath: { eq: "Profile.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 800, maxHeight: 800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
const Profile = ({ src }) => (
    <div
        css={css`
            width: ${styles.profileBorderSize};
            height: ${styles.profileBorderSize};
            margin: auto;
            background-color: #aedef5;
            border-radius: 50%;
            position: relative;
            @media (max-width: ${styles.profileBorderSize}) {
                display: none;
            }
        `}
    >
        <Img
            fluid={src}
            css={css`
                width: 90%;
                height: 90%;
                border-radius: 50%;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            `}
        />
    </div>
)

const Intro = ({ src }) => (
    <Section>
        <Profile src={src} />
        <div
            css={css`
                margin-left: 3rem;
                @media (max-width: ${styles.mobileBreakpoint}) {
                    margin: 0 1rem;
                    * {
                        text-align: center;
                    }
                }
            `}
        >
            <h1>
                <FormattedMessage id="title" />
            </h1>
            <p>
                <FormattedMessage id="description" />
            </p>
            <hr />
            <Navigation current="/" vertical={true} />
            <Socials />
        </div>
    </Section>
)

const Details = () => (
    <Section>
        <Board>
            <p>
                <FormattedMessage id="detail1" />
            </p>
            <p>
                <FormattedMessage id="detail2" />
            </p>
            <p>
                <FormattedMessage id="detail3" />
            </p>
        </Board>
        <Board width="33rem">
            <FormattedMessage id="detail4" />
        </Board>
    </Section>
)

const Question = ({ question, answer }) => (
    <Board>
        <h3
            css={css`
                margin-top: 0;
                margin-bottom: 1rem;
            `}
        >
            {question}
        </h3>
        <p dangerouslySetInnerHTML={{ __html: answer }} />
    </Board>
)

const QnA = () => {
    const locale = useIntl().locale
    const qna = locale === 'en' ? qnaEn : qnaZh
    return (
        <Section>
            {qna.qna.map((qa, index) => (
                <Question key={index} question={qa.question} answer={qa.answer} />
            ))}
        </Section>
    )
}

export default function Home({ data }) {
    const intl = useIntl()
    return (
        <Container>
            <SEO title={intl.formatMessage({ id: 'title' })} />
            <Intro src={data.file.childImageSharp.fluid} />
            <Details />
            <hr />
            <h2>Q &amp; A</h2>
            <QnA />
        </Container>
    )
}
