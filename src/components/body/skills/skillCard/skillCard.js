import React from 'react';
import './skillCard.css';

function SkillCard({skill}) {

    return (
        <div className="skill-card">
            <img src={skill.url} alt="logo" />
            <h3>{skill.name}</h3>
        </div>
    )
}

export default SkillCard;
