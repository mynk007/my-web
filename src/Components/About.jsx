import React from 'react'
import Web from './Images/About.jpg'
import Common from './Common'

function About() {
    return (
        <>
           <Common title="Welcome To About Page" btn="Contact Us" btnTo="/Contact" imgsrc={Web}/>
        </>
    )
}

export default About
