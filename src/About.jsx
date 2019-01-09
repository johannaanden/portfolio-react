import React from "react"
import LazyLoad from 'react-lazyload';

const About = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-wrap mb-4">
                <LazyLoad height={100}>
                    <img className="border border-white rounded-full h-48 w-48" src="./src/images/johanna.JPG" />
                </LazyLoad>

                <div className="w-full lg:w-3/4 md:w-1/2">
                    <h1 className="content-text">About Me</h1>
                    <p className="content-text">Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
                </div>

            </div>
        </div>
    )
}

export default About