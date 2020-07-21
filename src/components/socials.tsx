import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Item = props => (
    <a href={props.href} style={{ marginRight: `1rem`, background: `none`}}>
        {props.children}
    </a>
)

export default function Socials() {
    return (
        <ul style={{ listStyle: `none`, marginLeft: `0` }}>
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
