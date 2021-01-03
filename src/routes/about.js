import React from 'react';
import './About.css';

function About(props) {
    console.log(props)
    return (
        <div className="about__container">
            <span>
                "About this page: I like movies about animation"
            </span>
            <span>Hello~~~~!</span>
        </div>
    )
}

export default About;