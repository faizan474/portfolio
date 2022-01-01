import React from 'react'
import Footer from '../footer';
import About from './about/about';
import Contact from './contact/contact';
import Project from './projects/projects';
import Skills from './skills/skills';
import Work from './work/work';
import "./body.css";
import Separator from '../common/separator/separator';



function Body() {
    return (
        <div className='body'>
          <section id='about'><About /></section>
          <Separator />
          <section id='project'><Project /></section>
          <Separator />
          <section id='skills'><Skills /></section>
          <Separator />
          <section id='work'><Work /></section>
          <Separator />
          <section id='contact'><Contact /></section>
          
        </div>
    )
}

export default Body
