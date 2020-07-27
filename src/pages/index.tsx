import React from 'react'
import '../styles/home.scss'
import ListLink from '../components/listLink'
import Socials from '../components/socials'
import Footer from '../components/footer'

const Profile = () => (
    <div id="profile">
        <div id="photo"></div>
    </div>
)

const Nav = () => (
    <nav>
        <ul className="nav">
            <ListLink to="/resume" curr="/">Resume</ListLink>
            <ListLink to="/portfolio" curr="/">Portfolio</ListLink>
            <ListLink to="/cn" curr="/">中文</ListLink>
        </ul>
    </nav>
)

const Bubble = () => <div id="bubble"></div>

const Intro = () => (
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

const Details = () => (
    <div id="details" className="section">
        <div id="additional">
            <p>Pronunciation: Yu-eh Wu</p>
            <p>Location: San Diego, California, US</p>
        </div>
        <Profile />
        <p id="intro">
            I am currently a Master's student in Computer Science at UC San Diego. I also earned my Bachelor's degree
            here. I minored in Visual Arts at Computing and Arts. I am proficient in Unity programming and web
            programming. During my spare time, I love listening to metal music and playing video games.
        </p>
    </div>
)

const QnA = () => (
    <div id="qna">
        <h2>Q&amp;A</h2>
        <h3>What is the meaning of my Github username "ALMSIVI"?</h3>
        <p>
            The name comes from the Elder Scrolls, the RPG series by Bethesda. It refers to the three gods of the Dark
            Elf: <b>Alm</b>alexia, Sotha <b>Si</b>l, and <b>Vi</b>vec. They are the center of the game's lores, and
            their <a href="https://elderscrolls.fandom.com/wiki/36_Lessons_of_Vivec">36 lessons</a> have intrigued
            counteless ES enthusiasts. In the third game Morrowind, the protagonist will encounter them. for more
            information, you can refer to <a href="https://elderscrolls.fandom.com/wiki/Tribunal">the wiki page</a>.
        </p>
        <h3>What is my Github profile picture?</h3>
        <p>
            This is the cover of Damnation Angel's album,{' '}
            <a href="https://www.metal-archives.com/albums/Damnation_Angels/The_Valiant_Fire/488063">
                The Valiant Fire
            </a>
            . This is a great power metal album, and is enjoyable even for non-metalheads.
        </p>
    </div>
)

export default function Home() {
    return (
        <div id="container">
            <Intro />
            <Details />
            <hr />
            <QnA />
            <Footer />
        </div>
    )
}
