import React from 'react';
import { skillsData } from '../../data/skill';
import SkillCard from './skillCard/skillCard';
import './skills.css';
function Skills() {
    const data=skillsData;
    return (
        <div className="skills">
            <label>skills</label>
             <div className="skills-container">
            {data.map((skill)=>{
                return <SkillCard skill={skill} key={skill.id}/>
            })}
            </div>

        </div>
    )
}

export default Skills;
