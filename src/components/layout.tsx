import React from 'react'
import Header from './header'
import Container from './container'
import { css } from '@emotion/core'
import styles from '../utils/styles'

export default function Layout({ current, children }) {
    return (
        <Container>
            <Header current={current} />
            <div
                css={css`
                    margin: 0.5rem;

                    @media (min-width: ${styles.mobileBreakpoint}) {
                        position: relative;
                        top: -200px;
                        margin: 2rem;
                    }
                `}
            >
                {children}
            </div>
        </Container>
    )
}
