import React from 'react'
import ListLink from './listLink'

export default function Navigation({current}) {
    return (
        <nav>
            <ul className="nav">
                <ListLink to="/" curr={current}>Home</ListLink>
                <ListLink to="/resume" curr={current}>Resume</ListLink>
                <ListLink to="/portfolio" curr={current}>Portfolio</ListLink>
                <ListLink to="/cn" curr={current}>中文</ListLink>
            </ul>
        </nav>
    )
}
