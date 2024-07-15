import React from "react";
import './About.modules.css';
import profile_img from "../assets/profile2.svg";

function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="Profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an Aspiring Web Developer with a passion for creating intuitive and visually appealing digital experiences. With a strong command of front-end development, I am skilled in turning designs into responsive and dynamic websites. Currently, I am immersing myself in the world of UI/UX design to further enhance my ability to craft user-centered interfaces that seamlessly merge aesthetics with functionality.
            </p><br />
            <p>
              <b>School:</b> 10th and 12th (PCM) from my hometown in Harda, Madhya Pradesh
            </p>
            <p>
              <b>College:</b> Vellore Institute of Technology, Bhopal – B.Tech in Computer Science, [CGPA: 8.34]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
