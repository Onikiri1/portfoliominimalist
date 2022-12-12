import React, {useState} from 'react'
import './header.css'
import Mobile from './mobile/mobile.js'
import Web from './web/web.js'

//iconos
import {RiAppsFill} from 'react-icons/ri'


function Header(){

  const[isOpen, setIsOpen ] = useState(false)

  return (
    <div className='header'>
      <div className='logo'> 
      <span className='o'>o</span>
      <span className='n'>n</span>
      <span className='i'>i</span>
      <span className='k'>k</span>
      <span className='i'>i</span>
      <span className='r'>r</span>
      <span className='i'>i</span>
      </div>
      <div className='menu'>
        <div className='webmenu'> <Web/> </div>
        <div className='mobilemenu'>
          <div onClick={() => setIsOpen(!isOpen)}>
              <RiAppsFill className='micon'/>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  )
}

export default Header