import React from 'react'
import Footer from '../footer';
import About from './about/about';
import Contact from './contact/contact';
import Project from './projects/projects';
import Skills from './skills/skills';
import ProjectSlider from './projects/pojectSlider';
import Work from './work/work';
import "./body.css";


function Body() {
    return (
        <div className='body'>
          <section id='about'><About /></section>
          <section id='project'><Project /></section>
          <section id='work'><ProjectSlider /></section>
          <section id='skills'><Skills /></section>
          <section id='work'><Work /></section>
          <section id='contact'><Contact /></section>
          
        </div>
    )
}

export default Body
