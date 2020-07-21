import React from 'react'
import { Link } from 'gatsby'

export default function ListLink(props) {
    return (
        <li>
            <Link to={props.to}>{props.children}</Link>
        </li>
    )
}
