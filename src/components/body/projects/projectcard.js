import React from "react";
import './projectcard.css'
import {FaLink} from 'react-icons/fa'
import {AiFillEye} from 'react-icons/ai'


function ProjectCard({projects}) {
  return  (
  <div className="projectcard">
    <div className="projectinfo">
        <label className="projectitle">{projects.title}</label>
        <div className="projectlinks">
            <a className="projectlink" href={projects.demo} target='__blank'>
                <div className="linkbutton"><AiFillEye/></div>  
                </a>
        </div>
        <p className="about">{projects.about}</p>
        <div className="tags">
            {projects.tags.map((tag) => {
                return <label className="tag2">{tag}</label>
            })}
        </div>
    </div>
    <img src={projects.foto} className="projectphoto" />
  </div>
  )
}

export default ProjectCard;
