import React, { useState } from 'react';
import { ProjectData } from '../../../data/projects';
import ProjectCard from '../projectCard/projectCard';
import "./projectSlider.css";
function ProjectSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data=ProjectData;
    const len=data.length;
    const handleClick=function(way){
        // alert(way);
        if(way==="left") setCurrentSlide(currentSlide>0 ? currentSlide-1:len-1);
        else setCurrentSlide(currentSlide<(len-1) ? currentSlide+1:0);
        console.log(currentSlide);

    }
    
    return (

        <div className="project-slider">
            
            <div className="slider" >
            {      
             data.map((project,index)=>{
                 const active=index === currentSlide? true : null; 
                 return  <ProjectCard project={project} active={active} key={project.id}/>;
             })
            }
                
            </div>
            <img src={require('../../../../assets/arrow.png').default} alt="arrow-left" className="arrow-left" onClick={()=>handleClick("left")}/>
            <img src={require('../../../../assets/arrow.png').default} alt="arrow-right" className="arrow-right" onClick={()=>handleClick("right")}/>
        </div>
    )
}

export default ProjectSlider;
