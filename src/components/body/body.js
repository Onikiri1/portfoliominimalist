import React from 'react'
import './body.css'
import About from './about/about'
import Habilidades from './skills/skills'
import Projects from './projects/projects'
import Contact from './contact/contact'


function Body() {
  return (
    <div className='body'>
      <section id='sobremi' >
        <About/>
      </section> 
      <section id='habilidades'>
        <Habilidades/>
      </section>
      <section id='portfolio'>
        <Projects/>
      </section>
      <section id='contacto'>
         <Contact/>
      </section>
    </div>
  )
}

export default Body