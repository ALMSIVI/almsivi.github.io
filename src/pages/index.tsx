import React from 'react'
import '../styles/home.scss'
import ListLink from '../components/listLink'
import Socials from '../components/socials'
import Footer from '../components/footer'

function Profile() {
    return (
        <div id="profile">
            <div id="photo"></div>
        </div>
    )
}

function Nav() {
    return (
        <nav>
            <ul className="nav">
                <ListLink to="/resume">Resume</ListLink>
                <ListLink to="/portfolio">Portfolio</ListLink>
                <ListLink to="/cn">中文</ListLink>
            </ul>
        </nav>
    )
}

const Bubble = () => <div id="bubble"></div>

function Intro() {
    return (
        <div className="section">
            <Bubble />
            <div id="info">
                <h1>Yue Wu</h1>
                <p>Computer science student at UC San Diego. New Media Artist.</p>
                <hr />
                <Nav />
                <Socials />
            </div>
        </div>
    )
}

function Details() {
    return (
        <div id="details" className="section">
            <div id="additional">
                <p>Pronunciation: Yu-eh Wu</p>
                <p>Location: San Diego, California, US</p>
            </div>
            <Profile />
            <p id="intro">
                I am currently a Master's student in Computer Science at UC San Diego. I also earned my Bachelor's
                degree here. I minored in Visual Arts at Computing and Arts. I am proficient in Unity programming and
                web programming. During my spare time, I love listening to metal music and playing video games.
            </p>
        </div>
    )
}

export default function Home() {
    return (
        <div id="container">
            <Intro />
            <Details />
            <Footer />
        </div>
    )
}
