import React from 'react';

import './projects.css';
import ProjectSlider from './projectSlider/projectSlider';
import ProjectVertical from './projectVertical/projectVertical';
function Projects() {
    
    return (
    
        <div  className="projects">
            <label>Projects</label>
            <ProjectSlider />
            <ProjectVertical />            
        </div>
    )
}

export default Projects;
