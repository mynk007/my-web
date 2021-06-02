import React from 'react'
import {NavLink} from 'react-router-dom'

function Common(props) {
    return (
        <>
            <section id="header" className="">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row ">
                                <div className="col-md-6 pt-5 pt-lg-0 mt-lg-4 order-lg-1 order-2 d-flex flex-column justify-content-center animate__animated animate__backInLeft">
                                    <h1><b>{props.title} </b><br /><strong className="brand-name"> Mayank Technical</strong></h1>
                                    <h2 className="my-3">We are the team of talented developers</h2>
                                    <div className='mt-3'>
                                        <NavLink exact to={props.btnTo} className="btn-get-started">{props.btn}</NavLink>
                                    </div>

                                </div>

                                <div className='col-lg-6 col-10 order-lg-2 order-1 header-img d-flex flex-column justify-content-center animate__animated animate__shakeY cmnImg'>
                                    <img src={props.imgsrc} alt="Home Img" className="home-img" />

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Common
