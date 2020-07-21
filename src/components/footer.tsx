import React from 'react'

const Anchor = (props: { href: string }) => (
    <a
        style={{ textShadow: `none`, textDecoration: `none`, color: `white`, backgroundImage: `none` }}
        href={props.href}
    >
        {props.href}
    </a>
)

export default function Footer() {
    return (
        <footer style={{ backgroundColor: `#9CA1AD`, color: `white`, width: `100%` }}>
            <h2 style={{ color: `white` }}>Contact</h2>
            <ul style={{ listStyle: `none` }}>
                <li>
                    Github: <Anchor href="https://github.com/ALMSIVI" />
                </li>
                <li>
                    LinkedIn: <Anchor href="https://www.linkedin.com/in/yue-wu-aaab2213b/" />
                </li>
                <li>
                    Email: <Anchor href="yuw264@ucsd.edu" />
                </li>
            </ul>
        </footer>
    )
}
