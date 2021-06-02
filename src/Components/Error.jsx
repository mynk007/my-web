import React from 'react'
import {NavLink} from 'react-router-dom'

function Error() {
    return (
        <div style= {{width:'100%', position: 'absolute', top:'40%'}} className='text-center'>
            <h1 className="mb-4">OOps! Page Not Found! 🤔</h1>
            <NavLink to = '/' style = {{ color: 'black', border: '2px solid red', borderRadius:'5px', textDecoration:'none', background: "cyan", padding: '7px'}}>Go to HomePage 🏠</NavLink>
        </div>
    )
}

export default Error
