import React from 'react'
import './skills.css'
import Separator from '../../common/separator/separator.js';
import { SkillsData } from '../../data/skills';
import SkillCard from './skill-card';

function skills() {
  const data = SkillsData ;
  return (
    <div className='skills'>
      <Separator/>
      <label className='sectiontitle'>Habilidades</label>
      
      <div className='skillscontainer'>
        {data.map((item) => {
          return (
            <div className='skillsection'>
              <label className='skillsectiontitle'>{item.type}
              
              <p className='wdesc'>{item.desc}</p>
             </label>
              <div className='skilllist'>
                {item.list.map((skills) =>{
                  return (
                    <SkillCard skills={skills } />
                    )
                })}
              </div>
            </div>
          )
          })}
      </div>
    </div>
  )
}

export default skills