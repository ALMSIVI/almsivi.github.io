import Image from 'next/image'
import { css } from '@emotion/react'
import { useTranslation } from 'react-i18next'
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
        <Image
            src={src}
            alt="Company logo"
            width={200}
            height={200}
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

const Project = ({ name, position, date, link, bullets }) => {
    const { t } = useTranslation()
    return (
        <Board>
            <Title bold={name} italics={position} right={date} />
            <div
                css={css`
                    display: block;
                    margin-bottom: 1rem;
                `}
            >
                <a href={link}>{t('repository')}</a>
            </div>
            <BulletList bullets={bullets} />
        </Board>
    )
}

const Education = ({ degree, date, gpa, msg }) => {
    const { t } = useTranslation()
    return (
        <li>
            {degree} {msg && t(msg)} (GPA: {gpa})
            <span
                css={css`
                    float: right;
                `}
            >
                {date}
            </span>
        </li>
    )
}

export default function Resume({ data }) {
    const { t, i18n } = useTranslation()
    const resume = i18n.language === 'en' ? resumeEn : resumeZh

    return (
        <Layout current="/resume">
            <SEO title={t('resume')} />
            <section>
                <h2>{t('about')}</h2>
                <Board>
                    <p>{t('resume1')}</p>
                    <p dangerouslySetInnerHTML={{ __html: t('resume2') }} />
                    {resume.comments.include && <p>{resume.comments.position}</p>}
                </Board>
            </section>
            <section>
                <h2>{t('education')}</h2>
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
                            {t('courses')} {resume.education.courses.join(', ')}
                        </li>
                    </ul>
                </Board>
            </section>
            <section>
                <h2>{t('skills')}</h2>
                <Skillset title="Language" skills={resume.skills.language} />
                <Skillset title="Frameworks" skills={resume.skills.framework} />
                <Skillset title="Software" skills={resume.skills.software} />
            </section>
            <section>
                <h2>{t('work')}</h2>
                {resume.work.map((work, index) => {
                    return <Work key={index} {...work} imgSrc={`/${work.image}`} />
                })}
            </section>
            <section>
                <h2>{t('projects')}</h2>
                {resume.projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </section>
        </Layout>
    )
}
