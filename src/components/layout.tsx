import Header from './header'
import Container from './container'
import { css } from '@emotion/react'
import styles from '../utils/styles'
import '../utils/setup'

export default function Layout({ current, children }) {
    return (
        <Container>
            <Header current={current} />
            <main
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
            </main>
        </Container>
    )
}
