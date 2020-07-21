import React from 'react'
import ListLink from './listLink'

export default function Navigation() {
    return (
        <nav>
            <ul className="nav" style={{ float: `right` }}>
                <ListLink to="/">Home</ListLink>
                <ListLink to="/resume">Resume</ListLink>
                <ListLink to="/portfolio">Portfolio</ListLink>
                <ListLink to="/cn">中文</ListLink>
            </ul>
        </nav>
    )
}
