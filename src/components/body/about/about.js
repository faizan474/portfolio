import React from 'react';
import SocialContact from '../../common/social-contact/socialContact';
import './about.css';
function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className='about-info'>
                    Hello There 👋, I am 
                    <br/><span id="about-info-name">Random Guy</span>
                    <br/>
                    I love experimenting with the web.

                </div>
                <div className="about-photo">
                    <img src={require('../../../assets/my-image.JPG').default} className="about-info-picture" alt="user"></img>
                </div>
            </div>
            <SocialContact />        
        </div>
    )
}

export default About;
