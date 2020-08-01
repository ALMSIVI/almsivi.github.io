import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
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

const ListLink = ({ to, current, vertical, children }) => {
    if (vertical) {
        return (
            <li key={to} css={listItem}>
                <Link to={to}>{children}</Link>
            </li>
        )
    }

    if (to == current) {
        return (
            <li key={to} css={horizontalItem}>
                {children}
            </li>
        )
    }

    return (
        <li key={to} css={horizontalItem}>
            <Link
                to={to}
                css={css`
                    text-shadow: none;
                `}
            >
                {children}
            </Link>
        </li>
    )
}

export default function Navigation({ current, vertical }) {
    const listStyle = vertical ? [baseList, verticalList] : baseList
    return (
        <nav>
            <ul css={listStyle}>
                <ListLink to="/" current={current} vertical={vertical}>
                    Home
                </ListLink>
                <ListLink to="/resume" current={current} vertical={vertical}>
                    Resume
                </ListLink>
                <ListLink to="/portfolio" current={current} vertical={vertical}>
                    Portfolio
                </ListLink>
                <ListLink to="/cn" current={current} vertical={vertical}>
                    中文
                </ListLink>
            </ul>
        </nav>
    )
}
