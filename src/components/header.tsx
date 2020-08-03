import React from 'react'
import { Link, FormattedMessage } from 'gatsby-plugin-intl'
import Navigation from './navigation'
import { css } from '@emotion/core'
import styles from '../utils/styles'

export default function Header({ current }) {
    return (
        <header
            css={css`
                text-align: center;
            `}
        >
            {/* The bubble */}
            <div
                css={css`
                    @media (min-width: ${styles.mobileBreakpoint}) {
                        position: relative;
                        transform: translate(0, -50%);
                        width: ${styles.bubbleSize};
                        height: ${styles.halfBubbleSize};
                        border-radius: 0 0 ${styles.halfBubbleSize} ${styles.halfBubbleSize};
                        background-color: ${styles.bubbleColor};
                        margin: auto;
                    }
                `}
            >
                <div
                    id="title"
                    css={css`
                        margin-top: 2rem;

                        @media (min-width: ${styles.mobileBreakpoint}) {
                            position: absolute;
                            top: ${styles.contentTop};
                            left: 50%;
                            transform: translate(-50%);
                        }
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
                            <FormattedMessage id="title" />
                        </h1>
                    </Link>
                    <Navigation current={current} vertical={false} />
                    <hr
                        css={css`
                            @media (min-width: ${styles.mobileBreakpoint}) {
                                display: none;
                            }
                        `}
                    />
                </div>
            </div>
        </header>
    )
}
