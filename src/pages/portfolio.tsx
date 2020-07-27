import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import * as portfolio from '../data/portfolio.json'
import '../styles/portfolio.scss'

const Title = ({ bold, right }) => (
    <div className="title">
        <span className="bold">{bold}</span>
        <span className="right">{right}</span>
    </div>
)

// TODO: link, image/video
const Project = ({ name, date, description }) => (
    <div className="project">
        <Title bold={name} right={date} />
        {description.map(d => (
            <p>{d}</p>
        ))}
    </div>
)

export default function Portfolio() {
    return (
        <Layout current="/portfolio">
            <section>
                <h2>About</h2>
                <p>
                    This portfolio is about my experiences as a ICAM minor student. For my projects as an computer
                    science student , see <Link to="/resume">Resume</Link>.
                </p>
                <p>Being a computer scientist, I love to explore the artistic side of technology. I tend to imagine what our future might look like and how I can express it using my code.</p>
            </section>
            <section>
                <h2>Projects</h2>
                {portfolio.map(project => (
                    <Project {...project} />
                ))}
            </section>
        </Layout>
    )
}
