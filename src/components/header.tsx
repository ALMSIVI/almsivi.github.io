import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { css } from '@emotion/react'
import Navigation from './navigation'
import styles from '../utils/styles'

export default function Header({ current }) {
    const { t } = useTranslation()
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
                        href="/"
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
                            <p>{t('title')}</p>
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
