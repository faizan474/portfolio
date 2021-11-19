import React from 'react';
import './projectCard.css';

function ProjectCard({project,active}) {
    return (
        <div className= {active===true ? "projectCard active":"projectCard passive"}>
             <label className="project-title">{project.title}</label>
            {active && 
            <div className="projectCard-item">

                <div className="project-info">
                   
                        <div className="project-links">
                                { project.demo &&
                                <a className="project-link" href={project.demo}>
                                    <div className="link-button">
                                    <i class="fi-rr-globe">Demo</i>
                                    </div>
                                </a> 
                                }
                                { project.github && 
                                <a className="project-link" href={project.github}>
                                <div className="link-button">
                                <i class="devicon-github-original colored">Github</i>
                                </div>
                                </a> 
                                }
                        </div>
                        <p>{project.about}</p>
                        <div className="project-tags">
                            {project.tags.map((tag)=>{
                                return (
                                <label className="project-tag">{tag}</label>
                                
                                )                  
                            })}

                        </div>
                </div>
                <img src={project.image} className="project-photo" />
            </div>}

            
        </div>
    )
}

export default ProjectCard
