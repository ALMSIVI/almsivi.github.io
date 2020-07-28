import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

const listStyle = css`
    display: inline-block;
    margin-right: 1rem;
`

const ListLink = ({ to, curr, children }) => {
    if (to == curr) {
        return (
            <li key={to} css={listStyle}>
                {children}
            </li>
        )
    }

    return (
        <li key={to} css={listStyle}>
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

export default function Navigation({ current }) {
    return (
        <nav>
            <ul
                css={css`
                    list-style: none;
                `}
            >
                <ListLink to="/" curr={current}>
                    Home
                </ListLink>
                <ListLink to="/resume" curr={current}>
                    Resume
                </ListLink>
                <ListLink to="/portfolio" curr={current}>
                    Portfolio
                </ListLink>
                <ListLink to="/cn" curr={current}>
                    中文
                </ListLink>
            </ul>
        </nav>
    )
}
