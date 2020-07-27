import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import * as resume from '../data/resume.json'
import '../styles/resume.scss'

const Title = ({ bold, italics, right }) => (
    <div className="title">
        <span className="bold">{bold}</span>
        <span className="italic">{italics}</span>
        <span className="right">{right}</span>
    </div>
)

// TODO: link, picture, timeline
const Work = ({ position, company, location, date, bullets }) => (
    <div>
        <Title bold={position} italics={company + ', ' + location} right={date} />
        <ul>
            {bullets.map(bullet => (
                <li>{bullet}</li>
            ))}
        </ul>
    </div>
)

// TODO: link
const Project = ({ name, position, date, link, bullets }) => (
    <div>
        <Title bold={name} italics={position} right={date} />
        <div className="repo"><a href={link}>Link to repository</a></div>
        <ul>
            {bullets.map(bullet => (
                <li>{bullet}</li>
            ))}
        </ul>
    </div>
)

export default function Resume() {
    return (
        <Layout current="/resume">
            <section>
                <h2>About</h2>
                <p>
                    This resume is about my experiences as a computer science student. For my projects as an ICAM
                    artist, see <Link to="/portfolio">Portfolio</Link>.
                </p>
                <p>
                    For a pdf version, see <a href="https://github.com/ALMSIVI/Resume/blob/master/resume.pdf">here</a>.
                </p>
            </section>
            <section>
                <h2>Education</h2>
                <Title bold={resume.education.name} italics="" right={resume.education.time} />
                <p>Courses taken: {resume.education.courses.join(', ')}</p>
            </section>
            <section>
                <h2>Skills</h2>
                <p>Language: {resume.skills.language.join(', ')}</p>
                <p>Framework: {resume.skills.framework.join(', ')}</p>
                <p>Software: {resume.skills.software.join(', ')}</p>
            </section>
            <section>
                <h2>Work Experiences</h2>
                {resume.work.map(work => (
                    <Work {...work} />
                ))}
            </section>
            <section>
                <h2>Other Projects</h2>
                {resume.projects.map(project => (
                    <Project {...project} />
                ))}
            </section>
        </Layout>
    )
}
