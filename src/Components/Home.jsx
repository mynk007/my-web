import React from 'react'
import Web from './Images/home.png'
import Common from './Common'

function Home() {
    return (
        <>
           <Common title="Grow Your Business With" btn="Get Started" btnTo='/Services' imgsrc={Web}/>
        </>
    )
}

export default Home
