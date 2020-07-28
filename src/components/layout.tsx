import React from 'react'
import Header from './header'
import Footer from './footer'
import { css } from '@emotion/core'

export default function Layout({ current, children }) {
    return (
        <div
            css={css`
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
            `}
        >
            <Header current={current} />
            <div
                css={css`
                    margin: 0 3rem;
                    position: relative;
                    top: -200px;
                `}
            >
                {children}
            </div>
            <Footer />
        </div>
    )
}
