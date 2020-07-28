import React from 'react'
import { css } from '@emotion/core'

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
                    margin: 2rem;
                `}
            >
                Contact
            </h2>
            <ul
                css={css`
                    list-style: none;
                    margin: 2rem;
                `}
            >
                <li>
                    Github: <Anchor href="https://github.com/ALMSIVI" />
                </li>
                <li>
                    LinkedIn: <Anchor href="https://www.linkedin.com/in/yue-wu-aaab2213b/" />
                </li>
                <li>
                    Email: <Anchor href="yuw264@ucsd.edu" />
                </li>
            </ul>
        </footer>
    )
}
