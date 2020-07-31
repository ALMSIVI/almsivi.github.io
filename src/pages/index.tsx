import React from 'react'
import Socials from '../components/socials'
import Navigation from '../components/navigation'
import Board from '../components/board'
import { css } from '@emotion/core'
import styles from '../utils/styles'
import Container from '../components/container'

const Section = ({ children }) => (
    <section
        css={css`
            margin: 2rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            @media (max-width: ${styles.mobileBreakpoint}) {
                margin: 0.5rem;
            }
        `}
    >
        {children}
    </section>
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
            @media (max-width: ${styles.profileBorderSize}) {
                display: none;
            }
        `}
    >
        <div
            css={css`
                background-image: url('/Profile.jpg');
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                width: 90%;
                height: 90%;
                border-radius: 50%;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            `}
        ></div>
    </div>
)

const Intro = () => (
    <Section>
        <Profile />
        <div
            css={css`
                margin-left: 3rem;
            `}
        >
            <h1>Yue Wu</h1>
            <p>Computer science student at UC San Diego. New Media Artist.</p>
            <hr />
            <Navigation current="/" vertical={true} />
            <Socials />
        </div>
    </Section>
)

const Details = () => (
    <Section>
        <Board >
            <p>Pronunciation: Yu-eh Wu</p>
            <p>Place of birth: Shanghai, China</p>
            <p>Current Location: San Diego, California, US</p>
        </Board>
        <Board width="30rem">
            I am currently a Master's student in Computer Science at UC San Diego. I also earned my Bachelor's degree
            here. I minored in Visual Arts at Computing and Arts. I am proficient in Unity programming and web
            programming. During my spare time, I love listening to metal music and playing video games.
        </Board>
    </Section>
)

const QnA = () => (
    <Section>
        <Board>
            <h3>What is the meaning of my Github username "ALMSIVI"?</h3>
            <p>
                The name comes from the Elder Scrolls, the RPG series by Bethesda. It refers to the three gods of the
                Dark Elf: <b>Alm</b>alexia, Sotha <b>Si</b>l, and <b>Vi</b>vec. They are the center of the game's lores,
                and their <a href="https://elderscrolls.fandom.com/wiki/36_Lessons_of_Vivec">36 lessons</a> have
                intrigued counteless ES enthusiasts. In the third game Morrowind, the protagonist will encounter them.
                for more information, you can refer to{' '}
                <a href="https://elderscrolls.fandom.com/wiki/Tribunal">the wiki page</a>.
            </p>
        </Board>
        <Board>
            <h3>What is my Github profile picture?</h3>
            <p>
                This is the cover of Damnation Angel's album,{' '}
                <a href="https://www.metal-archives.com/albums/Damnation_Angels/The_Valiant_Fire/488063">
                    The Valiant Fire
                </a>
                . This is a great power metal album, and is enjoyable even for non-metalheads.
            </p>
        </Board>
    </Section>
)

export default function Home() {
    return (
        <Container>
            <Intro />
            <Details />
            <hr />
            <h2>Q &amp; A</h2>
            <QnA />
        </Container>
    )
}
