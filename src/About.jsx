import React from "react"
import LazyLoad from 'react-lazyload';

const About = () => {
    return (
        <div className="flex items-center justify-center mt-20">
            <div className="flex flex-wrap mb-4">
                <LazyLoad height={100}>
                    <img className="border border-white rounded-full h-48 w-48" src="./src/images/johanna.JPG" />
                </LazyLoad>

                <div className="w-full lg:w-3/4 md:w-1/2 ml-8">
                    <h1 className="content-text">Hello!</h1>
                    <br/>
                    <p className="content-text">My name is Johanna Andén, I am a student at Craft Academy where I study the course Full stack web developer.</p>
                    <br/>
                    <p className="content-text">When I'm not studying, I work at the TV and broadband provider Sappa in Gothenburg.</p>
                </div>

            </div>
        </div>
    )
}

export default About