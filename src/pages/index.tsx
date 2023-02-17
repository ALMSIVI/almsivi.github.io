import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import Socials from '../components/socials'
import Navigation from '../components/navigation'
import Board from '../components/board'
import { css } from '@emotion/react'
import styles from '../utils/styles'
import Container from '../components/container'
import SEO from '../components/seo'
import qnaEn from '../data/i18n/qna-en.json'
import qnaZh from '../data/i18n/qna-zh.json'
import '../utils/setup'

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

const Profile = () => (
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
        <Image
            src="/Profile.jpg"
            alt="Profile picture"
            width={800}
            height={800}
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

const Intro = () => {
    const { t } = useTranslation()
    return (
        <Section>
            <Profile />
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
                <h1>{t('title')}</h1>
                <p>{t('description')}</p>
                <hr />
                <Navigation current="/" vertical={true} />
                <Socials />
            </div>
        </Section>
    )
}

const Details = () => {
    const { t } = useTranslation()
    return (
        <Section>
            <Board>
                <p>{t('detail1')}</p>
                <p>{t('detail2')}</p>
                <p>{t('detail3')}</p>
            </Board>
            <Board width="33rem">{t('detail4')}</Board>
        </Section>
    )
}

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
    const { i18n } = useTranslation()
    const qna = i18n.language === 'en' ? qnaEn : qnaZh
    return (
        <Section>
            {qna.qna.map((qa, index) => (
                <Question key={index} question={qa.question} answer={qa.answer} />
            ))}
        </Section>
    )
}

export default function Home({ data }) {
    const { t } = useTranslation()
    return (
        <Container>
            <SEO title={t('home')} />
            <Intro />
            <Details />
            <hr />
            <h2>Q &amp; A</h2>
            <QnA />
        </Container>
    )
}
