import React from 'react'
import { css } from '@emotion/core'
import { Link, useIntl, changeLocale, FormattedMessage } from 'gatsby-plugin-intl'
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

const ListLink = ({ to, current, vertical, children, ...props }) => {
    if (to == current) {
        return (
            <li key={to} css={horizontalItem}>
                {children}
            </li>
        )
    }

    return (
        <li key={to} css={vertical ? listItem : horizontalItem}>
            <Link to={to} {...props} css={item}>
                {children}
            </Link>
        </li>
    )
}

const Language = ({ vertical }) => {
    const locale = useIntl().locale
    const otherLocale = locale === 'en' ? 'zh' : 'en'
    return (
        <li css={vertical ? listItem : horizontalItem}>
            <a onClick={() => changeLocale(otherLocale)} css={item}>
                <FormattedMessage id="otherLang" />
            </a>
        </li>
    )
}

export default function Navigation({ current, vertical }) {
    const listStyle = vertical ? [baseList, verticalList] : baseList
    return (
        <nav>
            <ul css={listStyle}>
                <ListLink to="/" current={current} vertical={vertical}>
                    <FormattedMessage id="home" />
                </ListLink>
                <ListLink to="/resume" current={current} vertical={vertical}>
                    <FormattedMessage id="resume" />
                </ListLink>
                <ListLink to="/portfolio" current={current} vertical={vertical}>
                    <FormattedMessage id="portfolio" />
                </ListLink>
                {/*<Language vertical={vertical} />*/}
            </ul>
        </nav>
    )
}
