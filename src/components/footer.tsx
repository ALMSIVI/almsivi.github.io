import { css } from '@emotion/react'
import { useTranslation } from 'react-i18next'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Anchor = (props: { href: string }) => (
    <a
        css={css`
            text-shadow: none;
            text-decoration: none;
            color: white;
            background-image: none;
        `}
        href={props.href}
    >
        {props.href}
    </a>
)

export default function Footer() {
    const { t } = useTranslation()
    return (
        <footer
            css={css`
                background-color: #9ca1ad;
                color: white;
                width: 100%;
            `}
        >
            <h2
                css={css`
                    color: white;
                    padding: 1rem 0 0 1rem;
                `}
            >
                <p>{t('contact')}</p>
            </h2>
            <ul
                css={css`
                    list-style: none;
                    margin: 0;
                    padding: 1rem;
                `}
            >
                <li>
                    <FaGithub /> Github: <Anchor href="https://github.com/ALMSIVI" />
                </li>
                <li>
                    <FaLinkedin /> LinkedIn: <Anchor href="https://www.linkedin.com/in/yuewu-almsivi/" />
                </li>
                <li>
                    <FaEnvelope /> Email: <Anchor href="yuw264@ucsd.edu" />
                </li>
            </ul>
        </footer>
    )
}
