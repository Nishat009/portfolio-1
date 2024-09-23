import React from 'react'
import '../../index.css'; // Adjust this path if your CSS file is in a different location

import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Blog, Education, Experience, Contacts, Projects } from '../../components'
import { headerData } from '../../data/headerData'
function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>
            <Navbar />
            <Landing />
            <About />
            <Experience />
            <Education />
            <Skills />
            <Projects />
            <Blog />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
