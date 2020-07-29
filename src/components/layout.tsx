import React from 'react'
import Header from './header'
import Container from './container'
import { css } from '@emotion/core'

export default function Layout({ current, children }) {
    return (
        <Container>
            <Header current={current} />
            <div
                css={css`
                    position: relative;
                    top: -200px;
                `}
            >
                {children}
            </div>
        </Container>
    )
}
