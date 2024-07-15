import React from "react";
import './Hero.modules.css';
import profile_img from '../assets/profile_img.svg';

function Hero() {
    return (
        <div id="home" className="hero">
            <img src={profile_img} alt="Profile" />
            <div className="hero-main">
                <h1>
                    <span>I'm Rishabh Sharma,<br /></span> Frontend Developer - Java Developer
                </h1>
                <div className="hero-action">
                    <div className="hero-resume">
                        <a href="https://drive.google.com/file/d/1cQ4H1kL2_s_3zmEwUHXi93iJyc8ZZnaq/view?usp=drive_link">My Resume</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
