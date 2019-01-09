import React from "react"
import ReactPlayer from 'react-player'

const Hello = () => {
    return (
        <div>
            <ReactPlayer
                url='./src/images/bg_pink_1.mp4' 
                playing 
                loop 
                width='100%'
                height='100%'/>
        </div>
    )
}

export default Hello