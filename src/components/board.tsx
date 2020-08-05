import React from 'react'
import { css } from '@emotion/core'
import styles from '../utils/styles'

export default function Board({ color = 'aliceblue', width = 'auto', children }) {
    return (
        <div
            css={css`
                background-color: ${color};
                padding: 1rem;
                margin: 0.5rem;
                flex-basis: ${width};
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                @media (max-width: ${styles.mobileBreakpoint}) {
                    flex-basis: 100%;
                }
            `}
        >
            {children}
        </div>
    )
}
