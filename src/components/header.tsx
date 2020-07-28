import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Navigation from './navigation'
import { css } from '@emotion/core'
import styles from '../utils/styles'

export default function Header({ current }) {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <header
            css={css`
                text-align: center;
            `}
        >
            <div
                id="bubble"
                css={css`
                    position: relative;
                    transform: translate(0, -50%);
                    width: ${styles.bubbleSize};
                    height: ${styles.halfBubbleSize};
                    border-radius: 0 0 ${styles.halfBubbleSize} ${styles.halfBubbleSize};
                    background-color: ${styles.bubbleColor};
                    margin: auto;
                `}
            ></div>
            <div
                id="title"
                css={css`
                    position: absolute;
                    top: ${styles.contentTop};
                    left: 50%;
                    transform: translate(-50%);
                `}
            >
                <Link
                    to="/"
                    css={css`
                        display: block;
                        text-shadow: none;
                        background-image: none;
                        margin-bottom: 2rem;
                    `}
                >
                    <h1
                        css={css`
                            display: inline;
                        `}
                    >
                        {data.site.siteMetadata.title}
                    </h1>
                </Link>
                <Navigation current={current} />
            </div>
        </header>
    )
}
