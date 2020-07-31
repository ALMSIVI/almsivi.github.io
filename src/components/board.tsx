import React from 'react'
import { css } from '@emotion/core'

export default function Board({ color = 'aliceblue', width = 'auto', children }) {
    return (
        <div
            css={css`
                background-color: ${color};
                padding: 1rem;
                margin: 0.4rem;
                flex-basis: ${width};
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            `}
        >
            {children}
        </div>
    )
}
