import React, {useState} from 'react'
import memesData from "../memesData"

export default function Meme() {
    const [memeImage, setMemeImage] = useState("")
    function handleClick() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        
    }

    function handleHover() {
        console.log('I was hovered')
    }
    return (
        <div>
            <div className='form'>
            <div className='form-container'>
            <input type="text" placeholder='top text' className='top-text'/>
            <input type="text" placeholder='bottom text' className='bottom-text'/>
            </div>
            <button onClick={handleClick} className='submit'>Get a new meme</button>
            </div>
        <img onMouseEnter={handleHover} className='meme-img' src={memeImage} />
        </div>
    )
}
