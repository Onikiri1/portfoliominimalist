import React from 'react'
import './projects.css'
import { ProjectsData } from '../../data/projects'
import ProjectCard from './projectcard';
import Separator from '../../common/separator/separator.js';

function projects() {
  const data = ProjectsData;
  return (
    <div className='projects'>
      <Separator/>
      <label className='sectiontitle'>Projects</label>
      <div>
        {data.map((projects) => {
          return <ProjectCard projects={projects}/>
        })}
      </div>
    </div>
  )
}

export default projects