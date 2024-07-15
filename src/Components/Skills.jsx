import React from 'react';
import './Skills.modules.css';
import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.png';
import javascriptIcon from '../assets/javascript.png';
import reactIcon from '../assets/react.png';
import pythonIcon from '../assets/python.png';
import javaIcon from '../assets/java.png';
import sqlIcon from '../assets/sql.png';
import awsIcon from '../assets/aws.png';
import gitIcon from '../assets/git.png';

const skills_data = [
    { name: 'HTML', icon: htmlIcon },
    { name: 'CSS', icon: cssIcon },
    { name: 'Javascript', icon: javascriptIcon },
    { name: 'React JS', icon: reactIcon },
    { name: 'Python', icon: pythonIcon },
    { name: 'Java', icon: javaIcon },
    { name: 'SQL', icon: sqlIcon },
    { name: 'AWS', icon: awsIcon },
    { name: 'Git', icon: gitIcon }
];

const experience_data = [
    { title: 'AWS Certified Cloud Practitioner', company: 'AWS Web Services', url: 'https://drive.google.com/file/d/1sOCigFW2cddFwBjCdtLrOxL_OifHQ9OL/view?usp=drive_link' },
    { title: 'MERN Full Stack', company: 'Ethnus', url: 'https://drive.google.com/file/d/1sQiVQmJC3ROKlveWjkwH7K-TttheD2BK/view?usp=sharing' },
    { title: 'Cloud Computing', company: 'NPTEL', url: 'https://drive.google.com/file/d/1sddPuudyUu_IZ4oJAPIjLIrkz69upXNW/view?usp=drive_link' },
    { title: 'Applied Machine Learning in Python', company: 'Coursera', url: 'https://drive.google.com/file/d/1mebyfvd6xPeUNyWXC15pUXrSmssBLr2j/view?usp=sharing' },
    { title: 'SQL - Basic and Intermediate', company: 'HackerRank', url: 'https://drive.google.com/file/d/16RtvyGwCOiKbrN_JazrrsUZpAWI2G4O9/view?usp=sharing' }
];

const Skills = () => {
    return (
        <div id="Skills" className="Skills">
            <h1 className="heading">Skills & Certifications</h1>
            <div className="content">
                <div className="skills">
                    {skills_data.map((skill, index) => (
                        <div key={index} className="skill">
                            <img src={skill.icon} alt={skill.name} className="skill-icon" />
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
                <div className="experience">
                    {experience_data.map((exp, index) => (
                        <a key={index} href={exp.url} target="_blank" rel="noopener noreferrer" className="experience-item">
                            <div>
                                <h4 className="title">{exp.title}</h4>
                                <p className="company">{exp.company}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
