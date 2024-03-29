import { css } from '@emotion/react'
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

                    *:last-child {
                        margin-bottom: 0;
                    }

                    * {
                        box-sizing: border-box;
                    }
                `}
            >
                {children}
            </div>
            <Footer />
        </div>
    )
}
