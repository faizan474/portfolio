import React from 'react';
import { ProjectData } from '../../data/projects';
import ProjectCard from './projectCard';
import './projects.css';
function Projects() {
    const data=ProjectData;
    return (
    
        <div  className="projects">
            <label>Projects</label>
            
            {
             data.map((project)=>{
                 return <ProjectCard project={project} active={true} key={project.id}/>;
             })
            }            
        </div>
    )
}

export default Projects;
