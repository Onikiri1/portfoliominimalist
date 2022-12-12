import React from 'react'
import './skill-card.css'

function SkillCard({ skills}) {
  return (
    <div className='skillcard'>
        <div className='skillicon'> {skills.icon}</div>
        <label className='skillname'>{skills.name}</label>
    </div>
  )
}

export default SkillCard