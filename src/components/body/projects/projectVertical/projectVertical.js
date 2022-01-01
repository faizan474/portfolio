import React from 'react';
import { ProjectData } from '../../../data/projects';
import ProjectCard from '../projectCard/projectCard';
import './projectVertical.css'

export default function ProjectVertical() {
    const data=ProjectData;
    return (
        <div className='projectVertical'>
            {
             data.map((project)=>{
                 return <ProjectCard project={project} active={true} key={project.id}/>;
             })
            }            
        </div>
    )
}
