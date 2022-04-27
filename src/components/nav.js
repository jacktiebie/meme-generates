import React from "react"
import Logo from '../images/logo.png'

export default function Nav() {
    return (
        <header className="header">
            <img 
                src={Logo}
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}