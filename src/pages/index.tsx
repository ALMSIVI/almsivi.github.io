import React from 'react'
import Socials from '../components/socials'
import Footer from '../components/footer'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import styles from '../utils/styles'

const ListLink = ({ to, children }) => (
    <li>
        <Link to={to}>{children}</Link>
    </li>
)

const Nav = () => (
    <nav>
        <ul
            css={css`
                list-style: none;
                margin-left: 0;
            `}
        >
            <ListLink to="/resume">Resume</ListLink>
            <ListLink to="/portfolio">Portfolio</ListLink>
            <ListLink to="/cn">中文</ListLink>
        </ul>
    </nav>
)

const Profile = () => (
    <div
        css={css`
            width: ${styles.profileBorderSize};
            height: ${styles.profileBorderSize};
            margin: auto;
            background-color: #aedef5;
            border-radius: 50%;
            position: relative;
        `}
    >
        <div
            css={css`
                background-image: url('/Profile.jpg');
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                width: ${styles.profilePhotoSize};
                height: ${styles.profilePhotoSize};
                border-radius: 50%;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            `}
        ></div>
    </div>
)

const Bubble = () => (
    <div
        css={css`
            width: ${styles.halfBubbleSize};
            height: ${styles.bubbleSize};
            border-radius: 0 ${styles.halfBubbleSize} ${styles.halfBubbleSize} 0;
            background-color: ${styles.bubbleColor};
        `}
    ></div>
)

const Section = ({ children }) => (
    <section
        css={css`
            margin-bottom: 2rem;
            & > * {
                display: inline-block;
                vertical-align: middle;
            }
        `}
    >
        {children}
    </section>
)

const Intro = () => (
    <Section>
        <Bubble />
        <div
            css={css`
                margin-left: 3rem;
            `}
        >
            <h1>Yue Wu</h1>
            <p>Computer science student at UC San Diego. New Media Artist.</p>
            <hr />
            <Nav />
            <Socials />
        </div>
    </Section>
)

const Details = () => (
    <Section
        css={css`
            & > * {
                margin: 2rem;
            }
        `}
    >
        <div
            css={css`
                width: 20rem;
            `}
        >
            <p>Pronunciation: Yu-eh Wu</p>
            <p>Location: San Diego, California, US</p>
        </div>
        <Profile />
        <p
            css={css`
                width: 30rem;
            `}
        >
            I am currently a Master's student in Computer Science at UC San Diego. I also earned my Bachelor's degree
            here. I minored in Visual Arts at Computing and Arts. I am proficient in Unity programming and web
            programming. During my spare time, I love listening to metal music and playing video games.
        </p>
    </Section>
)

const QnA = () => (
    <div
        css={css`
            padding: 2rem;
        `}
    >
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
        <div
            css={css`
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                align-items: center;
                & > * {
                    width: 100%;
                }
            `}
        >
            <Intro />
            <Details />
            <hr />
            <QnA />
            <Footer />
        </div>
    )
}
