import React from 'react';
import './work.css';
import { ReactComponent as WorkIcon } from "../../../assets/icons/work1.svg";
import { ReactComponent as SchoolIcon } from "../../../assets/icons/school.svg";
import { timelineElements } from '../../data/work';

import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  
  import "react-vertical-timeline-component/style.min.css";
function Work() {
    let workIconStyles = { background: "#06D6A0" };
    let schoolIconStyles = { background: "#f9c74f" };
    return (
        <div className="work">
            work
            <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";

          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h4 className="vertical-timeline-element-title">
                {element.company}
              </h4>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
    
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
        </div>
    )
}

export default Work;
