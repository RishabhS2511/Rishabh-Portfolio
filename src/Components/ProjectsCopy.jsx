import React from 'react';
import './Project.modules.css';
import mywork_data from '../assets/mywork_data copy'; 
import icon1 from '../assets/eye.png'; 
import icon2 from '../assets/github.png'; 
const ProjectCard = ({ project }) => {
    return (
      <div className="card">
        
        <div className="card-content">
          <img
            src={project.w_img}
            alt={project.w_name}
            className="card-image"
          />
          <div className="card-hover">
            <a href={project.live_demo} target="_blank" rel="noopener noreferrer">
              <img src={icon1} alt="Live Demo" className="icon" />
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <img src={icon2} alt="GitHub" className="icon" />
            </a>
          </div>
          <div className="card-text">
            {/* <p className="card-category">{project.w_category}</p> */}
            <h3 className="card-title">{project.w_name}</h3>
            <p className="card-description">{project.w_des}</p>
          </div>
        </div>
      </div>
    );
  };
  
  const Projects = () => {
    return (
      <div>
        <h2>Major Projects</h2>
        <div className="portfolio">
          {mywork_data.map((project) => (
            <ProjectCard key={project.w_no} project={project} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;