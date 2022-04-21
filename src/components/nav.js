import React from 'react'
import logo from '../images/logo.png'

export default function Nav() {
    return (
       <nav className='nav'>
           <img src={logo}  alt='logo' className='nav-img' />
            <h1 className='nav-title'>Meme Generator</h1>
       </nav>
    )
}