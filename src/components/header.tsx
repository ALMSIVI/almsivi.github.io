import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Navigation from './navigation'

export default function Header({current}) {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <header id="header">
            <div id="layout-bubble"></div>
            <div id="title">
                <Link to="/" style={{ display: `block`, textShadow: `none`, backgroundImage: `none`, marginBottom: `2rem` }}>
                    <h1 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h1>
                </Link>
                <Navigation current={current}/>
            </div>
        </header>
    )
}
