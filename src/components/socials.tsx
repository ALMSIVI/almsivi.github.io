import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { css } from '@emotion/core'

const Item = props => (
    <a
        href={props.href}
        css={css`
            margin-right: 1rem;
            background: none;
        `}
    >
        {props.children}
    </a>
)

export default function Socials() {
    return (
        <ul
            css={css`
                list-style: none;
                margin-top: 1rem;
                margin-left: 0;
            `}
        >
            <Item href="mailto:yuw264@ucsd.edu">
                <FaEnvelope />
            </Item>
            <Item href="https://github.com/ALMSIVI">
                <FaGithub />
            </Item>
            <Item href="https://www.linkedin.com/in/yue-wu-aaab2213b/">
                <FaLinkedin />
            </Item>
        </ul>
    )
}
