import React from 'react'
import { css } from '@emotion/core'
import Footer from './footer'

export default function Container({ children }) {
    return (
        <div>
            <div
                css={css`
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: center;
                    max-width: 60em;
                `}
            >
                {children}
            </div>
            <Footer />
        </div>
    )
}
