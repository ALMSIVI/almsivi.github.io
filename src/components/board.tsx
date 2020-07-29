import React from 'react'
import { css } from '@emotion/core'

export default function Board({ color = 'aliceblue', width = '100%', children }) {
    return (
        <div
            css={css`
                background-color: ${color};
                padding: 1rem;
                margin: 0.4rem;
                width: ${width};
            `}
        >
            {children}
        </div>
    )
}
