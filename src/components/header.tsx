import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Navigation from './navigation'
import Socials from './socials'

export default function Header() {
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
        <header style={{ marginBottom: `1.5rem` }}>
            <Link
                to="/"
                style={{ textShadow: `none`, backgroundImage: `none` }}
            >
                <h1 style={{ display: `inline` }}>
                    {data.site.siteMetadata.title}
                </h1>
            </Link>
            <Socials />
            <Navigation />
        </header>
    )
}
