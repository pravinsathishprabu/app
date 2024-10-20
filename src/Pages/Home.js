import React from 'react';
import Topcontent from './Topcontent/Topcontent'
import Bottomcontent from './Bottomcontent/Bottomcontent'
import Project from './Project/Project.js'
import Skills from './Skills/Skills'
import Works from './Works/works'
import Career from './Career/career'

const Home = () => {
  return (
    <div className="home">
        <Topcontent/><br/>
        <Skills/><br/>
        <Career/><br/>
        <Works/><br/>
        <Project/><br/> 
        <Bottomcontent/>
    </div>
  )
}

export default Home
