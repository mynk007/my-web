import React from 'react'
import {NavLink} from 'react-router-dom'

function Card(props) {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-12 mx-auto">

                <div className="card col-12" style={{ height: '25rem'}}>
                    <img src={props.imgsrc} className="card-img-top" style= {{ height: '12rem'}} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.desc}</p>
                        <NavLink to="#" className="btn btn-primary" style={{ position:'absolute', bottom:'20px' }}>Go somewhere</NavLink>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card
