import React from 'react'
import Header from './header'
import Footer from './footer'

export default function Layout({ current, children }) {
    return (
        <div className="layout">
            <Header current={current} />
            <div className="contents">
                {children}
            </div>
            <Footer />
        </div>
    )
}
