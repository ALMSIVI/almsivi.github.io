import { css } from '@emotion/react'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import styles from '../utils/styles'

// On small screen sizes, still resort to horizontal list
const listItem = css`
    @media (max-width: ${styles.mobileBreakpoint}) {
        display: inline-block;
        margin-right: 1rem;
    }
`

const horizontalItem = css`
    display: inline-block;
    margin-right: 1rem;
`

const baseList = css`
    list-style: none;
`
const verticalList = css`
    margin-left: 0;
`
const item = css`
    text-shadow: none;
`

const ListLink = ({ href, current, vertical, children, ...props }) => {
    if (href === current) {
        return (
            <li key={href} css={horizontalItem}>
                {children}
            </li>
        )
    }

    return (
        <li key={href} css={vertical ? listItem : horizontalItem}>
            <Link href={href} {...props} css={item}>
                {children}
            </Link>
        </li>
    )
}

const Language = ({ vertical }) => {
    const { t, i18n } = useTranslation()
    const locale = i18n.language
    const otherLocale = locale === 'en' ? 'zh' : 'en'
    return (
        <li css={vertical ? listItem : horizontalItem}>
            <a onClick={() => i18n.changeLanguage(otherLocale)} css={item}>
                {t('otherLang')}
            </a>
        </li>
    )
}

export default function Navigation({ current, vertical }) {
    const { t } = useTranslation()
    const listStyle = vertical ? [baseList, verticalList] : baseList
    return (
        <nav>
            <ul css={listStyle}>
                <ListLink href="/" current={current} vertical={vertical}>
                    {t('home')}
                </ListLink>
                <ListLink href="/resume" current={current} vertical={vertical}>
                    {t('resume')}
                </ListLink>
                <ListLink href="/portfolio" current={current} vertical={vertical}>
                    {t('portfolio')}
                </ListLink>
                <Language vertical={vertical} />
            </ul>
        </nav>
    )
}
