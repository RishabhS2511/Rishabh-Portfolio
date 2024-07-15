import React from "react";
import './Footer.modules.css';

import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';
import instaIcon from '../assets/instagram.png';
import gfgIcon from '../assets/gfg.png';
import leetcodeIcon from '../assets/leetcode.svg';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-social">
                <a href="https://github.com/RishabhS2511" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="Github" />
                </a>
                <a href="https://www.linkedin.com/in/rishabh2511/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="Linkedin" />
                </a>
                <a href="https://www.instagram.com/rishabh_artwork25/" target="_blank" rel="noopener noreferrer">
                    <img src={instaIcon} alt="Instagram" />
                </a>
                <a href="https://www.geeksforgeeks.org/user/rishabh2511/" target="_blank" rel="noopener noreferrer">
                    <img src={gfgIcon} alt="GFG" />
                </a>
                <a href="https://leetcode.com/u/Rishabh2511/" target="_blank" rel="noopener noreferrer">
                    <img src={leetcodeIcon} alt="LeetCode" />
                </a>
            </div>
            <div className="footer-nav">
                <a href="#home">HOME</a>
                <a href="#about">ABOUT</a>
                <a href="#Skills">SKILLS</a>
                <a href="#card">PROJECT</a>
                <a href="#contact">CONTACT ME</a>
            </div>
            <hr />
            <div className="footer-bottom">
                <p>Portfolio. Created by Rishabh Sharma</p>
            </div>
        </div>
    );
}

export default Footer;
