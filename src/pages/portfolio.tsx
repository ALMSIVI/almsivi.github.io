import { useTranslation } from 'react-i18next'
import { css } from '@emotion/react'
import Link from 'next/link'
import Layout from '../components/layout'
import Board from '../components/board'
import portfolioEn from '../data/i18n/portfolio-en.json'
import portfolioZh from '../data/i18n/portfolio-zh.json'
import SEO from '../components/seo'
import { getSortedProjectsData } from '../lib/mdUtils'
import { GetStaticProps } from 'next'

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
                <Link href={link} css={boldCss}>
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
    const { t, i18n } = useTranslation()
    const portfolio = i18n.language === 'en' ? portfolioEn : portfolioZh

    const articles = new Set()
    data.forEach(project => {
        articles.add(project.id)
    })

    return (
        <Layout current="/portfolio">
            <SEO title={t('portfolio')} />
            <section>
                <h2>{t('about')}</h2>
                <Board>
                    <p>{t('portfolio1')}</p>
                    <p>{t('portfolio2')}</p>
                </Board>
            </section>
            <section>
                <h2>{t('projects')}</h2>
                {portfolio.projects.map((project, index) => (
                    <Project
                        key={index}
                        {...project}
                        link={articles.has(project.name) ? `/projects/${project.name}` : undefined}
                    />
                ))}
            </section>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = () => {
    return {
        props: {
            data: getSortedProjectsData(),
        },
    }
}
