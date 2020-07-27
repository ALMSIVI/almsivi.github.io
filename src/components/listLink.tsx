import React from 'react'
import { Link } from 'gatsby'

export default function ListLink({to, curr, children}) {
    if (to == curr) {
        return (
            <li>{children}</li>
        )
    }

    return (
        <li>
            <Link to={to} style={{ textShadow: `none`}}>{children}</Link>
        </li>
    )
}
